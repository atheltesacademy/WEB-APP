import React, { useState } from 'react';
import './Register.css';
import blueLogo from '../../assets/lockup-color-1@2x.png';
import menLogo from '../../assets/unsplashumfpfokxivg@2x.png';
import { Link } from 'react-router-dom';
import apiCall from '../../api/api';
const Register = () => {
    const [data, setData] = useState({
        name: "",
        email: "",
        phone: "",
        dob: "",
        address: "",
        atlernatePhone: "",
        height: ""
    })

    const handleChange = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value,
        });
    };

    const onSaveData = async () => {
        try {
            const body = {
                "email": data.email,
                "name": data.name,
                "phone": data.phone,
                "dob": data.dob,
                "address": data.address,
                "alternative_contact": data.atlernatePhone,
                "health_height_desc": data.height
            }
            const result = await apiCall('detailSignup', 'PUT', body);
            setData({
                name: "",
                email: "",
                phone: "",
                dob: "",
                address: "",
                atlernatePhone: "",
                height: ""
            })
        } catch (e) {
            throw new Error(e)
        }

    }

    return (
        <div className="main-container">
            <div className="RegisterCard-container">
                <img src={blueLogo} alt="Logo" width="60% " style={{ margin: '10% 5% 5% 20%' }} />
                <div className="container-save">
                    <p className="welcomebackAthlete">WELCOME BACK</p>
                    <p className="descriptionCoachAthlete">WELCOME TO ATA</p>
                </div>
            </div>

            <div className="savepageAthlete">
                <form action="/" target="_blank">
                    <img src={menLogo} alt="saveimg" className="save-img" width="40% " style={{ marginLeft: '20%' }} />
                    <div className="row-register">
                        <div className="col-75">
                            <input type="text"
                                id="name"
                                name="name"
                                placeholder="Enter Name"
                                className='registerInput'
                                value={data.name}
                                onChange={handleChange} />
                        </div>
                    </div>
                    <div className="row-register">
                        <div className="col-75">
                            <input type="email" id="email" name="email" placeholder="Enter E-mail"
                                className='registerInput'
                                value={data.email}
                                onChange={handleChange} />
                        </div>
                    </div>
                    <div className="row-register">
                        <div className="col-75">
                            <input type="number"
                                id="phone" name="phone" placeholder="Enter Phone number" className='registerInput'
                                value={data.phone}
                                onChange={handleChange} />
                        </div>
                    </div>
                    <div className="row-register">
                        <div className="col-75">
                            <input type="date" id="dob" name="dob" placeholder="Enter D.O.B."
                                className='registerInput'
                                value={data.dob}
                                onChange={handleChange} />
                        </div>
                    </div>
                    <div className="row-register">
                        <div className="col-75">
                            <input type="text" id="address" name="address" placeholder="Full Address With Pin Code" className='registerInput'
                                value={data.address}
                                onChange={handleChange} />
                        </div>
                    </div>
                    <div className="row-register">
                        <div className="col-75">
                            <input type="number"
                                id="contact"
                                name="contact"
                                placeholder="Alternative Contact"
                                className='registerInput'
                                value={data.atlernatePhone}
                                onChange={handleChange} />
                        </div>
                    </div>
                    <div className="row-register">
                        <div className="col-75">
                            <input type="text"
                                id="height"
                                name="height"
                                placeholder="Details about your health or height"
                                className='registerInput'
                                value={data.height}
                                onChange={handleChange} />
                        </div>
                    </div>
                    <div className="row-register">
                        <Link ><button
                            onClick={onSaveData}
                            className="save-button" style={{ backgroundColor: "green", padding: "10px", width: "90px", color: "white", borderRadius: "10px" }} >Save</button></Link>
                    </div>
                </form>
                <p style={{ marginTop: '50px', marginLeft: '40px', fontSize: 'small' }}>Copyright@2024 ATA All. right reserved</p>

            </div>
        </div>
    );
};

export default Register;
