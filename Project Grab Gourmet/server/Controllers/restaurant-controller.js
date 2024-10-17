const {Restaurant} = require("../db") 

//getting all restaurants
const getRestaurants =async(req,res) => {
    let restaurantList= await Restaurant.find();
    res.status(200).send({message:"restaurants recieved",payload:restaurantList})
}

//adding restaurants

const postRestaurants = async(req,res)=>{
    let rest = req.body
    
    //check for duplicate dishes
    let newRestaurant = await Restaurant.findOne({name:rest.name})
   
    //if exists 
    if(newRestaurant !== null){
        res.status(200).send({message:"Restaurant already exists"})
    }

    //if not exists
    else{
        
        let restAdded = await Restaurant.create(rest)
       
        res.status(201).send({message:"Restaurant added Successfully",payload:restAdded})
    }
    
}


//deleting restaurants

const deleteRestaurants= async(req,res)=>{
     
  
    let delRest = await Restaurant.findOneAndDelete({ name:req.params.name });
    if(delRest===null){
        res.status(200).send({message:"Restaurant not found"})
    
    }
    else{ res
        .status(200)
        .send({ message: "Restaurant deleted Successfully", payload: delRest });
     }
    
    

}

module.exports={getRestaurants,postRestaurants,deleteRestaurants};