import React from 'react'
import styled from 'styled-components'
import globe from '../images/worldlogo.png'
import oraqleScript from '../fonts/OraqleScript/OraqleScript.woff';


function Login(props){ 
  function login(e){
    e.preventDefault()
    props.login(e.target.user.value)
  }
  return(
    <Container>
      {/* <Img src={logo} alt="" /> */}
      <Img style={{maxWidth: "35vw", maxHeight: "35vh", marginLeft: "auto", marginRight: "auto" }} src={globe} alt="" />
      <Title>Viaggiamo</Title>
      <Form onSubmit={login}>
        <label>Username: </label>
        <input type="text" name="user"></input>
        <Button type="submit">Log In</Button>
      </Form>
    </Container>
  )
}
export default Login

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  height: 100vh;
  `
const Title = styled.h2`
  color: #A594F9;
  @font-face {
    font-family: 'oraqleScript';
    src: local('oraqleScript'), url(${oraqleScript}) format('woff');
  }
  font-family: 'oraqleScript';
  font-size: calc(60px + 2vmin);
`

const Img = styled.img`
  max-width: 80%;
  border-radius: 30px;
  `

const Form = styled.form`
  font-weight: bold;
  color: #A594F9;
  display: flex;
  flex-direction: column;
  margin-top: 30px;
  margin-bottom: 50px;
  padding: 10px;
  background-color: #303030;
  box-shadow: 0px 0px 30px #A594F9;
  border-radius: 10px;
  width: 60vw;
  & > input {
    font-size: calc(10px + 2vmin);
  }
  @media (min-width: 768px) {
    width: 25vw;
  }
  `

const Button = styled.button`
  margin-top: 5px;
  font-weight: bold;
  color: #EBEBEB;
  background-color: transparent;
  border: 2px solid #A594F9;
  border-radius: 10px;
  padding: 6px;
  font-size: calc(10px + 2vmin);
  &:hover{
    color: #A594F9;
    /* background-color: #A594F9; */
    cursor: pointer;
  }
  `