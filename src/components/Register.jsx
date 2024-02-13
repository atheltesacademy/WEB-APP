import React from 'react';
import './SignUpForm.css';
import Logo1 from './ata-flat-1@2x.png';
import Logo2 from './lockup-color-1@2x.png';
import Logo3 from './unsplashumfpfokxivg@2x.png';
import { Link } from 'react-router-dom';
import NavigationBar from './NavigationBar';
const Register = () => {
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
                    <img src={Logo3} alt="saveimg" className="save-img" width= "40% "/>
                    <div className="row-register">
                        <div className="col-75">
                            <input type="text" id="name" name="firstname" placeholder="Enter Name" />
                        </div>
                    </div>
                    <div className="row-register">
                        <div className="col-75">
                            <input type="text" id="email" name="email" placeholder="Enter E-mail" />
                        </div>
                    </div>
                    <div className="row-register">
                        <div className="col-75">
                            <input type="text" id="phone" name="phone" placeholder="Enter Phone number" />
                        </div>
                    </div>
                    <div className="row-register">
                        <div className="col-75">
                            <input type="text" id="dob" name="dob" placeholder="Enter D.O.B." />
                        </div>
                    </div>
                    <div className="row-register">
                        <div className="col-75">
                            <input type="text" id="address" name="address" placeholder="Full Address With Pin Code" />
                        </div>
                    </div>
                    <div className="row-register">
                        <div className="col-75">
                            <input type="text" id="altContact" name="altContact" placeholder="Alternative Contact" />
                        </div>
                    </div>
                    <div className="row-register">
                        <div className="col-75">
                            <input type="text" id="altContact" name="altContact" placeholder="Details about your health or height" />
                        </div>
                    </div>
                    <div className="row-register">
                    <Link ><button className="save-button" style={{backgroundColor:"green",padding:"10px",width:"90px",color:"white",borderRadius:"10px"}} >Save</button></Link>
                    </div>
                </form>
                <p className="copy-right">Copyright@2024 fix Athlet Academy.ltd all right reserved</p>
            </div>
        </div>
    );
};

export default Register;
