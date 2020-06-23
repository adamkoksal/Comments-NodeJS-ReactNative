var express = require("express");
var router = express.Router();
const { validate, User } = require("../model/user");

router.get("/", async (req, res) => {
  await User.find()
    .then((data) => res.send(data))
    .catch((err) => res.status(400).send(err.message));
});

router.post("/", async (req, res) => {
  const { error } = validate(req.body);
  if (error) return res.status(400).send(`Error: ${error.details[0].message}`);

  await new User({
    username: req.body.username.toLowerCase(),
  })
    .save()
    .then((data) => res.send(data))
    .catch((err) => res.status(400).send(err.message));
});

module.exports = router;
