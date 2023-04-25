const express = require("express");
const joi = require("joi");

const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/user");
const router = express.Router();

const loginSchema = joi.object({
  email: joi.string().required().min(6).email(),
  password: joi.string().required().min(8),
});

router.post("/", async (req, res) => {
  try {
    // joi
    const { error } = loginSchema.validate(req.body);
    if (error) return res.status(400).send("Wrong body");

    // check if the user exists
    let user = await User.findOne({ email: req.body.email });
    if (!user) return res.status(400).send("Wrong email or password");

    // check password
    const checkResult = await bcrypt.compare(req.body.password, user.password);
    if (!checkResult) return res.status(400).send("Wrong email or password");

    // create token
    const token = jwt.sign(
      { _id: user._id,  isBussines: user. isBussines },
      process.env.JWTKEY
    );
    res.status(200).send(token);
  } catch (error) {
    res.status(400).send(error);
  }
});

module.exports = router;