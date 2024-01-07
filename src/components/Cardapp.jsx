import React from 'react';
import UserProfileCard from './UserProfileCard';

const Cardapp = () => {
  return (
    <div>
      <UserProfileCard loger="Lipsita" expertise="Love & Relationships" email="john@exmple.com" phone="123-456-7890" price={29.99} imageUrl="apple.jpg" />
      <UserProfileCard loger="Hathiyar" expertise="Career & Finance" email="john@exmple.com" phone="123-456-7890" price={34.99} imageUrl="apple.webp" />
 
 
    </div>
  );
};

export default Cardapp;