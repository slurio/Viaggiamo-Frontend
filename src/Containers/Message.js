import React from 'react'
import MessagesSaved from '../Components/MessagesSaved'
import MessageForm from '../Components/MessageForm'
import styled from 'styled-components'

export default class Message extends React.Component {
  state = {
    categories: this.props.categories,
    categorySelected: "",
    message: "",
    messageContent: ""
  }

  renderSelect = (category) => {
    this.setState({
      categorySelected: category
    })
  }

  renderMessage = (messageSelected) => {
    this.setState({
      message: messageSelected,
      messageContent: messageSelected.content
    })
  }

  renderTextChange = (text) => {
    this.setState({
      messageContent: text
    })
  }

  saveMessage = () => {
    const options = {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
        "accept": "application/json"
      },
      body: JSON.stringify({content: this.state.messageContent})
    }

    fetch('http://localhost:3001/messages/' + this.state.message.id, options)
      .then(resp=>resp.json())
      .then(updatedMessage=> {
        this.updateMessages(updatedMessage)
      }) 
  }

  updateMessages = (message) => {
    let categories = this.state.categories  
    let messageCategory = message.category.title
    let selectedCategory = categories.find(category => messageCategory === category.title )
    let oldMessage = selectedCategory.messages.find(el => el.id === message.id)
    let index = selectedCategory.messages.indexOf(oldMessage)
    selectedCategory.messages[index] = message
    this.setState({
      categories: categories,
      message: message,
      messageContent: message.content
    })
  }

  deleteMessage = (messageObj) => {
    const options = {
      method: "DELETE",
    }

    fetch('http://localhost:3001/messages/' + messageObj.id, options)
      .then(resp=>resp.json())
      .then(deleted => {
        let categories = this.state.categories  
        let messageCategory = deleted.category.title
        let selectedCategory = categories.find(category => messageCategory === category.title )
        let message = selectedCategory.messages.find(el => el.id === deleted.id)
        let index = selectedCategory.messages.indexOf(message)
        selectedCategory.messages.splice(index, 1)
        
        this.setState({
          categories: categories,
          message: "",
          messageContent: "",
        })
      }) 
  }

  render() {
    return(
      <Container>
        <LeftBar>
          <MessagesSaved updatedMessage={this.state.message} renderSelect={this.renderSelect} renderMessage={this.renderMessage} categories={this.props.categories} categorySelected={this.state.categorySelected}/>
        </LeftBar>
        <MessageForm deleteMessage={this.deleteMessage} saveMessage={this.saveMessage} renderTextChange={this.renderTextChange} message={this.state.message} content={this.state.messageContent}/>
      </Container>
    )
  }
}

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  height: 100vh;
  `
const LeftBar = styled.div`
  background-color: #EBEBEB;
  color: #3D3C53;
  font-size: calc(8px + 2vmin);
  display: flex;
  justify-content: center;
  align-items: center;
`
