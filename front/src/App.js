import React from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useState,useEffect } from 'react';
import OffersList from './OffersList';
import Details from './Details';

const App = () => {
    const [offers, setOffers] = useState([]);
    const [selectedOffer, setSelectedOffer] = useState({});
    const [value, onChange] = useState(new Date());

    // for testing TODO delete values
    const startDate = new Date (2017, 0, 1);
    const onClickDayDo= (value, event) => {
        alert(`new date ${value}`)
        console.log(value.toJSON());
    }
    const mainSite = "http://localhost:8000";
    const getOffersLink = `${mainSite}/list/`; 
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
    //         element={<OffersList offers={offers} 
      //        setSelectedOffer={setSelectedOffer}
       //       selectedOffer={selectedOffer} />} 
  return (
      <BrowserRouter>
          <Routes>
              <Route path="/" 
                element={<Calendar 
                    defaultActiveStartDate={startDate}
                    value={value}
                    onChange={onChange} 
                    onClickDay= {onClickDayDo}
                 />}/>

                <Route path="/details/" 
                    element={<Details selectedOffer={selectedOffer} />} 
              />

                        </Routes>
      </BrowserRouter>
  )};

export default App;
