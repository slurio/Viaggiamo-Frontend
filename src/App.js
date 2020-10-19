import React, { useState } from 'react'
import { Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import SpeechText from './Containers/SpeechText'
import Message from './Containers/Message'
import UserProfile from './Containers/UserProfile'
import Lessons from './Containers/Lessons'
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
  
  function updateProfile(bio, img) {

    console.log('img', img)

    // can't figure out how to upload an image.
    // const formData = new FormData
    // formData.append('file', img)

    // console.log('formdata', formData)

    const options = {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
        "accept": "application/json"
      },
      body: JSON.stringify({img})
    }
    fetch(`http://localhost:3001/users/${currentUser.id}`, options)
      .then(resp=>resp.json())
      .then(data=> setCurrentUser(data))

  }

  function logout() {
    setCurrentUser('')
  }

  return (
    <div className="App">
      {currentUser === '' 
        ? <Route path="/" exact render={() => <Login login={login}/>} />
        : <>
            <Navbar logout={logout} />
            <Route path="/" exact render={() => <UserProfile updateProfile={updateProfile} currentUser={currentUser}/>} />
            <Route path="/speech" render={() => <SpeechText />} />
            <Route path="/messages" render={() => <Message categories={currentUser.categories}/>} />
            <Route path="/lessons" render={() => <Lessons />} />
          </>
      }
    </div>
  );
}

export default App;
