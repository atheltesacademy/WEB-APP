// ProductReview.jsx
import React, { useState } from 'react';
import './ProductReview.css';

const ProductReview = () => {
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

export default ProductReview;
