import { faGreaterThan } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import NavigationBar from '../navigation/NavigationBar'
import badgeIcon from '../../assets/badgeIcon.svg'
import { BestCoaches } from '../bestCoaches/BestCoaches'
import { Services } from '../services/Services'
import './AddMoney.css'

//bootstrap import
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { Footer } from '../footer/Footer'

export const AddMoney = () => {

    const amount = [
        {
            amt: '100'
        },
        {
            amt: '200'
        },
        {
            amt: '300'
        },
        {
            amt: '400'
        },
        {
            amt: '500'
        },
        {
            amt: '600'
        },
        {
            amt: '700'
        },
        {
            amt: '800'
        },
        {
            amt: '900'
        },
        {
            amt: '1000'
        },
        {
            amt: '1100'
        },
        {
            amt: '2000'
        },
    ]

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
            <div className='container'>
                <div className='p-3 d-flex align-items-center'>
                    <button type="button" id='btn' className='text-white px-2'
                        style={{ borderColor: 'transparent' }}
                    >Wallet</button>
                    <span style={{ fontSize: 20 }}>&nbsp;
                        <FontAwesomeIcon icon={faGreaterThan} />&nbsp;Recharge</span>
                </div>

                <div className='d-flex justify-content-center align-items-center'>
                    <span style={{
                        fontSize: '42px',
                        fontWeight: '500',
                        color: '#000000'
                    }}>Add Money to Wallet
                        <div className='pt-3'
                            style={{
                                fontSize: '22px',
                                textAlign: 'center'
                            }}>Available Balance:</div>
                        <div className='pt-3'
                            style={{
                                fontSize: '30px',
                                textAlign: 'center'
                            }}>₹40</div></span>
                </div>

                <div className=' d-flex justify-content-between flex-wrap mx-4'>
                    {amount.map((item) => {
                        return (
                            <div className='amountContainer d-flex justify-content-center align-items-center mt-5' style={{
                                color: '#FFFFFF',
                                fontSize: '35px',
                                height: '100px',
                                width: '180px',
                            }}>{item.amt}</div>
                        )
                    })}
                </div>

                <div className='amountContainer mt-5 mx-5 p-3 d-flex justify-content-between align-items-center'
                    style={{
                        borderRadius: 50,
                    }}>

                    <div style={{
                        fontSize: '35px',
                        color: "#FFFFFF",
                    }}>
                        <img src={badgeIcon} style={{
                            height: "50px",
                            width: '50px'
                        }} />
                        Pay Rs. 100 Get Extra Rs. 75</div>
                    <div>
                        <button type='button' style={{
                            backgroundColor: "#0396C4",
                            borderColor: "transparent",
                            padding: '5px 30px 5px',
                            borderRadius: 30,
                            fontSize: '32px',
                            color: 'white'
                        }}>₹ Recharge</button>
                    </div>
                </div>

                <section className='container'>
                    <Services />
                </section>


                {/* best coaches section */}
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
