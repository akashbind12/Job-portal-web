
import "../Css/Register.css"
import { useState } from "react";
import { Link} from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export const Register = () => {

    const navigate = useNavigate();
    
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


    async function handleSubmit(e) {
    e.preventDefault();
    console.log(form)
    
        axios.post("http://localhost:7000/api/register", form)
            .then((res) => {
            console.log(res)
            navigate("/login")
            }).catch((err) => {
            console.log(err)
            alert("Fill all the detail correctly")
        })
    } 

    
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