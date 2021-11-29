const express = require('express')
const router  = express.Router()
const { listTickets, fetchTicket } = require('../controllers/zendeskApi')

router.get('/tickets', signin)
router.get('/ticket/:id', signout)

module.exports = router;