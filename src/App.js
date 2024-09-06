import React, { useState } from 'react';
import BusinessList from './components/BusinessList/BusinessList';
import Searchbar from './components/Searchbar/Searchbar';
import Header from './components/Header/Header';
import './App.css';
import '@fontsource/poppins';
import getData from './utils/Yelp';

const App = () => {
  const [businesses, setBusinesses] = useState([]);
  const searchYelp = async (term, location, sortBy) => {
    const data = await getData(term, location, sortBy);
    setBusinesses(data);
  };

  return (
    <div className="App">
      <Header />
      <Searchbar searchYelp={searchYelp} />
      <BusinessList businesses={businesses} />
    </div>
  );
};


export default App;
