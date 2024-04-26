import React, { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import axios from 'axios';
import signInImage from '../images/signin.jpg';

const AddCounsellor = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [allRequired, setAllRequired] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    const requiredFields = ['counsellorId', 'name', 'email', 'mobile', ]; 
    const isAnyFieldEmpty = requiredFields.some(field => !data.get(field));

    if (isAnyFieldEmpty) {
      setAllRequired('Please fill all the required fields');
      return;
    }

    axios.post('http://localhost:8082/addcounsellor', {
      counsellorId: data.get('counsellorId'),
      name: data.get('name'),
      email: data.get('email'),
      mobile: data.get('mobile'),
      // imageUrl: data.get('imageUrl') // Include imageUrl in the request
    }).then((response) => {
      console.log(response.data)
    })

    setIsSubmitted(true);
  };

  const defaultTheme = createTheme();

  return (
    <ThemeProvider theme={defaultTheme}>
      <Box
        sx={{
          backgroundImage: `url(${signInImage})`,
          backgroundSize: 'cover',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          minHeight: '90vh',
        }}
      >
        <CssBaseline />
        <Container component="main" maxWidth="xs">
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              backgroundColor: '#B6DCFE', // Adjust the opacity as needed
              padding: '20px',
              borderRadius: '10px',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'black' }}>
              <PersonAddIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Add Counsellor
            </Typography>
            <Typography style={{ color: 'blue', fontSize: '25px' }}>{allRequired}</Typography>

            {isSubmitted ? (
              <Typography variant="body1" color="primary" sx={{ mt: 2 }}>
                Counsellor added successfully!
              </Typography>
            ) : (
              <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="counsellorId"
                  label="Counsellor ID"
                  name="counsellorId"
                  autoFocus
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="name"
                  label="Name"
                  name="name"
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="mobile"
                  label="Mobile"
                  name="mobile"
                  type="tel"
                />
                {/* <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="imageUrl"
                  label="Image URL"
                  name="imageUrl"
                /> */}
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                  style={{ backgroundColor: 'black', color: 'white' }}
                >
                  Add Counsellor
                </Button>
              </Box>
            )}
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="/add-counsellor" variant="body2">
                  Go back
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Box>
    </ThemeProvider>
  );
}

export default AddCounsellor;
