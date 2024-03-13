import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useState,useEffect } from 'react';
import OffersList from './OffersList';
import Details from './Details';
import Login from './UserLogin';

function checkAuthToken(authTokenName) {
    const authToken = localStorage.getItem(authTokenName);
    return authToken ? true : false;
}

const App = () => {
    const [offers, setOffers] = useState([]);
    const [selectedOffer, setSelectedOffer] = useState({});

    const mainSite = "http://localhost:8000";
    const getOffersLink = `${mainSite}/api/list/`; 
    useEffect(() => {

if (checkAuthToken("token")) {
    console.log('User is authenticated');
} else {
    console.log('User is not authenticated');
}

        const fetchOffers = async () => {
          try {
            const response = await fetch(getOffersLink);
            const data = await response.json();
            setOffers(data);
          } catch (error) {
            console.error('Error fetching offers:', error);
          }
        };
        fetchOffers();
      }, []);
  return (
      <BrowserRouter>
          <Routes>
              <Route path="/" 
              element={<OffersList offers={offers} 
              setSelectedOffer={setSelectedOffer}
              selectedOffer={selectedOffer} />} />

                <Route path={`/details/${selectedOffer.id}/`} 
                    element={<Details selectedOffer={selectedOffer} />} 
              />

              <Route path="/login/" element={<Login />} />

                         </Routes>
      </BrowserRouter>
  )};

export default App;
