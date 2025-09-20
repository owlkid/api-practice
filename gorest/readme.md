GoRest API Test Suite
A Postman collection for automated testing of the GoRest public API. This project demonstrates a complete CRUD (Create, Read, Update, Delete) workflow with dynamic data generation, response validation, and environment management.

📁 Project Structure
text
.
├── gorest_pm_collection.json  # The main Postman collection
├── pm_env.json                # Postman environment template (uses public token)
└── README.md                  # This file
✨ Features
Full CRUD Cycle: Automated tests for creating, reading, updating, and deleting user resources.

Dynamic Data Generation: Uses Pre-request Scripts to create unique test data for each run.

Comprehensive Testing: Validates status codes, response times, and data integrity.

Environment Management: Uses Postman environments for variable storage and configuration.

Bearer Token Authentication: Demonstrates secure API authentication practice.

🚀 How to Use
Prerequisites
Postman installed on your machine

A GitHub account (for cloning the repository)

Installation & Setup
Clone the repository

bash
git clone <your-repository-url>
cd <repository-name>
Import the Collection into Postman

Open Postman

Click Import → Upload Files

Select gorest_pm_collection.json

The "gorest-remote" collection will appear in your workspace

Import the Environment

In Postman, click Environments → Import

Select pm_env.json

The "locally" environment will be added to your workspace

Make sure to select this environment from the dropdown in the top-right corner

Run the Tests

Open the "gorest-remote" collection

Click Run collection (play button)

The Collection Runner will execute all requests in sequence

View test results in the run summary

🔧 Collection Endpoints
The collection contains these sequential requests:

create-resource (POST /users)

Creates a new user with dynamically generated data

Sets environment variables for created user ID

get-created-resource (GET /users/:id)

Retrieves the newly created user

Validates all user data matches creation values

update-resource (PUT /users/:id)

Updates the user with new dynamically generated data

Changes gender to female while keeping status active

delete-resource (DELETE /users/:id)

Deletes the user resource

Cleans up environment variables

Verifies successful deletion (204 status)

🧪 Test Coverage
✅ Status code validation (201, 200, 204)

✅ Response time performance (<1000ms)

✅ Data integrity validation (field values match)

✅ Environment variable management

✅ Dynamic test data generation

🔐 Security Note
This project uses a public testing token provided by GoRest for learning purposes. The token in the environment file (pm_env.json) is intentionally public and safe to share. For production APIs, always keep authentication tokens private and use environment variables securely.

📊 Example Test Output
Successful runs will show:

All tests passing (green checkmarks)

Response times under 1000ms

Environment variables being set and unset appropriately

A clean test cycle with no residual data

🛠️ Built With
Postman - API testing platform

GoRest API - Public REST API for testing

JavaScript - For Postman test scripts

📝 Learning Outcomes
This project demonstrates understanding of:

REST API principles and CRUD operations

Postman collection development and automation

Dynamic variable handling in API tests

Response validation and testing methodologies

API authentication with bearer tokens
