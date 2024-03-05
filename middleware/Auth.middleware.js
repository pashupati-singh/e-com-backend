
const jwt = require("jsonwebtoken");

const AuthMiddleware = async(req,res,next) =>{
  console.log(req.headers);
  try {
const token = req.headers.authorization?.split(" ")[1];
    jwt.verify(token, 'privateKey', async(err, decoded)=> {
        if(err) {
          console.log(err);
          return res.json({msg:"Restricted Area"})
        }
        else if(decoded){
          req.body.userID = decoded.userID;
          req.body.userName = decoded.userName;
         next()
    } 
      });
  } catch (error) {
    res.json({error})
  }
}

module.exports = {AuthMiddleware}