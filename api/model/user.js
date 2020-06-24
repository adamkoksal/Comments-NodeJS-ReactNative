const mongoose = require("mongoose");
const Joi = require("joi");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
});

function validate(body) {
  const schema = {
    username: Joi.string().required(),
  };
  return Joi.validate(body, schema);
}

exports.User = mongoose.model("user", userSchema);
exports.validate = validate;
