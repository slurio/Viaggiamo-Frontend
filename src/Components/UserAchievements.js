import React from 'react'
import styled from 'styled-components'
import flagEN from '../images/english.png'
import flagFR from '../images/french.png'
import flagGE from '../images/german.png'
import flagIT from '../images/italian.png'
import flagES from '../images/spanish.png'
import trophy from '../images/trophy.png'

function UserAchievements(props){
  return(
    <Container>
        <img style={{maxWidth: "15vw", maxHeight: "15vh", marginLeft: "auto", marginRight: "auto" }} src={trophy} alt="" />
        <h3>Achievements</h3>

      <AchievementContainer>
        <AchievementImage src={flagES} alt="" ></AchievementImage>
        <AchievementText>Spanish - 2/10</AchievementText>
      </AchievementContainer>
      
      <AchievementContainer>
        <AchievementImage src={flagGE} alt="" ></AchievementImage>
        <AchievementText>German - 4/10</AchievementText>
      </AchievementContainer>
      
      <AchievementContainer>
        <AchievementImage src={flagEN} alt="" ></AchievementImage>
        <AchievementText>English - 10/10</AchievementText>
      </AchievementContainer>
      
      <AchievementContainer>
        <AchievementImage src={flagIT} alt="" ></AchievementImage>
        <AchievementText>Italian - 1/10</AchievementText>
      </AchievementContainer>
      
      <AchievementContainer>
        <AchievementImage src={flagFR} alt="" ></AchievementImage>
        <AchievementText>French - 6/10</AchievementText>
      </AchievementContainer>

    </Container>
  )
}
export default UserAchievements

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 60vw;
  padding: 20px;
  margin: 30px;
  border: 2px solid #967dbf;
  border-radius: 10px;
  @media (min-width: 768px) {
    height: 80vh;
  }
  `

const AchievementContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  `

const AchievementImage = styled.img`
  max-width: 15vw;
  max-height: 15vh;
  margin: 2px;
  padding: 5px;
  `

const AchievementText = styled.p`
  `