import React from 'react'
import './CoachPageEdit.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGreaterThan } from '@fortawesome/free-solid-svg-icons'
import NavigationBar from '../navigation/NavigationBar'
import MaleAvatar from '../../assets/min-frame@2x.png'
import { Card } from 'react-bootstrap'
import { Services } from '../services/Services'
import { BestCoaches } from '../bestCoaches/BestCoaches'
import { Footer } from '../footer/Footer'

const coaches = [
    {
        name: 'Vijay',
        sports: "Cricket"
    },
    {
        name: 'Ajay',
        sports: "Football"
    },
    {
        name: 'Vipul',
        sports: "Boxing"
    },
    {
        name: 'Dhruv',
        sports: "Tennis"
    },
]


export const CoachPageEdit = () => {
    return (
        <>
            <NavigationBar />
            <div className='container-fluid mt-4'>
                <div className='d-flex justify-content-start align-items-center mx-5'>
                    <FontAwesomeIcon icon={faGreaterThan} /> &nbsp;&nbsp;
                    <button type="button" id='btn' className='text-white px-3'
                        style={{ borderColor: 'transparent' }}
                    >Coach Profile</button>
                </div>

                <div className='border rounded border-dark mt-4'>
                    <div className='row'>
                        <div className='col-md-5 p-4'>
                            <div className='d-flex flex-row align-items-center justify-content-end'>
                                <button className='px-5 p-1 rounded-pill mt-4' style={{
                                    backgroundColor: "transparent",
                                    borderColor: '#DA8300',
                                    color: "#000000",
                                    fontSize: "15px",
                                    fontWeight: 'bold'
                                }}>Edit Detail</button>
                            </div>
                            <div className='d-flex flex-row align-items-center justify-content-end'>
                                <img src={MaleAvatar} height='250px' width='200px' />
                                <div className='p-4' style={{
                                    fontSize: '22px',
                                    fontWeight: 'bold',
                                    color: '#000000',
                                }}>Sam<br />
                                    <span className='mt-3' style={{
                                        fontSize: '18px',
                                        color: '#808080'
                                    }}>
                                        Football player, Up Skill <br />
                                        English, Hindi <br />
                                        8 yrs <br /></span>
                                    30/min <br />
                                </div>
                            </div>
                            <div className='d-flex flex-row align-items-center justify-content-center'>
                                <button className='px-5 p-1 rounded-pill mt-4' style={{
                                    backgroundColor: "transparent",
                                    borderColor: '#DA8300',
                                    color: "#000000",
                                    fontSize: "15px",
                                    fontWeight: 'bold'
                                }}>Photo Upload</button>
                            </div>
                        </div>

                        <div className='col-md-7 mt-4'>
                            <div id='rightContainer' style={{ marginRight: '30px' }}>
                                <div className='d-flex flex-row align-items-center p-4' style={{
                                    color: "#000000",
                                    fontSize: "18px",
                                    fontWeight: 'bold'
                                }}>
                                    CV
                                    <button className='px-5 p-1 rounded-pill' style={{
                                        backgroundColor: "transparent",
                                        borderColor: '#DA8300',
                                        color: "#000000",
                                        fontSize: "15px",
                                        fontWeight: 'bold',
                                        marginLeft: '20%'
                                    }}>Upload</button>
                                </div>

                                <div className='d-flex flex-row align-items-center pt-3 p-4' style={{
                                    color: "#000000",
                                    fontSize: "18px",
                                    fontWeight: 'bold'
                                }}>
                                    Certificates
                                    <button className='px-5 p-1 rounded-pill' style={{
                                        backgroundColor: "transparent",
                                        borderColor: '#DA8300',
                                        color: "#000000",
                                        fontSize: "15px",
                                        fontWeight: 'bold',
                                        marginLeft: '10%'
                                    }}>Upload</button>
                                </div>

                                <div className='d-flex flex-row align-items-center pt-3 p-4' style={{
                                    color: "#000000",
                                    fontSize: "18px",
                                    fontWeight: 'bold'
                                }}>
                                    Bank Details
                                    <button className='px-5 p-1 rounded-pill' style={{
                                        backgroundColor: "transparent",
                                        borderColor: '#DA8300',
                                        color: "#000000",
                                        fontSize: "15px",
                                        fontWeight: 'bold',
                                        marginLeft: '10%'
                                    }}>Upload</button>
                                </div>

                                <div className='d-flex flex-row align-items-center justify-content-center p-4'
                                    style={{
                                        color: '#808080',
                                        fontSize: '18px'
                                    }}>
                                    Upload above mentioned  Document
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='card mt-4 m-2 shadow rounded' id="aboutCard">
                    <div class="card-body p-5">
                        <h6 style={{ color: '#808080' }}>About Yourself</h6>
                        <div className='d-flex justify-content-center'>
                            <input type='text' placeholder='Write about your Skill and certificate and Jouney'
                                style={{
                                    backgroundColor: 'transparent',
                                    borderColor: 'transparent',
                                    width: "400px",
                                }} />
                        </div>
                    </div>

                </div>

                <div className='d-flex align-items-center justify-content-center mb-4'>
                    <button className='px-5 p-1 rounded-pill' style={{
                        backgroundColor: "transparent",
                        borderColor: '#DA8300',
                        color: "#000000",
                        fontSize: "15px",
                        fontWeight: 'bold',
                        marginLeft: '200px'
                    }}>Save</button>
                </div>

                <section className='container'>
                    <Services />
                </section>

                <section className='container mt-5'>
                    <div style={{
                        fontWeight: '600',
                        fontSize: '25px',
                        color: "#000000"
                    }}>Check out our best rated Coaches and Mentors</div>
                    <div className='d-flex flex-row justify-content-around align-items-center flex-wrap mt-3'>
                        {coaches.map((item) => {
                            return (
                                <div className='mt-3'>
                                    <BestCoaches name={item.name} sports={item.sports} />
                                </div>
                            )
                        })}
                    </div>
                </section>
            </div>

            <section className='mt-5'>
                <Footer />
            </section>
        </>
    )
}
