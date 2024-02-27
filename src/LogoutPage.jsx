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
                <img src={Right1} alt="Logout" className="Logout" style={{marginTop:'180px',marginLeft:'100px'}} />
                <p className="copy-right" style={{marginTop:'1px',marginLeft:'130px'}}>YOU ARE LOGGED OUT</p>
                <div className='sign'>
                <button className="btn">Sign in</button>
                <p className="pswrd">FORGOT PASSWORD?</p>
                </div>
                <div className='icon'>
                <img src={Rightb} alt="icons" />
                </div>
                <div className='cpy'>
                <p className="copy-right">Copyright@2024 fix Athlet Academy.ltd all right reserved</p>
                </div>
            </div>
        </div>
    );
};

export default LogoutPage;
