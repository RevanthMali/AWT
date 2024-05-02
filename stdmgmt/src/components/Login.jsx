import {useState} from "react"
import DashBoard from "./DashBoard"; 
import { Link } from "react-router-dom";
const Login =()=>{ 
    // const [name,setName] = useState(" ");
    return (
        <center> 
            <h1>Login To Your Account</h1>
         Roll No: <input type="text" id="name"/> <br /><br />
        <button onClick={()=>{
            <Link className="{back-link} to='/dashboard"/>
        }}>Login</button>
        </center>
    )
    // function loginListener(){  

    //     <Link className={"back-link"} to='/dashboard'></Link>

    // }
}  
export default Login;