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
    e.target.style.cssText = "transform: scale(1.5); box-shadow: 0px 8px 8px 2px #1c1c1c;"
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
        <FlagContainer>
          <img className='flagChoice' onClick={langChange} id='French' src={getFlag('French')} alt='' />
          <img className='flagChoice' onClick={langChange} id='Spanish' src={getFlag('Spanish')} alt='' />
        </FlagContainer>
        <FlagContainer>
          <img className='flagChoice' onClick={langChange} id='German' src={getFlag('German')} alt='' />
          <img className='flagChoice' onClick={langChange} id='Italian' src={getFlag('Italian')} alt='' />
        </FlagContainer>
      </div>

      <Button onClick={startCourse}>Start Endless Run</Button>
    </Form>
  )
}

const FlagContainer = styled.div`
  & img {
    margin: 10px;
    border-radius: 10px;
    cursor: pointer;
  }
  `

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