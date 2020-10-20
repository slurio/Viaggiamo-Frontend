import React from 'react'
import { Form, Col } from 'react-bootstrap'

class MessageForm extends React.Component {
  state = {
    voiceSpeed: 0.8,
    speak: false,
    voices: window.speechSynthesis.getVoices()
  }

  componentDidMount = () => {
    window.speechSynthesis.onvoiceschanged = () => {
        this.setState({
          voices: window.speechSynthesis.getVoices()
        })
    }
  }

  renderSpeed = (e) => {
    this.setState({
      voiceSpeed: e.target.value
    })
  }

  renderVoice = (e) => {
    e.preventDefault()

    let text = this.props.content
    let voiceName = this.props.message.voice
    let utterThis = new SpeechSynthesisUtterance()
    let setVoice = this.state.voices.find(voice => voice.name === voiceName)

    utterThis.rate = this.state.voiceSpeed
    utterThis.text = text
    utterThis.voice = setVoice
    speechSynthesis.speak(utterThis) 
  }

  renderTextChange = (e) => {
    this.props.renderTextChange(e.target.value)
  }

  saveMessage = () => {
    this.props.saveMessage()
  }

  renderLanguage = () => {
 
    if(this.props.message.language === "en"){
      return 'English'
    } else if(this.props.message.language === "fr"){
      return 'French'
    }else if(this.props.message.language === "es"){
      return 'Spanish'
    }else if(this.props.message.language === "de"){
      return 'German'
    }else if(this.props.message.language === "it"){
      return 'Italian'
    }
    
  }

  deleteMessage = () => {
    this.props.deleteMessage(this.props.message)
  }

  render() {
    return(
      <div className="MessageForm">
        <p style={{fontSize: '28px'}}>Description: {this.props.message ? <span>{this.props.message.description}</span> : null}</p>
        <p style={{fontSize: '22px'}}>Language: {this.props.message ? <span>{this.renderLanguage()}</span> : null}</p>
        <form onSubmit={this.renderVoice}>   
          <Form.Row>
            <Form.Group as={Col} controlId="speed.ControlInput1">
              <Form.Label>Choose Speed:</Form.Label>
              <Form.Control type="number" name="voiceSpeed" min="0.5" max="2" step="0.1" onChange={this.renderSpeed} value={this.state.voiceSpeed}></Form.Control>
            </Form.Group>
          </Form.Row>
        
          <Form.Group controlId="text.ControlInput2">
            <Form.Control as="textarea" rows="8" name="text" value={this.props.content} onChange={this.renderTextChange}/>
          </Form.Group>
                      
          <button className="hearOutLoudButton" type="submit">Hear Out Loud</button>
          <button className="SaveButton" type="button" onClick={this.saveMessage}>Save</button>
          <button className="DeleteButton" type="button" onClick={this.deleteMessage}>Delete</button>
        </form>
      </div>    
    )
  }
}

export default MessageForm