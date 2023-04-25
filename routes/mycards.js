const express = require("express");


const auth = require("../middlewares/auth");
const Card = require("../models/Card");
const router = express.Router();

 



router.get("/", auth, async (req, res) => {
  try {
    let card = await Card.findOne({ userId: req.payload._id });
    // let card = await Card.findById(req.params.cardtId);
    if (!card) return res.status(404).send({error});
    res.status(200).send(card);
  } catch (error) {
    res.status(400).send(error);
  }
});



module.exports = router;