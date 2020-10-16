import React from 'react'

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition
const recognition = new SpeechRecognition()

class SpeechInput extends React.Component {
    
    state = {
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
              text: wordSpoken
            })
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
        console.log(voices)
        return voices.map(voice => <option>{voice.name + ' (' + voice.lang + ')'}</option>)
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
    
      render() {
        return (
          <div>
          <form onSubmit={this.renderVoice}>
            <select name="language">
              <option>English</option>
              <option>French</option>
              <option>Spanish</option>
              <option>German</option>
              <option>Italian</option>
            </select>
            <button type="button" name="start" onClick={this.renderSpeech}>Start</button>
            <button type="button" name="stop" onClick={this.renderSpeech}>Stop</button>

            <label>Voice: </label>
            <select name="voice">
              {this.renderOptions()}
            </select>
            <label>Speed: </label>
            <input type="number" min="0.5" max="2" step="0.1" name="voiceSpeed" value={this.state.voiceSpeed} onChange={this.renderSpeed}/>
            <input type="submit" value="submit"/>

          <textarea name="text" placeholder="Please enter or talk text here" value={this.props.text} onChange={this.renderChange}/>
          </form>
          </div>
        );
      }
      
    }
    


export default SpeechInput