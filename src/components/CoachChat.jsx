import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faContactBook } from "@fortawesome/free-solid-svg-icons";
import './CoachChat.css'; // Import the CSS file for CoachChat component
import { Link } from 'react-router-dom';
import NavigationBar from './navigation/NavigationBar';

const CoachChat = () => {
  return (
    <div>
      <NavigationBar/>
      <button
        style={{
          marginTop: 80,
          backgroundColor: "#579ffb",
          color: "white",
          border: "none",
          padding: 10,
          marginLeft: 150,
          borderRadius: 20
        }}
      >
        <a>Football</a>
      </button>
      <FontAwesomeIcon icon={faContactBook}/>
      <Link to="/Chat-Bot">coaches</Link>
      <div className="row">
        <div
          className="column"
          id="card-coach"
          style={{ backgroundColor: "white" }}
        >
          <img src="min-frame@2x.png" alt="Avatar" width="20%" height="10%" />
        </div>
        <div
          className="column1"
          id="card-coach"
          style={{ backgroundColor: "white" }}
        >
          <span className="column1">
            <h4>
              <b>Sam</b>
            </h4>
            <p>Football Player,UP Skill</p>
            <p>English,Hindi</p>
            <p>8 Years</p>
            <p>
              ₹ <sup>30/min</sup>
            </p>
            <button>
              {" "}
              <a href="#" style={{ textDecoration: "none", color: "green" }}>
                Online
              </a>
            </button>
          </span>
        </div>
        <div id="chatbox-div" style={{marginleft: 'auto'}} >
          <section className="msger">
            <header className="msger-header">
              <div className="msger-header-title">
                <i className="fas fa-comment-alt" /> ATA Chat
              </div>
              <div className="msger-header-options">
                <span>
                  <i className="fas fa-cog" />
                </span>
              </div>
            </header>
            <main className="msger-chat">
              <div className="msg left-msg">
                <div
                  className="msg-img"
                  style={{
                    backgroundImage:
                      "url(https://image.flaticon.com/icons/svg/327/327779.svg)"
                  }}
                ></div>
                <div className="msg-bubble">
                  <div className="msg-info">
                    <div className="msg-info-name">BOT</div>
                    <div className="msg-info-time">12:45</div>
                  </div>
                  <div className="msg-text">
                    Hi, welcome to ATA Chat! Go ahead and send me a message.
                  </div>
                </div>
              </div>
              <div className="msg right-msg">
                <div
                  className="msg-img"
                  style={{
                    backgroundImage:
                      "url(https://image.flaticon.com/icons/svg/145/145867.svg)"
                  }}
                ></div>
                <div className="msg-bubble">
                  <div className="msg-info">
                    <div className="msg-info-name">Sajad</div>
                    <div className="msg-info-time">12:46</div>
                  </div>
                </div>
              </div>
            </main>
            <form className="msger-inputarea">
              <input
                type="text"
                className="msger-input"
                placeholder="Enter your message..."
              />
              <button type="submit" className="msger-send-btn">
                Send
              </button>
            </form>
          </section>
        </div>
      </div>
    </div>
  );
};

export default CoachChat;
