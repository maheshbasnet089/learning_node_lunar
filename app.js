var express = require("express") // function 
const DatabaseConnect = require("./database")
const Blog = require("./model/blogModel")
var app = express()

app.use(express.json())
DatabaseConnect()

app.get("/",function(req,res){
    res.json({
        message : "Bye world"
    })
})

app.post("/blog",async function(req,res){
    var title = req.body.title 
    var subtitle = req.body.subtitle
    var description = req.body.description
 // alternative
    // var {title,subtitle,description} = req.body
   await Blog.create({
        title : title, 
        subtitle : subtitle, 
        description : description
    })
    res.json({
        message : "Blog created successfully"
    })
})

app.get("/blog",async function(req,res){
        var blogs = await Blog.find() // array 
        res.json({
            data : blogs
        })
})


app.listen(3000,()=>{
    console.log("Nodejs server has started at port 3000")
})

