const express = require("express");
const path = require("path");
const connectDB = require("./config/db");

// Connect database
connectDB();

const app = express();
const PORT = process.env.PORT || 5000;

// Init Middleware
app.use(express.json());
app.use("/uploads/images", express.static(path.join("uploads", "images")));

app.get("/", (req, res) => res.send("App running"));

// Routes
app.use("/api/auth", require("./routes/api/auth"));
app.use("/api/users", require("./routes/api/users"));
app.use("/api/blogs", require("./routes/api/blogs"));
app.use("/api/profile", require("./routes/api/profile"));

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
