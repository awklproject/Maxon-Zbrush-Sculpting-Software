import React, { useState, useEffect } from 'react';

// TODO : change when uploading online
const mainSite = "http://localhost:8000";
const getOffersLink = `${mainSite}/list/`; 


const OffersList = () => {
  const [offers, setOffers] = useState([]);

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
    <div className="offers-list">
      {offers.map((offer) => (
        <OfferCard key={offer.id} offer={offer} />
      ))}
    </div>
  );
};

const OfferCard = ({ offer }) => {
  return (
    <div className="offer-card card-body">
      <h2 className="card-title">{offer.supplier_name}</h2>
      <p className="card-text">Description: {offer.description}</p>
      <p className="card-text">Unit: {offer.unit}</p>
      <p className="card-text">Stock: {offer.stock}</p>
      <p className="card-text">Price per Unit: {offer.price_per_unit}</p>
      <p className="card-text">Location: <a href={offer.location} target="_blank" rel="noopener noreferrer">{offer.location}</a></p>
      <p className="card-text">Review: <a href={offer.review} target="_blank" rel="noopener noreferrer">{offer.review}</a></p>
      <img src={`${offer.pic}`} className="card-img-top" alt="Offer"/>
    </div>
  );
};

export default OffersList;

