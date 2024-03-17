import React from "react";
import ImageLogo from "../../assets/images/ata-logo-navbar.png";
import SignLogo from "../../assets/svgs/sign-up-cta.svg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faSearch } from "@fortawesome/free-solid-svg-icons";

import { Link } from "react-router-dom";
import "./NavigationBar.css";

function NavigationBar() {
  return (
    <div className="navbar">
      <img
        src={ImageLogo}
        alt="img1"
        width="200px"
        style={{ marginLeft: "3%" }}
      />
      <span className="navbarContent">
        <Link to="/home">
          <i className="fa fa-fw fa-home"></i> Home
        </Link>
        <Link to="/category/1"> Category</Link>
        {/* Blog page will be added later */}
        <Link to="/coachesRating"> Blog</Link>
        <Link to="/coachVideoChat"> Video Chat</Link>
        {/* <div className="search-Nav">
          <input
            type="text"
            id="input"
            placeholder="Name Sports Category..."
            style={{
              borderRadius: "26px",
              left: "423px",
              width: "184px",
              height: "26px",
              marginTop: "1%",
              backgroundColor: "lightgray",
              borderColor: "black",
              paddingLeft: "28px",
            }}
          />
          <FontAwesomeIcon icon={faSearch} className="search-icon" />
        </div> */}
      </span>
      <Link to="/signup">
      Login
      </Link>
      <Link to="/signin">
        <img
          src={SignLogo}
          alt=""
          style={{ marginTop: "-6%", marginLeft: "10%" }}
        />
      </Link>
    </div>
  );
}

export default NavigationBar;
