const express=require("express")
const bodyParser=require("body-parser")
const { response } = require("express")

const app=express()
app.use(bodyParser.urlencoded({extended:true}))
app.use(express.static("public"));

app.get("/",function(request,response){
    response.sendFile(__dirname + "/home.html")
})
app.get("/aboutus.html",function(request,response){
    response.sendFile(__dirname + "/home.html")
})
app.get("/feedback.html",function(request,response){
    response.sendFile(__dirname + "/feedback.html")
})
app.get("/signin.html",function(request,response){
    response.sendFile(__dirname + "/signin.html")
})
app.get("/signup.html",function(request,response){
    response.sendFile(__dirname + "/signup.html")
})

app.listen(3000,function(){
    console.log("Server is at running at port 3000")
})