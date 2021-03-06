import React from 'react'
import styled from 'styled-components'
import world from '../images/justworld.png'
import plane from '../images/justplane.png'


function Login(props){ 
  function login(e){
    e.preventDefault()
    props.login(e.target.user.value)
  }
  return(
    <Container> 
      <div className="logoContainer">
        <Img src={plane} alt="" />
        <Img src={world} alt="" />  
      </div>       
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
  margin: auto;
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
  @media (max-width: 768px) {
    min-width: 50vw;
    height: auto;
    margin-bottom: 20px
  }
  `

const Form = styled.form` 
  color: #EBEBEB;
  display: flex;
  flex-direction: column;
  margin: 30px 40px;
  padding: 20px;
  background-color: #272727;
  font-size: calc(10px + 2vmin);
  border-radius: 10px;
  width: 60vw;
  box-shadow: 0px 8px 8px 2px #1c1c1c;
  border: none;
  & > input {
    font-size: calc(10px + 2vmin);
  }
  @media (min-width: 768px) {
    width: 30vw;
  }
  `

const Button = styled.button`
  margin: 20px 50px;
  font-weight: bold;
  color: #A594F9;
  background-color: #333333;
  font-size: 20px;
  border: none;
  border-radius: 10px;
  padding: 6px 0;

  &:hover {
    color: #272727;
    background-color: #A594F9;
    cursor: pointer;
  }
  `