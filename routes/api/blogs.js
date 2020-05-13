const express = require("express");
const router = express.Router();

// @route   GET api/blogs
// @desc    Test route
// @access  Public
router.get("/", (req, res) => res.send("Blogs Route"));

module.exports = router;
