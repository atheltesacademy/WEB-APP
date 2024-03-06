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
                            <button type="button" id='btn' className='text-white px-2 border-light'
                            >Football</button>
                            <span style={{ fontSize: 20 }}>&nbsp;<FontAwesomeIcon icon={faGreaterThan} />&nbsp;Player</span>
                        </div>

                        <div className='card mt-5 shadow' id='box'>
                            <div className="card-body d-flex flex-row">
                                <img src={maleAvatar} height={'260px'} width={'220px'} />
                                <div className='px-5 mt-2'>
                                    <div className='coach-text'>Rahul</div>
                                    <div className='pt-4' id='coach-data'
                                    >Football, Player
                                        <div className='pt-4'
                                        >English, Hindi</div>
                                        <div className='pt-4'
                                        > Age: 08</div>
                                    </div>
                                    <div id='aboutText' className='pt-3'>
                                        <span> <b>About me: </b></span>
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
                            <div className='whiteTitle'>Payment Details</div>
                        </div>

                        <div className='d-flex flex-row justify-content-between align-items-center mt-5 px-5'>
                            <div>
                                Recharge Amount <br />
                                <div className='mt-3'>GST @18%</div>
                                <div className='mt-3'>Total Amount</div>
                            </div>

                            <div className='vl'></div>

                            <Link to='/add-money'>
                                <button className='px-3 p-3 text-black' id='withdrawBtn'>Add Money</button>
                            </Link>
                        </div>


                        <div className='d-flex align-items-center justify-content-center mt-5'>
                            <Link to='/coach-referral'><button className='px-4 p-3 text-black' id='withdrawBtn'>Apply Coupon</button>
                            </Link>
                        </div>

                        <div className='text-center mt-3 whiteTitle'
                        >Other Payment Methods</div>

                        <div className='d-flex align-items-center justify-content-around flex-row mt-5 px-5'>
                            <div>
                                <div>
                                    Add Amazon Wallet
                                </div>
                                <button className='px-3 p-3 mt-2 text-black d-flex align-items-center justify-content-center' id='withdrawBtn'><img src={PayPal} /></button>
                            </div>

                            <div>
                                <div>
                                    Add Amazon Wallet
                                </div>
                                <button className='px-4 p-3 mt-2 text-black d-flex align-items-center justify-content-center' id='withdrawBtn'><img src={AmazonPay} /></button>
                            </div>

                            <div>
                                <div>
                                    UPI: Gpay
                                </div>
                                <button className='px-3 p-3 mt-2 text-black d-flex align-items-center justify-content-center' id='withdrawBtn'><img src={Gpay} /></button>
                            </div>

                            <div>
                                <div>
                                    UPI: Paytm
                                </div>
                                <button className='px-3 p-3 mt-2 text-black d-flex align-items-center justify-content-center' id='withdrawBtn'><img src={Paytm} /></button>
                            </div>
                        </div>

                        <div className='d-flex flex-row justify-content-center align-items-center m-5'>
                            <div id='whiteContainer'></div>
                            <div id='whiteContainer' className='mx-3'></div>
                            <div id='whiteContainer'></div>
                        </div>
                    </div>


                </div>

                <section className='container mt-4'>
                    <Services />
                </section>

                {/* best coaches section */}
                <section className='container mt-5 '>
                    <div className='titleStyle'>Check out our best rated Coaches and Mentors</div>
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
