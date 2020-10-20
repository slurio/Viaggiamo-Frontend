import React from 'react'
import styled from 'styled-components'

function MessageCard(props){

    const renderMessage = (e) => {
        props.renderMessage(props.message)
    }

    return(
        <Title>
            <p onClick={renderMessage}>{props.message.description}</p>
        </Title>
    )
}

export default MessageCard

const Title = styled.div`
    font-size: 16px;
    padding-left: 16px;
    padding-top: 10px;
    font-weight: 600;
    &:hover{
        color: white;
        background-color: #474747;
        cursor: pointer;
      }
`