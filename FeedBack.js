import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import MoodIcon from '@mui/icons-material/Mood';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import axios from 'axios';
import feedbackImage from '../images/feedBack.jpg'; // Import your background image

function FeedBack() {
  const [isSubmitted, setIsSubmitted] = React.useState(false);
  const [allrequired, setAllRequired] = React.useState('');
  const [rating, setRating] = React.useState('');
  const [feedbackType, setFeedbackType] = React.useState('');


  const handleRatingChange = (event) => {
    setRating(event.target.value);
  };

  const handleFeedbackTypeChange = (event) => {
    setFeedbackType(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    const requiredFields = ['name', 'email'];
    const isAnyFieldEmpty = requiredFields.some(field => !data.get(field));

    if (isAnyFieldEmpty) {
      setAllRequired('Please fill all the required fields');
      return;
    }

    console.log({
      name: data.get('name'),
      email: data.get('email'),
      rating: rating,
      feedbackType: feedbackType
    });

    axios.post('http://localhost:8082/insertfeedback', {
      name: data.get('name'),
      email: data.get('email'),
      message: data.get('message'),
      rating: rating,
      feedbackType: feedbackType
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
          backgroundImage: `url(${feedbackImage})`,
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
              <MoodIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Feedback
            </Typography>
            <Typography style={{ color: 'blue', fontSize: '25px' }}>{allrequired}</Typography>

            {isSubmitted ? (
              <Typography variant="body1" color="primary" sx={{ mt: 2 }}>
                Thank you for your feedback! We appreciate your input.
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
                  name="mobile"
                  label="Mobile"
                  multiline
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  select
                  label="Rating"
                  id="rating"
                  name="rating"
                  value={rating}
                  onChange={handleRatingChange}
                  SelectProps={{
                    native: true,
                  }}
                >
                  <option value=""></option>
                  {[1, 2, 3, 4, 5].map((ratingValue) => (
                    <option key={ratingValue} value={ratingValue}>
                      {ratingValue}
                    </option>
                  ))}
                </TextField>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  select
                  label="Feedback Type"
                  id="feedbackType"
                  name="feedbackType"
                  value={feedbackType}
                  onChange={handleFeedbackTypeChange}
                  SelectProps={{
                    native: true,
                  }}
                >
                  <option value=""></option>
                  {['Satisfactory', 'Neutral', 'Excellent', 'Average', 'Below Average'].map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </TextField>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                  style={{backgroundColor:'black',  color:'white'}}
                >
                  Send Feedback
                </Button>
              </Box>
            )}
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="/feedback" variant="body2">
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

export default FeedBack;
