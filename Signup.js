import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import axios from 'axios';
import signUpImage from '../images/signup.jpg';

const defaultTheme = createTheme();

export default function SignUp() {
  const [signupMsg, setSignUpMsg] = React.useState('');
  const [allrequired, setAllRequired] = React.useState('');
  const [passwordError, setPasswordError] = React.useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    // Check if any required field is empty
    const requiredFields = ['name', 'role', 'email', 'password'];
    const isAnyFieldEmpty = requiredFields.some(field => !data.get(field));

    if (isAnyFieldEmpty) {
      setAllRequired('Please fill all the required fields');
      setPasswordError('');
      setSignUpMsg('');
      return;
    }

    // Validate password against requirements
    const password = data.get('password');
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=])(?=\S+$).{8,}$/;
    if (!passwordRegex.test(password)) {
      setPasswordError('Weak password');
      setAllRequired('');
      setSignUpMsg('');
      return;
    }

    console.log({
      name: data.get('name'),
      role: data.get('role'),
      email: data.get('email'),
      password: data.get('password'),
    });

    try {
      const response = await axios.post('http://localhost:8082/insert', {
        name: data.get('name'),
        role: data.get('role'),
        email: data.get('email'),
        password: data.get('password'),
      });
      setSignUpMsg("Sign up successful!");
      
      // If the signup is successful, show a success message and send a confirmation email
      console.log(response.data);

      // Send confirmation email using Nodemailer or other email service
      sendConfirmationEmail(data.get('email'));

      // Reset form fields or redirect user
    } catch (error) {
      console.error('Error signing up:', error);
      // Handle error
    }
  };

  const [role, setRole] = React.useState('');

  const handleChange = (event) => {
    setRole(event.target.value);
  };

  const sendConfirmationEmail = (email) => {
    // Implement sending confirmation email here using an email service
    axios.post('http://localhost:8082/send-email', { email })
      .then((response) => {
        console.log('Confirmation email sent:', response.data);
      })
      .catch((error) => {
        console.error('Error sending confirmation email:', error);
      });
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <Box
        sx={{
          backgroundImage: `url(${signUpImage})`,
          backgroundSize: 'cover',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          minHeight: '90vh',
        }}
      >
        <Container component="main" maxWidth="xs">
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              backgroundColor: 'lightgrey', // Adjust the opacity as needed
              padding: '20px',
              borderRadius: '10px',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'black' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign up
            </Typography>
            <Typography style={{ color: 'blue', fontSize: '25px' }}>{signupMsg || allrequired || passwordError}</Typography>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    name="name"
                    required
                    fullWidth
                    id="name"
                    label="Name"
                    autoFocus
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Box sx={{ minWidth: 120 }}>
                    <FormControl fullWidth>
                      <InputLabel id="demo-simple-select-label">Role</InputLabel>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        name="role"
                        value={role}
                        label="Role"
                        onChange={handleChange}
                      >
                        <MenuItem value={1}>Counsellor</MenuItem>
                        <MenuItem value={2}>Student</MenuItem>
                        <MenuItem value={3}>Admin</MenuItem>
                      </Select>
                    </FormControl>
                  </Box>
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="new-password"
                  />
                </Grid>
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                style={{ backgroundColor: "black", color: "white" }}
              >
                Sign Up
              </Button>
              <Grid container justifyContent="flex-end">
                <Grid item>
                  <Link href="/signin" variant="body2">
                    Already have an account? Sign in
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Container>
      </Box>
    </ThemeProvider>
  );
}
