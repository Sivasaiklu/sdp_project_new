import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Popover from '@mui/material/Popover';
import vishnu from '../images/vishnu.jpg';
import siva from '../images/siva.jpg';
import vasanth from '../images/vasanth.jpg';

const teamMembers = [
  {
    name: 'Vishnu',
    std: 'BTech',
    email: 'cmvishnubabu08@gmail.com',
    phone: '9052983777',
    image: vishnu,
  },
  {
    name: 'Sivasai',
    std: 'BTech',
    email: 'sivasainookala@gmail.com',
    phone: '9030189361',
    image: siva,
  },
  {
    name: 'Vasanth',
    std: 'BTech',
    email: 'elluruvasanth4604@.com',
    phone: '8106941512',
    image: vasanth,
  },
];

const AboutUs = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedMember, setSelectedMember] = useState(null);

  const handleClick = (event, member) => {
    setAnchorEl(event.currentTarget);
    setSelectedMember(member);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setSelectedMember(null);
  };

  const open = Boolean(anchorEl);

  return (
    <div style={{ backgroundColor: '#2F2963', height: '627px', padding: 20 }}>
      <center><h1 style={{ marginTop: 20, color: 'white' }}>Our Project</h1></center>
      <Card style={{ maxWidth: 1400, margin: 'auto', padding: 20, backgroundColor: '#B0C4DE', color: 'black' }}>
        <CardContent>
          <p style={{ marginBottom: 20, fontSize: 16, lineHeight: 1.5 }}>
            A Student Counseling Management System (SCMS) streamlines counseling and student management in educational institutions.
            Key functionalities include user management, student profiles, counseling services, communication, document management,
            attendance tracking, and analytics. Modules cover aspects like student information, counseling, communication, document
            repository, analytics, and more. The system enhances efficiency, communication, and data-driven decision-making, promoting
            a user-friendly and secure experience.
          </p>
        </CardContent>
      </Card>
      <center><h1 style={{ marginTop: 10, color: 'white' }}>Our Team</h1></center>

      <div style={{ display: 'flex', justifyContent: 'center', marginTop: 10 }}>
        {teamMembers.map((member, index) => (
          <div key={index}>
            <Card
              style={{ width: 200, margin: 10, backgroundColor: '#2F2963', cursor:'pointer' }}
              onClick={(event) => handleClick(event, member)}
            >
              <img src={member.image} alt={member.name} style={{ width: '100%' }} />
            </Card>
            <Popover
              open={open && selectedMember === member}
              anchorEl={anchorEl}
              onClose={handleClose}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'center',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'center',
              }}
            >
              <div style={{ padding: 20 }}>
                <p>{member.name}</p>
                <p>{member.std}</p>
                <p>{member.email}</p>
                <p>{member.phone}</p>
              </div>
            </Popover>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutUs;
