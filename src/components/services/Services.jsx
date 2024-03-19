import React from 'react'
import './Services.css'

//bootstrap import
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

export const Services = () => {
    return (
        <div className='services' style={{ borderRadius: 20 }}>
            <ul
                className='textStyle m-5 pt-4'>
                <li>Personalized Coaching: Our platform offers one-on-one sessions, ensuring personalized attention to address
                    unique need and goals.</li>
                <li>Experienced Mentors: Connect with coaches and mentors who have a wealth of experience in their respective sports,
                    bringing valuable insights to your training.</li>
                <li>Flexible Scheduling: We understand the demands of busy schedule. That's why we provide flexibility in Scheduling
                    sessions to accommodate your lifestyle.</li>
                <li>Seamless Chat Platform: Our user-friendly makes it easy for you to interact with coaches, receive feedback,
                    and track your progress, all in one place.</li>
                <li>Comprehensive Sport Coverage: Whether you're into mainstream sports or niche disciplines, Athelete's Academy provides
                    access to a wide range of coaching services.</li>
            </ul>
            <div className='textStyle pb-5 px-4'>
                Join Athelete's Academy today and embark on a journey of athletic excellence! No matter your skill level or experience, our
                platform is designed to empower you on your spoting endeavours. Start your trainning
                with us and unlock your full potential!.
            </div>
        </div>
    )
}
