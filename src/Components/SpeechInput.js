import React from 'react'
import { Form } from 'react-bootstrap'

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition
const recognition = new SpeechRecognition()

class SpeechInput extends React.Component {
    
    state = {
        voiceSpeed: 0.8,
        voices: []
      }
    
      renderSpeech = (e) => {
        e.preventDefault()
        //feeds the right objects to Chrome / other browsers
    
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
        
        if(e.target.name === 'start'){
          recognition.start()
          console.log('speak!')
        }else{
          recognition.stop()
          console.log('stop')

          recognition.onresult = (e) => {
            let wordSpoken = e.results[0][0].transcript
            console.log(wordSpoken)
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

      // componentDidMount = () => {
      //   window.speechSynthesis.onvoiceschanged = () => {
      //       this.setState({
      //         voices: window.speechSynthesis.getVoices()
      //       })
      //     }
      // }
    
      renderVoice = (e) => {
        e.preventDefault()
        let text = e.target.text.value
        let voiceName = e.target.voice.value.split(' ')[0]
        let utterThis = new SpeechSynthesisUtterance()
        
       let setVoice = this.props.voices.find(voice => voice.name === voiceName)
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
          <div>
          <form onSubmit={this.renderVoice}>
            <Form.Group controlId="language.ControlSelect1">
              <Form.Label>Choose Language:</Form.Label>
                <Form.Control as="select" name="language" onChange={this.getLanguage}>
                  <option>English</option>
                  <option>French</option>
                  <option>Spanish</option>
                  <option>German</option>
                  <option>Italian</option>
                </Form.Control>
             </Form.Group>

            <Form.Group controlId="voice.ControlSelect1">
              <Form.Label>Choose Voice:</Form.Label>
              <Form.Control as="select" name="voice">
                {this.renderOptions()}
              </Form.Control>
            </Form.Group>

            <Form.Group controlId="speed.ControlInput1">
              <Form.Label>Choose Speed:</Form.Label>
              <Form.Control type="number" name="voiceSpeed" min="0.5" max="2" step="0.1" value={this.state.voiceSpeed} onChange={this.renderSpeed}></Form.Control>
            </Form.Group>

            <Form.Group controlId="text.ControlInput2">
              <Form.Control as="textarea" rows="8" placeholder="Please enter or talk text here" name="text" value={this.props.text} onChange={this.renderChange}/>
            </Form.Group>
 
            <button type="button" name="start" onClick={this.renderSpeech}>Start</button>
            <button type="button" name="stop" onClick={this.renderSpeech}>Stop</button>

          
            <input type="submit" value="Hear Out Loud"/>

          </form>
          </div>
        );
      }
      
    }
    


export default SpeechInput