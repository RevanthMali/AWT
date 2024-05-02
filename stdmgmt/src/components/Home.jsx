import {Link} from "react-router-dom"; 

const home=()=>{
    return (
        <div className={"centered-element"}>
            <div className={"student-container"}>
                 <center> <h1>Student Management System</h1> 
                <br/><br/>
                {/* <img src={"./images/dashboard-logo.png"} width={"400px"} alt={"dashboard-logo"}/> */}
                <br/><br/>
                <Link className={"back-link"} to='/home'>Home</Link> <br /> <br />
                <Link className={"back-link"} to='/dashboard'>Student DashBoard</Link>
                {/* <Link className={"back-link"} to='/dashboard/update'>Update Student Details</Link>
                <Link className={"back-link"} to='/dashboard/delete'>Delete Student</Link> */}
                </center>
            </div>
        </div>
    );
}

export default home;