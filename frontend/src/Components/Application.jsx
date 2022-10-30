
import "../Css/Home.css"
import "../Css/Application.css"
import { Link } from "react-router-dom";
import { useState } from 'react';

export const Application = () => {

    
    const [userType, setUserType] = useState("recuiter")


    return (
        <>
        {userType=="recuiter" ?
          ////////////////////Recuiter/////////////////////////////////////////
        <div className="home">
            <h1>Applications</h1>
            <div className="job-container">
                <div className="jobdetails">
                    <h3>Sam Tom</h3>
                    <p>Applied on : 28/01/2021</p>
                    <p>education : cpmputer Science Engineer</p>
                    <p>Skill : react </p>
                    <p>msg : i am interested for this job </p>
                </div>
                <div className="application-div">
                    <div className="shortlist" >SHORTLIST</div>
                    <div className="reject">REJECT</div>
                </div>
            </div>
            <div className="job-container">
                <div className="jobdetails">
                    <h3>Sofware development intern</h3>
                    <p>Role : internship</p>
                    <p>salary : $4000 per month</p>
                    <p>Posted By : john smith</p>
                    <p>Application Date : 22/02/2021</p>
                </div>
                <div className="application-div">
                    <div className="shortlist" >SHORTLIST</div>
                    <div className="reject">REJECT</div>
                </div>
            </div>
        </div>
        :
        ////////////////////apppplicant/////////////////////////////////////////
        <div className="home">
            <div className="job-container">
                <div className="jobdetails">
                    <h3>Sofware development intern</h3>
                    <p>Role : internship</p>
                    <p>salary : $4000 per month</p>
                    <p>Posted By : john smith</p>
                    <p>Application Date : 22/02/2021</p>
                </div>
                <div className="apply-div" id="applied">
                    <div >APPLIED</div>
                </div>
            </div>
            <div className="job-container">
                <div className="jobdetails">
                    <h3>Sofware development intern</h3>
                    <p>Role : internship</p>
                    <p>salary : $4000 per month</p>
                    <p>Posted By : john smith</p>
                    <p>Application Date : 22/02/2021</p>
                </div>
                <div className="apply-div" id="shortlited">
                    <div >SHORTLISTED</div>
                </div>
            </div>
        </div>
        }
        </>
    )
}