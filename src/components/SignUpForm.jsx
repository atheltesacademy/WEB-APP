import React from 'react';
import './SignUpForm.css';
import Logo1 from './ata-flat-1@2x.png';
import Logo2 from './lockup-color-1@2x.png';
import { Link } from 'react-router-dom';
import NavigationBar from './NavigationBar';

class SignInForm extends React.Component {
    render() {
        return (
            <div className="signup-container">
                <NavigationBar/>
                <div className="card-container" style={{backgroundColor:" white" }}>
                    <img src={Logo1} alt="Avatar" className="avatar" />
                    <img src={Logo2} alt="Logo" className="logo-signup" />
                    <div className="container-save">
                    </div>
                </div>

                <div className="save-page">
                    <form action="main.html" target="_blank">
                        <h1 style={{color:'black'}}>Create an Account</h1>
                        <p>Already have an account? <a href="/SignIn-Form" className="signin-link">Sign in</a></p>

                        <div className="row1-signup">
                            <div className="col-75">
                                <input type="text" id="name" name="firstname" placeholder="Full Name" />
                            </div>
                        </div>
                        <div className="row1-signup">
                            <div className="col-75">
                                <input type="text" id="email" name="email" placeholder="Password" />
                            </div>
                        </div>
                        <div className="row1-signup">
                            <div className="col-75">
                                <input type="text" id="confirmPassword" name="confirmPassword" placeholder="Confirm Password" />
                            </div>
                        </div>
                        <div className="row1-signup">
                            <div className="col-75">
                                <input type="text" id="email" name="email" placeholder="Email" />
                            </div>
                        </div>
                        <div className="row1-signup">
                            <div className="col-75">
                                <input type="text" id="phone" name="phone" placeholder="Mob. No." />
                            </div>
                        </div>
                        <Link to="/Regi-ster"><button style={{backgroundColor:"darkblue",color:"white",borderRadius:"10px",marginTop:"20px"}}>Athelete</button></Link>
                        <Link to="/About-Page"><button style={{backgroundColor:"darkblue",color:"white",borderRadius:"10px",marginTop:"20px",marginLeft:"20px"}}>Coach</button></Link>
                        <label>
                            <input type="checkbox" checked="checked" name="remember" /> I have read and agree to the <a href="#" className="terms-link">Terms and Services</a> and <a href="#" className="privacy-link">Privacy Policy</a>
                        </label>
                        <div className="row1-signup">
                            <button onClick={this.showConfirmation} className="sign-in-button">Register</button>
                            <p className="or-text">or Register with</p>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default SignInForm;
