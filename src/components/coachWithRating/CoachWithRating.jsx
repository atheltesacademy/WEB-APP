import React, { useState } from 'react';
import './CoachWithRating.css';
import MainLogo4 from '../../assets/svgs/rupee-icon.svg';
import MainLogo3 from '../../assets/svgs/online-icon.svg';
import MainLogo1 from '../../assets/svgs/verified.svg';
import MainLogo2 from '../../assets/svgs/coach-4.svg';
import MessageLogo from '../../assets/svgs/chat-icon.svg';
import CallLogo from '../../assets/svgs/call-icon.svg';
import VDLogo from '../../assets/svgs/watch-intro-cta.svg';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalculator, faCamera, faCog, faGreaterThan, faMicrophone, faPaperclip, faVideo } from "@fortawesome/free-solid-svg-icons";

import { Link } from 'react-router-dom';
import NavigationBar from '../navigation/NavigationBar'

const CoachWithRating = () => {
  // const [userRating, setUserRating] = useState(0);
  // const [review, setReview] = useState('');
  // const [reviews, setReviews] = useState([]);

  // const handleStarClick = (value) => {
  //   setUserRating(value);
  // };

  // const handleSubmit = () => {
  //   if (!userRating || !review) {
  //     alert('Please select a rating and provide a review before submitting.');
  //     return;
  //   }

  //   const newReview = {
  //     userRating,
  //     reviewText: review,
  //   };

  //   setReviews([...reviews, newReview]);

  //   // Reset state after submitting
  //   setUserRating(0);
  //   setReview('');
  // };

  return (
    <div>
<NavigationBar/>
      <div className="row">
      <div className='gameAndCoach'>
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
tr io    <Link to="/">
     <div className="with3rd">  
        <img src={MessageLogo} alt="boom"  style={{marginLeft:'-50px'}}/>
          <img src={CallLogo} alt="boom" style={{marginLeft:'90px'}}/>
          <img src={VDLogo} alt="boom" width='300px'  style={{marginLeft:'90px'}}/></div> </Link>
        </div>

        <div className="column2 card-coach" style={{ backgroundColor: 'white' }}>
          <span className="column2">
            {/* Ratings overview content */}
            <div className="column2" id="card-coach" style={{ backgroundColor: 'white' }}>
              <span className="column2">
                <h4><b>Rating Overview</b></h4>
                <h2 style={{ fontWeight: 'bold' }}>5/ <sub>5</sub></h2>
                <div className="rating">
          <span>&#9733;</span>
          <span>&#9733;</span>
          <span>&#9733;</span>
          <span>&#9733;</span>
          <span>&#9733;</span>
        </div>

                <p>348 Rating</p>
                <hr />
                <h3>Savi</h3>
                <div className="rating">
          <span>&#9733;</span>
          <span>&#9733;</span>
          <span>&#9733;</span>
          <span>&#9733;</span>
          <span>&#9733;</span>
        </div>
                <p>348 Amazing Coach mostly all doubts are clear..</p>
                <hr />
                <h3>Farmaz</h3>
                <div className="rating">
          <span>&#9733;</span>
          <span>&#9733;</span>
          <span>&#9733;</span>
          <span>&#9733;</span>
          <span>&#9733;</span>
        </div>
                <p>Coach gently answer to my question share remedial advice which would create good vibes for future goal.</p>
                <hr />
                <h3>Ravi</h3>
                <div className="rating">
          <span>&#9733;</span>
          <span>&#9733;</span>
          <span>&#9733;</span>
          <span>&#9733;</span>
          
        </div>
                <p>He has revealed the problem and gave solution to come out of it</p>
              </span>
            </div>
          </span>
        </div>

        <div className="column3 card-coach" style={{ backgroundColor: 'white' }}>
          <span className="column3">
            {/* Ratings overview content */}
            <h4><b>Rating Overview</b></h4>
            
              <label For="file"></label>
    
              <progress id="file" value="92" max="100" style={{accentColor: '#FFD700'}}>82%</progress>
              <label For="file"></label>
              <progress id="file" value="82" max="100" style={{accentColor: '#FFD700'}}>62%</progress>
              <label For="file"></label>
              <progress id="file" value="62" max="100" style={{accentColor: '#FFD700'}}>32%</progress>
              <label For="file"></label>
              <progress id="file" value="32" max="100" style={{accentColor: '#FFD700'}}>32%</progress>
              <label For="file"></label>
              <progress id="file" value="32" max="100" style={{accentColor: '#FFD700'}}>32%</progress>
          
            <div id="sp1">
              <a href="" style={{ textDecoration: 'none', color: 'rgb(3, 131, 3)', fontWeight: 'bold' }}>See All Reviews ..</a>
            </div>
          </span>
        </div>
      </div>

      {/* <div className="Usercontainer">
      <h1>User Review</h1>
      <div className={`ratingToo ${getStarColorClass(userRating)}`}>
        <span id="ratingToo">{userRating}/5</span>
      </div>
      <div className="stars">
        {[1, 2, 3, 4, 5].map((value) => (
          <span
            key={value}
            className={`star ${value <= userRating ? getStarColorClass(value) : ''}`}
            onClick={() => handleStarClick(value)}
          >
            ★
          </span>
        ))}
      </div>
      <p>Share your review:</p>
      <textarea
        id="review"
        placeholder="Write your review here"
        value={review}
        onChange={(e) => setReview(e.target.value)}
      ></textarea>
      <button id="submit" onClick={handleSubmit}>
        Submit
      </button>
      <div className="reviews">
        {reviews.map((review, index) => (
          <div key={index} className="review">
            <p>
              <strong>Rating: {review.userRating}/5</strong>
            </p>
            <p>{review.reviewText}</p>
          </div>
        ))}
      </div>
    </div> */}

    </div>
  );
};

// function getStarColorClass(value) {
//   switch (value) {
//     case 1:
//       return 'one';
//     case 2:
//       return 'two';
//     case 3:
//       return 'three';
//     case 4:
//       return 'four';
//     case 5:
//       return 'five';
//     default:
//       return '';
//   }
// }

export default CoachWithRating;
