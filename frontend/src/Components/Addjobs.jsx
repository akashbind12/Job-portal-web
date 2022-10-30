
import "../Css/Addjobs.css"
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export const Addjobs = () => {

    return (
        <div className="addjobs">
            <h1>Add  Job</h1>
            <div className="job-form-div">
                <TextField id="outlined-search" label="Title" type="search" />
                <TextField id="outlined-search" label="Skills" type="search" />
                <TextField id="outlined-search" label="Job Type" type="search" />
                <TextField id="outlined-search" label="Salary" type="search" />
                <TextField id="outlined-search" label="Application Date" type="search" />
                <TextField id="outlined-search" label="Maximum Number of Applicant" type="search" />
                <TextField id="outlined-search" label="Position Available" type="search" />
                <Button variant="contained">CREATE JOB</Button>
            </div>
        </div>
    )
}