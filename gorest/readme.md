GoRest API Test Suite
A Postman collection for automated testing of the GoRest public API. This project demonstrates a complete CRUD (Create, Read, Update, Delete) workflow with dynamic data generation, response validation, and environment management.

📁 Project Structure
text
.
├── gorest_pm_collection.json     # The main Postman collection
├── pm_env.json                   # Postman environment template (uses public token)
└── README.md                     # This file

✨ Features

    Full CRUD Cycle: Automated tests for creating, reading, updating, and deleting user resources.

Dynamic Data Generation:

    Uses Pre-request Scripts to create unique test data for each run.

Comprehensive Testing: 

    Validates status codes, response times, and data integrity.

Environment Management: 
    
    Uses Postman environments for variable storage and configuration.

Bearer Token Authentication:

    Demonstrates secure API authentication practice.

🧪 Test Coverage

✅ Status code validation (201, 200, 204)

✅ Response time performance (<1000ms)

✅ Data integrity validation (field values match)

✅ Environment variable management

✅ Dynamic test data generation

📝 Learning Outcomes
  
    This project demonstrates understanding of:

    REST API principles and CRUD operations

    Postman collection development and automation

    Dynamic variable handling in API tests

    Response validation and testing methodologies

    API authentication with bearer tokens

