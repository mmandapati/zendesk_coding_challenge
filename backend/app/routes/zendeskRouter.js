const express = require('express')
const router  = express.Router()
const { listTickets, fetchTicket } = require('../controllers/zendeskApi')

router.get('/tickets/list', listTickets)
router.get('/tickets/:id', fetchTicket)

module.exports = router