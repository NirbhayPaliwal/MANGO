const express = require("express");
const lancer = require("../Schema/lancer");
const client = require("../Schema/client");
const router = express.Router();
router.post("/update", async (req, res) => {
  const { name, username, password, email, skills } = req.body;

  try {
    const flag = 0;
    let result = await lancer.findOneAndDelete({ username });
    const user2 = new lancer({
      name: name,
      username: username,
      password: password,
      email: email,
      skills: skills,
      rating: 0,
      people: 0,
    });
    user2.save();
    res.status(500).send({
      message: "Doneee",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      message: "Internal Server Error",
    });
  }
});
module.exports = router;
