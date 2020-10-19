import React from 'react'
import styled from 'styled-components'
import MessageCard from './MessageCard'

function MessagesSaved(props){

  const renderOptions = () => {
    let index = 0
    return props.categories.map(category => <option key={index += 1}>{category.title}</option>)
  }

  const renderMessageCards = () => {
    if(props.categorySelected === ""){
      return props.categories[0].messages.map(message=> <MessageCard key={message.id} message={message} renderMessage={props.renderMessage}/>)
    } else {
      let selectedCategory = props.categories.find(category => props.categorySelected === category.title )
      return selectedCategory.messages.map(message=> <MessageCard key={message.id} message={message} renderMessage={props.renderMessage}/>)
    }
  }

  const renderSelect = (e) => {
    props.renderSelect(e.target.value)
  }

  return(
    <Container>
        <h1>MessagesSaved</h1>
        <select name="categories" onChange={renderSelect}>
          {renderOptions()}
        </select>
        {renderMessageCards()}
    </Container>
  )
}
export default MessagesSaved

const Container = styled.div`
  height: 100vh;
  `