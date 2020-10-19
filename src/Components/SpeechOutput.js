import React from "react";
import { NavLink } from "react-router-dom"
import { Form, Button, Col} from "react-bootstrap";

class SpeechOutput extends React.Component {
  state={
    returnValue: '',
    voiceSpeed: 0.8,
    lang: 'en',
    selectedVoice: 'Alex',
    saveForm: false,
    description: "",
    newCategory: "",
    // voices: window.speechSynthesis.getVoices(),
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
    let text = e.target.translateText.value
    let voiceName = e.target.voice.value.split(' ')[0]
    let utterThis = new SpeechSynthesisUtterance()  
    let setVoice = this.props.voices.find(voice => voice.name === voiceName)

    this.setState({
      selectedVoice: voiceName
    })

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
    let sourceLang = this.props.inputLang
    let sourceText = this.props.text
    let targetLang = this.state.lang

    fetch("https://translate.googleapis.com/translate_a/single?client=gtx&sl=" + sourceLang + "&tl=" + targetLang + "&dt=t&q=" + encodeURI(sourceText))
    .then(resp=>resp.json())
    .then(data=> this.setState({
      returnValue: data[0][0][0]
    }))
  }

  showSaveForm = (e) => {
    this.setState({
      saveForm: true
    })
  }

  renderCategories = () => {
    let index = 0
    return this.props.categories.map(category => <option key={index += 1}>{category.title}</option>)
  }

  renderSaveForm = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  saveMessage = (e) => {
    e.preventDefault()

    let text = this.state.returnValue
    let language = this.state.lang
    let voice = this.state.selectedVoice
    let title

    if(e.target.newCategory.value === ""){
      title = e.target.existingCategory.value
    }else {
      title = e.target.newCategory.value
    }

    let category = {
      title: title,
    }

    let message = {
      description: e.target.description.value,
      language: language,
      voice: voice,
      content: text,
      // category: category
    }

    this.props.saveMessage(category, message)
  }

  render() {
    return (
      <div className="SpeechOutput">
         <Form onSubmit={this.renderVoice}>
          <Form.Row>

            <Form.Group as={Col} controlId="language.ControlSelect1">
              <Form.Label>Choose Language:</Form.Label>
              <Form.Control as="select" name="language" onChange={this.selectLang}>
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
              <Form.Control readOnly as="textarea" rows="8" placeholder="Translated text will appear here :)" name="translateText" value={this.state.returnValue}/>
          </Form.Group>

          <Form.Row>
            <Form.Group controlId="button1">  
                <Button onClick={this.translate}type="button" name="translate" variant="success" size="">Translate</Button>
            </Form.Group>

            <Form.Group controlId="button2">
              <Button variant="primary" type="submit">Hear Out Loud</Button>
            </Form.Group>

            <Form.Group controlId="button3">
              <Button onClick={this.showSaveForm} variant="info" type="button">Save</Button>
            </Form.Group>

          </Form.Row>                     
        </Form>

        {this.state.saveForm ?
        <>
          <h1>form</h1>
          <form onSubmit={this.saveMessage}>
            <label>Category</label>
            <select name="existingCategory">
              {this.renderCategories()}
            </select>

            <label>Create Category</label>
            <input name="newCategory" onChange={this.renderSaveForm} type="text" value={this.state.newCategory}/>

            <label>Description</label>
            <input name="description" onChange={this.renderSaveForm} type="text" value={this.state.description}/>
            <NavLink to={"/messages"}>
              <input type="submit" value="submit"/>
            </NavLink>
          </form>
        </>
   
         : null}
      </div>
    )
  }
}

export default SpeechOutput;
