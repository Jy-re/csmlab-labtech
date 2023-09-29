import React from "react";
import BigLogo from '../assets/imgs/Logo-dako.png'

const Login = () => {
    return (
        <div className="loginPageContainer">
            <div className="biglogoContainer">
                <img src={BigLogo}></img>
            </div>
            <div>
                <div className="loginBox">
                    <div>
                        <label>Username</label>
                    </div>
                    <div>
                        <input placeholder="Username"></input>
                    </div>
                    <div>
                        <label>Password</label>
                    </div>
                    <div>
                        <input placeholder="Password"></input>
                    </div>
                    <div className="loginButtonContainer">
                        <button className="loginButton">Login</button>
                    </div>
                </div>
                    
                </div>
        </div>
    );
}
 
export default Login;