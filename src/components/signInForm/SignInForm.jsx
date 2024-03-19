import React, { useState } from 'react';
import './SignInForm.css';
import blueLogo from '../../assets/lockup-color-1@2x.png';
import Icon from '../../assets/Group 59.svg'

import { Link, useNavigate } from 'react-router-dom';
import apiCall from '../../api/api';


const SignInForm = () => {
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState(false);

    const [password, setPassword] = useState("");
    const [passErr, setPassErr] = useState(false);
    const [checked, setChecked] = useState(false);

    const handleCheckBox = () => {
        setChecked(!checked);
    };

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

    const signinHandle = async (e) => {
        try {
            const email = document.getElementById('email').value;
            if (email == "") {
                alert("Email is Required");
            }
            else if (password == "") {
                alert("Password is Required");
            }
            else {
                const body = {
                    "email": email,
                    "password": password,
                }
                const result = await apiCall('login', 'POST', body);
                if (result?.message) {
                    alert(result?.message)
                    setEmail("")
                    setPassword("")
                    navigate("/home")
                }
            }
        }
        catch (error) {
            // console.log("errr", error)
            if (error?.response?.data?.error) {
                alert(error?.response?.data?.error)
            }
        }
    }

    function passwordHandler(e) {
        if (password.length < 2) {
            setPassErr(true);
        } else {
            setPassErr(false);
        }
        setPassword(e.target.value);
    }

    return (
        <div className="main-container">
            <div className="card-containerIn">
                <img src={blueLogo} alt="Logo" width="60% " style={{ margin: '10% 5% 5% 20%' }} />

                <div className="container-save">
                    <p className="welcomebackIn">WELCOME BACK</p>
                    <p className="descriptionIn">WELCOME TO ATA</p>

                </div>
            </div>

            <div className="savepageIn">
                <div style={{ marginLeft: '10%', marginTop: '10%' }}>
                    <h1 className="sign-in-title" style={{ color: 'black' }}>SIGN IN</h1><br /><br />
                    <p>Not a member? <Link to="/signup" className="register-link">Register</Link></p>

                    <div className="row-signin">
                        <div className="col-75">
                            <input type="text" id="email" name="email" className='SigninInput' placeholder="Enter Email" value={email}
                                onChange={handleEmailChange}
                            />
                        </div>
                    </div>
                    {emailError && <span style={{ color: 'red' }}>Invalid email</span>}
                    <div className="row-signin">
                        <div className="col-75">
                            <input type="text" id="password" name="password"
                                placeholder="Enter Password" className='SigninInput'
                                onChange={passwordHandler} />
                        </div>
                    </div>
                    {passErr ? <span style={{ color: "red" }}>Password Not Valid</span> : ""}<br />
                    <label className='SigninLabel'>
                        <input type="checkbox"
                            checked={checked}
                            onChange={handleCheckBox}
                            defaultUnChecked name="remember" /> Remember me
                    </label>
                    <div className="row-signin">
                        <button className="signInOnly" onClick={signinHandle}>Sign in</button>
                        <div id="forgetPasswordLink">
                            <Link to="/logout" id="forgetPassword" className="forget-password-link">Forget Password?</Link>
                        </div>
                        <div id='threeIcon'><img src={Icon} alt="hello" style={{ marginTop: '20%', marginLeft: '10px' }} /></div>


                        <p style={{ marginTop: '10px', marginLeft: '40px', fontSize: 'small' }}>Copyright@2024 ATA All. right reserved</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignInForm;
