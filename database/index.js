
var mongoose = require("mongoose")

async function DatabaseConnect(){
  await mongoose.connect("mongodb+srv://basnetmanish089:hahahaha@cluster0.bu3yr.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
  console.log("Database connected successfully")
}

module.exports = DatabaseConnect
