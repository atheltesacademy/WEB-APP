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
import { coaches } from '../../constants/coachData'

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


export const AddMoney = () => {
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
                    <span className='moneyText'>Add Money to Wallet
                        <div className='pt-3 availableText'>Available Balance:</div>
                        <div className='pt-3 availableText'>₹40</div></span>
                </div>

                <div className=' d-flex justify-content-between flex-wrap mx-4'>
                    {amount.map((item) => {
                        return (
                            <div className='amountContainer d-flex justify-content-center align-items-center mt-5 amtText'>{item.amt}</div>
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
                        <img src={badgeIcon} height={'50px'} width={'50px'} />
                        Pay Rs. 100 Get Extra Rs. 75</div>
                    <div>
                        <button type='button' id='rechargeBtn'>₹ Recharge</button>
                    </div>
                </div>

                <section className='container'>
                    <Services />
                </section>


                {/* best coaches section */}
                <section className='container mt-5'>
                    <div className='moneyText'>Check out our best rated Coaches and Mentors</div>
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
