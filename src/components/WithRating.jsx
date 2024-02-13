import React, { useState } from 'react';
import './WithRating.css';
import MainLogo from './group-217@2x.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';
import NavigationBar from './NavigationBar';

const WithRating = () => {
  const [userRating, setUserRating] = useState(0);
  const [review, setReview] = useState('');
  const [reviews, setReviews] = useState([]);

  const handleStarClick = (value) => {
    setUserRating(value);
  };

  const handleSubmit = () => {
    if (!userRating || !review) {
      alert('Please select a rating and provide a review before submitting.');
      return;
    }

    const newReview = {
      userRating,
      reviewText: review,
    };

    setReviews([...reviews, newReview]);

    // Reset state after submitting
    setUserRating(0);
    setReview('');
  };

  return (
    <div>
      <NavigationBar/>
      <div className="row">
        <div className="column card-coach" style={{ backgroundColor: 'white' }}>
          <img src="min-frame@2x.png" alt="Avatar" style={{ width: '80%' }} />
        </div>

        <div className="column1 card-coach" style={{ backgroundColor: 'white' }}>
          <span className="column1-">
            <h4><b>Sam</b></h4>
            <p>Football Player,UP Skill</p>
            <p>English,Hindi</p>
            <p>8 Years</p>
            <p>₹ <sup>30/min</sup></p>
            <button> <Link to="#" style={{ textDecoration: 'none', color: 'green' }}>Online</Link></button>
          </span>
        </div>

        <div className="column2 card-coach" style={{ backgroundColor: 'white' }}>
          <span className="column2">
            {/* Ratings overview content */}
            <div className="column2" id="card-coach" style={{ backgroundColor: 'white' }}>
              <span className="column2">
                <h4><b>Rating Overview</b></h4>
                <h2 style={{ fontWeight: 'bold' }}>5/ <sub>5</sub></h2>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <p>348 Rating</p>
                <hr />
                <h3>Savi</h3>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <p>348 Amazing Coach mostly all doubts are clear..</p>
                <hr />
                <h3>Farmaz</h3>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <p>Coach gently answer to my question share remedial advice which would create good vibes for future goal.</p>
                <hr />
                <h3>Ravi</h3>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <p>He has revealed the problem and gave solution to come out of it</p>
              </span>
            </div>
          </span>
        </div>

        <div className="column3 card-coach" style={{ backgroundColor: 'white' }}>
          <span className="column3">
            {/* Ratings overview content */}
            <h4><b>Rating Overview</b></h4>
            <span>
              <label htmlFor="file">5</label>
              <progress id="file" value="92" max="100">82%</progress>
              <label htmlFor="file">4</label>
              <progress id="file" value="82" max="100">62%</progress>
              <label htmlFor="file">3</label>
              <progress id="file" value="62" max="100">32%</progress>
              <label htmlFor="file">2</label>
              <progress id="file" value="32" max="100">32%</progress>
              <label htmlFor="file">1</label>
              <progress id="file" value="32" max="100">32%</progress>
            </span>
            <div id="sp1">
              <a href="" style={{ textDecoration: 'none', color: 'rgb(3, 131, 3)', fontWeight: 'bold' }}>See All Reviews ..</a>
            </div>
          </span>
        </div>
      </div>
      </div>
);
  };

export default WithRating;
