import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import axios from 'axios';
import contactImage from '../images/contactus.jpg'; // Import your background image

function Contact() {
  const [isSubmitted, setIsSubmitted] = React.useState(false);
  const [allrequired, setAllRequired] = React.useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    const requiredFields = ['name', 'email', 'phoneNumber', 'message'];
    const isAnyFieldEmpty = requiredFields.some(field => !data.get(field));

    if (isAnyFieldEmpty) {
      setAllRequired('Please fill all the required fields');
      return;
    }


    console.log({
      name: data.get('name'),
      email: data.get('email'),
      phoneNumber: data.get('phoneNumber'),
      message: data.get('message'),
    });

    axios.post('http://localhost:8082/insertcontactus', {
      name: data.get('name'),
      email: data.get('email'),
      phoneNumber: data.get('phoneNumber'),
      message: data.get('message'),
    }).then((response) => {
      console.log(response.data)
    })

    // Assume form submission is successful
    setIsSubmitted(true);
  };

  const defaultTheme = createTheme();

  return (
    <ThemeProvider theme={defaultTheme}>
      <Box
        sx={{
          backgroundImage: `url(${contactImage})`,
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
              <MailOutlineIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Contact Us
            </Typography>
            <Typography style={{ color: 'blue', fontSize: '25px' }}>{allrequired}</Typography>

            {isSubmitted ? (
              <Typography variant="body1" color="primary" sx={{ mt: 2 }}>
                Thank you for your message! We will get back to you soon.
              </Typography>
            ) : (
              <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="name"
                  label="Your Name"
                  name="name"
                  autoComplete="name"
                  autoFocus
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="phoneNumber"
                  label="Phone Number"
                  type="tel"
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="message"
                  label="Your Message"
                  multiline
                  rows={4}
                />
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                  style={{backgroundColor:'black',  color:'white'}}
                >
                  Send Message
                </Button>
              </Box>
            )}
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="/contact-us" variant="body2">
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

export default Contact;
