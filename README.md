# Task Management Application

A Full-Stack Task Management Web Application developed using **HTML, CSS, JavaScript, Node.js, Express.js, and SQLite**. This application allows users to manage their daily tasks efficiently with complete CRUD operations.

## Features

- User Registration
- User Login
- Add New Tasks
- View All Tasks
- Update Task Status
- Delete Tasks
- Responsive User Interface
- SQLite Database Integration
- RESTful APIs using Express.js

## Technologies Used

### Frontend
- HTML5
- CSS3
- JavaScript

### Backend
- Node.js
- Express.js

### Database
- SQLite

## Project Structure

```
Task-Management-App
│
├── backend
│   ├── server.js
│   ├── db.js
│   ├── task.db
│   ├── package.json
│   └── package-lock.json
│
├── frontend
│   ├── index.html
│   ├── style.css
│   └── script.js
│
└── README.md
```

## Installation

### Clone the Repository

```bash
git clone https://github.com/nithyasri15032006/task-management-application.git
```

### Navigate to the Backend Folder

```bash
cd Task-Management-App/backend
```

### Install Dependencies

```bash
npm install
```

### Start the Server

```bash
node server.js
```

The server will start at:

```
http://localhost:5000
```

### Run the Frontend

Open the `frontend/index.html` file in your browser or use the **Live Server** extension in Visual Studio Code.

## API Endpoints

| Method | Endpoint | Description |
|---------|----------|-------------|
| POST | `/register` | Register a new user |
| POST | `/login` | Login user |
| POST | `/tasks` | Add a new task |
| GET | `/tasks` | Get all tasks |
| PUT | `/tasks/:id` | Update task status |
| DELETE | `/tasks/:id` | Delete a task |

## Sample Task

- **Title:** Complete Internship Project
- **Description:** Finish Task Management Application
- **Due Date:** 2026-07-25
- **Status:** Pending

## Future Enhancements

- JWT Authentication
- Password Encryption
- Search and Filter Tasks
- Task Categories
- Due Date Notifications
- Real-Time Updates using WebSockets
- Cloud Deployment

## Author

**Nithyasri Murugan**

- GitHub: https://github.com/nithyasri15032006
- LinkedIn: https://www.linkedin.com/in/nithya-sri-murugan-33971341b

## License

This project is developed for educational and internship purposes.
