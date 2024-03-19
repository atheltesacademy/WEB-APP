import React, { useEffect, useState } from 'react';
import './Home.css';
import myImage0 from '../../assets/Group 1380.svg'
import Sports from '../../assets/tennis-card@2x.png';
import Sports2 from '../../assets/Yoga-card@2x.png';
import Sports3 from '../../assets/football-card@2x.png';
import Sports4 from '../../assets/cricket@2x.png';
import Sports5 from '../../assets/boxing@2x.png';
import Sports6 from '../../assets/basketball-card2@2x.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMicrophone,
  faSearch,

} from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';
import NavigationBar from '../navigation/NavigationBar';
import apiCall from '../../api/api';
import { Button } from 'bootstrap';


const sports = [
  {
    id: 1,
    name: "Tennis",
    img: Sports
  },
  {
    id: 2,
    name: "Yoga",
    img: Sports2
  },
  {
    id: 3,
    name: "Football",
    img: Sports3
  },
  {
    id: 4,
    name: "Cricket",
    img: Sports4
  },
  {
    id: 5,
    name: "Boxing",
    img: Sports5
  },
  {
    id: 6,
    name: "BasketBall",
    img: Sports6
  }
]

const Home = () => {
  const [sportData, setSportData] = useState(sports)

  const fetchData = async () => {
    try {
      const result = await apiCall('sports', 'GET', null);
      if (result?.success) {
        setSportData(result?.sports)
      }
    }
    catch (error) {
      console.log("error", error)
    }
  }

  useEffect(() => {
    // fetchData()
  }, [])


  return (
    <div>
      <NavigationBar />
      <span className="search-barhome">
        <div className="search-container">
          <input type="text" id="input" placeholder="Name Sports Category..." style={{ borderRadius: '25px', width: '900px', height: '30px', backgroundColor: 'lightgray', borderColor: 'black', paddingLeft: '5%' }} />
          <FontAwesomeIcon icon={faSearch} className="search-icon" /><FontAwesomeIcon icon={faMicrophone} className="Micro-icon" />
        </div>
        <br /><br />
        <button className='btnPopular' >Popular Now...</button>
        <img src={myImage0} alt="error" style={{ marginLeft: '50%' }} />
      </span>
      <div id="card-divmain">
        {sportData.length > 0 ? sportData.map((sport, index) => {
          console.log("sport", sport)
          return (
            <Link to="/coachId">
              <button className="top-left">{sport.name}</button>
              <img className="img1-01" src={sport.img} alt="Forest" width="33%" />
            </Link>
          )
        })
          :
          <div className='noSportsText d-flex justify-content-center align-items-center mt-4'>
            No Sports List Found!
          </div>}
      </div>
    </div>
  );
};

export default Home;
