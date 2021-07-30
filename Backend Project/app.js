const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");

app.use(cors());
app.use(express.json());

mongoose.connect(
  "mongodb://localhost:27017/backend-project",
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log("successfully connected to database");
  }
);

const employeeRouter = require("./routes/Employee");
app.use("/employee", employeeRouter);

const projectRouter = require("./routes/Project");
app.use("/project", projectRouter);

app.listen(5000, () => {
  console.log("express server started");
});
