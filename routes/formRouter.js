import { Router } from 'express'
import { formController } from '../controller'

const router = Router()

router.get('/', (req, res) => res.send('hello World'))
router
	.route('/form')
	.get(formController.showAllForms)
	.post(formController.setForms)
export default router
