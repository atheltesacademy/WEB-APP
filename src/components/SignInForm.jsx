import React from 'react';
import './SignInForm.css';
import Logo1 from './ata-flat-1@2x.png';
import Logo2 from './lockup-color-1@2x.png';
import { Link } from 'react-router-dom';
import NavigationBar from './NavigationBar';

const SignInForm = () => {
    return (
        <div className="main-container">
            <NavigationBar/>
            <div className="card-container">
                <img src={Logo1} alt="Avatar" className="avatar" />
                <img src={Logo2} alt="Logo" className="logo-register" />
                <div className="container-save">
                    <p className="welcome-back">Welcome Back</p>
                    <p className="description">Welcome to Athlets Academy, Your Premium Sports Partner</p>
                </div>
            </div>

            <div className="save-page">
                <form action="main.html" target="_blank">
                    <h1 className="sign-in-title" style={{color:'black'}}>SIGN IN</h1>
                    <p>Not a member? <Link to="/SignUp-from" className="register-link">Register</Link></p>

                    <div className="row-signin">
                        <div className="col-75">
                            <input type="text" id="email" name="email" placeholder="Enter Email" />
                        </div>
                    </div>
                    <div className="row-signin">
                        <div className="col-75">
                            <input type="text" id="password" name="password" placeholder="Enter Password" />
                        </div>
                    </div>
                    <label>
                        <input type="checkbox" checked="defaultchecked" name="remember" /> Remember me
                    </label>
                    <div className="row-signin">
                        <button className="sign-in-button">Sign in</button>
                        <div id="forgetPasswordLink">
                            <a href="#" id="forgetPassword" className="forget-password-link">Forget Password?</a>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default SignInForm;
