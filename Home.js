import * as React from 'react';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import home3 from '../images/home3.jpg';
import Fab from '@mui/material/Fab';
import ChatIcon from '@mui/icons-material/Chat';

function Home() {
  const handleChatButtonClick = () => {
    // Basic chat options
    const chatOptions = [
      { id: 1, message: 'Hello! How can I assist you today?' },
      { id: 2, message: 'What brings you here?' },
      { id: 3, message: 'Feel free to ask me anything.' }
    ];
  
    // Randomly select a chat option
    const randomOption = chatOptions[Math.floor(Math.random() * chatOptions.length)];
  
    // Log the selected message to the console (you can replace this with your chat logic)
    console.log(randomOption.message);
  };
  

  return (
    <div>
      <Container sx={{ mt: 4, mb: 2, maxWidth: '600px' }} style={{ position: 'absolute' , top: '25%', left: '50%', transform: 'translate(-50%, -50%)'}}>
        <Typography variant="h4" sx={{ mb: 2, color: 'black', fontWeight:500, fontSize:'48px' }}>
          Welcome to Streamlining Student Support
        </Typography>
        <Typography variant="body1" paragraph sx={{ color: 'black', fontSize:'18px' }}>
          Our system is designed to assist students and counselors in managing counseling sessions,
          appointments, and other related activities. Feel free to explore the features and utilize
          the tools available to enhance the counseling process.
        </Typography>
        <Typography variant="body1" paragraph sx={{ color: 'black', fontSize:'18px' }}>
          Whether you are a student seeking counseling services or a counselor managing appointments
          and sessions, this system provides a user-friendly interface to streamline the counseling
          workflow.
        </Typography>
      </Container>
      <center>
        <img
          src={home3}
          alt='img'
          style={{ width: '100%', height:'663px' }} // Adjust width and height as needed
        />   
      </center>
      {/* Chat bot button */}
      <Fab
        color="primary"
        aria-label="chat"
        style={{ position: 'fixed', bottom: '20px', right: '20px' }}
        onClick={handleChatButtonClick}
      >
        <ChatIcon />
      </Fab>
    </div>
  );
}

export default Home;
