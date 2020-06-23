const mongoose = require("mongoose");

module.exports = async function () {
  await mongoose
    .connect("mongodb+srv://mycluster-jptjg.mongodb.net/", {
      dbName: "comments",
      user: "akoksal",
      pass: "akoksal",
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    })
    .then(() => console.log("Connected to DB..."))
    .catch((err) => console.log("Error connecting to DB..."));
  // await mongoose
  //   .connect(process.env.MONGODB_URI, {
  //     dbName: process.env.DB_NAME,
  //     user: process.env.DB_USER,
  //     pass: process.env.DB_PASS,
  //     useNewUrlParser: true,
  //     useUnifiedTopology: true,
  //     useFindAndModify: false,
  //   })
  //   .then(() => console.log("Connected to DB..."))
  //   .catch((err) => console.log("Error connecting to DB..."));
};
