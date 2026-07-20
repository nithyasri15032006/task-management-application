const express = require("express");
const cors = require("cors");
const db = require("./db");

const app = express();

app.use(cors());
app.use(express.json());

// ==========================
// Home Route
// ==========================
app.get("/", (req, res) => {
    res.send("Task Management Backend Running");
});

// ==========================
// Register User
// ==========================
app.post("/register", (req, res) => {

    const { name, email, password } = req.body;

    db.run(
        "INSERT INTO users (name, email, password) VALUES (?, ?, ?)",
        [name, email, password],
        function (err) {

            if (err) {
                return res.status(400).json({
                    message: "User already exists"
                });
            }

            res.json({
                message: "User registered successfully",
                id: this.lastID
            });

        }
    );

});

// ==========================
// Login User
// ==========================
app.post("/login", (req, res) => {

    const { email, password } = req.body;

    db.get(
        "SELECT * FROM users WHERE email = ? AND password = ?",
        [email, password],
        (err, user) => {

            if (err) {
                return res.status(500).json({
                    message: "Server Error"
                });
            }

            if (!user) {
                return res.status(401).json({
                    message: "Invalid Email or Password"
                });
            }

            res.json({
                message: "Login Successful",
                user: {
                    id: user.id,
                    name: user.name,
                    email: user.email
                }
            });

        }
    );

});

// ==========================
// Add Task
// ==========================
app.post("/tasks", (req, res) => {

    const { title, description, due_date, user_id } = req.body;

    db.run(
        "INSERT INTO tasks (title, description, due_date, user_id) VALUES (?, ?, ?, ?)",
        [title, description, due_date, user_id],
        function (err) {

            if (err) {
                return res.status(500).json({
                    message: "Failed to add task"
                });
            }

            res.json({
                message: "Task Added Successfully",
                id: this.lastID
            });

        }
    );

});

// ==========================
// View All Tasks
// ==========================
app.get("/tasks", (req, res) => {

    db.all("SELECT * FROM tasks", [], (err, rows) => {

        if (err) {
            return res.status(500).json({
                message: "Error"
            });
        }

        res.json(rows);

    });

});

// ==========================
// Update Task Status
// ==========================
app.put("/tasks/:id", (req, res) => {

    const { status } = req.body;

    db.run(
        "UPDATE tasks SET status = ? WHERE id = ?",
        [status, req.params.id],
        function (err) {

            if (err) {
                return res.status(500).json({
                    message: "Error"
                });
            }

            res.json({
                message: "Task Updated Successfully"
            });

        }
    );

});

// ==========================
// Delete Task
// ==========================
app.delete("/tasks/:id", (req, res) => {

    db.run(
        "DELETE FROM tasks WHERE id = ?",
        [req.params.id],
        function (err) {

            if (err) {
                return res.status(500).json({
                    message: "Error"
                });
            }

            res.json({
                message: "Task Deleted Successfully"
            });

        }
    );

});

// ==========================
// Start Server
// ==========================
app.listen(5000, () => {
    console.log("Server running on http://localhost:5000");
});