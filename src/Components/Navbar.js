import React, { useState } from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom';
import oraqleScript from '../fonts/OraqleScript/OraqleScript.woff';

function Navbar(){

  let [linkDisplay, setLinkDisplay] = useState('links')

  function openNavbar() {
    linkDisplay === 'links'
    ? setLinkDisplay('')
    : setLinkDisplay('links')
  }

  return(
    <Container>
      <div className="top">
        <NavLink to="/" className="home" >Viaggiamo</NavLink>
        <svg id="icon" onClick={openNavbar} viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" width="25" height="30"><path d="M0 5.5h15m-15-4h15m-15 8h15m-15 4h15" stroke="currentColor"></path></svg>
      </div>

      <div className={`bottom ${linkDisplay}`}>
        <NavLink to="/lessons"  >Lessons</NavLink>
        <NavLink to="/speech" >Speech/Text</NavLink>
        <NavLink to="/messages" >Messages</NavLink>
        <NavLink to="/" >Log Out</NavLink>
      </div>
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

  & > div.bottom a{
    color: #F4F4F9;
    text-decoration: none;
    padding: 5px;
    font-size: 25px;
  }
  & > div.top a.home{
    /* potential colors 874876, d5cbe6, 443e86, d2869c */
    color: #d2869c;
    font-size: 50px;
    font-family: 'oraqleScript';
    text-decoration: none;
  }
  & > div.top{
    justify-content: space-around;
    width: 100vw;
    align-items: center;
    display: flex;
  }

  @media (min-width: 768px) {
    justify-content: space-around;
    #icon {
      display: none;
    }
    & > div.top{
      width: 20vw;
      margin-right: -5vw;
    }
    & > div.bottom{
      display: flex;
      width: 80vw;
      justify-content: space-around;
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
    & > div.bottom{
      display: flex;
      flex-direction: column;
    }
    & > div.links{
      display: none;
    }    
  }
  `