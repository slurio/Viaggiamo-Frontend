import React, { useState } from 'react'
import styled from 'styled-components'

export default function LessonsStart(props){
  let [currentLang, setCurrentLang] = useState('')

  function startCourse(e){
    e.preventDefault()
    props.startCourse(currentLang)
  }

  function langChange(e){
    setCurrentLang(e.target.value)
  }

  return(
    <Form>
      <label style={{fontWeight: 'bold', marginBottom: '15px'}}>Select a language to begin!</label>
      <select name="language" onChange={langChange}>
        <option>French</option>
        <option>Spanish</option>
        <option>German</option>
        <option>Italian</option>  
      </select>
      <Button onClick={startCourse}>Start Endless Run</Button>
    </Form>
  )
}

const Form = styled.form`
  display: flex;
  flex-direction: column;
  `

const Button = styled.button`
  margin: 20px 10px 0 10px;
  font-weight: bold;
  color: #EBEBEB;
  background-color: transparent;
  border: 2px solid #A594F9;
  border-radius: 10px;
  padding: 6px;
  font-size: calc(10px + 2vmin);
  &:hover{
    color: #A594F9;
    cursor: pointer;
  }
  `