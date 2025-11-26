# MealDB

# TheMealDB Explorer

A full-stack web application built using React (Vite) for the frontend and Spring Boot (Maven) for the backend.  
This application uses TheMealDB public API to browse meal categories, search meals, and view detailed recipes.

---

## Project Structure

root/
│── Backend/ # Spring Boot backend
│ ├── src/main/java/
│ ├── src/main/resources/
│ └── pom.xml
│
│── TheMealDB/ # React + Vite frontend
│ ├── src/
│ ├── public/
│ └── package.json
│
└── README.md


---

## Technologies Used

### Frontend (React + Vite)
- React 18
- Vite
- React Router
- Axios

### Backend (Spring Boot)
- Java 17+
- Spring Boot 3.x
- Spring Web
- Lombok
- Maven

---

## Features

### Frontend
- Search meals by name
- List meal categories
- View meals by category
- View detailed recipe information
- Fetch random meals
- Responsive UI

### Backend
- Acts as a proxy layer for TheMealDB API
- Provides structured responses
- Pagination support
- Clean service-based architecture
- Logging

---

## How to Run the Project

### 1. Clone the Repository

https://github.com/Sanket-Kadam01/MealDB
cd MealDB

## Running the Backend (Spring Boot)

### Navigate to the backend folder:
cd Backend
### Run using Maven

Backend will start on: http://localhost:8080


---

## Running the Frontend (React + Vite)

### Navigate to the frontend folder:


### Install dependencies:


### Start the development server:

Frontend will start on:http://localhost:5173

Frontend (React) → Backend (Spring Boot) → TheMealDB Public API


---

## Folder Structure Explanation

### Backend
- Controllers handle incoming requests
- Services contain business logic
- DTO/Models map the API response
- Uses Spring Web for REST communication

### Frontend
- Pages and components structure
- API calls using Axios
- Custom hooks (optional)
- Routing handled by React Router

---

## Future Enhancements (Optional)
- Add user authentication (JWT)
- Favorite meals feature
- Database integration
- Docker setup
- Deployment scripts

---

## Author
Sanket Kadam
Full-stack development enthusiast specializing in Java, React, and Spring Boot.

---






