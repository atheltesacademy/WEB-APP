import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import NavigationBar from '../navigation/NavigationBar';
import LandingPageCard from './LandingPageCard';
import football from '../../assets/football-card@2x.png';
import basketball from '../../assets/basketball-card1@2x.png';
import tennis from '../../assets/tennis-card1@2x.png';
import yoga from '../../assets/yoga-card1@2x.png';
import More from '../../assets/more.svg';
import './LandingPage.css'

const sportsData = [
  { title: "Football", image: football },
  { title: "Basketball", image: basketball },
  { title: "Tennis", image: tennis },
  { title: "Yoga", image: yoga }
];

const LandingPage = () => {
  const [selectedSport, setSelectedSport] = useState(sportsData[0]);

  const handleSelectSport = (sport) => {
    setSelectedSport(sport);
  };

  return (
    <div>
      <NavigationBar />
      <div className="content">
        <div className="row">
          <div className="column-01">
            <h1 style={{ fontSize: "80px" }}>Sports</h1>
            <h2>{selectedSport.title}</h2>
            <p>
              Welcome to Athlet’s Academy - Your Gateway to Sporting Excellence!
              At Athlet’s Academy. We are dedicated to connecting aspiring with experienced,
              coaches and mentors through our cutting-edge chat platform. Whether you are passionate
              about football, tennis, cricket, athletics yoga or any other sport. we have got you covered!
            </p>
          </div>
          <div className="column-02">
            <img src={selectedSport.image} alt="img1" width="400px" />
          </div>
        </div>
        <div className="row1">
          {sportsData.map((sport, index) => (
            <Link key={index} onClick={() => handleSelectSport(sport)}>
              <LandingPageCard
                title={sport.title}
                image={sport.image}
                active={sport.title === selectedSport.title}
              />
            </Link>
          ))}
          <Link to="/home"><img src={More} alt="error" /></Link>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
