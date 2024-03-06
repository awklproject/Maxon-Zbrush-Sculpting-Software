import { Container, Typography, Card, CardActions, CardContent, CardMedia, Grid, Button } from '@mui/material';

const handleButtonClick = ()=>{
    
};

const mainSite = "http://localhost:8000";

const Details = ({selectedOffer}) => {
  return (
    <Container maxWidth="lg">
      <Typography variant="h2" align="center" gutterBottom>
        {selectedOffer.title}
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Card>
            <CardMedia
              component="img"
              height="auto"
              image={`${mainSite}${selectedOffer.main_pic}`}
              alt={selectedOffer.title}
            />
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h5" component="div" color="textSecondary">
                Supplier: {selectedOffer.supplier_name}
              </Typography>
             
              <Typography variant="body1" color="textSecondary">
                Price per Unit: {selectedOffer.price_per_unit} $ ({selectedOffer.unit})
              </Typography>
              <Typography variant="body1" color="textSecondary">
                Stock: {selectedOffer.stock}
              </Typography>
              <Typography variant="subtitle1" color="textSecondary">
                {selectedOffer.header}
              </Typography>
              {/* Render other details here */}
            </CardContent>
      <CardActions>
        <Button size="small" onClick={handleButtonClick}>
          Book Now
        </Button>

      </CardActions>

          </Card>
        </Grid>
      </Grid>
      {/* Additional information section */}
        <br />
        <br />
        <br />
      <Typography variant="h4" align="left" gutterBottom>
          Highlights
      </Typography>
      <Typography variant="body1" gutterBottom>
        {selectedOffer.highlights}
      </Typography>
      <Typography variant="h4" align="left" gutterBottom>
          Including
      </Typography>
      <Typography variant="body1" gutterBottom>
        {selectedOffer.including}
      </Typography>
      <Typography variant="h4" align="left" gutterBottom>
          Excluding
      </Typography>
      <Typography variant="body1" gutterBottom>
        {selectedOffer.excluding}
      </Typography>
      <Typography variant="h4" align="left" gutterBottom>
          Description
      </Typography>
      <Typography variant="body1" gutterBottom>
        {selectedOffer.description}
      </Typography>
      <Typography variant="h4" align="left" gutterBottom>
          FAQ
      </Typography>
    <Typography variant="body1" gutterBottom>
        {selectedOffer.faq}
      </Typography>
      <Typography variant="h4" align="left" gutterBottom>
          Meeting Point 
      </Typography>
    <iframe 
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26490.22597395337!2d35.49416658066307!3d33.908237635510226!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151f168cef36c0a5%3A0xf6f4af286ffdea34!2sBeirut%20Central%20District%2C%20Beirut!5e0!3m2!1sen!2slb!4v1709119086106!5m2!1sen!2slb" 
        width="600" 
        height="450" 
        style={{"border":"0"}} 
        allowfullscreen="" 
        loading="lazy" 
        referrerpolicy="no-referrer-when-downgrade"
    ></iframe>    
        {selectedOffer.meeting_point}
      <Typography variant="h4" align="left" gutterBottom>
          Drop Off Point
      </Typography>
      <Typography variant="body1" gutterBottom>
        {selectedOffer.drop_off_point}
      </Typography>
      <Typography variant="h4" align="left" gutterBottom>
          Review
      </Typography>
      <Typography variant="body1" gutterBottom>
        {selectedOffer.review}
      </Typography>
      <Typography variant="body1" gutterBottom>
        {selectedOffer.description}
      </Typography>
      <Typography variant="h4" align="left" gutterBottom>
        Additional Information
      </Typography>
      <Typography variant="body1" gutterBottom>
        {selectedOffer.additional_info}
      </Typography>
      {/* Render other sections like FAQs, Reviews, etc. */}
    </Container>
  );
};

export default Details;
