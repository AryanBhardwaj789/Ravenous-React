import React from 'react';
import Business from '../Business/Business';

const BusinessList = ({ businesses }) => {
  return (
    <div className="flex flex-wrap gap-4 mt-10 p-2 justify-center">
      {businesses.map(business => (
        <div className="w-full sm:w-1/2 lg:w-1/3 xl:w-1/4" key={business.id}>
          <Business business={business} />
        </div>
      ))}
    </div>
  );
};

export default BusinessList;