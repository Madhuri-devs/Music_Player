import React from 'react';
import { Container, Typography, Button, Box, TextField, IconButton ,Stack} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

// import image2 from '../Images/bpcl2.png';
// import bgimage from '../Images/bg-bpcl.png'
import HighlightOffRoundedIcon from '@mui/icons-material/HighlightOffRounded';

function VerifyBottle() {
    const navigate = useNavigate();

    const login = () => {
        navigate('/');
      };

    const [inputValue, setInputValue] = useState('');
    const [error, setError] = useState('');
  
    const handleInputChange = (event) => {
      const value = event.target.value;
      setInputValue(value);
      // Validate the input here and set the error state if needed
      if (value.trim() === '') {
        setError('Enter a Valid Label QR or Case QR Code');
      } else {
        setError('');
      }
    };
  
    const handleSubmit = () => {
      // Validate the input again before submitting
      if (inputValue.trim() === '') {
        setError('Enter a Valid Label QR or Case QR Code');
      } else {
        // Clear any previous errors
        setError('');
        // Handle the submit logic here
        navigate('/');
      }
    };
  
  const backgroundImage = {
    // backgroundImage: `url(${bgimage})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };

  const colorStyles = {
    backgroundColor: 'rgba(255, 255, 255, 0.6)',
    width: '100%',
    textAlign: 'center',
    borderRadius:'20px',
    paddingBottom: '50px',
    position: 'relative', // Added to position the close button
    marginTop: '10vh',
    minHeight: '20vh',
  };

  const labelStyles = {
    fontWeight: 'bold',
    marginBottom: '10px',
  };

  return (
    <div style={backgroundImage}>
      <Container maxWidth="lg" mt={2}>
        <Box style={colorStyles} mt={2} pt={20} mb={20}>
        <HighlightOffRoundedIcon
            onClick={login}
            sx={{
              position: 'absolute',
              top: '10px',
              right: '10px',
            backgroundColor:'#0b6396',
            border:'#fff',
            color:'white',
              cursor: 'pointer',
              fontSize: '2rem',
              borderRadius: '50%',
              transition: 'transform 0.3s ease',
              '&:hover': {
                color: 'red',
                backgroundColor:'yellow',
                transform: 'rotate(180deg)',
              },
            }}
          />
          
          <Typography variant="h4" style={{ color: '#007bff', fontWeight: 'bold' }}>
            Verify Product
          </Typography><pre/>
          
          <label style={labelStyles}>Enter Label QR or Case QR code</label>
          <br /><pre></pre>
          <TextField
            size="small"
            variant="outlined"
            placeholder="Enter QR code"
            value={inputValue}
            onChange={handleInputChange}
             error={Boolean(error)}
            helperText={error}
          />
        
          <br /><br />
          <Button variant="contained" color="primary" onClick={handleSubmit}>
            Submit
          </Button>
          <br /><pre></pre>
          <br></br>
          <Box>
            {/* <img src={image2} style={{ height: '10%', maxWidth: '100%' }} alt="Mak Bottles img" /> */}
          </Box>
        </Box>
      </Container>
    </div>
  );
}

export default VerifyBottle;
