import React from 'react';
import Logo1 from './assets/ata-flat-1@2x.png';
import Logo2 from './assets/lockup-color-1@2x.png';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faAppleAlt, faEnvelope,  faIndustry, } from "@fortawesome/free-solid-svg-icons";
import './SignUpForm.css';


class SignUpForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            phone: '',
            password: '',
            confirmPassword: ''
        };
    }
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }
    handleSubmit = (e) => {
        e.preventDefault();
        // Basic validation
        if (this.state.name.trim() === '') {
            alert('Please enter your name');
            return;
        }
        if (this.state.email.trim() === '') {
            alert('Please enter your email');
            return;
        }
        if (!this.validateEmail(this.state.email)) {
            alert('Please enter a valid email address');
            return;
        }
        if (this.state.phone.trim() === '') {
            alert('Please enter your phone number');
            return;
        }
        if (!this.validatePhone(this.state.phone)) {
            alert('Please enter a valid phone number');
            return;
        }
        // Other validation rules can be added as needed

        // If all validations pass, continue with form submission
        console.log('Form submitted:', this.state);
    }
    validateEmail = (email) => {
        // Basic email validation
        const re = /\S+@\S+\.\S+/;
        return re.test(email);
    }

    validatePhone = (phone) => {
        // Basic phone number validation
        const re = /^[0-9]{10}$/;
        return re.test(phone);
    }

    render() {
        return (
            <div className="signup-container">
                <div className="card-container" style={{backgroundColor:" white" }}>
                    <img src={Logo1} alt="Avatar" className="avatar" />
                    <img src={Logo2} alt="Logo" className="logo-signup" />
                    <div className="container-save">
                    </div>
                </div>
                <div className="save-page">
                    <form onSubmit={this.handleSubmit}>
                        <h1 style={{color:'black',fontSize:'30px',fontFamily:'Raleway ,sans-serif',marginBottom:'20px'}}>Create an Account</h1>
                        <p>Already have an account? <Link to="/SignIn-Form" className="signin-link">Sign in</Link></p>

                        <div className="row1-signup">
                            <div className="col-75">
                                <input type="text" id="name" name="name" placeholder="Full Name" value={this.state.name} onChange={this.handleChange} />
                            </div>
                        </div>
                        <div className="row1-signup">
                            <div className="col-75">
                                <input type="password" id="password" name="password" placeholder="  Password" value={this.state.password} onChange={this.handleChange} style={{height:"40px",width:"286px",borderRadius:"3px"}} />
                            </div>
                        </div>
                        <div className="row1-signup">
                            <div className="col-75">
                                <input type="password" id="confirmPassword" name="confirmPassword" placeholder="  Confirm Password" value={this.state.confirmPassword} onChange={this.handleChange} style={{height:"40px",width:"286px",borderRadius:"3px"}} />
                            </div>
                        </div>
                        <div className="row1-signup">
                            <div className="col-75">
                                <input type="text" id="email" name="email" placeholder="Email" value={this.state.email} onChange={this.handleChange} />
                            </div>
                        </div>
                        <div className="row1-signup">
                            <div className="col-75">
                                <input type="text" id="phone" name="phone" placeholder="Mob. No." value={this.state.phone} onChange={this.handleChange} />
                            </div>
                        </div>
                        <Link to="/Regi-ster"><button style={{backgroundColor:"darkblue",color:"white",borderRadius:"10px",marginTop:"20px"}}>Athelete</button></Link>
                        <Link to="/Coach-profile"><button style={{backgroundColor:"darkblue",color:"white",borderRadius:"10px",marginTop:"20px",marginLeft:"20px"}}>Coach</button></Link>
                        <label>
                            <input type="checkbox" defaultUnChecked name="remember" /> I have read and agree to the <a href="#" className="terms-link">Terms and Services</a> and <a href="#" className="privacy-link">Privacy Policy</a>
                        </label>
                        <div className="row1-signup">
                            <button type="submit" className="sign-in-button">Register</button>
                            <p className="or-text">or Register with</p>
                           <div id='threeIcon'> <FontAwesomeIcon icon={faAppleAlt} /> <FontAwesomeIcon icon={faEnvelope}/><FontAwesomeIcon icon={faIndustry}/></div>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default SignUpForm;