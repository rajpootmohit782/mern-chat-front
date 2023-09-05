import React from 'react';
import './myStyles.css';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export default function login() {
  return (
    <div className="login-container">
      {/*  <div className="image-container">
      <img src={} alt="logo" className="logo" />
    </div> */}

      <div className="login-box">
        <p className="login-text"> Login Your Account</p>
        <TextField id="standard-basic" label="Username" variant="outlined" />
        <TextField id="standard-basic" label="Password" variant="outlined" />
        <Button variant="outlined">Login</Button>
      </div>
    </div>
  );
}
