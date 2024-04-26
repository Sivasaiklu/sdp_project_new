import React from 'react';
import { Link } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { useLocation } from 'react-router-dom';

const StudentHome = () => {
  const location = useLocation();
  const username = location.state?.name || 'Guest';

  const containerStyle = {
    backgroundImage: 'url("https://img.freepik.com/free-vector/hand-drawn-back-school-background_23-2149464866.jpg")', // Replace with the actual path
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    minHeight: '75vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '50px',
  };
  

  return (
    <div style={containerStyle}>
      <Typography variant="h3" style={{ color: 'black', fontFamily: 'sans-serif', fontSize:'30'}}>
        Welcome {username} !
      </Typography> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <Card style={{ backgroundColor:'lightgreen', padding:'75px', border:'5px solid black', alignItems:'center', borderRadius:'50px'}}>
        <CardContent>
          <Typography variant="h5" component="div">
            <Link to="/counsellor" style={{borderRadius:'10px',  border:'3px solid black', backgroundColor:'orange', color:'black', textDecoration:'none'}}>
              View Counsellors
            </Link>
          </Typography> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <Typography variant="h5" component="div">
            <Link to="/student-appointments" style={{borderRadius:'10px', border:'3px solid black', backgroundColor:'orange', color:'black', textDecoration:'none'}}>
              My Appointments
            </Link>
          </Typography> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <Typography variant="h5" component="div">
            <Link to="/feedback" style={{borderRadius:'10px', border:'3px solid black', backgroundColor:'orange', color:'black', textDecoration:'none'}}>
              Feedback
            </Link>
          </Typography> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <Typography variant="h5" component="div">
            <Link to="/" style={{borderRadius:'10px',  border:'3px solid black', backgroundColor:'orange', color:'black', textDecoration:'none'}}>
              Logout
            </Link>
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default StudentHome;
