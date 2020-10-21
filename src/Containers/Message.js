import React from 'react'
import MessagesSaved from '../Components/MessagesSaved'
import MessageForm from '../Components/MessageForm'
import styled from 'styled-components'

export default class Message extends React.Component {
  state = {
    categories: "",
  }

  renderSelect = (category) => {
    this.props.renderSelect(category)
  }

  renderMessage = (messageSelected) => {
    this.props.renderMessage(messageSelected)
  }

  renderTextChange = (text) => {
    this.props.renderTextChange(text)
  }

  saveMessage = () => {
    const options = {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
        "accept": "application/json"
      },
      body: JSON.stringify({content: this.props.messageContent})
    }

    fetch('http://localhost:3001/messages/' + this.props.message.id, options)
      .then(resp=>resp.json())
      .then(updatedMessage=> {
        this.updateMessages(updatedMessage)
      }) 
  }

  updateMessages = (message) => {
    let categories = this.props.categories  
    let messageCategory = message.category.title
    let selectedCategory = categories.find(category => messageCategory === category.title )
    let oldMessage = selectedCategory.messages.find(el => el.id === message.id)
    let index = selectedCategory.messages.indexOf(oldMessage)
    selectedCategory.messages[index] = message
   
    this.props.handleUpdatedMessage(message)
    this.setState({
      categories: categories
    })

  }

  deleteMessage = (messageObj) => {
    const options = {
      method: "DELETE",
    }

    fetch(`http://localhost:3001/messages/${messageObj.id}`, options)
      .then(resp=>resp.json())
      .then(deleted => {
        let categories = this.props.categories
        let messageCategory = deleted.category.title
        let selectedCategory = categories.find(category => messageCategory === category.title )
        let message = selectedCategory.messages.find(el => el.id === deleted.id)
        let index = selectedCategory.messages.indexOf(message)
        selectedCategory.messages.splice(index, 1)
        
        this.props.handleDeletedMessage()
        this.setState({
          categories: categories,
        })
      }) 
  }

  render() {
    return(
      <Container>
        <LeftBar>
          <MessagesSaved updatedMessage={this.props.message} renderSelect={this.renderSelect} renderMessage={this.renderMessage} categories={this.props.categories} categorySelected={this.props.categorySelected}/>
        </LeftBar>
        <MessageForm deleteMessage={this.deleteMessage} saveMessage={this.saveMessage} renderTextChange={this.renderTextChange} message={this.props.message} content={this.props.messageContent}/>
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
