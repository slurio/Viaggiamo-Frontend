import React, {useState, useEffect} from "react";
let sourceText = "test words"; // props of input
let sourceLang = "auto"
let targetLang = "ja" // props of input
const url = "https://translate.googleapis.com/translate_a/single?client=gtx&sl=" + sourceLang + "&tl=" + targetLang + "&dt=t&q=" + encodeURI(sourceText);

class SpeechOutput extends React.Component {

  state={
    returnValue: '',
    voiceSpeed: 0.8
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
    console.log(voices)
    return voices.map(voice => <option>{voice.name + ' (' + voice.lang + ')'}</option>)
  }

  componentDidMount = () => {
    fetch(url)
    .then(resp=>resp.json())
    .then(data=> this.setState({
      returnValue: data[0][0][0]
    }))
  }

  render() {
    return (
      <div>
         <form >
              <select name="language">
                <option>English</option>
                <option>French</option>
                <option>Spanish</option>
                <option>German</option>
                <option>Italian</option>
              </select>
              <button type="button" name="translate">Translate</button>
  
              <label>Voice: </label>
              <select name="voice">
                {this.renderOptions()}
              </select>
              <label>Speed: </label>
              <input type="number" min="0.5" max="2" step="0.1" name="voiceSpeed" value={this.state.voiceSpeed} onChange={this.renderSpeed}/>
              <input type="submit" value="submit"/>
              <textarea name="translate-text" placeholder="Translated text" value={this.state.returnValue}/>
            </form>
      </div>
    )
  }
}

export default SpeechOutput;
