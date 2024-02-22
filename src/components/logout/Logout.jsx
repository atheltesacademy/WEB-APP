import React, { useState } from 'react';
import './Logout.css';
// import Logo1 from '../../assets/Group 59.svg';
import Logo2 from '../../assets/lockup-color-1@2x.png';
import Icon from '../../assets/Group 59.svg'
import { Link } from 'react-router-dom';


const Logout = () => {
    return (
        <div className="main-container">
            <div className="card-containerIn">
                {/* <img src={Logo1} alt="Avatar" className="avatar" /> */}
                <img src={Logo2} alt="Logo" className="logo-register" />
                <div className="container-save">
                    <p className="Thank-you">Thank you</p>
                    <p className="description">for visiting ATA Website</p>
                </div>
            </div>

            <div className="save-page">
                <form action="/" target="_blank" style={{marginTop:'25%',float: 'inline-end'}}>
                    <h1 className="Log-Out-title">Log Out</h1><br /><p className='youAreOut'>You are logged out</p><br />
                                      <div className="row-signin">
                        <button className="sign-in-button">Sign in</button>
                        <div id="forgetPasswordLink">
                            <a href="#" id="forgetPassword" className="forget-password-link">Forget Password?</a>
                        </div>
                        <div id='threeIcon'><img src={Icon} alt="hello" style={{marginTop:'20%'}} /></div>
                        <p className="copy-right" style={{marginTop:'150px',marginLeft:'20px'}}>Copyright@2024 ATA All. right reserved</p>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Logout;
