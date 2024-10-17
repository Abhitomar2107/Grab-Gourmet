const exp=require("express")
const restaurantApp=exp.Router()
const expressAsyncHandler = require("express-async-handler")
const {getRestaurants}=require("../Controllers/restaurant-controller")
const {postRestaurants}=require("../Controllers/restaurant-controller")
const {deleteRestaurants}=require("../Controllers/restaurant-controller")
const verifyAdminToken =require("../Middlewares/verifyAdminToken")
//getting restaurants
restaurantApp.get("/restaurants",expressAsyncHandler(getRestaurants))

//adding restaurants
restaurantApp.post("/restaurants",verifyAdminToken,expressAsyncHandler(postRestaurants))

//deleting restaurants
restaurantApp.delete("/restaurants/:name",verifyAdminToken,expressAsyncHandler(deleteRestaurants))

module.exports=restaurantApp
