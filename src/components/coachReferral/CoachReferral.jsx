import React from 'react'
import NavigationBar from '../navigation/NavigationBar'
import './CoachReferral.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGreaterThan } from '@fortawesome/free-solid-svg-icons';
import CoachProfile from '../../assets/profile.png'

//bootstrap import
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

export const CoachReferral = () => {
    return (
        <>
            <NavigationBar />
            <div className='container-fluid mt-3'>
                <div className='row'>
                    <div className='col-md-2'>
                        <div className='d-flex justify-content-center align-items-center'>
                            <button type="button" id='btn' className='text-white px-2'
                                style={{ borderColor: 'transparent' }}
                            >Profile</button>
                            <span style={{ fontSize: 20 }}>&nbsp;<FontAwesomeIcon icon={faGreaterThan} />&nbsp;Referral</span>
                        </div>
                    </div>
                    <div className='col-md-10'>
                        <div className='blueContainer d-flex flex-row align-items-center' style={{
                            padding: '25px 70px 25px',
                            marginRight: '30px'
                        }}>
                            <img src={CoachProfile} style={{
                                height: '120px',
                                width: '150px'
                            }} />

                            <div className='text-white' style={{
                                fontSize: "16px",
                                fontWeight: '400',
                                padding: '10px 120px 10px'
                            }}>
                                Sam
                                <div className='pt-3' style={{
                                    fontSize: "18px",
                                    fontWeight: '600'
                                }}>Football Coach</div>
                            </div>
                        </div>

                        <div className='d-flex align-items-center justify-content-center mt-3'>
                            <div className='blackContainer text-white' style={{
                                borderRadius: 20,
                                padding: '2px 150px 2px',
                                fontSize: '32px',
                                fontWeight: "bold",
                                textAlign: 'center'
                            }}>My Referral Code Below<br />
                                ----------------</div>
                        </div>

                        <div className='d-flex align-items-center justify-content-center mt-3'><a style={{
                            color: '#2EA7FF',
                            fontSize: '32px',
                            fontWeight: 'bold',
                        }}>To  visit <u>https://ATA.tech?via=</u>Sam</a></div>

                        <div className='historyContainer mt-5' style={{
                            height: '210px',
                            width: '95%'
                        }}>
                            <div className='d-flex flex-row justify-content-around align-items-center pt-4 pb-5'
                                style={{
                                    fontSize: "18px",
                                    color: '#000000',
                                    fontWeight: '500'
                                }}>
                                <div>Visitors <br /><br />50</div>
                                <div>Leads <br /><br />50</div>
                                <div>Conversions<br /><br />50</div>
                            </div>
                            <hr />
                            <div className='d-flex align-items-center justify-content-center'>
                                <button
                                    style={
                                        {
                                            color: '#404CB2',
                                            fontSize: '12px',
                                            fontWeight: "bold",
                                            borderColor: 'transparent',
                                            backgroundColor: '#FFFFFF'
                                        }
                                    }>SHOW ALL HISTORY</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
