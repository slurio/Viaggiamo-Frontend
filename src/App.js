import React, { useState, useEffect } from 'react'
import { Route, Redirect, withRouter } from 'react-router-dom';
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
  let [categories, setCategories] = useState('')
  let [voices, setVoices] = useState('')

  useEffect(() => {
    window.speechSynthesis.onvoiceschanged = () => {
      return setVoices(window.speechSynthesis.getVoices()) 
    }
  },[])

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
      .then(data=> {
        setCurrentUser(data)
        setCategories(data.categories)
      })
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

  function saveMessage(category, message) {

    const options = {
      method: "POST",
      headers: {
        "content-type": "application/json",
        "accept": "application/json"
      },
      body: JSON.stringify({message, category, currentUser})
    }

    fetch('http://localhost:3001/categories/', options)
      .then(resp=>resp.json())
      .then(category=> {
        
        if(categories.find(cat => category.title === cat.title )){
          let updatedCategories = [...currentUser.categories]
          let oldCategory = updatedCategories.find(cat => category.title === cat.title )
          let index = updatedCategories.indexOf(oldCategory)
          updatedCategories[index] = category
          setCategories(updatedCategories)
          console.log("if title existed", updatedCategories)  
        }else {
          let updatedCategories = [category,...currentUser.categories]
          setCategories(updatedCategories)
          console.log("if title does not exist", updatedCategories)  
        }
        // console.log(this.props.history)
        // this.props.history.push("/messages")
        // renderRedirect()
      })
  }

  // const renderRedirect = () => {
  //   console.log('redirect')
  //   return <Redirect to="/messages" />
  // }

  return (
    <div className="App">
      {currentUser === '' 
        ? <Route path="/" exact render={() => <Login login={login}/>} />
        : <>
            <Navbar logout={logout} />
            <Route path="/" exact render={() => <UserProfile updateProfile={updateProfile} currentUser={currentUser}/>} />
            <Route path="/speech" render={() => <SpeechText saveMessage={saveMessage} voices={voices} categories={currentUser.categories}/>}  />
            <Route path="/messages" render={() => <Message categories={categories} voices={voices}/> } />
            <Route path="/lessons" render={() => <Lessons />} />
          </>
      }
    </div>
  );
}

export default  withRouter(App);
