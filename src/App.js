import React from 'react'
// import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import SpeechText from './Containers/SpeechText'
import Message from './Containers/Message'
import UserProfile from './Containers/UserProfile'

function App() {
  return (
    <div className="App">
      {/* <SpeechText /> */}
      <UserProfile />
    </div>
  );
}

export default App;
