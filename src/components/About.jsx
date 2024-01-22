import React from "react";
import "./Style.css";
import myImage from "./card img.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faComment,
  faPhone,
  faUserCheck,
  faRupee,
} from "@fortawesome/free-solid-svg-icons";

const About = () => {
  // Function to handle the start of a Follow session
  const startFollow = () => {
    alert("Follow session started");
  };

  // Function to handle the start of a Chat session
  const startChat = () => {
    alert("Chat session started");
  };

  // Function to handle the start of a Call session
  const startCall = () => {
    alert("Call session started");
  };

  return (
    <div id="card">
      <div id="text">
        {/* Displaying the image */}
        <img src={myImage} alt="Image Reloading" id="Image" />

        {/* Displaying the name with a Font Awesome icon */}
        <h3 id="name">
          Ronaldo<FontAwesomeIcon icon={faUserCheck} />
        </h3>

        {/* Displaying a star rating */}
        <div className="rating">
          <span>&#9733;</span>
          <span>&#9733;</span>
          <span>&#9733;</span>
          <span>&#9733;</span>
          <span>&#9733;</span>
        </div>

        {/* Displaying various information */}
        <div id="info">
          <p id="services">Numerology, Tarot</p>
          <p id="languages">English, Hindi</p>
          <p id="experience">Exp: 6 Years</p>
          <p id="rate">
            <FontAwesomeIcon icon={faRupee} />
            16/min
          </p>
          <p id="minutes">
            <FontAwesomeIcon icon={faComment} />
            20K mins -<FontAwesomeIcon icon={faPhone} /> 3K mins
          </p>
        </div>

        {/* Follow button with styling */}
        <button
          id="Follow"
          onClick={startFollow}
          style={{
            width: "20%",
            color: "white",
            fontWeight: 800,
            borderRadius: "5px",
            padding: "5px",
            cursor: "pointer",
            marginRight: "10px",
                      }}
        >
          Follow
        </button>

        {/* Chat button with styling */}
        <button
          id="chat"
          onClick={startChat}
          style={{
            width: "30%",
            color: "#008000",
            border: "2px solid steelblue",
            fontWeight: 800,
            borderRadius: "55px",
            padding: "10px 20px",
            cursor: "pointer",
            marginRight: "10px",
            float: "right",
          }}
        >
          <FontAwesomeIcon icon={faComment} />
          Start Chat
        </button>

        {/* Call button with styling */}
        <button
          id="call"
          onClick={startCall}
          style={{
            width: "30%",
            color: "#008000",
            border: "2px solid steelblue",
            fontWeight: 800,
            borderRadius: "55px",
            padding: "10px 20px",
            cursor: "pointer",
            marginRight: "10px",
            float: "right",
          }}
        >
          <FontAwesomeIcon icon={faPhone} />
          Start Call
        </button>

        {/* About me section with a hover effect */}
        <p
          id="about"
          style={{
            marginTop: "1rem",
            textAlign: "left",
          }}
        >
          <h4>About me</h4>
          <h5>
            {" "}
            I love to help people and I give accurate answers to my clients and
            provide guidance and remedies for them. You can also contact me
            regarding any problem like marriage, property, relationship, career,
            and business. My customers are satisfied with me, and my motive is
            to give you clarity and insight.
          </h5>
        </p>
      </div>
    </div>
  );
};

export default About;
