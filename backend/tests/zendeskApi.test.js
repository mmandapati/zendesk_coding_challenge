const { get } = require('request')
const zendeskApi = require('../app/controllers/zendeskApi')

jest.mock('request')

describe("Fetching zendesk tickets", () => {
    beforeEach(() => {
        get.mockReset()
    })
    afterAll(() => {
        get.mockRestore()
        jest.restoreAllMocks()
    })
    test('zendesk fetch tickets error', () => {
        const errMsg = "error during fetch tickets"
        get.mockImplementation((url, options, callback) => {
            return callback(errMsg)
        })
        zendeskApi.fetchTickets()
        .catch(err => {
            expect(err).toEqual(errMsg)
            // expect(get).toHaveBeenCalled()
        })
    })

    test('zendesk fetch tickets successfully returned list of tickets', () => {
        const ticketData = {
            tickets: [
                { id: "1", title: "ticket1" },
                { id: "1", title: "ticket1" }
            ]
        }
        get.mockImplementation((url, options, callback) => {
            return callback(null, ticketData)
        })
        zendeskApi.fetchTickets()
        .then(data => {
            expect(data).toEqual(ticketData)
            // expect(get).toHaveBeenCalled()
        })
    })

    test('zendesk fetch single ticket error if no ticket id is passed', () => {
        const errMsg = "error during fetch tickets"
        zendeskApi.fetchSingleTicket()
        .catch(err => {
            expect(err).toEqual(errMsg)
        })
    })
    test('zendesk fetch single ticket error', () => {
        const errMsg = "error during fetching ticket"
        get.mockImplementation((url, options, callback) => {
            return callback(errMsg)
        })
        zendeskApi.fetchTickets()
        .catch(err => {
            expect(err).toEqual(errMsg)
        })
    })

    test('zendesk fetch tickets successfully returned list of tickets', () => {
        const ticketData = {
            ticket: { id: "1", title: "ticket1" }
        }
        get.mockImplementation((url, options, callback) => {
            return callback(null, ticketData)
        })
        zendeskApi.fetchTickets()
        .then(data => {
            expect(data).toEqual(ticketData)
        })
    })
    
})