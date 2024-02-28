import React from 'react'
import NavigationBar from '../navigation/NavigationBar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faArrowRotateBack, faGreaterThan } from '@fortawesome/free-solid-svg-icons'
import maleAvatar from '../../assets/min-frame@2x.png'
import PayPal from '../../assets/Paypal.png'
import Gpay from '../../assets/GPay.png'
import AmazonPay from '../../assets/AmazonPay.png'
import Paytm from '../../assets/Vector.png'
import './WalletCoachBalance.css'
import { Link } from 'react-router-dom'
import { BestCoaches } from '../bestCoaches/BestCoaches'
import { Services } from '../services/Services'


//bootstrap import
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

export const WalletCoachBalance = () => {
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
    return (
        <>
            <NavigationBar />
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-md-6 mt-4'>
                        <div className='d-flex justify-content-center align-items-center'>
                            <button type="button" id='btn' className='text-white px-2'
                                style={{ borderColor: 'transparent' }}
                            >Football</button>
                            <span style={{ fontSize: 20 }}>&nbsp;<FontAwesomeIcon icon={faGreaterThan} />&nbsp;Player</span>
                        </div>

                        <div className='card mt-5 shadow'>
                            <div className="card-body d-flex flex-row">
                                <img src={maleAvatar} style={{
                                    height: '260px',
                                    width: '220px'
                                }} />

                                <div className='px-5 mt-2'>
                                    <div style={{
                                        fontWeight: "bold",
                                        fontSize: 16,
                                        color: '#000000'
                                    }}>Rahul</div>
                                    <div className='pt-4'
                                        style={{
                                            color: '#808080',
                                            fontSize: 14
                                        }}>Football, Player
                                        <div className='pt-4'
                                            style={{
                                                color: '#808080',
                                                fontSize: 14
                                            }}>English, Hindi</div>
                                        <div className='pt-4'
                                            style={{
                                                color: '#808080',
                                                fontSize: 14
                                            }}> Age: 08</div>
                                    </div>
                                    <div className='pt-4' style={{
                                        fontWeight: "bold",
                                        fontSize: 16,
                                        color: '#000000'
                                    }}>₹ 1000
                                    </div>
                                </div>
                            </div>
                            <hr />
                            <div id='aboutText' className='pb-5 mb-4 px-3' style={{
                                marginRight: '50px'
                            }}>
                                <span style={{
                                    fontWeight: 'bold'
                                }}> About me: </span>
                                I am Rahul a football campign A football coach plans and leads training sessions with the aim of helping players
                                improve at playing the game. Football coaches develop the skills, motivation and fitness of football players and teams.
                                They also organise and lead the team in competitive matches.

                            </div>

                        </div>
                    </div>

                    <div className='secondContainer col-md-6 mt-5 text-white pt-4'>
                        <div className='d-flex flex-row align-items-center'>
                            <FontAwesomeIcon icon={faArrowLeft} color=' white' size='2xl' />
                            <button style={{
                                textAlign: "center",
                                fontSize: "24px",
                                fontWeight: '500',
                                borderColor: "transparent",
                                backgroundColor: "#B84E2D",
                                padding: '5px 20px 5px',
                                borderRadius: 20,
                                marginLeft: '250px',
                                color: 'white'
                            }}>Balance</button>
                        </div>

                        <div className='d-flex flex-row justify-content-around align-items-center mt-5 px-5'>
                            <div style={{
                                fontSize: '16px',
                                color: '#FFFFFF'
                            }}>
                                Current Amount <br />
                                <div className='mt-3'>Platform fee @10%</div>
                                <div className='mt-3'>Total Amount</div>
                            </div>

                            <div className='vl' style={{
                                marginRight: '100px'
                            }}></div>

                            <div style={{
                                fontSize: '16px',
                                color: '#FFFFFF',
                                paddingRight: '150px'
                            }}>
                                <div>500 Rs</div>
                                <div className='mt-2'>50 Rs</div>
                                <div className='mt-2'>450 Rs</div>
                            </div>
                        </div>


                        <div className='d-flex align-items-center justify-content-start mt-5 px-5'>
                            <button className='px-4 p-3' style={{
                                backgroundColor: 'white',
                                borderColor: "transparent",
                                borderRadius: 25,
                                fontSize: '16px',
                                fontWeight: "700",
                                textAlign: "center",
                                color: '#094F6A'
                            }}>Withdraw Money</button>
                        </div>

                        <div className='text-center mt-5'
                            style={{
                                fontSize: '22px',
                                color: "#FFFFFF",
                                fontWeight: '500'
                            }}>Enter UPI or Paypal Details</div>

                        <div className='d-flex align-items-center justify-content-center mt-3'>
                            <div><input type='text' style={{
                                backgroundColor: 'white',
                                borderRadius: 20,
                                fontSize: '16px',
                                fontWeight: "600",
                                padding: '10px 60px 10px',
                                textAlign: 'center',
                                color: 'black'
                            }}
                                placeholder='Sanjay@UPI' />
                                <button className='d-flex align-items-center justify-content-center mt-3' style={{
                                    backgroundColor: 'white',
                                    borderRadius: 20,
                                    fontSize: '16px',
                                    fontWeight: "600",
                                    padding: '10px 60px 10px',
                                    textAlign: 'center',
                                    color: 'black',
                                    marginLeft: '70px'
                                }}>Confirm</button>
                            </div>

                        </div>

                        <div className='d-flex flex-row justify-content-center align-items-center m-5'>
                            <div style={{
                                backgroundColor: 'white',
                                borderRadius: 8,
                                padding: '5px 10px 5px',
                            }}></div>
                            <div style={{
                                backgroundColor: 'white',
                                borderRadius: 20,
                                padding: '5px 10px 5px',
                                marginLeft: '15px'
                            }}></div>
                            <div style={{
                                backgroundColor: 'white',
                                borderRadius: 20,
                                padding: '5px 10px 5px',
                                marginLeft: '15px'
                            }}></div>
                        </div>
                    </div>


                </div>

                <section className='container mt-4'>
                    <Services />
                </section>

                {/* best coaches section */}
                <section className='container mt-5 '>
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
        </>
    )
}
