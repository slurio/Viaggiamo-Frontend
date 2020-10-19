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
    console.log(this.state.voices)
    return(
      <Container>
          {/* <SpeechInput text={this.state.text} renderChange={this.renderChange} renderInputLang={this.renderInputLang}/>
        <SpeechOutput text={this.state.text} inputLang={this.state.inputLang}/> */}
        <SpeechInput voices={this.state.voices} text={this.state.text} renderChange={this.renderChange} renderInputLang={this.renderInputLang}/>
        <SpeechOutput voices={this.state.voices} text={this.state.text} inputLang={this.state.inputLang}/>
      </Container>
    )
  }

}

const Container = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin: auto;
  font-size: 65%;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
  `