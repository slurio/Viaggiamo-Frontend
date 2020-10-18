import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom';

function Navbar(){
  return(
    <Container>
      <NavLink to="/" exact >Home</NavLink>
      <NavLink to="/lessons" exact >Lessons</NavLink>
      <NavLink to="/speech" exact >Speech/Text</NavLink>
      <NavLink to="/messages" exact >Messages</NavLink>
      <NavLink to="/" exact >Log Out</NavLink>
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