const mongoose = require("mongoose");

// schema
const mySchema = new mongoose.Schema({
  userId: {
    type: String,
    
  },
  cards: {
    type: Array,
    required: true,
  },
 
});

// model
const My = mongoose.model("mycards", mySchema);
module.exports = My;