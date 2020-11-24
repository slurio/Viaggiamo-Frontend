import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom';

function Navbar(props){

  function openNavbar() {
    const links = document.querySelector('.links')
    links.style.height === '200px'
    ? links.style.height = '0px'
    : links.style.height = '200px'
  }

  function closeNavbar() {
    if(window.matchMedia("(max-width: 768px)").matches){
      document.querySelector('.links').style.height = '0px'
    }
  }

  return(
    <Container>

      <Top>
        <NavLink to="/" className="home" onClick={closeNavbar}>VIAGGIAMO</NavLink>
        <svg id="icon" onClick={openNavbar} viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" width="25" height="30"><path d="M0 5.5h15m-15-4h15m-15 8h15m-15 4h15" stroke="currentColor"></path></svg>
      </Top>

      <Bottom className={'links'}>
        <NavLink to="/endless" onClick={closeNavbar} >ENDLESS RUN</NavLink>
        <NavLink to="/lessons" onClick={closeNavbar} >LESSONS</NavLink>
        <NavLink to="/speech" onClick={closeNavbar} >TRANSLATOR</NavLink>
        <NavLink to="/messages" onClick={closeNavbar} >MESSAGES</NavLink>
        <NavLink to="/" onClick={props.logout} >LOG OUT</NavLink>
      </Bottom>

    </Container>
  )
}
export default Navbar

const Container = styled.div`
  display: flex;
  top: 0;
  background-color: #272727;
  width: 100vw;
  align-items: center;
  box-shadow: 0px 8px 8px 2px #1c1c1c;
  @media (min-width: 768px) {
    justify-content: space-around;
    padding: 20px;
    #icon {
      display: none;
    }
  }
  @media (max-width: 768px) {
    flex-direction: column;
    & > .links{
      transition: .5s;
      height: 0px;
      overflow: hidden;
      background-image: linear-gradient(#272727 10%, #7468ad); 
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
    color: #A594F9;
    font-size: 25px;
    font-weight: 900;
    letter-spacing: 4px;
    text-decoration: none;
    &:hover{
      color: #EBEBEB;
      cursor: pointer;
    }
  }
  @media (min-width: 768px) {
    width: 20vw;
  }
  @media (max-width: 768px) {
    padding: 20px;
  }
  `

const Bottom = styled.div`
  font-weight: 500;
  display: flex;
  a {
    color: #EBEBEB;
    text-decoration: none;
    padding: 5px;
    font-size: 20px;
    letter-spacing: 3px;
    &:hover{
      color: #A594F9;
      cursor: pointer;
    }
  }
  @media (min-width: 768px) {
    width: 80vw;
    justify-content: space-around;
  }
  @media (max-width: 768px) {
    flex-direction: column;
  }
  `