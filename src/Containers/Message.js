import React from 'react'
import MessagesSaved from '../Components/MessagesSaved'
import MessageForm from '../Components/MessageForm'
import styled from 'styled-components'

export default class Message extends React.Component {

  state = {
    categorySelected: "",
    message: "",
    messageContent: ""
  }

  renderSelect = (category) => {
    this.setState({
      categorySelected: category,
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

  render() {
    return(
      <Container>
        <MessagesSaved renderSelect={this.renderSelect} renderMessage={this.renderMessage} categories={this.props.categories} categorySelected={this.state.categorySelected}/>
        <MessageForm renderTextChange={this.renderTextChange} message={this.state.message} content={this.state.messageContent}/>
      </Container>
    )
  }
}

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  height: 100vh;
  `
