const mongoose = require("mongoose");

mongoose
  .connect("mongodb+srv://s4sambit632:GwKb07WQPSa5Zqwg@cluster0.11ujaoz.mongodb.net/donerRegistion", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // useCreateIndex: true,
  })
  .then(() => {
    console.log(`connection successful`);
  })
  .catch((err) => {
    console.log("error asi gala");
    console.log(err.message);
    process.exit(1)
  });
