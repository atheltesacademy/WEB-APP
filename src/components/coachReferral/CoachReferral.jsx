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
                            <button type="button" id='btn' className='text-white px-2 border-light'
                            >Profile</button>
                            <span style={{ fontSize: 20 }}>&nbsp;<FontAwesomeIcon icon={faGreaterThan} />&nbsp;Referral</span>
                        </div>
                    </div>
                    <div className='col-md-10'>
                        <div className='blueContainer d-flex flex-row align-items-center' style={{
                            padding: '25px 70px 25px',
                            marginRight: '30px'
                        }}>
                            <img src={CoachProfile} height={'120px'} width={'150px'}
                            />

                            <div className='text-white coach-info'>
                                Sam
                                <div className='pt-3'>Football Coach</div>
                            </div>
                        </div>

                        <div className='d-flex align-items-center justify-content-center mt-3'>
                            <div className='blackContainer text-white'>My Referral Code Below<br />
                                ----------------</div>
                        </div>

                        <div className='d-flex align-items-center justify-content-center mt-3'>
                            <a className='linkText'>To  visit <u>https://ATA.tech?via=</u>Sam</a></div>

                        <div className='historyContainer mt-5'>
                            <div className='d-flex flex-row justify-content-around align-items-center pt-4 pb-5 tableText'>
                                <div>Visitors <br /><br />50</div>
                                <div>Leads <br /><br />50</div>
                                <div>Conversions<br /><br />50</div>
                            </div>
                            <hr />
                            <div className='d-flex align-items-center justify-content-center'>
                                <button id='btnStyle'>SHOW ALL HISTORY</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
