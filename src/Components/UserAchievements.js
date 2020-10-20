import React from 'react'
import styled from 'styled-components'
import flagFR from '../images/french.png'
import flagGE from '../images/german.png'
import flagIT from '../images/italian.png'
import flagES from '../images/spanish.png'
// import trophy from '../images/trophy.png'
import trophy from '../images/tropyIcon.png'

function UserAchievements(props){
  return(
    <>
      <img style={{maxWidth: "15vw", maxHeight: "15vh", marginLeft: "auto", marginRight: "auto" }} src={trophy} alt="" />
      <Header>Achievements</Header>

      <AchievementContainer>
        <AchievementImage src={flagES} alt="" />
        Spanish - {props.currentUser.spanish}/10
      </AchievementContainer>
      
      <AchievementContainer>
        <AchievementImage src={flagGE} alt="" />
        German - {props.currentUser.german}/10
      </AchievementContainer>
      
      <AchievementContainer>
        <AchievementImage src={flagIT} alt="" />
        Italian - {props.currentUser.italian}/10
      </AchievementContainer>
      
      <AchievementContainer>
        <AchievementImage src={flagFR} alt="" />
        French - {props.currentUser.french}/10
      </AchievementContainer>
    </>
  )
}
export default UserAchievements

const AchievementContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  `

const AchievementImage = styled.img`
  max-width: 15vw;
  max-height: 15vh;
  margin: 2px;
  padding: 5px;
  `
const Header = styled.h3`
  padding: 20px;
  font-weight: bold;
  letter-spacing: 3px;
  `