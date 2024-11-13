var express = require("express") // function 
var app = express()


app.get("/",function(req,res){
    res.json({
        message : "Bye world"
    })
})


app.get("/about",(req,res)=>{
    res.json({
        message : "About page"
    })
})

app.post("/register",(req,res)=>{
    res.json({
        message : "Post wala trigger vayo!!"
    })
})

// handle /contact route too 


app.listen(3000,()=>{
    console.log("Nodejs server has started at port 3000")
})

