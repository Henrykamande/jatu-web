const { Router } = require('express')
const router = Router()
const { create } = require('./index.js')

router.post('/', create)

module.exports = router
