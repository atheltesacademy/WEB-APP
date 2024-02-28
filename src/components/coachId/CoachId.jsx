import React, { useState } from 'react';
import myImage0 from '../../assets/Group 1380.svg'
import myImage from '../../assets/mask-group-61@2x.png';
import myImage1 from '../../assets/mask-group-5@2x.png';
import myImage2 from '../../assets/mask-group-4@2x.png';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faRupee,
  faGreaterThan,
  faAngleDown
} from "@fortawesome/free-solid-svg-icons";



import './CoachId.css';
import NavigationBar from '../navigation/NavigationBar';

const CoachId = ({ name }) => {

  const ChatNow = () => {
    alert('Chating functionality will be implemented here.');
    // You can add the actual booking logic here
  };
  const CallNow = () => {
    alert('Calling functionality will be implemented here.');
    // You can add the actual booking logic here
  };


  return (
    <div>
      <NavigationBar/>

      <div style={{marginTop:'10%'}}>
      <div className='gameAndCoachId'>
                            <button type="button" style={{backgroundColor:'rgba(37, 91, 155, 1)',borderRadius:'10px',height:'35px',width: '-webkit-fill-available',color:'#ffffff'}}>Football</button>
                            <span className='m-1'><FontAwesomeIcon icon={faGreaterThan} style={{ marginLeft: '8%'}}/>&nbsp;Coaches</span>
                        </div>

        <div className="search-Nav1">
          <input type="text" id="input" placeholder="Name Sports C..." style={{ borderRadius: '26px',left:'223px', width: '145px', height: '30px', backgroundColor: 'lightgray', borderColor: 'black', paddingLeft: '28px' }} />
          <FontAwesomeIcon icon={faSearch} className="search-icon" />
          <span className="search-Nav2">

<input type="text" id="input" placeholder="Exp: High to Low" style={{ borderRadius: '26px',left:'223px', width: '145px', height: '30px', backgroundColor: 'lightgray', borderColor: 'black', paddingLeft: '28px' }} />
  <FontAwesomeIcon icon={faAngleDown} className="search-icon" />
  </span>
  <img src={myImage0} alt="error" style={{marginLeft:'250%',marginTop:'-20%'}} />

        </div>

        </div>
        <div className="mainContainer" style={{marginTop:'20px'}}>
            <Link to="/coachesRating" style={{textDecoration:'none'}}>
      <div className="card-chatcard">
        <div className="firstPartLeft">
          <div className="partFa">
            <img src={myImage} alt="placeholder image" className="image" />
          </div>
          <div className="partFb">
            <div className="rating">
            
            <span>&#9733;</span>
              <p style={{color:'black'}}>4.4</p>
            </div>
          </div>
        </div>
        <div className="secondPartRight">
          <div className="partSa">
            <h3>{name}Andreaw</h3>
            <p className="language">Language: English & Hindi</p>
            <p className="specialist">Football, Cricket</p>
            <span style={{color:"green"}}>Free</span>
            <p className="experience"><FontAwesomeIcon icon={faRupee} />16/min</p>
          </div>
          <div className="partSb">
            <Link to="/coachChat"><button className="buttonStyle1">
              Chat Now
            </button></Link>
            <Link><button className="buttonStyle2" onClick={CallNow}>
              Call Now
            </button></Link>
          </div>
        </div>
      </div>
      </Link>
      <Link to="/coachesRating" style={{textDecoration:'none'}}>
      <div className="card-chatcard">
        <div className="firstPartLeft">
          <div className="partFa">
            <img src={myImage1} alt="placeholder image" className="image" />
          </div>
          <div className="partFb">
            <div className="rating">
            
            <span>&#9733;</span>
              <p style={{color:'black'}}>4.4</p>
            </div>
          </div>
        </div>
        <div className="secondPartRight">
          <div className="partSa">
            <h3>{name}Andreaw</h3>
            <p className="language">Language: English & Hindi</p>
            <p className="specialist">Football, Cricket</p>
            <span style={{color:"green"}}>Free</span>
            <p className="experience"><FontAwesomeIcon icon={faRupee} />16/min</p>
          </div>
          <div className="partSb">
            <Link to="/coachChat"><button className="buttonStyle1">
              Chat Now
            </button></Link>
            <Link><button className="buttonStyle2" onClick={CallNow}>
              Call Now
            </button></Link>
          </div>
        </div>
      </div>
      </Link>

      
              <Link to="/coachesRating" style={{textDecoration:'none'}}>
      <div className="card-chatcard">
        <div className="firstPartLeft">
          <div className="partFa">
            <img src={myImage2} alt="placeholder image" className="image" />
          </div>
          <div className="partFb">
            <div className="rating">
            
            <span>&#9733;</span>
              <p style={{color:'black'}}>4.4</p>
            </div>
          </div>
        </div>
        <div className="secondPartRight">
          <div className="partSa">
            <h3>{name}Andreaw</h3>
            <p className="language">Language: English & Hindi</p>
            <p className="specialist">Football, Cricket</p>
            <span style={{color:"green"}}>Free</span>
            <p className="experience"><FontAwesomeIcon icon={faRupee} />16/min</p>
          </div>
          <div className="partSb">
            <Link to="/coachChat"><button className="buttonStyle1">
              Chat Now
            </button></Link>
            <Link><button className="buttonStyle2" onClick={CallNow}>
              Call Now
            </button></Link>
          </div>
        </div>
      </div>
      </Link>

       

        <Link to="/coachesRating" style={{ textDecoration: 'none' }}>
          <div className="card-chatcard">
            <div className="firstPartLeft">
              <div className="partFa">
                <img src={myImage} alt="placeholder image" className="image" />
              </div>
              <div className="partFb">
                <div className="rating">

                  <span>&#9733;</span>
                  <p style={{ color: 'black' }}>4.4</p>
                </div>
              </div>
            </div>
            <div className="secondPartRight">
              <div className="partSa">
                <h3>{name}Andreaw</h3>
                <p className="language">Language: English & Hindi</p>
                <p className="specialist">Football, Cricket</p>
                <span style={{ color: "green" }}>Free</span>
                <p className="experience"><FontAwesomeIcon icon={faRupee} />16/min</p>
              </div>
              <div className="partSb">
                <Link to="/coachChat"><button className="buttonStyle1">
                  Chat Now
                </button></Link>
                <Link to='/Coach-video-chat'><button className="buttonStyle2" >
                  Call Now
                </button></Link>
              </div>
            </div>
          </div>
        </Link>
        <Link to="/coachesRating" style={{ textDecoration: 'none' }}>
          <div className="card-chatcard">
            <div className="firstPartLeft">
              <div className="partFa">
                <img src={myImage1} alt="placeholder image" className="image" />
              </div>
              <div className="partFb">
                <div className="rating">

                  <span>&#9733;</span>
                  <p style={{ color: 'black' }}>4.4</p>
                </div>
              </div>
            </div>
            <div className="secondPartRight">
              <div className="partSa">
                <h3>{name}Andreaw</h3>
                <p className="language">Language: English & Hindi</p>
                <p className="specialist">Football, Cricket</p>
                <span style={{ color: "green" }}>Free</span>
                <p className="experience"><FontAwesomeIcon icon={faRupee} />16/min</p>
              </div>
              <div className="partSb">
                <Link to="/coachChat"><button className="buttonStyle1">
                  Chat Now
                </button></Link>
                <Link><button className="buttonStyle2" onClick={CallNow}>
                  Call Now
                </button></Link>
              </div>
            </div>
          </div>
        </Link>

        <Link to="/coachesRating" style={{ textDecoration: 'none' }}>

          <div className="card-chatcard">
            <div className="firstPartLeft">
              <div className="partFa">
                <img src={myImage2} alt="placeholder image" className="image" />
              </div>
              <div className="partFb">
                <div className="rating">
                  <span>&#9733;</span>
                  <p style={{ color: 'black' }}>4.4</p>
                </div>
              </div>
            </div>
            <div className="secondPartRight">
              <div className="partSa">
                <h3>{name}Andreaw</h3>
                <p className="language">Language: English & Hindi</p>
                <p className="specialist">Football, Cricket</p>
                <span style={{ color: "green" }}>Free</span>
                <p className="experience"><FontAwesomeIcon icon={faRupee} />16/min</p>
              </div>
              <div className="partSb">
                <Link to="/coachChat"><button className="buttonStyle1">
                  Chat Now
                </button></Link>
                <Link><button className="buttonStyle2" onClick={CallNow}>
                  Call Now
                </button></Link>
              </div>
            </div>
          </div></Link>
      </div>
    </div>
  );
};

export default CoachId;
