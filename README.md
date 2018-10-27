# Ticket-reservation

Main file
index.js
start the server and connect to mongoDB : node index.js

NOTE:  use any rest API client to test the APIs
1. Create a customer account

Hit the POST API : http://127.0.0.1:3000/api/customer

dummy input data :
{
	"name": "test",
	"email": "testing@gmail.com",
	"phoneNo": 1212121212
}

Output : 

{
	"__v": 0,
	"email": "testing@gmail.com",
	"phoneNo": "1212121212",
	"_id": "5bd4670250237309c4f60175",
	"name": "test"
}

2. Search for the existing customer using the unique id
_id = unique Id received while creating customer account
Hit the GET API : http://127.0.0.1:3000/api/customer/{_id?}

Output :
{
	"_id": "5bd4670250237309c4f60175",
	"email": "testing@gmail.com",
	"phoneNo": "1212121212",
	"name": "test",
	"__v": 0
}

3. Create Ticket Booking with seat options

Hit the POST API: http://127.0.0.1:3000/api/customer/{customer_id}/booking 

dummy Data :

{
	"showName" : "testShow1",
	"seatRow": "right",
	"seatNumbers": "A2",
	"seatPrice"	: 10
}

output : BookingId

4. Retrieve Booking only details
Hit the GET API: http://127.0.0.1:3000/api/customer/{customer_id}/booking/{booking_id}

Output :
[
	{
		"_id": "5bd473665f7b7b2264f2923b",
		"showName": "testShow1",
		"seatRow": "right",
		"seatNumbers": "A2",
		"seatPrice": 10,
		"Date": "2018-10-27T14:17:10.736Z",
		"__v": 0
	}
]



