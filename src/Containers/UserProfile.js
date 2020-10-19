import React from 'react'
import UserAchievements from '../Components/UserAchievements'
import UserBio from '../Components/UserBio'
import styled from 'styled-components'

export default function UserProfile(props) {
    return(
      <Container>
        <InnerContainer>
          <UserBio updateProfile={props.updateProfile} currentUser={props.currentUser}/>
        </InnerContainer>
        
        <InnerContainer>
          <UserAchievements currentUser={props.currentUser}/>
        </InnerContainer>
      </Container>
    )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  padding: 20px;
  max-width: 100vw;
  @media (min-width: 768px) {
    margin-top: auto;
    margin-bottom: auto;
    flex-direction: row-reverse;
  }
  @media (max-width: 768px) {
    align-items: center;
  }
  `

const InnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 70vw;
  background-color: #1b232c;
  box-shadow: 0px 0px 30px #A594F9;
  border-radius: 10px;
  padding: 20px;
  @media (min-width: 768px) {
    width: 40vw;
  }
  @media (max-width: 768px) {
    margin: 20px;
  }
  `