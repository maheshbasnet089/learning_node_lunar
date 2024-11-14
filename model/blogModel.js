var mongoose = require("mongoose")
var Schema = mongoose.Schema

var blogSchema = new Schema({
    title : {
        type : String
    }, 
    subtitle : {
        type : String 
    }, 
    description : {
        type : String
    }, 
})

var Blog = mongoose.model("Blog",blogSchema)
module.exports = Blog