const { Router } = require('express')
const verifyUserAuthorization = require('../middlewares/verifyUserAuthorization')
const SalesController = require('../controllers/SalesController')
const ensureAuthenticated = require('../middlewares/ensureAuthenticated')

const salesRoutes = Router()

const salesController = new SalesController()

salesRoutes.use(ensureAuthenticated)
salesRoutes.use(verifyUserAuthorization(['admin', 'sale']))

salesRoutes.get('/', salesController.index)

module.exports = salesRoutes
