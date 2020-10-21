import React from 'react'
import styled from 'styled-components'
import MessageCard from './MessageCard'

function MessagesSaved(props){

  const renderOptions = () => {
    let index = 0
    return props.categories.map(category => <option key={index += 1}>{category.title}</option>)
  }

  const renderMessageCards = () => {
   if(!props.categories[0]){return}
   if (props.categorySelected === ""){
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
        <Header>SAVED MESSAGES</Header>
        <Select value={props.categorySelected} className="selectCategory" name="categories" onChange={renderSelect}>
          {renderOptions()}
        </Select>
        {renderMessageCards()}
    </Container>
  )
}

export default MessagesSaved

const Header = styled.header `
  margin: 20px;
  color: #EBEBEB;
  font-weight: bold;
  letter-spacing: 4px;
  font-size: calc(4px + 2vmin);
`

const Select = styled.select `
  color: #1e1e1e;
  margin-bottom: 20px;
  font-size: 16px;
  padding: 6px;
`

const Container = styled.div`
  width: 38vh;
  letter-spacing: 3px; 
  height: 100vh;
  background-color: #272727;
  box-shadow: 0px 8px 8px 2px #1c1c1c;
  color: #EBEBEB;
  font-size: calc(8px + 2vmin);
  display: flex;
  flex-direction: column;
@media (max-width: 768px) {
  flex-direction: column;
  width: 30vh;
}
`