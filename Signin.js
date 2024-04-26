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
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import signInImage from '../images/signin.jpg';

// Import your background image

const defaultTheme = createTheme();

export default function SignIn() {
  const navigate = useNavigate();
  const [captcha, setCaptcha] = React.useState(generateCaptcha());
  const [enteredCaptcha, setEnteredCaptcha] = React.useState('');
  const [invalidCaptcha, setInvalidCaptcha] = React.useState(false);

  function generateCaptcha() {
    return Math.random().toString().slice(2, 7); // Generate a random 5-digit number
  }

  function handleSubmit() {
    if (enteredCaptcha !== captcha) {
      setInvalidCaptcha(true);
      return;
    }

    setInvalidCaptcha(false);

    console.log({
      name: document.getElementById("name").value,
      pw: document.getElementsByName("password")[0].value
    });

    
    axios.post('http://localhost:8082/check', {
      name: document.getElementById("name").value,
      pw: document.getElementsByName("password")[0].value
    }).then((response) => {
      console.log(response.data);
      const name = response.data.name;
      switch (response.data.role) {
        case '2':
          navigate('/student-home', { state: { name } });
          break;
        case '1':
          navigate('/counsellor-home', { state: { name } });
          break;
        case '3':
          navigate('/admin-home', {state: {name}});
          break;
        default:
          navigate('/');
      }
    });
  }

  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
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
        <Container component="main" maxWidth="xs">
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              backgroundColor: '#B6E6F2', // Adjust the opacity as needed
              padding: '20px',
              borderRadius: '10px',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'black' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <Box sx={{ mt: 3 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="name"
                label="Username"
                name="name"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              <TextField
                margin="normal"
                required
                fullWidth
                label="Enter Captcha"
                value={enteredCaptcha}
                onChange={(e) => setEnteredCaptcha(e.target.value)}
              />
              {invalidCaptcha && (
                <Typography style={{ color: 'red', fontSize: '14px', marginBottom: '10px' }}>
                  Invalid captcha. Please try again.
                </Typography>
              )}
              <Typography style={{ color: 'black', fontSize: '18px', marginBottom: '10px' }}>
                Captcha: {captcha}
              </Typography>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                onClick={handleSubmit}
                style={{backgroundColor:"black", color:"white"}} 
              >
                Sign In
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link href="/forgot-password" variant="body2">
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <Link href="/signup" variant="body2">
                    {"Don't have an account? Sign Up"}
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
