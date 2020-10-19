import React from 'react'
import SpeechOutput from '../Components/SpeechOutput'
import SpeechInput from '../Components/SpeechInput'
import styled from 'styled-components'

export default class SpeechText extends React.Component {
  state ={
    text: '',
    inputLang: "en",
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
        <SpeechInput voices={this.props.voices} text={this.state.text} renderChange={this.renderChange} renderInputLang={this.renderInputLang}/>
        <SpeechOutput saveMessage={this.props.saveMessage} categories={this.props.categories} voices={this.props.voices} text={this.state.text} inputLang={this.state.inputLang}/>
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