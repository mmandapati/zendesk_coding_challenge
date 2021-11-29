## zendesk_coding_challenge
Zendesk Coding Challenge

#Step1: 
Created an account in zendesk with subdomain name- zccmonica
Enabled the password access for Zendesk API authentication to post and get the tickets data using my username and password(Admin Settings-> Apps and Integrations -> Zendesk API -> Enable password access)


#Step2: 

Insert tickets.json into my subdomain - zccmonica.zendesk.com using postman
POST url: https://zccmonica.zendesk.com/api/v2/imports/tickets/create_many.json
used the Basic Auth Type for Authorization with my username{email_address} and {password}

#Step3:

Used the below Zendesk API's to fetch the list of tickets and each ticket data.

https://zccmonica.zendesk.com/api/v2/tickets.json
https://zccmonica.zendesk.com/api/v2/tickets/1.json
