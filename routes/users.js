const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/pinterest_clone");

const userSchema = new mongoose.Schema({
  userName: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  posts: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Post",
    },
  ],
  dp: {
    type: String, // Assuming dp is a URL or file path
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
  },
  fullName: {
    type: String,
    required: true,
  },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
