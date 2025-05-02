# 🎓 Student Survey Management System (Full-Stack Project)

[![Angular](https://img.shields.io/badge/Frontend-Angular-red)](https://angular.io/)
[![Spring Boot](https://img.shields.io/badge/Backend-SpringBoot-green)](https://spring.io/projects/spring-boot)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)

## 📌 Overview

This project is a full-stack Student Survey Management system developed as part of SWE-642 coursework. The application allows users to fill, view, update, and delete survey responses via a modern Angular frontend and a Spring Boot-powered backend.

## 🧑‍💻 Key Features

### 🔹 Frontend (Angular)
- Dynamic form generation using Angular components (`create-student`, `update-student`, `student-list`)
- Two-way data binding with `ngModel` and form validation
- Bootstrap-based responsive UI
- Angular routing and navigation
- HTTP client services to communicate with backend

### 🔹 Backend (Spring Boot)
- REST API endpoints using `@RestController`
- CRUD operations implemented with `JpaRepository`
- MySQL database integration with Hibernate ORM
- Exception handling using custom `ResourceNotFoundException`
- CORS configuration to allow Angular integration

## 🚀 How to Run

### Frontend
```bash
cd frontend-directory
npm install
ng serve
```
Visit: http://localhost:4200

### Backend
```bash
cd backend-directory
mvn install
mvn spring-boot:run
```
Visit: http://localhost:8080/api/v1/surveys

## 📊 Core Functionalities

- Add new student survey (POST)
- List all surveys (GET)
- Edit existing survey (PUT)
- Delete survey entry (DELETE)

## 🧠 Learning Outcomes

- Mastery of full-stack integration between Angular and Spring Boot
- Hands-on experience with REST APIs, MySQL, JPA, and component-based frontend design
- Improved modularization, routing, and frontend/backend coordination

## 👨‍🏫 Contributors

- Aditya Shah  
- Dhruvi Rathod  
- Namita Chougule  
- Swarangi Kunbi  

