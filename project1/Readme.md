API Testing with Postman, JSON Server & Newman

         This project demonstrates end-to-end API testing using Postman
         , JSON Server
         , and Newman
         
         It covers authentication, CRUD operations, environment variables, and automated test reporting.
      
      🔹 Project Overview
      
         Backend powered by json-server + json-server-auth (mock REST API with JWT authentication).
         
         Postman collection simulates a real testing workflow:
         
         Login with valid credentials.
         
         Create a new course.
         
         Retrieve the created course.
         
         Update the course details.
         
         Delete the course.
         
         Validate deletion.
         
         Fetch all courses.
         
         Environment variables store the base URL, JWT access token, and course ID dynamically.
         
         Automated tests check:
         
         HTTP status codes
         
         Response body contents
         
         Response times
      
      🔹 Files
      
         E2E.postman_collection.json → Postman test collection
         
         locally.postman_environment.json → Postman environment with variables
         
         db.json → Mock database for json-server

