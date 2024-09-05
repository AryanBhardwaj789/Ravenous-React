import React from 'react';

const Business = ({ business }) => {
  return (
    <div className="rounded-lg p-4 w-4/4">
      <img 
        src={business.imageSrc} 
        alt={business.name} 
        className="w-full h-72 object-cover rounded-md mb-4" 
      />
      <div className="flex mb-4">
        {/* Left Column */}
        <div className="flex-grow flex flex-col">
          <h2 className="text-xl font-semibold font-poppins mb-2">{business.name}</h2>
          <p className="text-md tracking-tight font-light">{business.address}</p>
          <p className="text-md tracking-tight font-light">{business.city}</p>
          <p className="text-md tracking-tight font-light">{business.state} {business.zipCode}</p>
        </div>
        
        {/* Right Column */}
        <div className="flex flex-col text-right pt-9">
          <p className="text-md tracking-tight font-light">{business.category}</p>
          <p className="text-md tracking-tight font-light">{business.rating} stars</p>
          <p className="text-md tracking-tight font-light">{business.reviewCount} reviews</p>
        </div>
      </div>
    </div>
  );
};

export default Business;
