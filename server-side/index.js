const express = require('express');
const mongoose = require('mongoose');
const { connect } = require('react-redux');

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

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
  });

// require('dotenv').config()
// app.use(express.json())
// app.use(express.urlencoded({ extended: false }))


