import React, { useState, useEffect } from 'react';
import { Card, CardContent, Typography, Button, CardActions, CardMedia } from '@mui/material';
import "./OffersList.css";
import Link from 'react-router-dom';

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
    <Card sx={{ maxWidth: 345 }} className="card-container">
      <CardMedia
        component="img"
        height="140"
        image={offer.pic}
        alt="Offer Image"
      />
      <CardContent className="content-card">
        <Typography variant="h5" color="text.primary">
          {offer.title}
        </Typography>
        <Typography gutterBottom variant="body1" component="div">
          {offer.supplier_name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {offer.header}
        </Typography>

        <Typography variant="body2" color="text.secondary">
          Unit: {offer.unit}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Stock: {offer.stock}
        </Typography>
        <Typography variant="body2" colr="text.secondary">
          Price per Unit: {offer.price_per_unit} $
        </Typography>
      </CardContent>
      <CardActions>
        <Button  size="small" href={"./details/"+offer.id}>Learn More</Button>
      </CardActions>
    </Card>
  );
};

export default OffersList;
