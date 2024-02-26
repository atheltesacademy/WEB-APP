import { faGreaterThan } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import NavigationBar from '../navigation/NavigationBar'
import './AddMoney.css'

//bootstrap import
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

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

                <div className='amountContainer mt-5 mx-5 p-3 d-flex justify-content-center align-self-center'
                    style={{
                        borderRadius: 20,
                        margin: '200px 100px 200px'
                    }}>
                    <div style={{
                        fontSize: '35px',
                        color: "#FFFFFF",
                    }}>Pay Rs. 100 Get Extra Rs. 75</div>
                </div>

                <div className='mt-5'>

                </div>
            </div>
        </>
    )
}
