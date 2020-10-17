import React from 'react'
import SpeechOutput from '../Components/SpeechOutput'
import SpeechInput from '../Components/SpeechInput'

export default class SpeechText extends React.Component {
  state ={
    text: '',
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
    console.log('upper state', this.state.text)
  }
  
  render(){
    return(
      <div className="speechtext">
        <SpeechInput text={this.state.text} renderChange={this.renderChange} voices={this.state.voices}/>
        <SpeechOutput text={this.state.text} voices={this.state.voices}/>
      </div>
    )
  }

}
