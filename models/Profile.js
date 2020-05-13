const mongoose = require("mongoose");

const ProfileSchema = new mongoose.Schema({});

const Profile = mongoose.model("user", ProfileSchema);

module.exports = Profile;
