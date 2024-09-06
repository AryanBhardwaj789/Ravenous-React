import React from 'react';

const Business = ({ business }) => {
  return (
    <div className="rounded-lg p-4 w-4/4">
      <img 
        src={business.image_url} 
        alt={business.name} 
        className="w-full h-72 object-cover rounded-md mb-4" 
      />
      <div className="flex mb-4">
        {/* Left Column */}
        <div className="flex-grow flex flex-col">
          <h2 className="text-xl font-semibold font-poppins mb-2">{business.name}</h2>
          <p className="text-md tracking-tight font-light">{business.location.address1}</p>
          <p className="text-md tracking-tight font-light">{business.location.city}</p>
          <p className="text-md tracking-tight font-light">{business.location.state} {business.location.zip_code}</p>
        </div>
        
        {/* Right Column */}
        <div className="flex flex-col text-right pt-9">
          <p className="text-md tracking-tight font-light">{business.categories[0].title}</p>
          <p className="text-md tracking-tight font-light">{business.rating} stars</p>
          <p className="text-md tracking-tight font-light">{business.review_count} reviews</p>
        </div>
      </div>
    </div>
  );
};

export default Business;
