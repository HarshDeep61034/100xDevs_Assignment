const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const adminRouter = require("./routes/admin.js");
const userRouter = require("./routes/user.js");
const PORT = 3000;
const { connectToDb } = require("./db");
connectToDb();
// Middleware for parsing request bodies
app.use(bodyParser.json());
app.use("/admin", adminRouter);
app.use("/user", userRouter);

app.get("/", (req, res) => {
  res.send("Hi");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
