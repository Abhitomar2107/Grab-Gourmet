const exp=require("express")
const cartApp=exp.Router()
const expressAsyncHandler = require("express-async-handler")
const {addCart} = require("../Controllers/cart-controller")
const {getCart} = require("../Controllers/cart-controller")
const {deleteCart} = require("../Controllers/cart-controller")
const verifyToken = require("../Middlewares/verifyToken")
//adding to cart req handler
cartApp.post("/cart",verifyToken,expressAsyncHandler(addCart))

//fetching from cart request handler
cartApp.get("/cart",expressAsyncHandler(getCart))

//deleting from cart
cartApp.delete("/cart/:id",expressAsyncHandler(deleteCart))


module.exports=cartApp