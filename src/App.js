import React, { useState, useEffect } from 'react'
import { Route, withRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import SpeechText from './Containers/SpeechText'
import Message from './Containers/Message'
import UserProfile from './Containers/UserProfile'
import Lessons from './Containers/Lessons'
import EndlessRun from './Containers/EndlessRun'
import Login from './Components/Login'
import Navbar from './Components/Navbar'

function App() {
  let [currentUser, setCurrentUser] = useState('')
  let [categories, setCategories] = useState('')
  let [voices, setVoices] = useState('')
  let [selectedCategory, setSelectedCategory] = useState('')

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
    fetch(`http://localhost:3001/users/${currentUser.id}`, {
      method: "PATCH",
      headers: { "accept": "application/json" },
      body: img
    })

    const options = {
      method: "PATCH",
      headers: { 
        "content-type": "application/json",
        "accept": "application/json"
      },
      body: JSON.stringify({bio})
    }
    fetch(`http://localhost:3001/users/${currentUser.id}`, options)    
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
          // setSelectedCategory(oldCategory.title)
        }else {
          let updatedCategories = [category,...currentUser.categories]
          setCategories(updatedCategories)
          // setSelectedCategory(category.title)
        }
      })
  }

  function updateAchievements(answerCount, lang) {
    if(answerCount < currentUser[`${lang.toLowerCase()}`]){return}

    const options = {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
        "accept": "application/json"
      },
      body: JSON.stringify({user: {[lang.toLowerCase()]: answerCount}})

    }
    fetch(`http://localhost:3001/users/${currentUser.id}`, options)
      .then(resp=>resp.json())
      .then(data=> setCurrentUser(data))
  }


  return (
    <div className="App">
      {currentUser === '' 
        ? <Route path="/" exact render={() => <Login login={login}/>} />
        : <>
            <Navbar logout={logout} />
            <Route path="/" exact render={() => <UserProfile updateProfile={updateProfile} currentUser={currentUser}/>} />
            <Route path="/speech" render={() => <SpeechText saveMessage={saveMessage} voices={voices} categories={currentUser.categories}/>}  />
            <Route path="/messages" render={() => <Message categories={categories} voices={voices}/>}/>
            <Route path="/lessons" render={() => <Lessons updateAchievements={updateAchievements}/>} />
            <Route path="/endless" render={() => <EndlessRun />} />
          </>
      }
    </div>
  );
}

export default  withRouter(App);


// button backgrounds: #333333
// button text color: #A594F9
// button background hover: #A594F9
// button text color: #272727 || #EBEBEB

// card background: #272727
// card shadow: box-shadow: 0px 8px 8px 2px #1c1c1c;