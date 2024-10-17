const {User}=require("../db")
const bcryptjs = require("bcryptjs")
const jwt = require("jsonwebtoken")

//registering new users
const createUser = async(req,res)=>{
    let user = req.body;

    //check for duplicate users
    let userFromDb = await User.findOne({name:user.name})
    //if user exists
    if(userFromDb !== null){
        res.status(200).send({message:"User already exists"})
        }
    //if user not exists
    else{
        //hash password
        let hashedPassword = await bcryptjs.hash(user.password,5)
        //replaceing plain pwd with hashed pwd
        user.password = hashedPassword;

        //save user
        let userCreated = await User.create(req.body)
        res.status(201).send({message:"user created",payload:userCreated})

    }
   }

// User Login

const loginUser = async(req,res)=>{

    let userCred = req.body;
    let userOfDb = await User.findOne({name:userCred.name})
    if(userOfDb === null){
        res.status(200).send({message:"User not found"})
    }
    else{
        //compare password
        let result = await bcryptjs.compare(userCred.password,userOfDb.password)
        if(result ==false){
            res.status(200).send({message:"Invalid password"})
        }
        else{
            
            //if password matched 
            // create a signed token
        let signedToken = jwt.sign({name:userOfDb.name},"qwerty",{expiresIn:300})

        //send res with token
        res.status(200).send({message:"login success",token:signedToken,name:userOfDb.name})

        }

    }


}






module.exports={createUser,loginUser}

