import React from 'react';
import BusinessList from './components/BusinessList/BusinessList';
import Searchbar from './components/Searchbar/Searchbar';
import Header from './components/Header/Header';
import './App.css';
import '@fontsource/poppins';

const App = () => {
  const businesses = [
    {
      imageSrc: 'https://content.codecademy.com/programs/react/ravenous/pizza.jpg',
      name: 'MarginOtto Pizzeria',
      address: '1010 Paddington Way',
      city: 'Flavortown',
      state: 'NY',
      zipCode: '10101',
      category: 'Italian',
      rating: 4.5,
      reviewCount: 90
    },
    {
      imageSrc: 'https://content.codecademy.com/programs/react/ravenous/pizza.jpg',
      name: 'MarginOtto Pizzeria',
      address: '1010 Paddington Way',
      city: 'Flavortown',
      state: 'NY',
      zipCode: '10101',
      category: 'Italian',
      rating: 4.5,
      reviewCount: 90
    },
    {
      imageSrc: 'https://content.codecademy.com/programs/react/ravenous/pizza.jpg',
      name: 'MarginOtto Pizzeria',
      address: '1010 Paddington Way',
      city: 'Flavortown',
      state: 'NY',
      zipCode: '10101',
      category: 'Italian',
      rating: 4.5,
      reviewCount: 90
    },
    {
      imageSrc: 'https://content.codecademy.com/programs/react/ravenous/pizza.jpg',
      name: 'MarginOtto Pizzeria',
      address: '1010 Paddington Way',
      city: 'Flavortown',
      state: 'NY',
      zipCode: '10101',
      category: 'Italian',
      rating: 4.5,
      reviewCount: 90
    },
    
    // Add more business objects here
  ];

  return (
    <div className="App">
      <Header />
      <Searchbar />
      <BusinessList businesses={businesses} />
    </div>
  );
};

export default App;
