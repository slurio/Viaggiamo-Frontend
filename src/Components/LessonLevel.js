import React, { useState } from 'react'
import styled from 'styled-components'
import flagFR from '../images/french.png'
import flagGE from '../images/german.png'
import flagIT from '../images/italian.png'
import flagES from '../images/spanish.png'

export default function LessonLevel(props){
  let [questionList, setQuestionList] = useState(props.questionList)
  let [currentLevel, setCurrentLevel] = useState(props.currentLevel)
  let [currentLang, setCurrentLang] = useState(props.currentLang)
  let [disabledClass, setDisabledClass] = useState('')
  let [showContinue, setShowContinue] = useState(false)
  let [answerColor, setAnswerColor] = useState('red')

  function clickHandler(e){
    setDisabledClass('disabled')
    setShowContinue(true)
    if(e.target.id === '1'){setAnswerColor('green')}

    // change state of level and display new Q and A
  }

  function resetQuestion() {
    setDisabledClass('')
    setShowContinue(false)
    setAnswerColor('red')
  }

  function getFlag(){
    switch(props.currentLang) {
      case 'Spanish':
        return flagES
      case 'French':
        return flagFR
      case 'German':
        return flagGE
      case 'Italian':
        return flagIT
    }
  }
  return(
    <Container>
      <FlagImage src={getFlag()}/>
      <Question>Question1</Question>

      <ul style={{padding: 0, margin: 0}} onClick={clickHandler}>
        <MultiAnswer className={disabledClass} id="1">Answer1</MultiAnswer>
        <MultiAnswer className={disabledClass} id="2">Answer2</MultiAnswer>
        <MultiAnswer className={disabledClass} id="3">Answer3</MultiAnswer>
      </ul>
      {
        showContinue
        ? <><h4 style={{color: answerColor}}>Correct Answer</h4>
          <Button onClick={resetQuestion}>Continue</Button></>
        : null
      }
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  .disabled {
    pointer-events:none;
    opacity:0.6;
  }
  `

const Question = styled.h2`
  margin-bottom: 20px;
  `

const MultiAnswer = styled.li`
  list-style-type: none;
  margin: 10px;
  `

const Button = styled.button`
  margin-top: 5px;
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

const FlagImage = styled.img`
  max-height: 20vh;
  max-width: 20vw;
  height: auto;
  width: auto;
  margin-bottom: 10px;
  padding: 5px;
  `