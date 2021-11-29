const request = require('request')
const BluebirdPromise = require('bluebird')

const fetchTickets = () => new BluebirdPromise((res,rej)=>{
    const url = `https://${process.env.SUBDOMAIN}.${process.env.DOMAIN_NAME}/api/v2/tickets.json`
    const auth = 'Basic ' + Buffer.from(`${process.env.USER_NAME}:${process.env.PASSWORD}`, 'utf8').toString('base64')
    request.get(url,
        {  
        headers: {
            'Authorization': auth
        }}, (err, resp) => {
            if (err) return rej(err)
            return res(JSON.parse(resp.body))
         })
})

const fetchSingleTicket = (ticketId) => new BluebirdPromise((res,rej)=>{
    if (!ticketId) return res.err("Invalid ticket ID")
    const url=`https://${process.env.SUBDOMAIN}.${process.env.DOMAIN_NAME}/api/v2/tickets/${ticketId}.json`
    const auth = 'Basic ' + Buffer.from(`${process.env.USER_NAME}:${process.env.PASSWORD}`, 'utf8').toString('base64')
    request.get(url,
        {
        headers: {
            'Authorization': auth
        }}, (err, resp) => {
        if (err) return rej(err)
            return res(JSON.parse(resp.body))
    })
})
const listTickets = (req, res) => {
   fetchTickets()
   .then(data => res.send(data))
   .catch(err => res.err(err))
}

const fetchTicket = (req, res) => {
    const ticketId = req.params && req.params.id;
    fetchSingleTicket(ticketId)
   .then(data => res.send(data))
   .catch(err => res.err(err))
}

module.exports = {
    listTickets,
    fetchTicket,
    fetchTickets,
    fetchSingleTicket
}