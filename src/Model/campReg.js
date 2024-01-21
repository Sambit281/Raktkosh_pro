const mongoose = require("mongoose");

const campRegSchema = new mongoose.Schema({
    OrgName: {
        type: String,
        required: true,
    },
    OrgEmail: {
        type: String,
        required: true,
    },
    Organizer: {
        type: String,
        required: true,
        // unique: true,
    },
    MobileNo: {
        type: Number,
        required: true,
        // unique: true,
    },
    Co_Organizer: {
        type: String,
        // unique: true,
    },
    Co_MobileNo: {
        type: Number,
        // unique: true,
    },
    Date: {
        type: String,
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

const campRegister = new mongoose.model("CampRegister", campRegSchema);

module.exports = campRegister;
