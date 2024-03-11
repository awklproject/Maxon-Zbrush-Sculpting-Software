import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useState,useEffect } from 'react';
import OffersList from './OffersList';
import Details from './Details';

const App = () => {
    const [offers, setOffers] = useState([]);
    const [selectedOffer, setSelectedOffer] = useState({});

    const mainSite = "http://localhost:8000";
    const getOffersLink = `${mainSite}/api/list/`; 
    useEffect(() => {
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

                         </Routes>
      </BrowserRouter>
  )};

export default App;
