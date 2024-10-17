const exp=require("express")
const adminApp=exp.Router()
const expressAsyncHandler = require("express-async-handler")
const {adminLogin} = require("../Controllers/admin-controller")

//admin login
adminApp.post("/admin",expressAsyncHandler(adminLogin))





module.exports=adminApp