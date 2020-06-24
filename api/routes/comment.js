var express = require("express");
var router = express.Router();
const { validate, Comment } = require("../model/Comment");
const { User } = require("../model/user");
const { date } = require("joi");

router.get("/", async (req, res) => {
  let comments = await Comment.find().catch((err) =>
    res.status(400).send(err.message)
  );
  let newList = [];
  for (let i = 0; i < comments.length; i++) {
    await User.findById(comments[i].userId)
      .then((data) => {
        let rawDate = comments[i].date;
        let date = rawDate.toDateString()

        let newObj = {
          id: comments[i]._id,
          userId: comments[i].userId,
          username: data.username,
          comment: comments[i].comment,
          date,
        };
        newList.push(newObj);
      })
      .catch((err) => res.status(400).send(err.message));
  }
  res.send(newList);
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
