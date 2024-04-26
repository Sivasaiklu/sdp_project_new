import React from 'react';
import { Link } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { useLocation } from 'react-router-dom';

const AdminHome = () => {
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
      <Card style={{ backgroundColor:'lightgreen', padding:'75px', paddingTop:'10px', paddingBottom:'100px', border:'5px solid black', alignItems:'center', borderRadius:'50px', height:'400px'}}>
        <CardContent>
          <Typography variant="h5" component="div">
            <Link to="/add-counsellor" style={{borderRadius:'10px',  border:'3px solid black', backgroundColor:'orange', color:'black', textDecoration:'none'}}>
              Add Counsellors
            </Link>
          </Typography> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <Typography variant="h5" component="div">
            <Link to="/update-counsellor" style={{borderRadius:'10px',  border:'3px solid black', backgroundColor:'orange', color:'black', textDecoration:'none'}}>
              Update Counsellors
            </Link>
          </Typography> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <Typography variant="h5" component="div">
            <Link to="/delete-counsellor" style={{borderRadius:'10px',  border:'3px solid black', backgroundColor:'orange', color:'black', textDecoration:'none'}}>
              Delete Counsellors
            </Link>
          </Typography> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <Typography variant="h5" component="div">
            <Link to="/sign-up-details" style={{borderRadius:'10px', border:'3px solid black', backgroundColor:'orange', color:'black', textDecoration:'none'}}>
              view signup details
            </Link>
          </Typography> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <Typography variant="h5" component="div">
            <Link to="/booking-details" style={{borderRadius:'10px', border:'3px solid black', backgroundColor:'orange', color:'black', textDecoration:'none'}}>
              view booking details
            </Link>
          </Typography> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <Typography variant="h5" component="div">
            <Link to="/contact-us-details" style={{borderRadius:'10px', border:'3px solid black', backgroundColor:'orange', color:'black', textDecoration:'none'}}>
              view contact us details
            </Link>
          </Typography> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <Typography variant="h5" component="div">
            <Link to="/counsellor-details" style={{borderRadius:'10px', border:'3px solid black', backgroundColor:'orange', color:'black', textDecoration:'none'}}>
              view counsellor details
            </Link>
          </Typography> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <Typography variant="h5" component="div">
            <Link to="/feedback-details" style={{borderRadius:'10px', border:'3px solid black', backgroundColor:'orange', color:'black', textDecoration:'none'}}>
              view Feedback details
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

export default AdminHome;
