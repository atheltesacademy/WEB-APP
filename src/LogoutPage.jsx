import React from 'react';
import './LogoutPage.css';
import Left from './assets/Group41.png';
import Rightb from './assets/Group59.png';
import Right1 from './assets/Frame275.png';

const LogoutPage = () => {
    return (
        <div className="main-container">
            <div className="card-container">
                <img src={Left} alt="LeftImage" className="logo-register" />
            </div>

            <div className="right-page">
                <img src={Right1} alt="Logout" className="Logout" />
                <p className="copy-right" style={{marginTop:'30px',marginLeft:'20px'}}>YOU ARE LOGGED OUT</p>
                <div>
                <button class = 'btn'>Sign in</button>
                </div>
                <img src={Rightb} alt="icons" className="icons" />
                <p className="copy-right" style={{marginTop:'70px',marginLeft:'20px'}}>Copyright@2024 fix Athlet Academy.ltd all right reserved</p>
            </div>
        </div>
    );
};

export default LogoutPage;
