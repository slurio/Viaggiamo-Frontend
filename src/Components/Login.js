import React from 'react'
import styled from 'styled-components'
import logo from '../images/logo1.png'
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
  height: 100vh;
  `
const Title = styled.h2`
  color: #66fcf1;
  font-size: calc(40px + 2vmin);
`

const Img = styled.img`
  max-width: 80%;
  border-radius: 30px;
  `

const Form = styled.form`
  font-weight: bold;
  color: #EBEBEB;
  display: flex;
  flex-direction: column;
  margin-top: 30px;
  margin-bottom: 50px;
  padding: 10px;
  border: 4px solid #66fcf1;
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
  border: 2px solid #45a29e;
  border-radius: 10px;
  padding: 6px;
  font-size: calc(10px + 2vmin);
  &:hover{
    color: #EBEBEB;
    background-color: #45a29e;
    cursor: pointer;
  }
  `