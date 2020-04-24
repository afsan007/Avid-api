/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./controller/formController.js":
/*!**************************************!*\
  !*** ./controller/formController.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (new class FormController {
  showAllForms(req, res) {
    res.send('showAllForms');
  }

  setForms(req, res) {
    res.send('setForms');
  }

}());

/***/ }),

/***/ "./controller/index.js":
/*!*****************************!*\
  !*** ./controller/index.js ***!
  \*****************************/
/*! exports provided: formController */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _formController__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./formController */ "./controller/formController.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "formController", function() { return _formController__WEBPACK_IMPORTED_MODULE_0__["default"]; });




/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./server */ "./server.js");

_server__WEBPACK_IMPORTED_MODULE_0__["default"].listen(process.env.PORT || 3000, () => {
  console.clear();
  console.log(`[Avid-api]_server is running on port ${process.env.PORT || 3000}`);
});

/***/ }),

/***/ "./routes/formRouter.js":
/*!******************************!*\
  !*** ./routes/formRouter.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ "express");
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _controller__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../controller */ "./controller/index.js");


const router = Object(express__WEBPACK_IMPORTED_MODULE_0__["Router"])();
router.get('/', (req, res) => res.send('hello World'));
router.route('/form').get(_controller__WEBPACK_IMPORTED_MODULE_1__["formController"].showAllForms).post(_controller__WEBPACK_IMPORTED_MODULE_1__["formController"].setForms);
/* harmony default export */ __webpack_exports__["default"] = (router);

/***/ }),

/***/ "./server.js":
/*!*******************!*\
  !*** ./server.js ***!
  \*******************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ "express");
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mongoose */ "mongoose");
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var body_parser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! body-parser */ "body-parser");
/* harmony import */ var body_parser__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(body_parser__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var cookie_parser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! cookie-parser */ "cookie-parser");
/* harmony import */ var cookie_parser__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(cookie_parser__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var morgan__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! morgan */ "morgan");
/* harmony import */ var morgan__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(morgan__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var express_rate_limit__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! express-rate-limit */ "express-rate-limit");
/* harmony import */ var express_rate_limit__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(express_rate_limit__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var helmet__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! helmet */ "helmet");
/* harmony import */ var helmet__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(helmet__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var express_mongo_sanitize__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! express-mongo-sanitize */ "express-mongo-sanitize");
/* harmony import */ var express_mongo_sanitize__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(express_mongo_sanitize__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var xss_clean__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! xss-clean */ "xss-clean");
/* harmony import */ var xss_clean__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(xss_clean__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var hpp__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! hpp */ "hpp");
/* harmony import */ var hpp__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(hpp__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _routes_formRouter__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./routes/formRouter */ "./routes/formRouter.js");












__webpack_require__(/*! dotenv */ "dotenv").config(); // //////////////START DATABASE CONFIG///////////////////////////


mongoose__WEBPACK_IMPORTED_MODULE_1___default.a.connect(process.env.DB_ADDRESS, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false
});
mongoose__WEBPACK_IMPORTED_MODULE_1___default.a.connection.on('connected', () => {
  console.log('[MongoDB] connection established successfully');
});
mongoose__WEBPACK_IMPORTED_MODULE_1___default.a.connection.on('error', err => {
  console.log(`connection to mongo failed ${err}`);
});
mongoose__WEBPACK_IMPORTED_MODULE_1___default.a.connection.on('disconnected', () => {
  console.log('mongo db connection closed');
});
mongoose__WEBPACK_IMPORTED_MODULE_1___default.a.set('useCreateIndex', true);
mongoose__WEBPACK_IMPORTED_MODULE_1___default.a.Promise = global.Promise; // ///////////////END DATABASE CONFIG///////////////////////////

const app = express__WEBPACK_IMPORTED_MODULE_0___default()(); // Set security HTTP headers

app.use(helmet__WEBPACK_IMPORTED_MODULE_6___default()()); // Development logging

if (true) {
  app.use(morgan__WEBPACK_IMPORTED_MODULE_4___default()('dev'));
} // Limit requests from same API


const limiter = express_rate_limit__WEBPACK_IMPORTED_MODULE_5___default()({
  max: 100,
  windowMs: 60 * 60 * 1000,
  message: 'Too many requests from this IP, please try again in an hour!'
});
app.use('/api', limiter); // Body parser, reading data from body into req.body

app.use(express__WEBPACK_IMPORTED_MODULE_0___default.a.json({
  limit: '10kb'
}));
app.use(cookie_parser__WEBPACK_IMPORTED_MODULE_3___default()()); // Data sanitization against NoSQL query injection

app.use(express_mongo_sanitize__WEBPACK_IMPORTED_MODULE_7___default()()); // Data sanitization against XSS

app.use(xss_clean__WEBPACK_IMPORTED_MODULE_8___default()()); // Prevent parameter pollution

app.use(hpp__WEBPACK_IMPORTED_MODULE_9___default()({
  whitelist: ['duration', 'ratingsQuantity', 'ratingsAverage', 'maxGroupSize', 'difficulty', 'price']
}));
app.use(morgan__WEBPACK_IMPORTED_MODULE_4___default()('combined')); // ///////////////START APP MIDDLEWARE///////////////////////////

app.use(cookie_parser__WEBPACK_IMPORTED_MODULE_3___default()());
app.use(body_parser__WEBPACK_IMPORTED_MODULE_2___default.a.json());
app.use(body_parser__WEBPACK_IMPORTED_MODULE_2___default.a.urlencoded({
  extended: true
}));
app.disable('x-powered-by'); // ////////////ErrorHandler

const miscellaneousErrors = err => process.on('uncaughtException', err => {
  console.log('UNHANDLED REJECTION! 🤕 shutting down...');
  console.log(err.name, err.message);
  process.exit(1);
});

process.on('unhandledRejection', miscellaneousErrors);
process.on('uncaughtException', miscellaneousErrors); // //////////////START ROUTER CONFIG///////////////////////////

app.use('/', _routes_formRouter__WEBPACK_IMPORTED_MODULE_10__["default"]); // ///////////////START ERROR HANDLING///////////////////////////

app.use((req, res, next) => {
  res.status(404).send('404');
});
app.use((err, req, res, next) => {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  res.status(err.status || 500);
  res.send(err.message);
});
/* harmony default export */ __webpack_exports__["default"] = (app);

/***/ }),

/***/ "body-parser":
/*!******************************!*\
  !*** external "body-parser" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("body-parser");

/***/ }),

/***/ "cookie-parser":
/*!********************************!*\
  !*** external "cookie-parser" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("cookie-parser");

/***/ }),

/***/ "dotenv":
/*!*************************!*\
  !*** external "dotenv" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("dotenv");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),

/***/ "express-mongo-sanitize":
/*!*****************************************!*\
  !*** external "express-mongo-sanitize" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("express-mongo-sanitize");

/***/ }),

/***/ "express-rate-limit":
/*!*************************************!*\
  !*** external "express-rate-limit" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("express-rate-limit");

/***/ }),

/***/ "helmet":
/*!*************************!*\
  !*** external "helmet" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("helmet");

/***/ }),

/***/ "hpp":
/*!**********************!*\
  !*** external "hpp" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("hpp");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("mongoose");

/***/ }),

/***/ "morgan":
/*!*************************!*\
  !*** external "morgan" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("morgan");

/***/ }),

/***/ "xss-clean":
/*!****************************!*\
  !*** external "xss-clean" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("xss-clean");

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map