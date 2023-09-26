import { Router } from 'express'

export const router = Router()

router.route('/auth').post()
router.route('/client').get().post()
router.route('/client/:id').put().delete()
router.route('/book').get().post()
router.route('/book/:id').get().post()
router.route('/checkout/:clientId/:bookId').get().post()
