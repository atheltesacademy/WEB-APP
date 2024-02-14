import React from 'react';
import './Home.css';
import Sports from './assets/tennis-card@2x.png';
import Sports2 from './assets/Yoga-card@2x.png';
import Sports3 from './assets/football-card@2x.png';
import Sports4 from './assets/cricket@2x.png';
import Sports5 from './assets/boxing@2x.png';
import Sports6 from './assets/basketball-card2@2x.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMicrophone,
  faSearch,

} from "@fortawesome/free-solid-svg-icons";


import { Link } from 'react-router-dom';
import NavigationBar from './navigation/NavigationBar';

const Home = () => {
  return (
    <div>
      <NavigationBar />
      <span className="search-barhome">
        <div className="search-container">
          <input type="text" id="input" placeholder="Name Sports Category..." style={{ borderRadius: '25px', width: '740px', height: '30px', backgroundColor: 'lightgray', borderColor: 'black', paddingLeft: '5%' }} />
          <FontAwesomeIcon icon={faSearch} className="search-icon" /><FontAwesomeIcon icon={faMicrophone} className="Micro-icon" />

        </div>
        <br /><br />
        <input type="text" id="input" placeholder="Popular Now.." style={{ borderRadius: '25px', width: '190px', height: '30px', marginLeft: '150px', borderColor: 'black', backgroundColor: 'lightgray' }} />
      </span>
      <div id="card-divmain">
        <Link to="/Chat-Card">
          <button className="top-left">Tennis</button>
          <img className="img1-01" src={Sports} alt="Forest" width="33%" />
        </Link>
        <Link to="/Chat-Card">
          <button className="top-left">Yoga</button>
          <img className="img1-01" src={Sports2} alt="Forest" width="33%" />
        </Link>
        <Link to="/Chat-Card">

          <button className="top-left">Football</button>
          <img className="img1-01" src={Sports3} alt="Forest" width="33%" />
        </Link>
        <Link to="/Chat-Card">

          <div className="top-left" style={{ textAlign: 'center' }}>Cricket</div>
          <img className="img1-01" src={Sports4} alt="Forest" width="33%" />
        </Link>
        <Link to="/Chat-Card">

          <button className="top-left">Boxing</button>
          <img className="img1-01" src={Sports5} alt="Forest" width="33%" />
        </Link>
        <button className="top-left">Basketball</button>
        <Link to="/Chat-Card">

          <img className="img1-01" src={Sports6} alt="Forest" width="33%" />
        </Link>
        {/* Repeat the card elements as needed */}
      </div>
    </div>
  );
};

export default Home;
