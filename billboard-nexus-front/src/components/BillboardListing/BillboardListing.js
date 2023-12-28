import React from 'react';
import './BillboardListing.css';
import BillboardCard from '../BillboardCard/BillboardCard'; // Assuming you have a BillboardCard component

const BillboardListing = ({ listings, onBillboardClick }) => {
  return (
    <div className="billboard-listing">
      {listings.map((listing, index) => (
        <BillboardCard key={index} {...listing} onClick={onBillboardClick}/>
      ))}
    </div>
  );
};

export default BillboardListing;
