import React from 'react';
import './BillboardCard.css';

const BillboardCard = ({ title, location, price, image, onClick }) => {
  return (
    <div className="billboard-card" onClick={() => onClick(location)}>
      <div className="card-icon">
        <img src={image} alt="Billboard Icon" />
      </div>
      <div className="billboard-info">
        <h2 className="billboard-title">{title}</h2>
        <p className="billboard-location">{location}</p>
        <p className="billboard-price">{price}</p>
      </div>
    </div>
  );
};

export default BillboardCard;
