const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  posts: [{ url: String, title: String }]
});

const Users = mongoose.model("Users", UserSchema);

module.exports = Users;
