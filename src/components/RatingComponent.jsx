import React, { useState } from 'react';

import './RatingComponent.css';
import NavigationBar from './navigation/NavigationBar';

const RatingComponent = () => {
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
    <div className='main'>
      <NavigationBar/>
      <span className="heading">User Rating</span>
      <div className="rating">
    <span>&#9733;</span>
    <span>&#9733;</span>
    <span>&#9733;</span>
    <span>&#9733;</span>
    <span style={{color:"black",}}>&#9733;</span>
  </div>
      <p>4.1 average based on 254 reviews.</p>
      <hr className="divider" />

      <div className="row">
        <div className="side">
          <div>5 star</div>
        </div>
        <div className="middle">
          <div className="bar-container">
            <div className="bar-5"></div>
          </div>
        </div>
        <div className="side right">
          <div>150</div>
        </div>
        <div className="side">
          <div>4 star</div>
        </div>
        <div className="middle">
          <div className="bar-container">
            <div className="bar-4"></div>
          </div>
        </div>
        <div className="side right">
          <div>63</div>
        </div>
        <div className="side">
          <div>3 star</div>
        </div>
        <div className="middle">
          <div className="bar-container">
            <div className="bar-3"></div>
          </div>
        </div>
        <div className="side right">
          <div>15</div>
        </div>
        <div className="side">
          <div>2 star</div>
        </div>
        <div className="middle">
          <div className="bar-container">
            <div className="bar-2"></div>
          </div>
        </div>
        <div className="side right">
          <div>6</div>
        </div>
        <div className="side">
          <div>1 star</div>
        </div>
        <div className="middle">
          <div className="bar-container">
            <div className="bar-1"></div>
          </div>
        </div>
        <div className="side right">
          <div>20</div>
        </div>
      </div>
      <div className="container">
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
    </div>

    </div>
  );
};
function getStarColorClass(value) {
  switch (value) {
    case 1:
      return 'one';
    case 2:
      return 'two';
    case 3:
      return 'three';
    case 4:
      return 'four';
    case 5:
      return 'five';
    default:
      return '';
  }
}


export default RatingComponent;
