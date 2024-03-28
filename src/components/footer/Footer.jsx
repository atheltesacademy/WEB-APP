import React from 'react'
import './Footer.css'
import LogoImage from '../../assets/lockup-color-1@2x.png'
import FacebookIcon from '../../assets/facebook.svg'
import InstagramIcon from '../../assets/instagram.svg'
import YoutubeIcon from '../../assets/youtube.svg'
import LinkedIn from '../../assets/linkedin.svg'

//bootstrap import
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

const sportData = [
    {
        id: 1,
        name: "Cricket"
    },
    {
        id: 2,
        name: "Football"
    },
    {
        id: 3,
        name: "Tennis"
    },
    {
        id: 4,
        name: "Yoga"
    },
    {
        id: 5,
        name: "Boxing"
    },
    {
        id: 6,
        name: "Skating"
    },
    {
        id: 7,
        name: "Athletics"
    },
    {
        id: 8,
        name: "BasketBall"
    }
]

export const Footer = () => {
    return (
        <div className='footer'>
            <div className='row px-5 pt-5 pb-5'>
                <div className='col-md-4'>
                    <img src={LogoImage} height="120px" width='150px' />
                    <div className='pt-4' id='heading'>
                        Athlete's Academy - Your Gateway to Sporting Excellence!
                        <div id='subHeading'>
                            At Athlete Academy, we are dedicated to connecting aspiring atheletes with experienced coaches and mentors
                            through our cutting-edge chat platform. Whether you're passionate about football, tennis, cricket, atheletics,
                            yoga, or any other sport, we've got you covered!
                        </div>
                    </div>
                </div>

                <div className='col-md-2'>
                    <div id='heading'>
                        Product</div>
                    <div className='mt-3' id='subHeading'>
                        Counselling <br />
                        Coach-Advice
                    </div>
                </div>

                <div className='col-md-1'>
                    <div id='heading'>
                        Coaches</div>
                    {sportData.map((sport, index) => {
                        return (
                            <div className='mt-2' id='subHeading'> {sport.name}</div>
                        )
                    })}
                    <a style={{ color: "blue" }}><u>More</u></a>
                </div>

                <div className='col-md-1'>
                    <div id='heading'>
                        Company</div>
                    <div className='mt-3' id='subHeading'> Privacy Policy <br />
                        Terms Of Use <br />
                        Join Us <br />
                    </div>
                </div>

                <div className='col-md-2'>
                    <div id='heading'>
                        Contact Us</div>
                    <div className='mt-3' id='subHeading'> We're available 24 x 7 on Chat support.<span style={{
                        color: 'blue'
                    }}>
                        Click to start chat.
                    </span> <br />
                        Email ID:<span style={{
                            color: 'blue'
                        }}> ndndnnd@gmail.com</span>
                    </div>

                    <div className='d-flex flex-row align-items-center mt-4'>
                        <div className='d-flex align-items-center justify-content-center socialIcon'>
                            <img src={FacebookIcon} height='15px' width='15px' />
                        </div>

                        <div className='d-flex align-items-center justify-content-center iconStyle linkedInIcon'>
                            <img src={LinkedIn} height='15px' width='15px' />
                        </div>

                        <div className='d-flex align-items-center justify-content-center iconStyle youtubeIcon'>
                            <img src={YoutubeIcon} height='15px' width='15px' />
                        </div>

                        <div className='d-flex align-items-center justify-content-center iconStyle instaIcon'>
                            <img src={InstagramIcon} height='15px' width='15px' />
                        </div>
                    </div>
                </div>

                <div className='col-md-2'>
                    <div id='heading'>
                        Secure</div>
                    <div className='mt-3' id='subHeading'> Private & Confidential <br />
                        Verified Coaches <br />
                        Secure Payments <br />
                    </div>
                </div>
            </div>
        </div>
    )
}
