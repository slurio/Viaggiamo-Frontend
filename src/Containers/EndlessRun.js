import React from 'react'
import styled from 'styled-components'
import EndlessStart from '../Components/EndlessStart'
import EndlessLevel from '../Components/EndlessLevel'

export default class EndlessRun extends React.Component {
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

  resetEndless = () => {
    this.setState({
      currentLang: 'French',
      start: false,
      QnA: {}
    })
  }

  render(){
    return(
      <Container>
        {
          this.state.start
          ? <EndlessLevel QnA={this.state.QnA} updateAchievements={this.props.updateAchievements} resetEndless={this.resetEndless} renderAnswer={this.renderAnswer} currentLang={this.state.currentLang}/>
          : <EndlessStart renderAnswer={this.renderAnswer} startCourse={this.startCourse}/>
        }
      </Container>
    )
  }
}

const Container = styled.div`
  background-color: #272727;
  box-shadow: 0px 8px 8px 2px #1c1c1c;
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