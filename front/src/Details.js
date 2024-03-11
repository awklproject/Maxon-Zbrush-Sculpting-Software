import { Container, Typography, Card, CardActions, CardContent, CardMedia, Grid, Button} from '@mui/material';

const handleButtonClick = (selectedOffer)=>{
   console.log("booking adder of ") 
    console.log(selectedOffer.id)
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
          <Button size="small" onClick={()=>handleButtonClick(selectedOffer)}>
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
        <div dangerouslySetInnerHTML={{__html:selectedOffer.meeting_point}}>
        </div>
      <Typography variant="h4" align="left" gutterBottom>
          Drop Off Point
      </Typography>
      <Typography variant="body1" gutterBottom>
        <div dangerouslySetInnerHTML={{__html:selectedOffer.drop_off_point}}>
        </div>
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
