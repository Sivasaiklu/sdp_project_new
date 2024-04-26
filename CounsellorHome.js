import React from 'react';
import { Link } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { useLocation } from 'react-router-dom';

const CounsellorHome = () => {
  const location = useLocation();
  const username = location.state?.name || 'Guest';

  const containerStyle = {
    backgroundImage: 'url("https://images.pexels.com/photos/326333/pexels-photo-326333.jpeg?cs=srgb&dl=pexels-pixabay-326333.jpg&fm=jpg")', // Replace with the actual path
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    minHeight: '76.3vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '50px',
  };
  

  return (
    <div style={containerStyle}>
      <Typography variant="h3" style={{ color: 'white', fontFamily: 'sans-serif', fontSize:'30'}}>
        Welcome {username} !
      </Typography> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <Card style={{ backgroundColor:'#DA9E75', padding:'75px', border:'5px solid white', alignItems:'center', borderRadius:'50px'}}>
        <CardContent>
          <Typography variant="h5" component="div">
            <Link to="/counsellor-appointments" style={{borderRadius:'10px',  border:'3px solid black', backgroundColor:'white', color:'black', textDecoration:'none'}}>
              My Appointments
            </Link>
          </Typography> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          
          <Typography variant="h5" component="div">
            <Link to="/" style={{borderRadius:'10px',  border:'3px solid black', backgroundColor:'white', color:'black', textDecoration:'none'}}>
              Logout
            </Link>
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default CounsellorHome;
