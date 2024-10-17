const jwt = require("jsonwebtoken");
require ("dotenv").config()

function verifyAdminToken(req, res, next) {
    //token verification logic
    //get token
    try {
      const bearerToken = req.headers.authorization;
  
      if (bearerToken) {
        //serparating the token
        const token = bearerToken.split(" ")[1];
  
        //verifying token
        let decodedToken = jwt.verify(token, process.env.SECRET_KEY_ADMIN);
  
        next();
      } else {
        res.send({ message: "unauthorized access" });
      }
    } catch (error) {
      res.send({message:"Please login"})
    }
  }
  
  module.exports = verifyAdminToken;
  