import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom';
import oraqleScript from '../fonts/OraqleScript/OraqleScript.woff';

function Navbar(){
  return(
    <Container>
      <NavLink to="/lessons" >Lessons</NavLink>
      <NavLink to="/speech" >Speech/Text</NavLink>
      <NavLink to="/" className="home">Viaggiamo</NavLink>
      <NavLink to="/messages" >Messages</NavLink>
      <NavLink to="/" >Log Out</NavLink>
    </Container>
  )
}
export default Navbar

const Container = styled.div`
  @font-face {
    font-family: 'oraqleScript';
    src: local('oraqleScript'), url(${oraqleScript}) format('woff');
  }
  display: flex;
  top: 0;
  background-color: #303030;
  width: 100vw;
  height: 6vh;
  justify-content: space-around;
  align-items: center;
  & > a{
    color: #F4F4F9;
    text-decoration: none;
  }
  & > a.home{
    color: #d2869c;
    /* potential colors 874876, d5cbe6, 443e86, d2869c */
    font-size: 50px;
    font-family: 'oraqleScript';
  }
  `