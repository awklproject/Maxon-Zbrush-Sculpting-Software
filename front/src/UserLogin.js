import React, { useState } from 'react';
import { TextField, Button, Container, Paper, Typography } from '@mui/material';
import axios from 'axios';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const getCookie = (name) => {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`)
    if (parts.length === 2) return parts.pop().split(';').shift();
  }


  const handleLogin = async () => {
    try {
        const csrftoken = getCookie('csrftoken');
        console.log(csrftoken);
        const response = await axios.post('http://localhost:8000/api/token/', {
        username,
        password
        }, {
            headers: {
                'X-CSRFToken': csrftoken,
            }
        });
        console.log(response);
      const token = response.data.token;
      // Store the token in localStorage or sessionStorage for subsequent requests
      localStorage.setItem('token', token);
      // Redirect to another page or perform additional actions after successful login
    } catch (error) {
      setError('Invalid username or password');
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <Paper elevation={3} style={{ padding: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Typography variant="h5" component="div" gutterBottom>
          Login
        </Typography>
        <TextField
          label="Username"
          variant="outlined"
          margin="normal"
          fullWidth
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <TextField
          label="Password"
          variant="outlined"
          margin="normal"
          type="password"
          fullWidth
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {error && <Typography variant="body2" color="error" style={{ marginTop: '10px' }}>{error}</Typography>}
        <Button
          variant="contained"
          color="primary"
          onClick={handleLogin}
          style={{ marginTop: '20px' }}
        >
          Login
        </Button>
      </Paper>
    </Container>
  );
};

export default Login;

