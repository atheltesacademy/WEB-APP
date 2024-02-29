import React from 'react'
import './CoachJourney.css'
import NavigationBar from '../navigation/NavigationBar'
import MaleAvatar from '../../assets/min-frame@2x.png'
import FacebookIcon from '../../assets/facebook.svg'
import InstagramIcon from '../../assets/instagram.svg'
import YoutubeIcon from '../../assets/youtube.svg'
import LinkedIn from '../../assets/linkedin.svg'
//bootstrap import
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGreaterThan } from '@fortawesome/free-solid-svg-icons';

export const CoachJourney = () => {
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

                <div className='border border-dark mt-4'>
                    <div className='row'>
                        <div className='col-md-6 p-4'>
                            <div className='d-flex flex-row align-items-center'>
                                <img src={MaleAvatar} height='250px' width='200px' />
                                <div className='p-4' style={{
                                    fontSize: '22px',
                                    fontWeight: 'bold',
                                    color: '#000000'
                                }}>Sam<br />
                                    <span style={{
                                        fontSize: '18px',
                                        color: '#808080'
                                    }}>
                                        Football player, Up Skill <br />
                                        English, Hindi <br />
                                        8 yrs <br /></span>
                                    30/min <br />
                                </div>
                            </div>
                            <button className='px-5 p-3 rounded-pill mt-4' style={{
                                backgroundColor: "transparent",
                                borderColor: '#1E9500',
                                color: "#000000",
                                fontSize: "15px",
                                fontWeight: 'bold'
                            }}>Call now</button>&nbsp;&nbsp;
                            <button className='px-5 p-3 rounded-pill col-sm-mt-5' style={{
                                backgroundColor: "transparent",
                                borderColor: '#EB1B1B',
                                color: "#000000",
                                fontSize: "15px",
                                fontWeight: 'bold',
                                // marginLeft: '30px'
                            }}>Video Call</button>

                            <div className='d-flex flex-row align-items-center justify-content-start mt-4'>
                                <div className='d-flex align-items-center justify-content-center' style={{
                                    backgroundColor: "#1A22E3",
                                    borderRadius: 30,
                                    height: "28px",
                                    width: '28px'
                                }}>
                                    <img src={FacebookIcon} height='15px' width='15px' />
                                </div>

                                <div className='d-flex align-items-center justify-content-center' style={{
                                    backgroundColor: "#2867B2",
                                    borderRadius: 30,
                                    height: "28px",
                                    width: '28px',
                                    marginLeft: '40px'
                                }}>
                                    <img src={LinkedIn} height='15px' width='15px' />
                                </div>

                                <div className='d-flex align-items-center justify-content-center' style={{
                                    backgroundColor: "#FF0000",
                                    borderRadius: 30,
                                    height: "28px",
                                    width: '28px',
                                    marginLeft: '40px'
                                }}>
                                    <img src={YoutubeIcon} height='15px' width='15px' />
                                </div>

                                <div className='d-flex align-items-center justify-content-center' style={{
                                    backgroundColor: "#F00073",
                                    borderRadius: 30,
                                    height: "28px",
                                    width: '28px',
                                    marginLeft: '40px'
                                }}>
                                    <img src={InstagramIcon} height='15px' width='15px' />
                                </div>
                            </div>

                        </div>

                        <div className='col-md-6 p-4 pt-5'>
                            <h2>About Me</h2>
                            <div style={{ paddingRight: '30%' }}>
                                <p>Mí objetivo profesional se enfoca en el Desarrollo
                                    Integral y el Alto Rendimiento Deportivo,
                                    incorporando un enfoque estratégico de Manager.
                                    Este enfoque incluye la identificación y desarrollo
                                    de talentos, la mejora de la infraestructura y
                                    recursos, la colaboración con diversas
                                    instituciones, la planificación a largo plazo, el<br />
                                    <button style={{
                                        backgroundColor: 'transparent',
                                        color: '#1A22E3',
                                        fontSize: '22px',
                                        borderColor: 'transparent'
                                    }}>Read More....</button>
                                </p>

                                <p className='pt-5'>Mí objetivo profesional se enfoca en el Desarrollo
                                    Integral y el Alto Rendimiento Deportivo,
                                    incorporando un enfoque estratégico de Manager.
                                    Este enfoque incluye la identificación y desarrollo
                                    de talentos, la mejora de la infraestructura y
                                    recursos, la colaboración con diversas
                                    instituciones, la planificación a largo plazo, el<br />
                                    <button style={{
                                        backgroundColor: 'transparent',
                                        color: '#1A22E3',
                                        fontSize: '22px',
                                        borderColor: 'transparent'
                                    }}>Read More....</button>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
