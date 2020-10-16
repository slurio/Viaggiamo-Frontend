import React from 'react'

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition
const recognition = new SpeechRecognition()

class SpeechInput extends React.Component {
    
    state = {
        text: "",
        voices: [],
        fillText: "",
        voiceSpeed: 0.8
      }
    
      renderSpeech = (e) => {
        e.preventDefault()
        //feeds the right objects to Chrome / other browsers
    
        recognition.continuous = false;
        recognition.interimResults = false;
    
        console.log(e.target.parentNode.language.value)
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
            this.setState({
              fillText: wordSpoken
            })
          }
        }
        
      }
    
      renderChange = (e) => {
        this.setState({
          [e.target.name]: e.target.value
        })
      }
    
      renderOptions = () => {
        let synth = window.speechSynthesis
    
        let voices = synth.getVoices()
        return voices.map(voice => <option>{voice.name + ' (' + voice.lang + ')'}</option>)
      }
    
      componentDidMount = () => {
        window.speechSynthesis.onvoiceschanged = () => {
            this.setState({
              voices: window.speechSynthesis.getVoices()
            })
          }
      }
    
      renderVoice = (e) => {
        e.preventDefault()
        let text = e.target.text.value
        let voiceName = e.target.voice.value.split(' ')[0]
        let utterThis = new SpeechSynthesisUtterance()
      
        
       let setVoice = this.state.voices.find(voice => voice.name === voiceName)
        utterThis.rate = this.state.voiceSpeed
        utterThis.text = text
        utterThis.voice = setVoice
        speechSynthesis.speak(utterThis) 
      }
    
      render() {
        return (
          <>
          <h1>Practice Speech Recognition</h1>
          <form>
            <select name="language">
              <option>English</option>
              <option>French</option>
              <option>Spanish</option>
              <option>German</option>
              <option>Italian</option>
            </select>
            {/* <input type="submit" value="click and speak"/> */}
            <button type="button" name="start" onClick={this.renderSpeech}>Start</button>
            <button type="button" name="stop" onClick={this.renderSpeech}>Stop</button>
          </form>
          <br></br>
          <textarea name="fill" value={this.state.fillText}/>
          
          <br></br>
          <br></br>
          <form onSubmit={this.renderVoice}>
            <textarea name="text" value={this.state.text} placeholder="Please enter text here" onChange={this.renderChange}/>
            <label>Voice: </label>
            <select name="voice">
              {this.renderOptions()}
            </select>
            <label>Speed: </label>
            <input type="number" min="0.5" max="2" step="0.1" name="voiceSpeed" value={this.state.voiceSpeed} onChange={this.renderChange}/>
            <input type="submit" value="submit"/>
          </form>
          
          </>
        );
      }
      
    }
    


export default SpeechInput