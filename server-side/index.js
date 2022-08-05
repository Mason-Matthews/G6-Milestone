const express = require('express');
const mongoose = require('mongoose');
const { connect } = require('react-redux');
const { Schema } = mongoose;


require('dotenv').config();
const PORT = process.env.PORT;
const app=express();

mongoose.connect(process.env.MONGO_URI,{
    useNewUrlParser: true,
    UseUnifiedTopology: true,
},
() => {
    console.log(`connected to mongo: ${process.env.MONGO_URI}`);
});

const expenseSchema = new Schema({
    name: {type: String},
    type: {type: String},
    amount: {type: Number},
})

const expense1 = mongoose.model("expense1", expenseSchema);

app.get("/",(req, reg) =>{
    reg.send();
    
    console.log(expense1)
    
    expense1.find().then((foundExpense) => {
        console.log(foundExpense);
    })
});

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
  });

