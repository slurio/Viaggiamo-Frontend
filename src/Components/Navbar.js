import React, { useState } from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom';
import oraqleScript from '../fonts/OraqleScript/OraqleScript.woff';

function Navbar(props){

  let [linkDisplay, setLinkDisplay] = useState('hideLinks')

  function openNavbar() {
    linkDisplay === 'hideLinks'
    ? setLinkDisplay('showLinks')
    : setLinkDisplay('hideLinks')
  }

  function closeNavbar() {
    setLinkDisplay('hideLinks')
  }

  return(
    <Container>

      <Top>
        <NavLink to="/" className="home" onClick={closeNavbar} >Viaggiamo</NavLink>
        <svg id="icon" onClick={openNavbar} viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" width="25" height="30"><path d="M0 5.5h15m-15-4h15m-15 8h15m-15 4h15" stroke="currentColor"></path></svg>
      </Top>

      <Bottom className={linkDisplay}>
        <NavLink to="/lessons" onClick={closeNavbar} >Lessons</NavLink>
        <NavLink to="/speech" onClick={closeNavbar} >Speech/Text</NavLink>
        <NavLink to="/messages" onClick={closeNavbar} >Messages</NavLink>
        <NavLink to="/" onClick={props.logout} >Log Out</NavLink>
      </Bottom>

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
  align-items: center;
  @media (min-width: 768px) {
    justify-content: space-around;
    #icon {
      display: none;
    }
  }
  @media (max-width: 768px) {
    flex-direction: column;
    & > .hideLinks{
      display: none;
    }
    & > .showLinks{
      /* background-color: #525252; */
      background-image: linear-gradient(#303030 5%, #685d9e); 
      /* alternate colors 685d9e 7c6fbd */
      text-align: center;
      width: 100vw;
    }
  }
  `

const Top = styled.div`
  justify-content: space-around;
  width: 100vw;
  align-items: center;
  display: flex;
  a.home{
    /* potential colors 874876, d5cbe6, 443e86, d2869c */
    color: #A594F9;
    font-size: 50px;
    font-family: 'oraqleScript';
    text-decoration: none;
  }
  @media (min-width: 768px) {
    width: 20vw;
    margin-right: -5vw;
  }
  `

const Bottom = styled.div`
  display: flex;
  font-weight: bold;
  a {
    color: #F4F4F9;
    text-decoration: none;
    padding: 5px;
    font-size: 25px;
  }
  @media (min-width: 768px) {
    width: 80vw;
    justify-content: space-around;
  }
  @media (max-width: 768px) {
    flex-direction: column;
  }
  `