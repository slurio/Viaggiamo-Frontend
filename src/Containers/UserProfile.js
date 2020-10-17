import React from 'react'
import UserAchievements from '../Components/UserAchievements'
import UserBio from '../Components/UserBio'
import Login from '../Components/Login'
import styled from 'styled-components'

export default class UserProfile extends React.Component {
  state = {
    currentUser: ''
  }

  login = (username) => {
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
      .then(data=>this.setState({currentUser: data}))
  }

  render() {
    return(
      <>
        {this.state.currentUser === '' 
        ? <Login login={this.login}/>
        : 
          <Container>
            <UserBio currentUser={this.state.currentUser}/>
            <UserAchievements currentUser={this.state.currentUser}/>
          </Container>
        }
      </>
    )
  }
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 100vw;
  @media (min-width: 768px) {
    flex-direction: row-reverse
  }
  `