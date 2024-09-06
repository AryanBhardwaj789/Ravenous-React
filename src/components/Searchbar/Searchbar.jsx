import React, { useState } from 'react';
import './Searchbar.css';

const Searchbar = ({ searchYelp }) => {
  const [searchInput, setSearchInput] = useState('');
  const [locationInput, setLocationInput] = useState('');
  const [sortingOption, setSortingOption] = useState('best_match');

  const handleSortOptionClick = (option) => {
    setSortingOption(option);
  };

  const getSortOptionClass = (option) => {
    return sortingOption === option ? 'active-sort-option' : 'inactive-sort-option';
  };

  const handleSearchInputChange = (event) => {
    setSearchInput(event.target.value);
  };

  const handleLocationInputChange = (event) => {
    setLocationInput(event.target.value);
  };

  const handleSearchButtonClick = (event) => {
    event.preventDefault();
    searchYelp(searchInput, locationInput, sortingOption);
  };
  
  return (
    <div className="w-full mx-auto p-6 sm:p-10 lg:p-28 bg-white bg-[url('/public/background_search_desktop.jpg')] bg-cover bg-center">
      <div className="flex flex-col lg:flex-row lg:justify-evenly mb-6 lg:mb-16 border-b-2 border-gray-300">
        <span
          className={`text-white text-lg font-poppins font-medium tracking-tight py-2 lg:py-4 cursor-pointer sort-option ${getSortOptionClass('best_match')}`}
          onClick={() => handleSortOptionClick('best_match')}
        >
          Best Match
        </span>
        <span
          className={`text-white text-lg font-poppins font-medium tracking-tight py-2 lg:py-4 cursor-pointer sort-option ${getSortOptionClass('rating')}`}
          onClick={() => handleSortOptionClick('rating')}
        >
          Highest Rated
        </span>
        <span
          className={`text-white text-lg font-poppins font-medium tracking-tight py-2 lg:py-4 cursor-pointer sort-option ${getSortOptionClass('review_count')}`}
          onClick={() => handleSortOptionClick('review_count')}
        >
          Most Reviewed
        </span>
      </div>
      <div className="flex flex-col lg:flex-row lg:space-x-6 gap-6 lg:gap-16 px-5">
        <input
          className="w-full lg:w-2/3 p-2 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-700"
          type="text"
          placeholder="Search Businesses"
          value={searchInput}
          onChange={handleSearchInputChange}
        />
        <input
          className="w-full lg:w-2/3 p-2 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-700"
          type="text"
          placeholder="Where?"
          value={locationInput}
          onChange={handleLocationInputChange}
        />
      </div>
      <div className='mt-6 text-center font-poppins font-semibold tracking-wide'>
        <button onClick={handleSearchButtonClick} className="w-full lg:w-fit py-2 px-8 bg-yellow-600 text-white rounded-md hover:bg-yellow-800 focus:outline-none focus:ring-2 focus:ring-yellow-700">
          Let's Go
        </button>
      </div>
    </div>
  );
};

export default Searchbar;
