const router=require("express").Router();
const User=require("../models/User.model")
const CryptoJS=require("crypto-js")
const jwt=require("jsonwebtoken")
require('dotenv').config()
const jwtAuth = require("../middleware/jwtAuth");

//Router
router.post("/register", async (req, res) => {
    // console.log(req.body)
    try {
        const newuser = new User({
                name : req.body.name,
                email: req.body.email,
                password:CryptoJS.AES.encrypt(req.body.password,"CRYPTO_SECRET_KEY").toString(),
                education : req.body.education,
                skill : req.body.skill,
                type: req.body.type
        })
        console.log("newuser :",newuser)

        const saveduser = await newuser.save();
        console.log("saveduser :",saveduser )
        return res.status(200).json(saveduser)
    } catch (error) {
        return res.status(500).json(error)
    }
})


router.post("/login",async(req,res)=>{
    try {
        const user=await User.findOne({email:req.body.email});

        if(!user){
            return res.status(401).json("wrong credential")
        }

        const hashedPassword=CryptoJS.AES.decrypt(user.password,"CRYPTO_SECRET_KEY");

        
        const originalPassword=hashedPassword.toString(CryptoJS.enc.Utf8)

        if(originalPassword!==req.body.password){
            return res.status(401).json("wrong credential")
        }
        
        //generating jwt token
        const token=jwt.sign({id:user._id},"jwt_secret_key")

        return res.status(200).json({
            token: token,
            name : user.name,
            email : user.email,
            type: user.type,
          })
          
    } catch (error) {
      return res.status(500).json(error)  
    }
})



//validToken is autherization middleware
//we are checking user who is authenticated only he can acess that route

// router.get("/check", validateToken, (req, res) => {
//     // console.log("token is valid : user can acss this route ")
//     return res.status(200).json("token is valid : user can access this route ")
// })


//logout route it will remove that token from cookie and user will logout
router.get("/logout", jwtAuth , (req, res) => {
    return res
      .clearCookie("access_token")
      .status(200)
      .json({ message: "Successfully logged out 😏 🍀" });
  });




module.exports = router;
