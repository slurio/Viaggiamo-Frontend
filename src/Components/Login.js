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
  height: 100vh;
  `

const Img = styled.img`
  max-width: 80%;
  border-radius: 30px;
  box-shadow: 0px 0px 20px #967dbf;
  `

const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 30px;
  margin-bottom: 50px;
  padding: 10px;
  border: 2px solid #967dbf;
  border-radius: 10px;
  width: 60vw;
  & > input {
    padding: 10px;
  }
  @media (min-width: 768px) {
    width: 30vw;
  }
  `

const Button = styled.button`
  margin-top: 5px;
  color: white;
  background-color: #282c34;
  border: 2px solid #870033;
  border-radius: 10px;
  padding: 10px;
  &:hover{
    background-color: #870033;
    cursor: pointer;
  }
  `