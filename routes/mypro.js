const express = require("express");
const _ = require("lodash");
const auth = require("../middlewares/auth");
const User = require("../models/user");

const router = express.Router();

router.get("/", auth, async (req, res) => {
    try {
      let user = await User.findById(req.payload._id);
      if (!user) return res.status(404).send("No such user");
      res.status(200).send(_.pick(user, ["_id", "name", "email", "businessMan"]));
    } catch (error) {
      res.status(400).send(error);
    }
  });

module.exports = router;