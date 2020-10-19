import React from 'react'
import { Form, Col, Button } from 'react-bootstrap'

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition
const recognition = new SpeechRecognition()

class SpeechInput extends React.Component {    
  state = {
      voiceSpeed: 0.8,
      voices: window.speechSynthesis.getVoices(),
      speak: false
    }

  // componentDidMount = () => {
  //   window.speechSynthesis.onvoiceschanged = () => {
  //       this.setState({
  //         voices: window.speechSynthesis.getVoices()
  //       })
  //     }
  // }
  
  renderSpeech = (e) => {
    e.preventDefault()

    recognition.continuous = true;
    recognition.interimResults = false;
    
    if(e.target.parentNode.language.value === "English"){
      recognition.lang = 'en-US'
    } else if(e.target.parentNode.language.value === "French"){
      recognition.lang = 'fr'
    }else if(e.target.parentNode.language.value === "Spanish"){
      recognition.lang = 'es'
    }else if(e.target.parentNode.language.value === "German"){
      recognition.lang = 'de'
    }else if(e.target.parentNode.language.value === "Italian"){
      recognition.lang = 'it'
    }
    
    if(this.state.speak === false){    
      this.setState({
        speak: true
      })
      recognition.start()
    }else{
      this.setState({
        speak: false
      })
      recognition.stop()

      recognition.onresult = (e) => {
        let wordSpoken = e.results[0][0].transcript
        this.props.renderChange(wordSpoken)
      }
    }
  }
  
  renderSpeed = (e) => {
    this.setState({
      voiceSpeed: e.target.value
    })
  }
  
  renderChange = (e) => {
      this.props.renderChange(e.target.value)
  }

  renderOptions = () => {
    let synth = window.speechSynthesis
    let voices = synth.getVoices()
    let index = 0
    return voices.map(voice => <option key={index += 1}>{voice.name + ' (' + voice.lang + ')'}</option>)
  }
  
  renderVoice = (e) => {
    e.preventDefault()
    let text = e.target.text.value
    let voiceName = e.target.voice.value.split(' ')[0]
    let utterThis = new SpeechSynthesisUtterance()
    //  let setVoice = this.props.voices.find(voice => voice.name === voiceName)
    let setVoice = this.state.voices.find(voice => voice.name === voiceName)
    
    utterThis.rate = this.state.voiceSpeed
    utterThis.text = text
    utterThis.voice = setVoice
    speechSynthesis.speak(utterThis) 
  }

  getLanguage = (e) => {
    let language
    if(e.target.value === "English"){
      language = 'en'
    } else if(e.target.value === "French"){
      language = 'fr'
    }else if(e.target.value === "Spanish"){
      language = 'es'
    }else if(e.target.value === "German"){
      language = 'de'
    }else if(e.target.value === "Italian"){
      language = 'it'
    }
    this.props.renderInputLang(language)
  }
  
  render() {
    return (
      
      <div className="SpeechInput">    
        <form onSubmit={this.renderVoice}>
          <Form.Row>
            <Form.Group as={Col} controlId="language.ControlSelect1">
              <Form.Label>Choose Language:</Form.Label>
                <Form.Control as="select" name="language" onChange={this.getLanguage}>
                  <option>English</option>
                  <option>French</option>
                  <option>Spanish</option>
                  <option>German</option>
                  <option>Italian</option>
                </Form.Control>
            </Form.Group>

            <Form.Group as={Col} controlId="voice.ControlSelect1">
              <Form.Label>Choose Voice:</Form.Label>
              <Form.Control as="select" name="voice">
                {this.renderOptions()}
              </Form.Control>
            </Form.Group>

            <Form.Group as={Col} controlId="speed.ControlInput1">
              <Form.Label>Choose Speed:</Form.Label>
              <Form.Control type="number" name="voiceSpeed" min="0.5" max="2" step="0.1" value={this.state.voiceSpeed} onChange={this.renderSpeed}></Form.Control>
            </Form.Group>
          </Form.Row>    

          <Form.Group controlId="text.ControlInput2">
            <Form.Control as="textarea" rows="8" placeholder="Please enter or talk text here" name="text" value={this.props.text} onChange={this.renderChange}/>
          </Form.Group>

          {!this.state.speak ? <Button type="button" name="start" variant="outline-success" onClick={this.renderSpeech}>Start</Button> :  <Button type="button" name="stop" variant="outline-danger" onClick={this.renderSpeech}>Stop</Button>}
          <Button variant="primary" type="submit">Hear Out Loud</Button>
        </form>
      </div>
    );
  }
    
  }
  


export default SpeechInput