//import logo from './logo.svg';
//import './App.css';
import './components/style.css';
import SignInScreen from './screens/signInScreen.js';
import SignUpScreen from './screens/signUpScreen.js';
import ChatScreen from './screens/chatScreen';
import React from 'react';

function App() {
  return (
    <div className="App">
      {/* <SignInScreen /> */}
      {/* <SignUpScreen/> */}
      <ChatScreen />
    </div>
  );
}

export default App;
