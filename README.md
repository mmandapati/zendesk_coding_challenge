## zendesk_coding_challenge


## Step1: 
Created an account in zendesk with subdomain name- zccmonica
Enabled the password access for Zendesk API authentication to post and get the tickets data using my username and password(Admin Settings-> Apps and Integrations -> Zendesk API -> Enable password access)


## Step2: 

Insert tickets.json into my subdomain - zccmonica.zendesk.com using postman \
POST url: https://zccmonica.zendesk.com/api/v2/imports/tickets/create_many.json \
used the Basic Auth Type for Authorization with my username{email_address} and {password}

## Step3:

Used the below Zendesk API's to fetch the list of tickets and each ticket data.

https://zccmonica.zendesk.com/api/v2/tickets.json \
https://zccmonica.zendesk.com/api/v2/tickets/1.json

## Step4:
Created the Backend folder and added the node code which fetches the data from Zendesk API

## Step5:
Created Frontend folder which consists of React code to display the list of tickets and individual ticket

## Screenshot of List of tickets:
![image](https://user-images.githubusercontent.com/91310893/143854999-c2064094-3683-4388-bc7f-a6a5a83f8a60.png)

## Screenshot of Individual ticket:
![image](https://user-images.githubusercontent.com/91310893/143855048-aceb9cb9-dcfe-4829-8397-4cc993be9cb7.png)


