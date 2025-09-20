🧪 API Testing with JSON Server & JWT Authentication
A comprehensive end-to-end API testing suite demonstrating CRUD operations with JWT authentication using JSON Server and Postman.

📋 Project Overview
This project showcases professional API testing workflows with a focus on:

JWT Authentication: Secure login and token-based authorization

Full CRUD Operations: Complete Create, Read, Update, Delete lifecycle testing

Dynamic Environment Management: Automated variable handling in Postman

Comprehensive Validation: Status codes, response content, and performance testing

🏗️ Technical Stack
Backend: JSON Server with JWT authentication

Testing: Postman Collection with automated tests

Authentication: Bearer token JWT implementation

Environment: Configurable variables for different deployment scenarios

📁 Project Structure
text
📁 api-testing-project/
├── 📄 E2E.postman_collection.json     # Complete test collection
├── 📄 locally.postman_environment.json # Local environment configuration
├── 📄 db.json                         # Mock database schema
└── 📄 README.md                       # Project documentation
🚀 Collection Endpoints
1. 🔐 Authentication
POST /signin - User login with JWT token generation

Email: admin@mail.com

Password: admin

Automatically captures and stores access token

2. 📝 Course Management CRUD
Create Course
POST /660/courses - Add new course

Requires: Authentication token

Body: { title, description, price }

Sets: Dynamic courseID environment variable

Read Operations
GET /660/courses/{{courseID}} - Get specific course

GET /660/courses - Get all courses

Update Course
PUT /660/courses/{{courseID}} - Update course details

Body: { id, title, description, price }

Delete Course
DELETE /660/courses/{{courseID}} - Remove course

GET /660/courses/{{courseID}} - Validation (expects 404)

🧪 Test Coverage
✅ Authentication Tests
Status code validation (200)

JWT token extraction and storage

Environment variable management

✅ Create Course Tests
Status code validation (201)

Response content verification

Response time performance (<200ms)

Dynamic course ID capture

✅ Read Course Tests
Status code validation (200)

Data retrieval verification

✅ Update Course Tests
Status code validation (200)

Data modification confirmation

✅ Delete Course Tests
Status code validation (200)

Response time performance (<200ms)

Post-deletion validation (404 expected)

⚙️ Environment Configuration
Environment Variables
Variable	Description	Example Value
url	Base API URL	http://localhost:3000
courseID	Dynamic course identifier	Automatically set
accessToken	JWT authentication token	Automatically captured
Pre-request Scripts
Login: Unsets previous tokens before authentication

Create Course: Clears previous course ID before creation

Automatic cleanup: Ensures clean test state for each execution

🚀 Quick Start
1. Prerequisites
bash
npm install -g json-server
2. Start JSON Server
bash
json-server --watch db.json --port 3000
3. Import into Postman
Import E2E.postman_collection.json

Import locally.postman_environment.json

Select "locally" environment

4. Run the Collection
Execute requests in sequence

Watch automatic token management

Observe dynamic variable updates
