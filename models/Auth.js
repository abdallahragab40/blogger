const mongoose = require("mongoose");

const AuthSchema = new mongoose.Schema({});

const Auth = mongoose.model("user", AuthSchema);

module.exports = Auth;
