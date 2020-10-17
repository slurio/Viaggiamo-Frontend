import React from 'react'
import styled from 'styled-components'

function Navbar(){
  return(
    <Container>
      <a href="/">Home</a>
      <a href="/">Lessons</a>
      <a href="/">Speech/Text</a>
      <a href="/">Messages</a>
      <a href="/">Log Out</a>
    </Container>
  )
}
export default Navbar

const Container = styled.div`
  display: flex;
  top: 0;
  background-color: #191b1f;
  width: 100vw;
  height: 6vh;
  justify-content: space-around;
  align-items: center;
  & > a{
    color: #870033;
    text-decoration: none;
  }
  `