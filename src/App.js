import React, { useState, useEffect } from 'react'
// import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import SpeechText from './Containers/SpeechText'
import Message from './Containers/Message'
import UserProfile from './Containers/UserProfile'
import Login from './Components/Login'
import Navbar from './Components/Navbar'

function App() {
  let [currentUser, setCurrentUser] = useState('')

  function login(username) {
    const options = {
      method: "POST",
      headers: {
        "content-type": "application/json",
        "accept": "application/json"
      },
      body: JSON.stringify({username})
    }
    fetch('http://localhost:3001/users', options)
      .then(resp=>resp.json())
      .then(data=> setCurrentUser(data))
  }

  return (
    <div className="App">
      {currentUser === '' 
        ? <Login login={login}/>
        : <>
            <Navbar />
            <UserProfile currentUser={currentUser}/>
          </>
      }
    </div>
  );
}

export default App;
