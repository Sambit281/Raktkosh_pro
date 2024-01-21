const mongoose = require("mongoose");

const bloodrequestSchema = new mongoose.Schema({
  Name: {
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
  Gender: {
    type: String,
    // required: true,
  },
  Age: {
    type: Number,
    required: true,
  },
  BloodGroup: {
    type: String,
    // required: true,
  },
  Quantity: {
    type: Number,
    required: true,
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

const bloodrequest = new mongoose.model("Request", bloodrequestSchema);

module.exports = bloodrequest;
