import React from 'react';
import './UserProfileCard.css'
import profile_icon from './girl.jpg'


const UserProfileCard = ({ loger, Language, expertise, email, phone, price, imageUrl }) => {
  const cardStyle = {
    border: '3px solid #e0e0e0',
    borderRadius: '8px',
    boxShadow: '0 2px 4px black',
    overflow: 'hidden',
    maxWidth: '200px',
    margin: '16px',
  };

  const imageStyle = {
    width: '100%',
    height: '200px',
    objectFit: 'cover',
  };

  const contentStyle = {
    padding: '16px',
    color: 'blue'
  };
  
  return (
    <div style={cardStyle}>
      <img src={profile_icon} alt={loger} style={imageStyle} />
      <div style={contentStyle}>
        <h2>{loger}Lipsita</h2>
        <p>{expertise}exp:</p>
        <p>{Language}English,Hindi</p>
        <p>Price: ${price}</p>
        <button style={{ padding: '8px', backgroundColor: '#3498db', color: 'white', border: 'none' }}>
          Chat
        </button>
      </div>
    </div>
  );
};

export default UserProfileCard;