const express = require("express");
const cors = require("cors");
const { connection } = require("./db");
const { userRouter } = require("./Routes/User.route");
require("dotenv").config();
const app = express();

app.use(cors());
app.use(express.json());
app.use("/user", userRouter);

app.listen(process.env.PORT, async () => {
  try {
    await connection;
    console.log("connected to db");
  } catch (error) {
    console.log(error.message);
    console.log("not connected to db");
  }
  console.log(`server running on port ${process.env.PORT}`);
});
