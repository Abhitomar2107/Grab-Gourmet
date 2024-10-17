const exp=require("express")
const userApp=exp.Router()
const expressAsyncHandler = require("express-async-handler")
const {createUser} = require("../Controllers/user-controller")
const {loginUser} =require("../Controllers/user-controller")

//creating new user
userApp.post("/user",expressAsyncHandler(createUser))

//user login
userApp.post("/userLogin",expressAsyncHandler(loginUser))



module.exports=userApp
