
import "../Css/Home.css"
import { Link } from "react-router-dom";

export const Myjobs = () => {

    return (
        <div className="home">
            <h1>MY JOBS</h1>
            <div className="job-container">
                <div className="jobdetails">
                    <h3>Sofware development intern</h3>
                    <p>Role : internship</p>
                    <p>salary : $4000 per month</p>
                    <p>Posted By : john smith</p>
                    <p>Application Date : 22/02/2021</p>
                </div>
                <div className="view-div">
                    <Link to="/applications" style={{ textDecoration: 'none' }}>
                        <div className="view-div-1" >VIEW APPLICATIONS</div>
                    </Link>
                    <div className="view-div-2" >DELETE JOB</div>
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
                <div className="view-div">
                    <Link to="/applications" style={{ textDecoration: 'none' }}>
                        <div className="view-div-1" >VIEW APPLICATIONS</div>
                    </Link>
                    <div className="view-div-2">DELETE JOB</div>
                </div>
            </div>
        </div>
    )
}