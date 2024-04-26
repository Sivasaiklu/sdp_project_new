import React, { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import DeleteIcon from '@mui/icons-material/Delete';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import axios from 'axios';

const DeleteCounsellor = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [counsellorId, setCounsellorId] = useState('');
  const [deleteStatus, setDeleteStatus] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!counsellorId) {
      setDeleteStatus('Please enter a Counsellor ID');
      return;
    }

    axios.delete(`http://localhost:8082/deletecounsellor/${counsellorId}`)
      .then(response => {
        setDeleteStatus(response.data.message);
        setIsSubmitted(true);
      })
      .catch(error => {
        console.error('Error deleting counsellor:', error);
        setDeleteStatus('Error deleting counsellor. Please try again.');
      });
  };

  const defaultTheme = createTheme();

  return (
    <ThemeProvider theme={defaultTheme}>
      <Box
        sx={{
        //   backgroundImage: `url(${deleteImage})`,
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
              backgroundColor: '#FDB9B9', // Adjust the opacity as needed
              padding: '20px',
              borderRadius: '10px',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'black' }}>
              <DeleteIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Delete Counsellor
            </Typography>
            {isSubmitted ? (
              <Typography variant="body1" color="black" sx={{ mt: 2 }}>
                {deleteStatus}
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
                  value={counsellorId}
                  onChange={(e) => setCounsellorId(e.target.value)}
                />
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                  style={{ backgroundColor: 'black', color: 'white' }}
                >
                  Delete Counsellor
                </Button>
              </Box>
            )}
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="/" variant="body2">
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

export default DeleteCounsellor;
