const mongoose = require("mongoose");

function connectDB(){

    mongoose.connect('mongodb+srv://arun1:p2XXG9ZnkJDxJgR4@cluster1.xpaeqvs.mongodb.net/carrent' , {useUnifiedTopology: true , useNewUrlParser: true})

    const connection = mongoose.connection

    connection.on('connected' , ()=>{
        console.log('Mongo DB Connection Successfull')
    })

    connection.on('error' , ()=>{
        console.log('Mongo DB Connection Error')
    })


}

connectDB()

module.exports = mongoose
