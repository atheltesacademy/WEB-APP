import React from 'react';
import './CoachProfile.css';
import blueLogo from '../../assets/images/ata-logo-color.png';
import menLogo from '../../assets/images/profile.png';
import { Link } from 'react-router-dom';

const CoachProfile = () => {
    return (
        <div className="main-container">
            <div className="card-containerPro">
                {/* <img src={Logo1} alt="Avatar" className="avatar" /> */}
                <img src={blueLogo} alt="Logo" width= "60% " style={{margin:'10% 5% 5% 20%'}}/>
               
                <div className="container-save">
                    <p className="welcomebackCoach">WELCOME BACK</p>
                    <p className="descriptionCoach">WELCOME TO ATA</p>

                </div>
            </div>

            <div className="savepageCoach">
                <form action="main.html" target="_blank">
                <img src={menLogo} alt="saveimg" className="save-img" width= "40% " style={{marginLeft:'20%'}}/>
                    <div className="row">
                        <div className="col-75">
                            <input type="text" id="name" name="firstname" className='CoachProfileInput' placeholder="Enter Name" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-75">
                            <input type="text" id="email" name="email" className='CoachProfileInput' placeholder="Enter E-mail" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-75">
                            <input type="text" id="phone" name="phone" className='CoachProfileInput' placeholder="Enter Phone number" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-75">
                            <input type="text" id="dob" name="dob" className='CoachProfileInput' placeholder="Enter D.O.B." />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-75">
                            <input type="text" id="address" name="address" className='CoachProfileInput' placeholder="Full Address With Pin Code" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-75">
                            <input type="text" id="altContact" name="altContact" className='CoachProfileInput' placeholder="Alternative Contact" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-75">
                            <input type="text" id="altContact" name="altContact" className='CoachProfileInput' placeholder="Details about your Experience" />
                        </div>
                    </div>
                    <div className="row">
                        <Link ><button className="save-button" style={{backgroundColor:"green",padding:"10px",width:"90px",color:"white",borderRadius:"10px"}} >Save</button></Link>
                    </div>
                </form>
                <p  style={{marginTop:'50px',marginLeft:'40px',fontSize:'small'}}>Copyright@2024 ATA All. right reserved</p>
               
            </div>
        </div>
    );
};

export default CoachProfile;
