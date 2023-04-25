const express = require("express");
require("dotenv").config();
const mongoose = require("mongoose");
const register = require("./routes/register");
const login = require("./routes/login");
const signin = require("./routes/signin");
const cards = require("./routes/cards");
const mycards = require("./routes/mycards");
const mypro = require("./routes/mypro");
const app = express();
const cors=require("cors");





const port = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());
app.use("/api/register", register);
app.use("/api/login",login);
app.use("/api/signin",signin);
app.use("/api/cards",cards);
app.use("/api/mycards",mycards);
app.use("/api/mypro", mypro);








mongoose
  .connect(process.env.DB, { useNewUrlParser: true })
  .then(() => console.log("MongoDB connected"))
  .catch(() => console.log("MongoDB failed"));

app.listen(port, () => console.log(`Server started on port ${port}`));