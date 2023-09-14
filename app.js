const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const Person = require("./models/personModel");
const dotenv = require("dotenv");

const app = express();

dotenv.config({ path: "./config.env" });

app.use(bodyParser.json());

dotenv.config({ path: "./config.env" });

const DB = process.env.DATABASE.replace(
  "<PASSWORD>",
  process.env.DATABASE_PASSWORD
);

// DB connection
mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("DB connection successful!");
  });

// Create a new person
app.post("/api/persons", async (req, res) => {
  try {
    const newPerson = await Person.create(req.body);

    res.status(201).json({
      status: "success",
      data: {
        person: newPerson,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err,
    });
  }
});

// Get all persons
app.get("/api/persons", async (req, res) => {
  try {
    const persons = await Person.find();

    res.status(200).json({
      status: "success",
      data: {
        persons,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
});

// Get a person by ID
app.get("/api/persons/:id", async (req, res) => {
  try {
    const person = await Person.findById(req.params.id);

    res.status(200).json({
      status: "success",
      data: {
        person,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
});

// Update a person by ID
app.patch("/api/persons/:id", async (req, res) => {
  try {
    const person = await Person.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });

    res.status(200).json({
      status: "success",
      data: {
        person,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
});

// Delete a person by ID
app.delete("/api/persons/:id", async (req, res) => {
  try {
    await Person.findByIdAndDelete(req.params.id);

    res.status(204).json({
      status: "success",
      data: null,
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
