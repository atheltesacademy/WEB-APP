import React from 'react'
import NavigationBar from '../navigation/NavigationBar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faArrowRotateBack, faGreaterThan } from '@fortawesome/free-solid-svg-icons'
import maleAvatar from '../../assets/min-frame@2x.png'
import PayPal from '../../assets/Paypal.png'
import Gpay from '../../assets/GPay.png'
import AmazonPay from '../../assets/AmazonPay.png'
import Paytm from '../../assets/Vector.png'
import './WalletRecharge.css'
import { Link } from 'react-router-dom'
import { BestCoaches } from '../bestCoaches/BestCoaches'
import { Services } from '../services/Services'
import { Footer } from '../footer/Footer'


//bootstrap import
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

export const WalletRecharge = () => {

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

                        <div className='card mt-5 shadow' id='box'>
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
                                    <div id='aboutText' className='pt-3'>
                                        <span style={{
                                            fontWeight: 'bold'
                                        }}> About me: </span>
                                        I am Rahul a football campign A football coach plans and leads training sessions with the aim of helping players
                                        improve at playing the game. Football coaches develop the skills, motivation and fitness of football players and teams.
                                        They also organise and lead the team in competitive matches.

                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='card mt-3 shadow' id='box'>
                            <h6 className='text-center pt-4'>Wallet Transactions</h6>
                            <table className="table mt-4">
                                <tr>
                                    <th scope="col">Date Created</th>
                                    <th scope="col">Transaction</th>
                                    <th scope="col">Amount</th>
                                </tr>
                                <tr>
                                    <td>2021-11-04 11:06:46</td>
                                    <td>Transferred to 10140715</td>
                                    <td>1200.00</td>
                                </tr>
                            </table>
                        </div>
                    </div>

                    <div className='secondContainer col-md-6 mt-5 text-white pt-4'>
                        <div className='d-flex flex-row align-items-center'>
                            <FontAwesomeIcon icon={faArrowLeft} color=' white' size='2xl' />
                            <div style={{
                                textAlign: "center",
                                fontSize: "24px",
                                fontWeight: '500'
                            }}>Payment Details</div>
                        </div>

                        <div className='d-flex flex-row justify-content-between align-items-center mt-5 px-5'>
                            <div style={{
                                fontSize: '16px',
                                color: '#FFFFFF'
                            }}>
                                Recharge Amount <br />
                                <div className='mt-3'>GST @18%</div>
                                <div className='mt-3'>Total Amount</div>
                            </div>

                            <div className='vl' style={{
                                marginRight: '150px'
                            }}></div>

                            <Link to='/add-money'>
                                <button className='px-3 p-3 text-black' style={{
                                    backgroundColor: 'white',
                                    borderColor: "transparent",
                                    borderRadius: 25,
                                    fontSize: '16px',
                                    fontWeight: "600",
                                    textAlign: "center"
                                }}>Add Money</button>
                            </Link>
                        </div>


                        <div className='d-flex align-items-center justify-content-center mt-5'>
                            <Link to='/coach-referral'><button className='px-4 p-3 text-black' style={{
                                backgroundColor: 'white',
                                borderColor: "transparent",
                                borderRadius: 25,
                                fontSize: '16px',
                                fontWeight: "600",
                                textAlign: "center"
                            }}>Apply Coupon</button>
                            </Link>
                        </div>

                        <div className='text-center mt-3'
                            style={{
                                fontSize: '24px',
                                color: "#FFFFFF",
                                fontWeight: '500'
                            }}>Other Payment Methods</div>

                        <div className='d-flex align-items-center justify-content-around flex-row mt-5 px-5'>
                            <div>
                                <div style={{
                                    fontSize: '14px',
                                    color: '#FFFFFF',
                                    fontWeight: '500'
                                }}>
                                    Add Amazon Wallet
                                </div>
                                <button className='px-3 p-3 mt-2 text-black d-flex align-items-center justify-content-center' style={{
                                    backgroundColor: 'white',
                                    borderColor: "transparent",
                                    borderRadius: 20,
                                    fontSize: '16px',
                                    fontWeight: "600",
                                    alignSelf: "center"
                                }}><img src={PayPal} /></button>
                            </div>

                            <div>
                                <div style={{
                                    fontSize: '14px',
                                    color: '#FFFFFF',
                                    fontWeight: '500'
                                }}>
                                    Add Amazon Wallet
                                </div>
                                <button className='px-4 p-3 mt-2 text-black d-flex align-items-center justify-content-center' style={{
                                    backgroundColor: 'white',
                                    borderColor: "transparent",
                                    borderRadius: 20,
                                    fontSize: '16px',
                                    fontWeight: "600",
                                    alignSelf: "center"
                                }}><img src={AmazonPay} /></button>
                            </div>

                            <div>
                                <div style={{
                                    fontSize: '14px',
                                    color: '#FFFFFF',
                                    fontWeight: '500'
                                }}>
                                    UPI: Gpay
                                </div>
                                <button className='px-3 p-3 mt-2 text-black d-flex align-items-center justify-content-center' style={{
                                    backgroundColor: 'white',
                                    borderColor: "transparent",
                                    borderRadius: 20,
                                    fontSize: '16px',
                                    fontWeight: "600",
                                    alignSelf: "center"
                                }}><img src={Gpay} /></button>
                            </div>

                            <div>
                                <div style={{
                                    fontSize: '14px',
                                    color: '#FFFFFF',
                                    fontWeight: '500'
                                }}>
                                    UPI: Paytm
                                </div>
                                <button className='px-3 p-3 mt-2 text-black d-flex align-items-center justify-content-center' style={{
                                    backgroundColor: 'white',
                                    borderColor: "transparent",
                                    borderRadius: 20,
                                    fontSize: '16px',
                                    fontWeight: "600",
                                    alignSelf: "center"
                                }}><img src={Paytm} /></button>
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
            <section className='mt-5'>
                <Footer />
            </section>
        </>
    )
}
