import React from 'react';
import './Home.css';
import Sports from './tennis-card1@2x.png';
import Sports2 from './yoga-card1@2x.png';
import Sports3 from './football-card@2x.png';
import Sports4 from './cricket@2x.png';
import Sports5 from './boxing@2x.png';
import MainLogo from './group-217@2x.png';
import Sports6 from './basketball-card1@2x.png';


import { Link } from 'react-router-dom';
import NavigationBar from './NavigationBar';

const Home = () => {
  return (
    <div>
      <NavigationBar/>
      <span className="search-barhome">
      <input type="text" id="input" placeholder=" Popular Now.." style={{ borderRadius: '25px',width:'190px',marginTop:'100px',marginLeft:'190px' }} />
       <input type="text" id="input" placeholder=" Name Sports Category..." style={{ borderRadius: '25px',width:'190px',marginLeft:'10px'  }} />
      </span>
      <div id="card-divmain">
        <Link target="_blank" to="img_forest.jpg">
          {/* <div className="top-left">Tennis</div> */}
          <img className="img1-01" src={Sports} alt="Forest" width="30%" />
        </Link>
        <Link target="_blank" to="img_forest.jpg">
          {/* <div className="top-left">Yoga</div> */}
          <img className="img1-01" src={Sports2} alt="Forest" width="35%" />
        </Link>
        <Link target="_blank" to="img_forest.jpg">
          {/* <div className="top-left">Football</div> */}
          <img className="img1-01" src={Sports3} alt="Forest" width="33%" />
        </Link>
        <Link target="_blank" to="img_forest.jpg">
          {/* <div className="top-left">Cricket</div> */}
          <img  className="img1-01" src={Sports4} alt="Forest" width="33%"/>
        </Link>

        <Link target="_blank" to="img_forest.jpg">
          {/* <div className="top-left">Boxing</div> */}
          <img className="img1-01" src={Sports5} alt="Forest"  width="33%"/>
        </Link>
        <Link target="_blank" to="img_forest.jpg">
          {/* <div className="top-left">Basketball</div> */}
          <img className="img1-01" src={Sports6} alt="Forest"width="33%" />
        </Link>

        {/* Repeat the card elements as needed */}
      </div>
    </div>
  );
};

export default Home;
