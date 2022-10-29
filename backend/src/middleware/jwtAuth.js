const jwt=require("jsonwebtoken")
const User = require("../models/User.model") 

//authorization  middleware
const jwtAuth = (req, res, next) => {
  const token = req.cookies.access_token;
  if (!token) {
    return res.sendStatus(403);
  }
    try {
    //verifying jwt token
      const user = jwt.verify(token, "jwt_secret_key");
      // we wil get user id here after verifying extracted from token
    
      // Fetch the user detail by id 
      User.findOne({_id: user.id}).then(function(user){
        // Do something with the user
        let data = user
        // console.log("data :", data)
        req.user = data             //assign user data to req object now we can get user info through token usin req.user
        return next();
      });        
    } catch(err) {
      return res.status(403).json({err : err});
    }
}


module.exports = jwtAuth;