import React from 'react'
import styled from 'styled-components'
import globe from '../images/worldlogo.png'


function Login(props){ 
  function login(e){
    e.preventDefault()
    props.login(e.target.user.value)
  }
  return(
    <Container>
      <Img id="logo" style={{maxWidth: "35vw", maxHeight: "35vh", marginLeft: "auto", marginRight: "auto" }} src={globe} alt="" />
      <Title>VIAGGIAMO</Title>
      <Form onSubmit={login}>
        <Label>Username </Label>
        <input type="text" name="user" placeholder="type in username"></input>
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
const Label = styled.label `
  letter-spacing: 2px;
  padding-bottom: 12px;
  font-weight: bold;
` 
const Title = styled.h2`
  color: #A594F9;
  font-weight: bold;
  letter-spacing: 4px;
  font-size: calc(25px + 2vmin);
`

const Img = styled.img`
  max-width: 80%;
  border-radius: 30px;
  `

const Form = styled.form` 
  color: #EBEBEB;
  display: flex;
  flex-direction: column;
  margin-top: 30px;
  margin-bottom: 50px;
  padding: 20px;
  background-color: #272727;
  font-size: calc(8px + 2vmin);
  border-radius: 10px;
  width: 60vw;
  box-shadow: 0px 8px 8px 2px #1c1c1c;
  border: none;
  & > input {
    font-size: calc(10px + 2vmin);
  }
  @media (min-width: 768px) {
    width: 25vw;
  }
  `

const Button = styled.button`
  margin-top: 20px;
  font-weight: bold;
  color: #A594F9;
  background-color: #333333;
  border: 2px solid #333333;
  border-radius: 10px;
  padding: 6px;
  font-size: calc(10px + 2vmin);
  &:hover{
    color: #EBEBEB;
    background-color: #A594F9;
    cursor: pointer;
  }
  `