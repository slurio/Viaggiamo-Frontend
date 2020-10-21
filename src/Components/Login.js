import React from 'react'
import styled from 'styled-components'
import globe from '../images/worldlogo.png'
import world from '../images/world.png'
// import plane from '../images/whiteplane.png'
import plane from '../images/planeonly.png'


function Login(props){ 
  function login(e){
    e.preventDefault()
    props.login(e.target.user.value)
  }
  return(
    <Container>
      {/* <Img id="logo" style={{maxWidth: "35vw", maxHeight: "35vh", marginLeft: "auto", marginRight: "auto" }} src={globe} alt="" /> */}     
      <div class="logoContainer">
        <Img id="plane" style={{maxWidth: "30vw", maxHeight: "80vh" }} src={plane} alt="" />
        <Img id="world" style={{maxWidth: "35vw", maxHeight: "35vh"}} src={world} alt="" />      
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
  margin: 21.6%;
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