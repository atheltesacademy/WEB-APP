import React from "react";
import "./SportsList.css";
import Sports from "../../assets/images/tennis-card-large.png";
import Sports2 from "../../assets/images/yoga-card-large.png";
import Sports3 from "../../assets/images/football-card-large.png";
import Sports4 from "../../assets/images/cricket.png";
import Sports5 from "../../assets/images/boxing-large.png";
import Sports6 from "../../assets/images/basketball-card-large.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMicrophone, faSearch } from "@fortawesome/free-solid-svg-icons";

import { Link } from "react-router-dom";
import NavigationBar from "../navigation/NavigationBar";

const SportsList = () => {
  return (
    <div>
      <NavigationBar />
      <span className="search-barhome">
        <div className="search-container">
          <input
            type="text"
            id="input"
            placeholder="Name Sports Category..."
            style={{
              borderRadius: "25px",
              width: "900px",
              height: "30px",
              backgroundColor: "lightgray",
              borderColor: "black",
              paddingLeft: "5%",
            }}
          />
          <FontAwesomeIcon icon={faSearch} className="search-icon" />
          <FontAwesomeIcon icon={faMicrophone} className="micro-icon" />
        </div>
        <br />
        <br />
        {/* <input type="text" id="input" placeholder="Popular Now.." style={{ borderRadius: '25px', width: '190px', height: '30px', marginLeft: '150px', borderColor: 'black', backgroundColor: 'lightgray',paddingLeft: '1%' }} />
<img src={myImage0} alt="error" style={{marginLeft:'50%'}} /> */}
      </span>
      <div className="sports-list-container">
        <Link to="/coaches">
          <button className="top-left">Tennis</button>
          <img className="img1-01" src={Sports} alt="Forest" width="33%" />
        </Link>
        <Link to="/coaches">
          <button className="top-left">Yoga</button>
          <img className="img1-01" src={Sports2} alt="Forest" width="33%" />
        </Link>
        <Link to="/coaches">
          <button className="top-left">Football</button>
          <img className="img1-01" src={Sports3} alt="Forest" width="33%" />
        </Link>
        <Link to="/coaches">
          <div className="top-left" style={{ textAlign: "center" }}>
            Cricket
          </div>
          <img className="img1-01" src={Sports4} alt="Forest" width="33%" />
        </Link>
        <Link to="/coaches">
          <button className="top-left">Boxing</button>
          <img className="img1-01" src={Sports5} alt="Forest" width="33%" />
        </Link>
        <button className="top-left">Basketball</button>
        <Link to="/coaches">
          <img className="img1-01" src={Sports6} alt="Forest" width="33%" />
        </Link>
        {/* Repeat the card elements as needed */}
      </div>
    </div>
  );
};

export default SportsList;
