var express = require("express");
var router = express.Router();
const { validate, Comment } = require("../model/Comment");

router.get("/", async (req, res) => {
  await Comment.find()
    .then((data) => res.send(data))
    .catch((err) => res.status(400).send(err.message));
});

router.post("/", async (req, res) => {
  const { error } = validate(req.body);
  if (error) return res.status(400).send(`Error: ${error.details[0].message}`);

  await new Comment({
    userId: req.body.userId,
    comment: req.body.comment,
  })
    .save()
    .then((data) => res.send(data))
    .catch((err) => res.status(400).send(err.message));
});

module.exports = router;
