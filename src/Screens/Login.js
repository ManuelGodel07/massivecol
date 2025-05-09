import React from "react";
import '../styles/Login.css'

const Login=()=>{

    
    return(
        <div className="father-component">
            <div className="main-Component">
                <p>Log in with your email</p>
                <form>
                    <label htmlFor="fname">Email:</label><br />
                    <input type="text" id="fname" name="fname" /><br />
                    <label htmlFor="lname">Password:</label><br />
                    <input type="text" id="lname" name="lname" />
                    <button type="submit" className="login-button">Log In</button>
                </form>
            </div>
        </div>
        
    )
}

export default Login;