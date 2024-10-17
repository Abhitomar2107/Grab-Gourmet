const {Dish} = require("../db") 

//getting all dishes
const getDishes =async(req,res) => {
    let dishList= await Dish.find();
    res.status(200).send({message:"dishes recieved",payload:dishList})
}
//adding dishes

const postDishes = async(req,res)=>{
    let dish = req.body

    //check for duplicate dishes
    let newDish = await Dish.findOne({name:dish.name})
   
    //if exists 
    if(newDish !== null){
        res.status(200).send({message:"Dish already exists"})
    }

    //if not exists
    else{
        
        let dishAdded = await Dish.create(dish)
       
        res.status(201).send({message:"Dish added Successfully",payload:dishAdded})
    }
    
}
//delete dishes
const deleteDishes= async(req,res)=>{
     
    
    let delDish = await Dish.findOneAndDelete({ name:req.params.name });
    
    if(delDish === null){
        
        res.status(200).send({message:"Dish not found"})
    }
    else{
        res
        .status(200)
        .send({ message: "Dish Deleted Successfully", payload: delDish });
    }

}

module.exports={getDishes,postDishes,deleteDishes};