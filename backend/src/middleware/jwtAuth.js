const jwt=require("jsonwebtoken")
const User = require("../models/User.model") 

//authorization  middleware
const jwtAuth = (req, res, next) => {
  const bearerHeader = req.headers["authorization"]
  let token;
  if (typeof bearerHeader !== "undefined") {
    const bearer = bearerHeader.split(" ");
    const bearerToken = bearer[1];
    token = bearerToken
  } else {
    return res.sendStatus(403)
  }
  // const token = req.cookies.access_token;
  console.log(token)
  if (!token) {
    return res.sendStatus(403).json("token is not valid");
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
      return res.status(403).json({ err: err });
    }
}


module.exports = jwtAuth;