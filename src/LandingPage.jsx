import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import yoga from './assets/yoga.jpeg';
import tennis from './assets/tennis.jpeg';
import cricket from './assets/cricket.jpeg';
import football from './assets/football.jpeg';
import CoachingBenefits from './CoachingBenefits';
import CoachPlatformIntro from './CoachPlatformIntro';

// const images = ['https://images.pexels.com/photos/6787202/pexels-photo-6787202.jpeg', 'https://images.pexels.com/photos/461593/pexels-photo-461593.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', 'https://images.pexels.com/photos/19082794/pexels-photo-19082794/free-photo-of-rugby-players-in-training.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', 'https://images.pexels.com/photos/19070989/pexels-photo-19070989/free-photo-of-shirtless-man-running-on-track.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2']

const LandingPage = () => {
  return (
    <div className='landing-page-container'>
      {/* Header */}
      <nav className="navbar navbar-expand-lg navbar-light bg-primary px-4">
        <a className="navbar-brand text-white" href="/">Athlete's Academy</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <a className="nav-link text-white" href="/">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="/services">Services</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="/about">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="/contact">Contact</a>
            </li>
          </ul>
        </div>
      </nav>

      {/* Images Slider */}
      {/* <BackgroundSlider images={images} duration={8} transition={2} /> */}

      {/* Hero Section */}
      <header className="jumbotron bg-primary text-white">
        <div className="container text-center">
          <h1 className="display-4">HELLO LEARNER</h1>
          <a className="btn btn-light btn-lg my-4" href="/booking" role="button">Book Your Coach Now!</a>
        </div>
      </header>

      {/* Video Section */}
      <div className="video-container align my-4" style={{ textAlign: 'center' }}>
          <iframe
            title="Athlete Training Video"
            width="800"
            height="400"
            src="https://www.youtube.com/embed/wnHW6o8WMas"
            allowFullScreen
            style={{ margin: 'auto' }}
          ></iframe>
        </div>

      {/* About Section */}
      <section className="container my-5">
        <h2>About Us</h2>
        {/* <p>Brief description of your coaching services. Highlight why athletes should choose your coaching services. Add testimonials from satisfied athletes.</p> */}
        <CoachingBenefits />
      </section>

      {/* Services Section */}
      <section className="container my-5">
        <h2>Our Services</h2>
        <div className="row">
          {/* Service cards */}
          <div className="col-md-3">
            <div className="card">
            <img src={cricket} className="card-img-top" alt="Football" />
              <div className="card-body">
                <h5 className="card-title">Cricket</h5>
                <p className="card-text">Expert coaching for cricket enthusiasts.</p>
                <Link to="/coaches/cricket" className="btn btn-primary">View Coaches</Link>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card">
              <img src={football} className="card-img-top" alt="Football" />
              <div className="card-body">
                <h5 className="card-title">Football</h5>
                <p className="card-text">Get ready for the football field with our experienced coaches.</p>
                <Link to="/coaches/football" className="btn btn-primary">View Coaches</Link>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card">
              <img src={tennis} className="card-img-top" alt="Tennis" />
              <div className="card-body">
                <h5 className="card-title">Tennis</h5>
                <p className="card-text">Ace your game with our tennis coaching services.</p>
                <Link to="/coaches/tennis" className="btn btn-primary">View Coaches</Link>
              </div>
            </div>
          </div>
        <div className="col-md-3">
            <div className="card">
              <img src={yoga} className="card-img-top" alt="Yoga" />
              <div className="card-body">
                <h5 className="card-title">Yoga</h5>
                <p className="card-text">Find peace and wellness through yoga coaching.</p>
                <Link to="/coaches/yoga" className="btn btn-primary">View Coaches</Link>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Booking Section */}
      <section className="container my-5">
        <h2>Book Your Coach</h2>
        <p>Easy and convenient booking process. Start your journey to peak performance!</p>
        <a className="btn btn-primary" href="/booking" role="button">Book Now</a>
      </section>

      <CoachPlatformIntro />

      {/* Contact Section */}
      <section className="container my-5">
        <h2>Contact Us</h2>
        <p>Contact information and a contact form for inquiries or booking requests.</p>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-white text-center py-3">
        <p>&copy; 2023 Athletes Academy. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default LandingPage;
