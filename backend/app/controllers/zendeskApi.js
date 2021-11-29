const request = require('request')

const listTickets = (req, res) => {
    const url = `https://${process.env.SUBDOMAIN}.${process.env.DOMAIN_NAME}/api/v2/tickets.json`
    const auth = 'Basic ' + Buffer.from(`${process.env.USER_NAME}:${process.env.PASSWORD}`, 'utf8').toString('base64')
    request({  
        url,
        headers: {
            'Authorization': auth
        }}, (err, resp) => {
            if (err) return res.send(err)
            return res.send(JSON.parse(resp.body))
         })
}

const fetchTicket = (req, res) => {
    const ticketId = req.params && req.params.id;
    if (!ticketId) return res.err("Invalid ticket ID")
    const url=`https://${process.env.SUBDOMAIN}.${process.env.DOMAIN_NAME}/api/v2/tickets/${ticketId}.json`
    const auth = 'Basic ' + Buffer.from(`${process.env.USER_NAME}:${process.env.PASSWORD}`, 'utf8').toString('base64')
    request({
        url,
        headers: {
            'Authorization': auth
        }}, (err, resp) => {
        if (err) return res.send(err)
            return res.send(JSON.parse(resp.body))
    })
}

module.exports = {
    listTickets,
    fetchTicket
}