import React from 'react';
import GoogleButton from 'react-google-button';
import googleButtonStyle from './style.js';

export const GoogleBtn = () => {
  return (
    <GoogleButton
      type="light"
      label="Continue with Google"
      onClick={() => {
        console.log('Google button clicked');
      }}
      style={googleButtonStyle}
    />
  );
};
