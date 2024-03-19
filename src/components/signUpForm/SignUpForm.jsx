import React, { useState } from 'react';
import blueLogo from '../../assets/lockup-color-1@2x.png';
import Icon from '../../assets/Group 59.svg'
import { Link, useNavigate } from 'react-router-dom';
import './SignUpForm.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faUser,
    faSearch,
} from "@fortawesome/free-solid-svg-icons";
import apiCall from '../../api/api';

export const SignUpForm = () => {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        email: '',
        password: '',
        confirmPassword: '',
        userType: ''
    });
    const [checked, setChecked] = useState(false);

    const handleCheckBox = () => {
        setChecked(!checked);
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const registerUser = async () => {
        try {
            const body = {
                "email": formData.email,
                "password": formData.password,
                "confirmPassword": formData.confirmPassword,
                "userType": formData.userType
            }
            const result = await apiCall('signup', 'POST', body);
            navigate(formData?.userType == 'athlete' ? "/register" : '/coachProfile')
        }
        catch (error) {
            if (error?.response?.data?.error) {
                alert(error?.response?.data?.error)
            }
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        // Basic validation
        if (formData.email.trim() === '') {
            alert('Please enter your email');
            return;
        }
        if (!validateEmail(formData.email)) {
            alert('Please enter a valid email address');
            return;
        }

        if (formData.password !== formData.confirmPassword) {
            alert('Confirm password should be the same as password');
            return;
        }
        if (formData.password.trim() === '') {
            alert('Please enter a password');
            return;
        }
        if (checked == false) {
            alert('Please agree terms and privacy policy');
            return;
        }
        // if (formData?.userType === '') {
        //     alert('Please select a userType');
        //     return;
        // }
        // Other validation rules can be added as needed

        // If all validations pass, continue with form submission
        registerUser()
    };

    const validateEmail = (email) => {
        // Basic email validation
        const regex = /\S+@\S+\.\S+/;
        return regex.test(email);
    };



    return (
        <div className="signUpContainer">
            <div className="card-containerUp" style={{ backgroundColor: " white" }}>
                <img src={blueLogo} alt="Logo" className="logoSignUp" />
                <div className="container-save">
                </div>
            </div>
            <div className="save-pageUp">
                <form>
                    <h1 style={{ color: 'black', fontSize: '30px', fontFamily: 'Raleway ,sans-serif', marginBottom: '20px' }}>Create an Account</h1>
                    <p>Already have an account?
                        <Link to="/signin" className="signin-link">Sign in</Link></p>
                    <div className="row1-signup">
                        <div className="col-75">
                            <input type="text" id="email" name="email" placeholder="Email" className='SignupInput' value={formData.email} onChange={handleChange} />
                        </div>
                    </div>
                    <div className="row1-signup">
                        <div className="col-75">
                            <input type="password" id="password" name="password" className='SignupInput' placeholder="  Password" value={formData.password} onChange={handleChange} style={{ height: "40px", width: "286px", borderRadius: "3px" }} />
                        </div>
                    </div>
                    <div className="row1-signup">
                        <div className="col-75">
                            <input type="password" id="confirmPassword" name="confirmPassword" className='SignupInput' placeholder="  Confirm Password" value={formData.confirmPassword} onChange={handleChange} style={{ height: "40px", width: "286px", borderRadius: "3px" }} />
                        </div>
                    </div>

                    <div className='atheleteContainer'>
                        <div
                            id='athleteCard'
                            onClick={() => setFormData({
                                ...formData,
                                userType: "athlete",
                            })}
                        >
                            <FontAwesomeIcon icon={faUser} />
                            <span>Athelete</span>
                        </div>
                        <div
                            onClick={() => setFormData({
                                ...formData,
                                userType: "coach",
                            })}
                            id='athleteCard'>
                            <FontAwesomeIcon icon={faUser} />Coach</div>
                    </div>


                    <label className='SignupLabel'>
                        <input type="checkbox" checked={checked}
                            onChange={handleCheckBox} defaultUnChecked name="remember" /> I have read and agree to the <a href="#" className="terms-link">Terms and Services</a> and <a href="#" className="privacy-link">Privacy Policy</a>
                    </label>
                    <div className="row1-signup">

                        {/* <Link to={formData?.userType == 'athlete' ? "/register" : '/coachProfile'} > */}
                        <button type="submit" className="sign-in-buttonSignUp"
                            onClick={handleSubmit}>
                            Register</button>
                        {/* </Link> */}
                        <p className="or-text">or Register with</p>
                        <div id='threeIcon'><img src={Icon} alt="hello" style={{ marginTop: '20%', marginLeft: '30px' }} /></div>

                        <p style={{ margin: '9% 5% 5% 27%' }}>WELCOME TO ATA</p>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default SignUpForm;