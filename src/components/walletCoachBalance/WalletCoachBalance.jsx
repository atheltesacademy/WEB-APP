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
import { Footer } from '../footer/Footer'


//bootstrap import
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { coaches } from '../../constants/coachData'

export const WalletCoachBalance = () => {

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

                        <div className='card cardContainer mt-5 shadow'>
                            <div className="card-body d-flex flex-row">
                                <img src={maleAvatar} height={'260px'} width={'220px'} />

                                <div className='px-5 mt-2'>
                                    <div className='titleStyle'>Rahul</div>
                                    <h6 className='pt-4' color='#808080'
                                    >Football, Player
                                        <div className='pt-4'
                                        >English, Hindi</div>
                                        <div className='pt-4'
                                        > Age: 08</div>
                                    </h6>
                                    <div className='pt-4 titleStyle'>₹ 1000
                                    </div>
                                </div>
                            </div>
                            <hr />
                            <div id='aboutText' className='pb-5 mb-4 px-3 w-75'>
                                <span><b> About me: </b></span>
                                I am Rahul a football campign A football coach plans and leads training sessions with the aim of helping players
                                improve at playing the game. Football coaches develop the skills, motivation and fitness of football players and teams.
                                They also organise and lead the team in competitive matches.

                            </div>

                        </div>
                    </div>

                    <div className='balanceContainer col-md-6 mt-5 text-white pt-4'>
                        <div className='d-flex flex-row align-items-center'>
                            <FontAwesomeIcon icon={faArrowLeft} color=' white' size='2xl' />
                            <button id='balanceBtn'>Balance</button>
                        </div>

                        <div className='d-flex flex-row justify-content-around align-items-center mt-5 px-5'>
                            <div>
                                Current Amount <br />
                                <div className='mt-3'>Platform fee @10%</div>
                                <div className='mt-3'>Total Amount</div>
                            </div>

                            <div className='vl'></div>

                            <div className='w-25'>
                                <div>500 Rs</div>
                                <div className='mt-2'>50 Rs</div>
                                <div className='mt-2'>450 Rs</div>
                            </div>
                        </div>


                        <div className='d-flex align-items-center justify-content-start mt-5 px-5'>
                            <button className='px-4 p-3' id='withdrawBtn'>Withdraw Money</button>
                        </div>

                        <div className='text-center mt-5 whiteTitle'>Enter UPI or Paypal Details</div>

                        <div className='d-flex align-items-center justify-content-center mt-3'>
                            <div>
                                <input type='text' id='inputType'
                                    placeholder='Sanjay@UPI' />
                                <button className='d-flex align-items-center justify-content-center mt-3' id='moneyBtn'
                                >Confirm</button>
                            </div>

                        </div>

                        <div className='d-flex flex-row justify-content-center align-items-center m-5'>
                            <div id='slideBtn'></div>
                            <div id='slideBtn' className='mx-3'></div>
                            <div id='slideBtn'></div>
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

            <section className='mt-5 pt-5'>
                <Footer />
            </section>
        </>
    )
}
