const exp=require("express")
const dishApp=exp.Router()
const expressAsyncHandler = require("express-async-handler")
const {getDishes}=require("../Controllers/dish-controller")
const {postDishes} =require("../Controllers/dish-controller")
const {deleteDishes}=require("../Controllers/dish-controller")
const verifyAdminToken =require("../Middlewares/verifyAdminToken")

//getting dishes
dishApp.get("/dishes",expressAsyncHandler(getDishes))

//adding dishes
dishApp.post("/dishes",verifyAdminToken,expressAsyncHandler(postDishes))

//deleting dishes
dishApp.delete("/dishes/:name",verifyAdminToken,expressAsyncHandler(deleteDishes))

module.exports=dishApp
