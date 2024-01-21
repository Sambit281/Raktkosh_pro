const mongoose = require("mongoose");

const LoginSchema = new mongoose.Schema({
  Email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  cpassword: {
    type: String,
    required: true,
  },
});

const loginRegister = new mongoose.model("LoginData", LoginSchema);

module.exports = loginRegister;
