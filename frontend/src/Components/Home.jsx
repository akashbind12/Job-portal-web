
import axios from "axios"
import { useEffect } from "react"
import "../Css/Home.css"

export const Home = () => {

    useEffect(() => {
        getData()
    })

    const getData = () => {
        let userData = JSON.parse(localStorage.getItem("data"))
        let token = userData.token;
        console.log(token)
        axios.get(`http://localhost:7000/jobs`, { headers: { Authorization: `Bearer ${token}`} })
        .then((res) => {
             console.log(res)
        }).catch((err) => console.log(err))
    }

    
    return (
        <div className="home">
            <div className="job-container">
                <div className="jobdetails">
                    <h3>Sofware development intern</h3>
                    <p>Role : internship</p>
                    <p>salary : $4000 per month</p>
                    <p>Posted By : john smith</p>
                    <p>Application Date : 22/02/2021</p>
                </div>
                <div className="apply-div">
                    <div>APPLY</div>
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
                <div className="apply-div">
                    <div>APPLY</div>
                </div>
            </div>
        </div>
    )
}