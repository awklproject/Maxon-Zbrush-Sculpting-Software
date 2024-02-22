import React, { useState, useEffect } from 'react';
import { Card, CardContent, Typography, Button, CardActions, CardMedia } from '@mui/material';
import "./App.css";

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
    <Card sx={{ maxWidth: 345 }} className="card-container">
      <CardMedia
        component="img"
        height="140"
        image={offer.pic}
        alt="Offer Image"
      />
      <CardContent className="content-card">
        <Typography variant="h5" color="text.primary">
          {offer.highlights}
        </Typography>
        <Typography gutterBottom variant="body1" component="div">
          {offer.supplier_name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {offer.supplier_address}
        </Typography>

        <Typography variant="body2" color="text.secondary">
          {offer.description}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {offer.additional_info}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {offer.including}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {offer.excluding}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          FAQ: {offer.faq}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Unit: {offer.unit}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Stock: {offer.stock}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Price per Unit: {offer.price_per_unit}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Location: {offer.location}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Meeting Point: {offer.meeting_point}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Drop-off Point: {offer.drop_off_point}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Review: {offer.review}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Start Time: {offer.start_time}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          End Time: {offer.end_time}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
};

export default OffersList;
