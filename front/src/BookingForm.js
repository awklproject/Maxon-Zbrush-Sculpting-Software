import React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { FormControl, FormLabel } from '@mui/material';

const BookingForm = () => {
    return(
        <div>
        <FormControl>
            <FormLabel>
                Enter Your name
            </FormLabel>
            <TextField></TextField>
            <FormLabel>
                Enter your age ??
            </FormLabel>
            <TextField></TextField>
            <FormLabel>
                Enter Your Mobile
            </FormLabel>
            <TextField></TextField>
            <FormLabel>
                Enter Your Email
            </FormLabel>
            <TextField></TextField>
            <FormLabel>
                do u want to add a note ?
            </FormLabel>
            <TextField></TextField>

            <Button>Book Now</Button>
        </FormControl>
        </div>
    )
}

export default BookingForm;
