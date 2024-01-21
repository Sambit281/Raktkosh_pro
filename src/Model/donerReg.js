const mongoose = require("mongoose");

const donerRegSchema = new mongoose.Schema({
  Firstname: {
    type: String,
    required: true,
  },
  Lastname: {
    type: String,
    required: true,
  },
  Email: {
    type: String,
    required: true,
    // unique: true,
  },
  MobileNo: {
    type: Number,
    required: true,
    // unique: true,
  },
  DOB: {
    type: String,
    // required: true,
  },
  Gender: {
    type: String,
    // required: true,
  },
  Weight: {
    type: Number,
    // required: true,
  },
  BloodGroup: {
    type: String,
    // required: true,
  },
  Address: {
    type: String,
    required: true,
  },
  District: {
    type: String,
    required: true,
  },
  Pincode: {
    type: Number,
    required: true,
  },
});

const donerRegister = new mongoose.model("Register", donerRegSchema);

module.exports = donerRegister;
