
import "../Css/Register.css"
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../Redux/auth/action";
import { useEffect } from "react";

export const Register = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch()
    const user = useSelector((store) => store.userAuth);
    const [form,setform]=useState({
      name :"",
      email:"",
      password:"",
      education : "",
      skill : "",
      type : ""
    });

    function handleChange(e){
     const {id,value}=e.target;
     setform({
        ...form,
        [id]:value
    })
    console.log(form)
    }


    const handleSubmit =(e)=> {
        e.preventDefault();
        console.log(form)
        
        if(form.name!=="" && form.email!=="" && form.password!=="" && form.education!=="" && form.skill!=="" && form.type!==""){
            dispatch(register(form));
        } else {
            alert("fill all the details")
        }
    } 

    useEffect(()=>{
        if(user.register){
          navigate("/login")
        }
      },[user])

    
    return (
    <div className="Body">
       <div className="containersignup">
            <p className="create-account">Create an Account</p>
            <form onSubmit={handleSubmit}>
                <div className="NMBlock">
                    <div>Full Name</div>
                    <div>*</div>
                </div>
                <input  onChange={handleChange} id="name" type="text" placeholder="Enter Full Name"/>
                <div className="NMBlock">
                    <div>Email</div>
                    <div>*</div>
                </div>
                <input onChange={handleChange} id="email"  type="email" placeholder="Enter Email"/>
                <div className="NMBlock">
                    <div>Password</div>
                    <div>*</div>
                </div>
                <input onChange={handleChange} id="password"  type="password"  placeholder="Enter Password"/>
                
                <div className="NMBlock">
                    <div>Education</div>
                    <div>*</div>
                </div>
                <input  onChange={handleChange} id="education" type="text" placeholder="Enter Education"/>
                
                <div className="NMBlock">
                    <div>Skills</div>
                    <div>*</div>
                </div>
                <input  onChange={handleChange} id="skill" type="text" placeholder="Enter Education"/>
                
                <div className="NMBlock">
                    <div>User Type</div>
                    <div>*</div>
                </div>
                <select onChange={handleChange}  name="type" id="type">
                <option value="-----">-----</option>
                    <option value="recuiter">Recuiter</option>
                    <option value="applicant">Applicant</option>
                </select>
                
                
                <div className="SU" >
                    <input  className="submitsignup" type="submit" value="Register"/>
                </div>
                </form>
                {/* <div className="SI" >
                    <button  onClick={()=>{
                        navigate("/login",{replace:true})
                    }} style={{textDecoration:"none",marginBottom:"50px",height:"60px",cursor:"pointer",borderRadius:"0px",letterSpacing:"1px"}} className="submitsignin" >
                        Login</button>
                </div>   */}
        </div>
    </div>
    )
}