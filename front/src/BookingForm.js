import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { FormControl, FormLabel } from '@mui/material';


const getCookie = (name) => {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`)
    if (parts.length === 2) return parts.pop().split(';').shift();
}

const BookingForm = () => {

const [name, setName] = useState('');
const [mobile, setMobile] = useState('');
const [email, setEmail] = useState('');
const [note, setNote] = useState('');

const handleBookClick = async () => {
    let formData = {
        "username": name,
        "user_email": email,
        "user_mobile": mobile,
    };
    try {
    const csrftonken = getCookie('csrftoken')
    const response = await fetch('http://localhost:8000/api/booking', {
        method: 'POST',
        body: formData,
        headers: {
            'X-CSRFToken': csrftonken
        },
    
    });

    if (response.ok) {
      const data = await response.json();
      console.log('Booking response:', data);
    } else {
      console.error('Failed to book:', response.statusText);
    }
  } catch (error) {
    console.error('Error:', error);
  }
};
const handleNameChange = (event) => {
    setName(event.target.value)
};
const handleMobileChange = (event) => {
    setMobile(event.target.value)
};
const handleEmailChange = (event) => {
    setEmail(event.target.value)
};
const handleNoteChange = (event) => {
    setNote(event.target.value)
};



    return(
        <div>
        <FormControl>
            <FormLabel>
                Enter Your name
            </FormLabel>
            <TextField onChange={handleNameChange}></TextField>
            <FormLabel>
                Enter your age ??
            </FormLabel>
            <TextField></TextField>
            <FormLabel>
                Enter Your Mobile
            </FormLabel>
            <TextField onChange={handleMobileChange}></TextField>
            <FormLabel>
                Enter Your Email
            </FormLabel>
            <TextField onChange={handleEmailChange}></TextField>
            <FormLabel>
                do u want to add a note ?
            </FormLabel>
            <TextField></TextField>

            <Button onClick={handleBookClick}>Book Now</Button>
        </FormControl>
        </div>
    )
}

export default BookingForm;
