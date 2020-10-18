import React from 'react'
import styled from 'styled-components'

function UserBio(props){
  return(
    <>
      <h3>Username</h3>
      <Img src="https://www.americanaircraftsales.com/wp-content/uploads/2016/09/no-profile-img.jpg" />
      <p>bio</p>
    </>
  )

}
export default UserBio

const Img = styled.img`
  max-height: 30vh;
  max-width: 30vw;
  border-radius: 30px;
  box-shadow: 0px 0px 30px #d2869c;
  /* 967dbf */
  `