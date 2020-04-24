import express from 'express'
import mongoose from 'mongoose'
import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'
import morgan from 'morgan'
import rateLimit from 'express-rate-limit'
import helmet from 'helmet'
import mongoSanitize from 'express-mongo-sanitize'
import xss from 'xss-clean'
import hpp from 'hpp'
import formRouter from './routes/formRouter'

require('dotenv').config()

// //////////////START DATABASE CONFIG///////////////////////////
mongoose.connect(process.env.DB_ADDRESS, {
	useUnifiedTopology: true,
	useNewUrlParser: true,
	useCreateIndex: true,
	useFindAndModify: false,
})
mongoose.connection.on('connected', () => {
	console.log('[MongoDB] connection established successfully')
})
mongoose.connection.on('error', err => {
	console.log(`connection to mongo failed ${err}`)
})
mongoose.connection.on('disconnected', () => {
	console.log('mongo db connection closed')
})
mongoose.set('useCreateIndex', true)

mongoose.Promise = global.Promise

// ///////////////END DATABASE CONFIG///////////////////////////

const app = express()

// Set security HTTP headers
app.use(helmet())

// Development logging
if (process.env.NODE_ENV === 'development') {
	app.use(morgan('dev'))
}

// Limit requests from same API
const limiter = rateLimit({
	max: 100,
	windowMs: 60 * 60 * 1000,
	message: 'Too many requests from this IP, please try again in an hour!',
})

app.use('/api', limiter)

// Body parser, reading data from body into req.body
app.use(
	express.json({
		limit: '10kb',
	})
)

app.use(cookieParser())

// Data sanitization against NoSQL query injection
app.use(mongoSanitize())

// Data sanitization against XSS
app.use(xss())

// Prevent parameter pollution
app.use(
	hpp({
		whitelist: [
			'duration',
			'ratingsQuantity',
			'ratingsAverage',
			'maxGroupSize',
			'difficulty',
			'price',
		],
	})
)

app.use(morgan('combined'))

// ///////////////START APP MIDDLEWARE///////////////////////////
app.use(cookieParser())
app.use(bodyParser.json())
app.use(
	bodyParser.urlencoded({
		extended: true,
	})
)
app.disable('x-powered-by')

// ////////////ErrorHandler
const miscellaneousErrors = err =>
	process.on('uncaughtException', err => {
		console.log('UNHANDLED REJECTION! 🤕 shutting down...')
		console.log(err.name, err.message)
		process.exit(1)
	})
process.on('unhandledRejection', miscellaneousErrors)
process.on('uncaughtException', miscellaneousErrors)

// //////////////START ROUTER CONFIG///////////////////////////

app.use('/', formRouter)

// ///////////////START ERROR HANDLING///////////////////////////
app.use((req, res, next) => {
	res.status(404).send('404')
})

app.use((err, req, res, next) => {
	res.locals.message = err.message
	res.locals.error = req.app.get('env') === 'development' ? err : {}
	res.status(err.status || 500)
	res.send(err.message)
})
export default app
