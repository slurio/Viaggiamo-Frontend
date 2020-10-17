import React from 'react'
import SpeechOutput from '../Components/SpeechOutput'
import SpeechInput from '../Components/SpeechInput'

export default class SpeechText extends React.Component {
  state ={
    text: '',
    inputLang: ""
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
      <div className="speechtext">
        <SpeechInput text={this.state.text} renderChange={this.renderChange} renderInputLang={this.renderInputLang}/>
        <SpeechOutput text={this.state.text} inputLang={this.state.inputLang}/>
      </div>
    )
  }

}
