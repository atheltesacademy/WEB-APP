import React from 'react';

const CategoryPageCard = ({ title, image, active }) => {
  return (
    <img src={image} alt={title} width={active ? "15%" : "11%"} />
  );
}

export default CategoryPageCard;
