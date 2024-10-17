const exp=require('express')
const Dish = require("./db")
const cors = require("cors")
const app=exp()
//env configure
//require('env').config()
//body parser
app.use(exp.json())

app.use(cors({origin:'http://localhost:3000'}))

//connecting client-server
const path = require("path")
app.use(exp.static(path.join(__dirname,"../client/build")))


//importing 
const userApp=require("./APIs/user-api")
const dishApp = require("./APIs/dish-api")
const restaurantApp=require("./APIs/restaurant-api")
const cartApp=require("./APIs/cart-api")
const adminApp = require("./APIs/admin-api")

//forwarding request to user-api
app.use("/user-api",userApp)
app.use("/dish-api",dishApp)
app.use("/restaurant-api",restaurantApp)
app.use("/cart-api",cartApp)
app.use("/admin-api",adminApp)

//error handler
app.use((err,req,res,next)=>{
    res.send({message:"error occured",payload:err.message})
})



app.use((req,res,next)=>{
    res.sendFile(path.join(__dirname,"../client/build/index.html"))
})

app.listen(4000,()=>console.log("server up and running"))