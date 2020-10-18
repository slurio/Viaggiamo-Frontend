import React from 'react'
import SpeechOutput from '../Components/SpeechOutput'
import SpeechInput from '../Components/SpeechInput'
import styled from 'styled-components'

export default class SpeechText extends React.Component {
  state ={
    text: '',
    inputLang: "en",
    voices: []
  }

  componentDidMount = () => {
    window.speechSynthesis.onvoiceschanged = () => {
        this.setState({
          voices: window.speechSynthesis.getVoices()
        })
      }
  }
    
  renderChange = (newText) => {
    this.setState({
      text: newText
    })
  }

  renderInputLang = (language) => {
    this.setState({
      inputLang: language
    })
  }
  
  render(){
    return(
      <Container>
        <SpeechInput voices={this.state.voices} text={this.state.text} renderChange={this.renderChange} renderInputLang={this.renderInputLang}/>
        <SpeechOutput voices={this.state.voices} text={this.state.text} inputLang={this.state.inputLang}/>
      </Container>
    )
  }

}

const Container = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin: 20px;
  `