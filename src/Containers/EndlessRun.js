import React from 'react'
import styled from 'styled-components'
import EndlessStart from '../Components/EndlessStart'
import EndlessLevel from '../Components/EndlessLevel'

export default class EndlessGame extends React.Component {
  state = {
    currentLang: 'French',
    start: false,
    QnA: {}
  }

  renderAnswer = () => {
    fetch(`http://localhost:3001/endless/${this.state.currentLang}`)
      .then(resp=>resp.json())
      .then(data=> this.setState({QnA: data}))
  }

  startCourse = (lang) => {
    if(!lang){lang = "French"}
    fetch(`http://localhost:3001/endless/${lang}`)
      .then(resp=>resp.json())
      .then(data=> {
        this.setState({
          QnA: data,
          currentLang: lang,
          start: true
        })
      })
  }

  render(){
    return(
      <Container>
        {
          this.state.start
          ? <EndlessLevel QnA={this.state.QnA} renderAnswer={this.renderAnswer} currentLang={this.state.currentLang}/>
          : <EndlessStart renderAnswer={this.renderAnswer} startCourse={this.startCourse}/>
        }
      </Container>
    )
  }
}

const Container = styled.div`
  background-color: #1b232c;
  box-shadow: 0px 0px 30px #A594F9;
  border-radius: 10px;
  padding: 20px;
  display: flex;
  width: 80%;
  justify-content: center;
  align-items: center;
  margin: auto;
  @media (min-width: 768px) {
    width: 40%;
  }
  `