const express = require("express");
const path = require("path");
const connectDB = require("./config/db");
const cors = require("cors");

// Connect database
connectDB();

const app = express();
const PORT = process.env.PORT || 5000;

// Init Middleware
app.use(express.json());
app.use(cors());
app.use("/uploads/images", express.static(path.join("uploads", "images")));

// Routes
app.use("/api/auth", require("./routes/api/auth"));
app.use("/api/users", require("./routes/api/users"));
app.use("/api/blogs", require("./routes/api/blogs"));
app.use("/api/profile", require("./routes/api/profile"));

// Serve static assets to production
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
