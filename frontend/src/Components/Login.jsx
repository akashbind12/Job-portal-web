import "../Css/Login.css";

import { Link, useNavigate } from "react-router-dom"
import { useState } from "react";
import axios from "axios";
import { login } from "../Redux/auth/action";
import { useDispatch, useSelector } from "react-redux";

export const Login=()=>{
  
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [form,setform] = useState({
        email:"",
        password:""
      });

    const handleChange = (e) => {
    const {id,value} = e.target;
        setform({
            ...form,
            [id]:value
        })
    console.log(form)
}
   
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(form)

        if (form.email !== "" || form.password!== "") {
            dispatch(login(form));
          }else{
            alert("fill all the details")
          }

        // axios.post("http://localhost:7000/api/login", form)
        //     .then((res) => {
        //         console.log(res)
        //         localStorage.setItem("token",res.data.token)
        //         localStorage.setItem("type",res.data.type)  
        //         localStorage.setItem("email",res.data.email) 
        //         localStorage.setItem("name",res.data.name) 
        //         // navigate("/",{replace:true});
        //     }).catch((err) => {
        //         console.log(err)
        //         alert("Fill all the detail correctly")
        // })
      }
     

    return (
        <div>
            <div className="Logincontainer">
            <p className="loginhead">Login</p>
            <form onSubmit={handleSubmit}>
                <div className="NMBlock">
                    <div>Your Email Address</div>
                    <div>*</div>
                </div>
                <input id="email"  onChange={handleChange} type="email" placeholder="Enter Email" required/>
                <div className="NMBlock">
                    <div>Your Password</div>
                    <div>*</div>
                </div>
                <input onChange={handleChange} id="password" type="password" placeholder="Enter Password" required/>
                <div className="RnF">
                    <div className="R">* Required Fields</div>
                    <div>Forgot your password?</div>
                </div> 
                <div className="SU" >
                     <input className="submitsignin" type="submit" value="Login"/>
                </div>
                <hr/>
            </form>
        
            <div className="SI" >
            <Link to="/register"> <button  className="submitsignup" > Register</button> </Link>
            </div>
            </div>
       </div>
)
}