// DEPENDENCIES
const express = require("express");
const cors = require("cors");


require("dotenv").config();
const mongoose = require("mongoose");

// CONFIGURATION
const PORT = process.env.PORT;
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

// ROUTES
// app.get("/", (req, res) => {
  
// });

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

// LISTEN
app.listen(3001, () => {
  console.log("New Greetings! Server listening From port: ", 3001);
});


// mongoose.connect(process.env.MONGO_URI,{
//     useNewUrlParser: true,
//     UseUnifiedTopology: true,
// },
// () => {
//     console.log(`connected to mongo: ${process.env.MONGO_URI}`);
// });

// const expenseSchema = new Schema({
//     amount: {type: Number},
//     name: {type: String},
//     type: {type: String},
//     date: {type: Date},
// })

// const expense1 = mongoose.model("expense1", expenseSchema);

// app.get("/",(req, res) =>{
   
    
//     console.log(expense1)
    
//     expense1.find().then((foundExpense) => {
//         console.log(foundExpense);
//     })
// });

// app.get('/api', (req, res) => {
//     res.json({ message: 'Hello from server!' });
// });
// //app.use(express.static(path.resolve(__dirname, "../client-side/src/App.js" )));

// app.listen(PORT, () => {
//     console.log(`Server listening on ${PORT}`);
//   });

