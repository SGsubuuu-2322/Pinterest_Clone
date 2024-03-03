var express = require("express");
var router = express.Router();

const userModel = require("./users");
const postModel = require("./posts");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

router.get("/createuser", async function (req, res) {
  const createdUser = await userModel.create({
    userName: "SGsubu@2322",
    password: "SGshreyans@232214",
    posts: [],
    email: "SGsubuuu143@gmail.com",
    fullName: "Subham Kumar Pradhan",
  });

  res.send(createdUser);
});
router.get("/createpost", async function (req, res) {
  const createdPost = await postModel.create({
    postText: "Hii Bhaiyaa",
  });

  res.send(createdPost);
});

module.exports = router;
