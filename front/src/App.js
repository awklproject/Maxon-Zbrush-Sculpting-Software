import React, { useState, useEffect } from 'react';

// TODO : change when uploading online
const getOffersLink = "http://localhost:8000/list/";

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
    <div className="offer-card">
      <h2>{offer.supplier_name}</h2>
      <p>Description: {offer.description}</p>
      <p>Unit: {offer.unit}</p>
      <p>Stock: {offer.stock}</p>
      <p>Price per Unit: {offer.price_per_unit}</p>
      <p>Location: <a href={offer.location} target="_blank" rel="noopener noreferrer">{offer.location}</a></p>
      <p>Review: <a href={offer.review} target="_blank" rel="noopener noreferrer">{offer.review}</a></p>
      <img src={`http://your-django-api-endpoint${offer.pic}`} alt="Offer"/>
    </div>
  );
};

export default OffersList;

