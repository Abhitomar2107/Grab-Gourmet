const {Admin} = require("../db")
const bcryptjs = require("bcryptjs")
const jwt = require("jsonwebtoken")

const adminLogin =async(req,res)=>{

    let adminCred = req.body
    let adminOfDb = await Admin.findOne({name:adminCred.name})
    if(adminOfDb === null){
        res.status(200).send({message:"Admin not found"})
    }
    else{
        //compare password
        let result = await bcryptjs.compare(adminCred.password,adminOfDb.password)
        if(result ==false){
            res.status(200).send({message:"Invalid password"})
        }
        else{
            
            //if password matched 
            // create a signed token
        let signedToken = jwt.sign({name:adminOfDb.name},"abcdef",{expiresIn:300})

        //send res with token
        res.status(200).send({message:"login success",token:signedToken,name:adminOfDb.name})

        }
}
}
module.exports = {adminLogin}

