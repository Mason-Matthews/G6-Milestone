// DEPENDENCIES
const express = require("express");
const cors = require("cors");
const path = require('path');

require("dotenv").config();
const mongoose = require("mongoose");

// CONFIGURATION
const PORT = process.env.PORT || 3001;
const app = express();
app.use(cors());

mongoose.connect(
  process.env.MONGO_URI,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log("connected to mongo: ", process.env.MONGO_URI);
  }
);

//Middle
app.use(express.json());

app.use(express.urlencoded({ extended: true }));

//schema
const expenseSchema ={
    
    name: {type: String},
    type: {type: String},
    amount: {type: Number},
    date: {type: Date},
}

const expense = mongoose.model("expense", expenseSchema);
module.exports = expense;

//build
app.use(express.static(path.resolve(__dirname, '../client-side/build')));

// ROUTES
app.get("/", (req, res) => {
  console.log(req.body)
  
});

app.post("/", async (req,res) =>{
    console.log(req.body)
    await expense.insertMany({
        name: req.body.name,
        type: req.body.type,
        amount: req.body.amount,
        data: req.body.date 
    })
    res.json({message: "hello world"})
    //res.redirect("/");
} )

// Handle GET requests to /api route
app.get("/api", (req, res) => {
  res.json({ message: "Hello from server!" });
});

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../client-side/build', 'index.html'));
});
// LISTEN
app.listen(3001, () => {
  console.log("New Greetings! Server listening From port: ", 3001);
});
