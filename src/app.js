const express = require("express");
const path = require("path");
const app = express();

require("dotenv").config();

require("./Db/conn");
const donerRegister = require("./Model/donerReg");
const loginRegister = require("./Model/loginreg");
const bloodrequest = require("./Model/bloodreq");
const campRegister = require("./Model/campReg");

const async = require("hbs/lib/async");

const port = process.env.PORT || 9000;

const static_path = path.join(__dirname, "../public");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static(static_path));
app.set("view engine", "hbs");

// app.get("/", (req, res) => {
//   res.render("Homepage", {
//     donorReg: "10",
//     bloodCollect: "11",
//   });
// });


app.get("/", (req, res) => {
  res.render("index", {
    donorReg: "110",
    bloodCollect: "110",
  });
});
app.get("/Homepage", (req, res) => {
  res.render("Homepage");
});

app.get("/About", (req, res) => {
  res.render("About");
});

app.get("/donerRegister", (req, res) => {
  res.render("donerRegister");
});

app.get("/LoginPage", (req, res) => {
  res.render("LoginPage");
});
app.get("/SigninPage", (req, res) => {
  res.render("SigninPage");
});

app.get("/BloodRequest", (req, res) => {
  res.render("BloodRequest");
});
app.get("/RegisterCamp", (req, res) => {
  res.render("RegisterCamp");
});
app.get("/BloodCamp", (req, res) => {
  res.render("BloodCamp");
});
app.get("/Contact", (req, res) => {
  res.render("Contact");
});
app.get("/BloodAvail", (req, res) => {
  res.render("BloodAvail");
});

// create a new user data for doner registation
app.post("/donerRegister", async (req, res) => {
  try {
    const donerRegisters = new donerRegister({
      Firstname: req.body.Firstname,
      Lastname: req.body.Lastname,
      Email: req.body.Email,
      MobileNo: req.body.MobileNo,
      DOB: req.body.DOfBirth,
      Gender: req.body.Gender,
      Weight: req.body.Weight,
      BloodGroup: req.body.BloodGroup,
      Address: req.body.Address,
      District: req.body.District,
      Pincode: req.body.Pincode,
    });

    const registerd = await donerRegisters.save();

    res.status(201).render("index");
  } catch (error) {
    res.status(400).send(error);
  }
});

// create a database for blood request
app.post("/BloodRequest", async (req, res) => {
  try {
    const bloodrequests = new bloodrequest({
      Name: req.body.Name,
      Email: req.body.Email,
      MobileNo: req.body.MobileNo,
      Gender: req.body.Gender,
      Age: req.body.Age,
      BloodGroup: req.body.BloodGroup,
      Quantity: req.body.Quantity,
      Address: req.body.Address,
      District: req.body.District,
      Pincode: req.body.Pincode,
    });

    const request = await bloodrequests.save();
    res.status(201).render("index");
  } catch (error) {
    res.status(400).send(error);
  }
});

app.post("/campRegister", async (req, res) => {
  try {
    const campRegisters = new campRegister({
      OrgName: req.body.OrgName,
      OrgEmail: req.body.OrgEmail,
      Organizer: req.body.Organizer,
      MobileNo: req.body.MobileNo,
      Co_Organizer: req.body.Co_Organizer,
      Co_MobileNo: req.body.Co_MobileNo,
      Date: req.body.Date,
      Address: req.body.Address,
      District: req.body.District,
      Pincode: req.body.Pincode,
    });

    const registerd = await campRegisters.save();
    res.status(201).render("index");
  } catch (error) {
    res.status(400).send(error);
  }
});

//  signup data  stored in database
app.post("/SigninPage", async (req, res) => {
  try {
    const password = req.body.password;
    const cpassword = req.body.cpassword;

    if (password == cpassword) {
      const loginRegisters = new loginRegister({
        Email: req.body.Email,
        password: password,
        cpassword: cpassword,
      });

      const registerd = await loginRegisters.save();
    } else {
      res.send("password are not matching");
    }
    res.status(201).render("Loginpage");
  } catch (error) {
    res.status(400).send(error);
  }
});

//login page
app.post("/Loginpage", async (req, res) => {
  try {
    const Lemail = req.body.LEmail;
    const Lpassword = req.body.LPassword;

    const useremail = await loginRegister.findOne({ Email: Lemail });

    if (useremail.password == Lpassword) {
      res.status(201).render("HomePage");
    } else {
      res.send("Data is invalid Login");
    }
  } catch (error) {
    res.status(400).send("invalid email");
  }
});

app.listen(port, () => {
  console.log(`Conection Successful at port : ${port}`);
});
