//TODO getOFferByID to fill this page instead of adding items from the loop because if we get to the
// page without getting redirected from the main page it will not open
import { Container, Typography, Card, CardActions, CardContent, CardMedia, Grid, Button} from '@mui/material';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { useState } from 'react';
import BookingForm from './BookingForm';

const handleButtonClick = (selectedOffer)=>{
   console.log("booking adder of ") 
    console.log(selectedOffer.id)
};

const mainSite = "http://localhost:8000";

const Details = ({selectedOffer}) => {
    const [value, onChange] = useState(new Date());
    //
    // for testing TODO delete values
    
    const startDate = new Date (2024, 0, 1);
    const onClickDayDo= (value, event) => {
        alert(`new date ${value}`)
        console.log(value.toJSON());
    }
    const tileDisabled = ({ activeStartDate, date, view }) => date.getDay() === 0

    // end testing data
    return (
        <div>
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
        <Grid item xs={12} md={6}>
            <Calendar 
                    defaultActiveStartDate={startDate}
                    value={value}
                    onChange={onChange} 
                    selectRange={true}
                    onClickDay= {onClickDayDo}
                    tileDisabled={tileDisabled}
                 />
            <BookingForm />
        </Grid>
        </div>
  );
};

export default Details;
