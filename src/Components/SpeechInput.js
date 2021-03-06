import React from 'react'
import { Form, Col } from 'react-bootstrap'

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition
const recognition = new SpeechRecognition()

class SpeechInput extends React.Component {    
  state = {
      voiceSpeed: 0.8,
      speak: false,
      language: 'en'
    }
  
  renderSpeech = (e) => {
    e.preventDefault()

    recognition.continuous = true;
    recognition.interimResults = false;

     if(this.state.language === "en"){
      recognition.lang = 'en'
    } else if(this.state.language === "fr"){
      recognition.lang = 'fr'
    }else if(this.state.language === "es"){
      recognition.lang = 'es'
    }else if(this.state.language === "de"){
      recognition.lang = 'de'
    }else if(this.state.language === "it"){
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

    let enVoices = voices.filter(voice => voice.lang.toLowerCase().includes('en'))
    let frVoices = voices.filter(voice => voice.lang.toLowerCase().includes('fr'))
    let esVoices = voices.filter(voice => voice.lang.toLowerCase().includes('es'))
    let itVoices = voices.filter(voice => voice.lang.toLowerCase().includes('it'))
    let deVoices = voices.filter(voice => voice.lang.toLowerCase().includes('de'))

    let voicesRender = enVoices.concat(frVoices).concat(esVoices).concat(itVoices).concat(deVoices)
    
    let index = 0
    return voicesRender.map(voice => <option key={index += 1}>{voice.name + ' (' + voice.lang + ')'}</option>)
  }
  
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
    this.setState({
      language: language
    })
  }
  
  translate = () => {
    let temp = this.props.text.replace(/\./g, ',');
    fetch("https://translate.googleapis.com/translate_a/single?client=gtx&sl=" + this.state.language + "&tl=" + this.props.translationLang + "&dt=t&q=" + encodeURI(temp))
    .then(resp=>resp.json())
    .then(data=> this.props.handleTranslatedText(data[0][0][0]))
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
            <Form.Control size="lg" as="textarea" rows="8" placeholder="Please enter text or talk text" name="text" value={this.props.text} onChange={this.renderChange}/>
          </Form.Group>

          <Form.Row>
            <Form.Group>
            {!this.state.speak ? <svg style={{cursor: "pointer"}} onClick={this.renderSpeech} viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" width="28" height="28"><path id="microphone" d="M5 2.5a2.5 2.5 0 015 0v4a2.5 2.5 0 01-5 0v-4z" fill="currentColor"></path><path id="microphone" d="M2 4v2.5a5.5 5.5 0 005 5.478V14H5v1h5v-1H8v-2.022A5.5 5.5 0 0013 6.5V4h-1v2.5a4.5 4.5 0 01-9 0V4H2z" fill="currentColor"></path></svg> : <svg id="stopRecord" style={{cursor: "pointer"}} onClick={this.renderSpeech} viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" width="28" height="28"><path d="M11.5 3.5h-8v8h8v-8z" stroke="currentColor"></path></svg>}
              </Form.Group>

            <Form.Group>
            <button className="hearOutLoudButton" variant="primary" type="submit">Hear Out Loud</button>

            </Form.Group>

            <Form.Group controlId="button1">  
                  <button className="translateButton" onClick={this.translate}type="button" name="translate" variant="success" size="">Translate</button>
            </Form.Group>
  
          </Form.Row>
         
        </form>
      </div>
    );
  }
    
  }
  


export default SpeechInput