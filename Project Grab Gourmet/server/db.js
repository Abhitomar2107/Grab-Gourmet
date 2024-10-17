const mongoose =require("mongoose");

//connnet to db
mongoose.connect("mongodb://0.0.0.0:27017/projectdb")
.then(()=>{console.log("DB success");
})
.catch((err)=>console.log("Error in DB coonect",err))

//schema
const dishesSchema = new mongoose.Schema({
        
    name:String,
    description:String,
    image:String,
    price:String


})
const restaurantSchema = new mongoose.Schema({
    name:String,
    address:String,
    image:String
})
const cartSchema = new mongoose.Schema({
    name:String,
    price:String,
    restaurant:String
})
const userSchema = new mongoose.Schema({
    name:String,
    email:String,
    password:String
})
const adminSchema = new mongoose.Schema({
    name:String,
    password:String
})



//creating model
const Dish=mongoose.model("dish",dishesSchema)
const Restaurant=mongoose.model("restaurant",restaurantSchema)
const Cart = mongoose.model("cart",cartSchema)
const User = mongoose.model("user",userSchema)
const Admin = mongoose.model("admin",adminSchema)

module.exports={Restaurant,Dish,Cart,User,Admin};
