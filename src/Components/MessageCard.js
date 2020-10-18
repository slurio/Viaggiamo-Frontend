import React from 'react'

function MessageCard(props){

    const renderMessage = (e) => {
        props.renderMessage(props.message)
    }

    return(
    <h1 onClick={renderMessage}>{props.message.description}</h1>
    )
}

export default MessageCard