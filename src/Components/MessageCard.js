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
    font-size: calc(8px + 2vmin);
    cursor: pointer;
    padding: 10px;
    margin-left: 20px;
`