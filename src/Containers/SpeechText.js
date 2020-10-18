import React from 'react'
import SpeechOutput from '../Components/SpeechOutput'
import SpeechInput from '../Components/SpeechInput'

export default class SpeechText extends React.Component {
  state ={
    text: '',
<<<<<<< HEAD
    voices: []
  }
    
=======
    inputLang: "en",
    voices: []
  }

>>>>>>> Slurio
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
      <div className="speechtext">
<<<<<<< HEAD
        <SpeechInput text={this.state.text} renderChange={this.renderChange} voices={this.state.voices}/>
        <SpeechOutput text={this.state.text} voices={this.state.voices}/>
=======
        <SpeechInput voices={this.state.voices} text={this.state.text} renderChange={this.renderChange} renderInputLang={this.renderInputLang}/>
        <SpeechOutput voices={this.state.voices} text={this.state.text} inputLang={this.state.inputLang}/>
>>>>>>> Slurio
      </div>
    )
  }

}
