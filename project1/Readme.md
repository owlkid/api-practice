🧪 API Testing with JSON Server & JWT Authentication
    
    A comprehensive end-to-end API testing suite demonstrating CRUD operations with JWT authentication using JSON Server and Postman.

📋 Project Overview
    
    This project showcases professional API testing workflows with a focus on:

JWT Authentication:
  
    Secure login and token-based authorization

Full CRUD Operations: 
  
    Complete Create, Read, Update, Delete lifecycle testing

Dynamic Environment Management: 
    
    Automated variable handling in Postman

Comprehensive Validation:
    
    Status codes, response content, and performance testing

🏗️ Technical Stack

    Backend: JSON Server with JWT authentication

Testing: 
    
    Postman Collection with automated tests

Authentication:
  
    Bearer token JWT implementation

Environment:
      
    Configurable variables for different deployment scenarios

📁 Project Structure

📁 api-testing-project/
├── 📄 E2E.postman_collection.json         # Complete test collection
├── 📄 locally.postman_environment.json    # Local environment configuration
├── 📄 db.json                             # Mock database schema
└── 📄 README.md          

🚀 Collection Endpoints
  
1. 🔐 Authentication

       POST /signin - User login with JWT token generation
       Automatically captures and stores access token

3. 📝 Course Management CRUD
Create Course
POST /660/courses - Add new course

Read Operations
GET /660/courses/{{courseID}} 

GET /660/courses - Get all courses

Update Course
PUT /660/courses/{{courseID}} 

Delete Course
DELETE /660/courses/{{courseID}}

GET /660/courses/{{courseID}} - Validation (expects 404)

🧪 Test Coverage

    ✅ Authentication Tests
    Status code validation (200)

    ✅ Create Course Tests
    Status code validation (201)

    ✅ Read Course Tests
    Status code validation (200)

Data retrieval verification

    ✅ Update Course Tests
    Status code validation (200)

Data modification confirmation

    ✅ Delete Course Tests
    Status code validation (200)




