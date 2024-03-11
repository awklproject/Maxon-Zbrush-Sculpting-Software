import React, { useState, useEffect } from 'react';
import { Card, CardContent, Typography, Button, CardActions, CardMedia, AppBar } from '@mui/material';
import "./OffersList.css";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { Link } from 'react-router-dom';


const mainSite = "http://localhost:8000";

const OffersList = ({offers, setSelectedOffer, selectedOffer}) => {
    
  const [tabValue, setTabValue] = useState(0);

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  }
    const handleOfferClick = (offer) => {
        setSelectedOffer(offer);
    }
    return (
    <div>
        <AppBar  position="static" color="grey">
    <Tabs value={tabValue} onChange={handleTabChange} centered>
      <Tab label="Main" value="/" to="/" component={Link} />
      <Tab label="My Bookings" value="/drafts" to="/" component={Link} />
      <Tab label="My Accounts" value="/trash" to="/" component={Link} />
      <Tab label="Login/Signup" value="/login" to="/login/" component={Link} style={{ marginLeft: 'auto' }} />      
    </Tabs>
        </AppBar>
        <br/>
    <div className="offers-list">
        <br/>
      {offers.map((offer) => (
        <OfferCard key={offer.id} offer={offer} handleOfferClick={handleOfferClick}/>
      ))}
    </div>
    </div>
    );
};

const OfferCard = ({ offer, handleOfferClick }) => {
  return (
    <Card sx={{ maxWidth: 345 }} className="card-container">
      <CardMedia
        component="img"
        height="140"
        image={`${mainSite}${offer.main_pic}`}
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
        <Link 
            to={`/details/${offer.id}/`}
            onClick={()=>handleOfferClick(offer)}
        >
        <Button  
            size="small" 
        >
          Learn More
        </Button>
        </Link>
      </CardActions>
    </Card>
  );
};

export default OffersList;
