import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import EventIcon from '@mui/icons-material/Event';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import axios from 'axios';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import studentBookingImage from '../images/studentBooking.jpg'; // Import your background image
import { useLocation } from 'react-router-dom';



function BookAppointment() {

  const location = useLocation();
  const counsellorId = location.state?.counsellorId;
  const counsellorName = location.state?.name;

  const [isSubmitted, setIsSubmitted] = React.useState(false);
  const [allRequired, setAllRequired] = React.useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    const requiredFields = ['name', 'id', 'email', 'mobile', 'reason', 'date', 'time', 'mode'];
    const isAnyFieldEmpty = requiredFields.some(field => !data.get(field));

    if (isAnyFieldEmpty) {
      setAllRequired('Please enter all required fields.');
      return;
    }

    axios.post('http://localhost:8082/insertbooking', {
      name: data.get('name'),
      id: data.get('id'),
      email: data.get('email'),
      mobile: data.get('mobile'),
      reason: data.get('reason'),
      date: data.get('date'),
      time: data.get('time'),
      mode: data.get('mode'),
      counsellorId: data.get('counsellorId'),
      counsellorName: data.get('counsellorName'),
     
    }).then((response) => {
      console.log(response.data);
    });

    // Assume form submission is successful
    setIsSubmitted(true);
  };

  const defaultTheme = createTheme();

  return (
    <ThemeProvider theme={defaultTheme}>
   
      <Box
        sx={{
          backgroundImage: `url(${studentBookingImage})`,
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
              backgroundColor: '#A8BACF', // Adjust the opacity as needed
              padding: '20px',
              borderRadius: '10px',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'black' }}>
              <EventIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Book Appointment
            </Typography>
            <Typography style={{ color: 'blue', fontSize: '25px' }}>{allRequired}</Typography>

            {isSubmitted ? (
              <Typography variant="body1" color="primary" sx={{ mt: 2 }}>
                Appointment booked successfully!
              </Typography>
            ) : (
              <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                <input id="counsellorId" name="counsellorId" value={counsellorId} style={{backgroundColor:'black', color:'white', borderRadius:'10px', textAlign:'center'}}/>
                <input id="counsellorName" name="counsellorName" value={counsellorName} style={{backgroundColor:'black', color:'white', borderRadius:'10px', textAlign:'center'}}/>
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
                  id="id"
                  label="ID"
                  name="id"
                  autoComplete="id"
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
                  id="mobile"
                  label="Mobile"
                  name="mobile"
                  type="tel"
                />
                <InputLabel id="reason-label">Reason for Appointment</InputLabel>
                <Select
                  margin="normal"
                  required
                  fullWidth
                  labelId="reason-label"
                  name="reason"
                  defaultValue=""
                >
                  <MenuItem value="academic">Academic</MenuItem>
                  <MenuItem value="personal">Personal</MenuItem>
                  <MenuItem value="overall">Overall</MenuItem>
                </Select>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="date"
                  label="Date"
                  type="date"
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="time"
                  label="Time"
                  type="time"
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
                <InputLabel id="reason-label">Mode Of Appointment</InputLabel>
                <Select
                  margin="normal"
                  required
                  fullWidth
                  labelId="mode-label"
                  name="mode"
                  defaultValue=""
                >
                  <MenuItem value="online">Online</MenuItem>
                  <MenuItem value="offline">Offline</MenuItem>
                </Select>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                  style={{ backgroundColor: 'black', color: 'white' }}
                >
                  Book Now
                </Button>
              </Box>
            )}
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="/booking-form" variant="body2">
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

export default BookAppointment;
