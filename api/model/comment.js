const mongoose = require("mongoose");
const Joi = require("joi");

const commentSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Types.ObjectId,
    ref: "user",
    required: true,
  },
  comment: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

function validate(body) {
  const schema = {
    userId: Joi.string().required(),
    comment: Joi.string().required(),
  };
  return Joi.validate(body, schema);
}

exports.Comment = mongoose.model("comment", commentSchema);
exports.validate = validate;
