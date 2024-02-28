import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faContactBook,faGreaterThan } from "@fortawesome/free-solid-svg-icons";
import MainLogo4 from '../../assets/price icon.svg';
import MainLogo3 from '../../assets/Group 5.svg';
import MainLogo1 from '../../assets/material-symbols_verified-rounded.svg';
import MainLogo2 from '../../assets/Rectangle 63.svg';
import MessageLogo from '../../assets/Group (1).svg';
import CallLogo from '../../assets/fluent_call-16-regular.svg';
import VDLogo from '../../assets/watch intro.svg';

import './CoachChat.css'; // Import the CSS file for CoachChat component
import { Link } from 'react-router-dom';
import NavigationBar from '../navigation/NavigationBar';

const CoachChat = () => {
  return (
    <div>
      <NavigationBar/>
           <div className="rowCoachChat">
           <div className='gameAndCoachChat'>
                            <button type="button" style={{backgroundColor:'rgba(37, 91, 155, 1)',borderRadius:'10px',height:'35px',width: '-webkit-fill-available',color:'#ffffff'}}>Football</button>
                            <span className='m-1'><FontAwesomeIcon icon={faGreaterThan} style={{ marginLeft: '8%'}}/>&nbsp;Coaches</span>
                        </div>
                        <div className="column card-coach" style={{ backgroundColor: 'white' }}>
         <div className="imageDin">
         <span className="column1Video">
            <h2><b>Sam</b></h2>
            <p>Football Player,UP Skill</p>
            <p>English,Hindi</p>
            <p>8 Years</p>
            
            
          </span>

          <img src={MainLogo2} alt="boom" style={{ position:'relative',marginTop:'167px',marginLeft:'7px', height:'270px' }}/>
          <img src={MainLogo1} alt="boom" style={{position:'relative',marginTop:'-23%', marginLeft:'150%'}} />
          <img src={MainLogo3} alt="boom" style={{position:'relative',marginTop:'150%', marginLeft:'-110%'}} />
          <img src={MainLogo4} alt="boom" style={{position:'relative',marginTop:'150%', marginLeft:'-140%'}} /> 
          <h1 style={{position:'relative',marginTop:'165%'}}> 30/min</h1>

          
          </div>
    <Link to="/coachVideoChat">
     <div className="with3rdChat">  
        <img src={MessageLogo} alt="boom"  style={{marginLeft:'-50px'}}/>
          <img src={CallLogo} alt="boom" style={{marginLeft:'90px'}}/>
          <img src={VDLogo} alt="boom" width='300px'  style={{marginLeft:'90px'}}/></div> </Link>
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
