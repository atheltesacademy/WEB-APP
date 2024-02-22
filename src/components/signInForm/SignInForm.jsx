import React, { useState } from 'react';
import './SignInForm.css';
import Logo1 from '../../assets/ata-flat-1@2x.png';
import Logo2 from '../../assets/lockup-color-1@2x.png';
import Icon from '../../assets/Group 59.svg'

import { Link } from 'react-router-dom';


const SignInForm = () => {
    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState(false);

    const [password, setPassword] = useState("");
    const [passErr, setPassErr] = useState(false);

    function handleEmailChange(e) {
        const inputEmail = e.target.value;
        setEmail(inputEmail);

        // Regular expression for email validation
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(inputEmail)) {
            setEmailError(true);
        } else {
            setEmailError(false);
        }
    }

    function signinHandle(e) {
        const email = document.getElementById('email').value;
        if (email.length < 8 || password.length < 8) {
            alert("Type correct values");
        } else {
            alert("All good :)");
        }
        e.preventDefault();
    }

    function passwordHandler(e) {
        let item = e.target.value;
        if (item.length < 8) {
            setPassErr(true);
        } else {
            setPassErr(false);
        }
        setPassword(item);
    }

    return (
        <div className="main-container">
            <div className="card-containerIn">
                {/* <img src={Logo1} alt="Avatar" className="avatar" /> */}
                <img src={Logo2} alt="Logo" className="logo-register" />
                <div className="container-save">
                    <p className="welcome-back">Welcome Back</p>
                    <p className="description">Welcome to Athlets Academy, Your Premium Sports Partner</p>
                </div>
            </div>

            <div className="save-page">
                <form action="/" target="_blank"  onSubmit={signinHandle}>
                    <h1 className="sign-in-title" style={{color:'black'}}>SIGN IN</h1><br /><br />
                    <p>Not a member? <Link to="/SignUp-from" className="register-link">Register</Link></p>

                    <div className="row-signin">
                        <div className="col-75">
                            <input type="text" id="email" name="email" placeholder="Enter Email" value={email} 
                onChange={handleEmailChange} 
            />
            {emailError && <span style={{ color: 'red' }}>Invalid email</span>}
                        </div>
                    </div>
                    <div className="row-signin">
                        <div className="col-75">
                            <input type="text" id="password" name="password" placeholder="Enter Password" onChange={passwordHandler} />
                            {passErr ? <span style={{color:"red"}}>Password Not Valid</span> : ""}
                        </div>
                    </div>
                    <label>
                        <input type="checkbox" defaultUnChecked name="remember" /> Remember me
                    </label>
                    <div className="row-signin">
                        <button className="sign-in-button">Sign in</button>
                        <div id="forgetPasswordLink">
                            <Link to="/Log-out" id="forgetPassword" className="forget-password-link">Forget Password?</Link>
                        </div>
<div id='threeIcon'><img src={Icon} alt="hello" style={{marginTop:'20%'}} /></div>
                       
                        <p className="copy-right" style={{marginTop:'150px',marginLeft:'20px'}}>Copyright@2024 ATA All. right reserved</p>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default SignInForm;
