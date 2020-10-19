import React from 'react'
import styled from 'styled-components'
import logo from '../images/logo1.png'

function Login(props){ 
  function login(e){
    e.preventDefault()
    props.login(e.target.user.value)
  }
  return(
    <Container>
      <Img src={logo} alt="" />
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

const Img = styled.img`
  max-width: 80%;
  border-radius: 30px;
  box-shadow: 0px 0px 30px #d2869c;
  `

const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 30px;
  margin-bottom: 50px;
  padding: 10px;
  background-color: #303030;
  box-shadow: 0px 0px 30px #d2869c;
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
  color: white;
  background-color: transparent;
  border: 2px solid #870033;
  border-radius: 10px;
  padding: 6px;
  font-size: calc(10px + 2vmin);
  &:hover{
    background-color: #870033;
    cursor: pointer;
  }
  `