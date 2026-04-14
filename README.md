# Student Management System

A simple full stack project to manage student data.

## Features

* Add student (name & marks)
* View all students
* Delete student

## Tech Used

* Frontend: HTML, CSS, JavaScript
* Backend: Java, Spring Boot

## How to Run

### Backend

```bash
cd backend
.\mvnw spring-boot:run
```

Runs on: http://localhost:8081

### Frontend

Open `index.html` in browser

## API

* GET /students → get all students
* POST /students → add student
* DELETE /students/{id} → delete student

## Note

Data is stored in memory, so it will be lost when the server stops.
