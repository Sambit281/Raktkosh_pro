const mongoose = require("mongoose");

require("dotenv").config();

mongoose
  .connect(process.env.DATABASE_URL, {
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
