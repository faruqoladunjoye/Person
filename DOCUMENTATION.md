# person API
This is a simple Node.js REST API for managing person records. It provides CRUD (Create, Read, Update, Delete) operations for person data in a MongoDB database.

# Features
* Create a new person record.
* Retrieve details of a person.
* Retrieve a list of all persons.
* Update details of an existing person.
* Delete a person record.

# Setup
* Clone the repository
* Navigate to the project directory
* Install required dependencies (npm install)

# To run the code locally, use the command;
node app.js

# API Endpoints
* Create a Person <br>
Endpoint: `POST /api/persons` <br>
Description: Create a new person. <br>
Request Example
```
{
    "name": "Faruq Oladunjoye",
    "age": 69,
    "email": "faruq@milanes.io"
}
```
Response Example
```
{
    "status": "success",
    "data": {
        "person": {
            "name": "Faruq Oladunjoye",
            "age": 69,
            "email": "faruq@milanes.io",
            "_id": "650323de9567fed8796f4fcd",
            "__v": 0
        }
    }
}
```
* Get all Persons
Endpoint: `GET /api/persons` <br>
Description: Retrieve a list of all persons. <br>
Response Example:
```
{
    "status": "success",
    "data": {
        "persons": [
            {
                "_id": "650323de9567fed8796f4fcd",
                "name": "Faruq Oladunjoye",
                "age": 69,
                "email": "faruq@milanes.io",
                "__v": 0
            },
            {
                "_id": "65032849593032e9e062b026",
                "name": "Idan Nla",
                "age": 56,
                "email": "faruq@info.io",
                "__v": 0
            }
        ]
    }
}
```
* Get a Person by ID
Endpoint: `GET /api/persons/:id` <br>
Description: Retrieve details of a person by ID. <br>
Response Example:
```
{
    "status": "success",
    "data": {
        "person": {
            "name": "Faruq Oladunjoye",
            "age": 69,
            "email": "faruq@milanes.io",
            "_id": "650323de9567fed8796f4fcd",
            "__v": 0
        }
    }
}
```
* Update a Person by ID <br>
Endpoint: `PATCH /api/persons/:id` <br>
Description: Update details of an existing person by ID. <br>
Request Example
```
{
    "age": 50
}
```
Response Example
```
{
    "status": "success",
    "data": {
        "person": {
            "name": "Faruq Oladunjoye",
            "age": 50,
            "email": "faruq@milanes.io",
            "_id": "650323de9567fed8796f4fcd",
            "__v": 0
        }
    }
}
```
* Delete a Person by ID <br>
Endpoint: `DELETE /api/persons/:id` <br>
Description: Delete a person. <br>

# Limitation and Assumption
This REST API handles CRUD operations for person records. Known limitation includes lack of authentication. It's assumed users have set up MongoDB and configured environment variables.
