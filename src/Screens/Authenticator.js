import React from "react";
import '../App.css'
import Login from "./Login";

const Authenticator = ()=>{
    return(
        <div className="Main-container">
            <header>
                <img src="https://firebasestorage.googleapis.com/v0/b/fire117-7b888.appspot.com/o/companyLogo.png?alt=media&token=8e0086a6-9508-453b-857d-e86c84e99a7e" alt="Company logo"></img>
                <p>Welcome to where people make things real</p>
                <p>Remember that every day you are better and better</p>
            </header>
            <section>
                <Login />
            </section>
        </div>
    )
}

export default Authenticator;