var express = require("express") // function 
const DatabaseConnect = require("./database")
const Blog = require("./model/blogModel")
var app = express()
var cors = require('cors')

app.use(cors({
    origin : "http://localhost:5173"
}))
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
    res.status(200).json({
        message : "Blog created successfully"
    })
})

app.get("/blog",async function(req,res){
        var blogs = await Blog.find() // array 
        res.status(200).json({
            data : blogs
        })
})

app.get("/blog/:id",async function(req,res){
    var id = req.params.id
    var blog = await Blog.findById(id) // always returns object 
    res.status(200).json({
        data : blog
    })
})

app.delete("/blog/:id",async function(req,res){
    var id = req.params.id
    await Blog.findByIdAndDelete(id)
    res.status(200).json({
        message : "Blog deleted successfully"
    })
})

app.patch("/blog/:id",async function(req,res){
    var id = req.params.id
    var{title,subtitle,description} = req.body
    await Blog.findByIdAndUpdate(id,{
        title , 
        subtitle , 
        description
    })
    res.status(200).json({
        message : "Blog updated successfully"
    })
})

app.listen(3000,()=>{
    console.log("Nodejs server has started at port 3000")
})

