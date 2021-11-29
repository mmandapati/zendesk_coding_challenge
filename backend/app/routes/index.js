const express = require('express')
const router  = express.Router()
const zendeskRouter = require('./zendeskRouter')

router.use('/zendesk', userRouter)

module.exports = router;