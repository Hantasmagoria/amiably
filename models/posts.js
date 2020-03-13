const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  },
  doesExpire: {
    type: Boolean,
    required: true
  },
  createdDate: {
    type: Date,
    required: true
  },
  uniqueURL: {
    type: String,
    requred: true
  }
});

const Posts = mongoose.model("Posts", postSchema);

module.exports = Posts;
