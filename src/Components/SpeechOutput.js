import React from "react";
<<<<<<< HEAD
let sourceText = "test words"; // props of input
let sourceLang = "auto"
let targetLang = "ja" // props of input
const url = "https://translate.googleapis.com/translate_a/single?client=gtx&sl=" + sourceLang + "&tl=" + targetLang + "&dt=t&q=" + encodeURI(sourceText);
=======
import { Form } from "react-bootstrap";
>>>>>>> Slurio

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition
const recognition = new SpeechRecognition()

class SpeechOutput extends React.Component {
  state={
    returnValue: '',
    voiceSpeed: 0.8,
    lang: 'en'
  }
    
  renderVoice = (e) => {
    e.preventDefault()
    let text = e.target.translateText.value
    let voiceName = e.target.voice.value.split(' ')[0]
    let utterThis = new SpeechSynthesisUtterance()
  
    
   let setVoice = this.props.voices.find(voice => voice.name === voiceName)
    utterThis.rate = this.state.voiceSpeed
    utterThis.text = text
    utterThis.voice = setVoice
    speechSynthesis.speak(utterThis) 
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
    return voices.map(voice => <option key={(index = parseInt(index) + 1)}> {voice.name + ' (' + voice.lang + ')'}</option>)  
  }

  selectLang = (e) => {
    let langValue
    if(e.target.value === "English"){
      langValue = 'en'
    } else if(e.target.value === "French"){
      langValue = 'fr'
    }else if(e.target.value === "Spanish"){
      langValue = 'es'
    }else if(e.target.value === "German"){
      langValue = 'de'
    }else if(e.target.value === "Italian"){
      langValue = 'it'
    }
    this.setState({
      lang: langValue
    })
  }

  translate = () => {
    //do fetch here for translation
    let sourceLang = this.props.inputLang
    let sourceText = this.props.text
    let targetLang = this.state.lang
    console.log(sourceLang)
    console.log(sourceText)
    console.log(targetLang)
    fetch("https://translate.googleapis.com/translate_a/single?client=gtx&sl=" + sourceLang + "&tl=" + targetLang + "&dt=t&q=" + encodeURI(sourceText))
    .then(resp=>resp.json())
    .then(data=> this.setState({
      returnValue: data[0][0][0]
    }))
  }


  render() {
    return (
      <div>
         <form onSubmit={this.renderVoice}>
          <Form.Group controlId="language.ControlSelect1">
            <Form.Label>Choose Language:</Form.Label>
              <Form.Control as="select" name="language" onChange={this.selectLang}>
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

          <button onClick={this.translate}type="button" name="translate" >Translate</button>

          <Form.Group controlId="text.ControlInput2">
              <Form.Control as="textarea" rows="8" placeholder="Translated text will appear here :)" name="translateText" value={this.state.returnValue}/>
          </Form.Group>
      
          <input type="submit" value="Hear Out Loud"/>
                         
          </form>
      </div>
    )
  }
}

export default SpeechOutput;
{/* <form onSubmit={this.renderVoice}>
            <Form.Group controlId="language.ControlSelect1">
              <Form.Label>Choose Language:</Form.Label>
                <Form.Control as="select" name="language">
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

          </form> */}