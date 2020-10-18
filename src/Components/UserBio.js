import React from 'react'
import styled from 'styled-components'

function UserBio(props){
  return(
    <Container>
      <h3>Username</h3>
      <Img src="https://www.americanaircraftsales.com/wp-content/uploads/2016/09/no-profile-img.jpg" />
      <p>bio</p>
    </Container>
  )

}
export default UserBio

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 70vw;
  padding: 20px;
  margin: 20px;
  border: 6px solid #d2869c;
  border-radius: 10px;
  @media (min-width: 768px) {
    width: 40vw;
    flex: 1;
  }
  `

const Img = styled.img`
  max-height: 30vh;
  max-width: 30vw;
  border-radius: 30px;
  box-shadow: 0px 0px 30px #d2869c;
  /* 967dbf */
  `