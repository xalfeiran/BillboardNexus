import React from 'react';
import './BillboardCard.css';

function formatPrice(price) {
  return price.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
}

function formatLocation(location) {
  // truncate the lat and long to 4 decimal places
  location = location.map((coord) => coord.toFixed(4));
  return `${location[0]}, ${location[1]}`;
}

const BillboardCard = ({ id, title, location, price, status, image, onClick }) => {
  return (
    <div className="col-6">
      <div className="billboard-card" onClick={() => onClick(location)}>
        <div className="card-icon">
          <img src={image} alt="Billboard Icon" />
        </div>
        <div className="billboard-info">
          <h2 className="billboard-title">{id}</h2>
          <p className="billboard-location">{formatLocation(location)}</p>
          <p className="billboard-address">{title}</p>
          <p className="billboard-price">{formatPrice(price)}</p>
        </div>
      </div>
    </div>
  );
};

export default BillboardCard;
