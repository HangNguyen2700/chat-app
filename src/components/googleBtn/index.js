import React from "react";
import GoogleButton from 'react-google-button';
import ggBtnStyle from './style.js';

const GoogleBtn = () => {
  return (
    <GoogleButton
      type="light"
      label="Continue with Google"
      onClick={() => { console.log('Google button clicked') }}
      style={ggBtnStyle}
    />
  );
}

export default GoogleBtn;