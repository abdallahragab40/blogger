const mongoose = require("mongoose");

const BlogSchema = new mongoose.Schema({});

const Blog = mongoose.model("user", BlogSchema);

module.exports = Blog;
