import React, { useState } from 'react';
import './Logout.css';
import Logo2 from '../../assets/ata-logo-color.png';
import Icon from '../../assets/other-login-options.svg'


const Logout = () => {
    return (
        <div className="main-container">
            <div className="card-containerIn">
                <img src={Logo2} alt="Logo" className="logo-LogoOut" />
                <div className="container-save">
                    <p className="ThankyouOut">THANK YOU</p>
                    <p className="descriptionOut">FOR VISITING ATA WEBSITE</p>
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
                        <div id='threeIcon'><img src={Icon} alt="hello" style={{marginTop:'20%',marginLeft:'15px'}} /></div>
                        <p  style={{marginTop:'50px',marginLeft:'40px',fontSize:'small'}}>Copyright@2024 ATA All. right reserved</p>
                       
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Logout;
