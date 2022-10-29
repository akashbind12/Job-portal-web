const express=require("express")
const cors=require("cors")
const app = express()

const cookieParser = require("cookie-parser");
app.use(cookieParser());

require('dotenv').config()
app.use(express.json())

const authController=require("./controllers/Auth.controller");
const jobController = require("./controllers/Job.controller")
const applicationController = require("./controllers/Application.controller")
const userController = require("./controllers/User.controller")

app.use(cors());


app.get("/",(req,res)=>{
    return res.status(200).json("Hello world")
})
app.use("/user",userController);
app.use("/api",authController);
app.use("/jobs", jobController)
app.use("/",applicationController)

const connect=require("./configs/db")



const port=process.env.PORT || 7000
app.listen(port,async()=>{
    try {
        await connect();
        console.log(`Listening on port ${port}`)
    } catch (error) {
        console.log({"error":error.message})
    }
});