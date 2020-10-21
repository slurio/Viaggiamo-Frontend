import React, { useState } from 'react'
import styled from 'styled-components'
import flagFR from '../images/french.png'
import flagGE from '../images/german.png'
import flagIT from '../images/italian.png'
import flagES from '../images/spanish.png'

export default function LessonsStart(props){
  let [currentLang, setCurrentLang] = useState('')

  function startCourse(e){
    e.preventDefault()
    props.startCourse(currentLang)
  }

  function langChange(e){
    setCurrentLang(e.target.id)
    document.querySelectorAll('.flagChoice').forEach(e =>{
      e.style.cssText = ''
    })
    e.target.style.cssText = "box-shadow: inset 0 0 10px 10px #A594F9;"
  }

  function getFlag(flag){
    switch(flag) {
      case 'Spanish':
        return flagES
      case 'French':
        return flagFR
      case 'German':
        return flagGE
      case 'Italian':
        return flagIT
      default:
        return 'error'
    }
  }

  return(
    <Form>
      <label style={{fontWeight: 'bold', marginBottom: '15px'}}>Select a language to begin!</label>

      <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
        <FlagDiv>
          <img className='flagChoice' onClick={langChange} id='French' src={getFlag('French')} alt='' />
          <img className='flagChoice' onClick={langChange} id='Spanish' src={getFlag('Spanish')} alt='' />
        </FlagDiv>
        <FlagDiv>
          <img className='flagChoice' onClick={langChange} id='German' src={getFlag('German')} alt='' />
          <img className='flagChoice' onClick={langChange} id='Italian' src={getFlag('Italian')} alt='' />
        </FlagDiv>
      </div>

      <Button onClick={startCourse}>Start Course</Button>
    </Form>
  )
}

const Form = styled.form`
  display: flex;
  flex-direction: column;
  `

const Button = styled.button`
  margin: 20px 40px;
  font-weight: bold;
  color: #A594F9;
  background-color: #333333;
  font-size: 20px;
  border: none;
  border-radius: 10px;
  padding: 6px 0;

  &:hover {
    color: #272727;
    background-color: #A594F9;
    cursor: pointer;
  }
  `

const FlagDiv = styled.div`
  display: flex;
  & img {
    margin: 5px;
    padding: 4px;
    border-radius: 10px;
  }
  `