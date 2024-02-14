import React, { useState } from 'react';
import myImage from './assets/mask-group-61@2x.png';
import myImage1 from './assets/mask-group-5@2x.png';
import myImage2 from './assets/mask-group-4@2x.png';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './ChatCard.css';
import {
  faComment,
  faPhone,
  faUserCheck,
  faRupee,
} from "@fortawesome/free-solid-svg-icons";
import './ChatCard.css';
import NavigationBar from './navigation/NavigationBar';

const ChatCard = ({ name }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [paymentInfo, setPaymentInfo] = useState('');


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
             <Link to="login" style={{marginLeft:'250px'}}><button style={{width:'90px',height:'35px',backgroundColor:'dodgerblue',borderRadius:'20px',cursor:'pointer',color:'white',fontWeight:'bold'}}>Coaches</button></Link>
        <Link to="login" style={{marginLeft:'20px'}}><button  style={{width:'90px',height:'35px',backgroundColor:'dodgerblue',borderRadius:'20px',cursor:'pointer',color:'white',fontWeight:'bold'}}>Football</button></Link>
    <div className="mainContainer" style={{marginTop:'100px'}}>
      <Link to="/With-Rating" style={{textDecoration:'none'}}>
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
            <Link to="/Coach-Chat"><button className="buttonStyle1">
              Chat Now
            </button></Link>
            <Link><button className="buttonStyle2" onClick={CallNow}>
              Call Now
            </button></Link>
          </div>
        </div>
      </div>
      </Link>
      <Link to="/With-Rating" style={{textDecoration:'none'}}>

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
            <Link  to="/Coach-Chat"><button className="buttonStyle1">
              Chat Now
            </button></Link>
            <Link><button className="buttonStyle2" onClick={CallNow}>
              Call Now
            </button></Link>
          </div>
        </div>
      </div></Link>
      <Link to="/With-Rating" style={{textDecoration:'none'}}>

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
            <Link  to="/Coach-Chat"><button className="buttonStyle1">
              Chat Now
            </button></Link>
            <Link><button className="buttonStyle2" onClick={CallNow}>
              Call Now
            </button></Link>
          </div>
        </div>
      </div></Link>
      <Link to="/With-Rating" style={{textDecoration:'none'}}>

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
            <Link  to="/Coach-Chat"><button className="buttonStyle1" >
              Chat Now
            </button></Link>
            <Link><button className="buttonStyle2" onClick={CallNow}>
              Call Now
            </button></Link>
          </div>
        </div>
      </div></Link>
      <Link to="/With-Rating" style={{textDecoration:'none'}}>

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
            <Link  to="/Coach-Chat"><button className="buttonStyle1">
              Chat Now
            </button></Link>
            <Link><button className="buttonStyle2" onClick={CallNow}>
              Call Now
            </button></Link>
          </div>
        </div>
      </div></Link>
      <Link to="/With-Rating" style={{textDecoration:'none'}}>

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
            <Link  to="/Coach-Chat"><button className="buttonStyle1" >
              Chat Now
            </button></Link>
            <Link><button className="buttonStyle2" onClick={CallNow}>
              Call Now
            </button></Link>
          </div>
        </div>
      </div></Link>
      <Link to="/With-Rating" style={{textDecoration:'none'}}>

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
            <Link  to="/Coach-Chat"><button className="buttonStyle1" >
              Chat Now
            </button></Link>
            <Link><button className="buttonStyle2" onClick={CallNow}>
              Call Now
            </button></Link>
          </div>
        </div>
      </div></Link>
      <Link to="/With-Rating" style={{textDecoration:'none'}}>

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
            <Link  to="/Coach-Chat"><button className="buttonStyle1" >
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
  
export default ChatCard;
