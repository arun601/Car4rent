const mongoose = require("mongoose");

function connectDB(){

    mongoose.connect('mongodb+srv://arun2:PUz9BfGMJGbGN4ml@cluster1.xpaeqvs.mongodb.net/carrent?retryWrites=true&w=majority' , {useUnifiedTopology: true , useNewUrlParser: true})

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
