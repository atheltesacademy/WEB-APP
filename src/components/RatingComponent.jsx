import React from 'react';
import './RatingComponent.css';

const RatingComponent = () => {
  return (
    <div className='main'>
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
    </div>
  );
};

export default RatingComponent;
