import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import NavigationBar from '../navigation/NavigationBar';
import CategoryPageCard from './CategoryPageCard';
import football from '../../assets/football-card-large.png';
import basketball from '../../assets/basketball-card-small.png';
import tennis from '../../assets/tennis-card-small.png';
import yoga from '../../assets/yoga-card-small.png';
import More from '../../assets/more.svg';
import './CategoryPage.css'

const sportsData = [
  { title: "Football", image: football },
  { title: "Basketball", image: basketball },
  { title: "Tennis", image: tennis },
  { title: "Yoga", image: yoga }
];

const CategoryPage = () => {
  const [selectedSport, setSelectedSport] = useState(sportsData[0]);

  const handleSelectSport = (sport) => {
    setSelectedSport(sport);
  };

  return (
    <div>
      <NavigationBar />
      <div className="category-page-container">
        <div className="category-page-desc">
          <div className="sport-desc">
            <h1 style={{ fontSize: "80px" }}>Sports</h1>
            <h2>{selectedSport.title}</h2>
            <p>
              Welcome to Athlet’s Academy - Your Gateway to Sporting Excellence!
              At Athlet’s Academy. We are dedicated to connecting aspiring with experienced,
              coaches and mentors through our cutting-edge chat platform. Whether you are passionate
              about football, tennis, cricket, athletics yoga or any other sport. we have got you covered!
            </p>
          </div>
          <div className="sport-image">
            <img src={selectedSport.image} alt={selectedSport.title} width="400px" />
          </div>
        </div>
        <div className="category-page-images">
          {sportsData.map((sport, index) => (
            <Link key={index} onClick={() => handleSelectSport(sport)}>
              <CategoryPageCard
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

export default CategoryPage;
