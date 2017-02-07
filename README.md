# Muber

This project is a simple backend server that models the backend for Uber. 
It features mocha, which ran tests to enhance my understanding of Express and MongoDB.

It features the following API commands:-

1. Get on '/api'

	This API call gets all the drivers in the database
2. Get on '/api/:id'

	This API call gets the driver with the corresponding id
3. Post on '/api/drivers'
	
	This API call creates a new driver
4. Put on '/api/drivers/:id'

	This API call updates an existing driver
5. Delete on 'api/drivers/:id'

	This API call deletes an existing driver



###Usage###

Requirements: 

1. Node.js
2. MongoDB
3. Postman

Steps:

1. On a separate terminal, run mongod.exe
2. Clone this project and extract it on your computer
3. Open a terminal and change to the project directory
4. Enter the following commands:

	```
		> npm install
		> npm test
	```
