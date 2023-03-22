import React from 'react';
import './App.css';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: 'rgb(79, 68, 245)'}}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} >
            My Music App
          </Typography>
        </Toolbar>
      </AppBar>
      <form className='formLogin'>
        <TextField 
          id='standard-basic'
          label="Username *" 
          variant="standard"
          sx={{ 
            width: 400,
            marginTop: '20px' 
          }}
          />
        <TextField 
          id='standard-basic'
          label="Password *" 
          variant="standard"
          sx={{ 
            width: 400,
            marginTop: '20px' 
          }}
          />
        <div>
          <a href='#' path=''>
          <Button 
          variant="contained" 
          href="#" 
          sx={{ 
            width: 400,
             backgroundColor:'rgb(79, 68, 245)',
             marginTop: '30px'
            }}
          >
            LOGIN
          </Button>
          </a>               
        </div>
        
      </form>
    </Box>
      
  );
}