import React, { useState } from 'react'
import styled from 'styled-components'
import flagFR from '../images/french.png'
import flagGE from '../images/german.png'
import flagIT from '../images/italian.png'
import flagES from '../images/spanish.png'

export default function LessonLevel(props){
  let [correctCount, setCorrectCount] = useState(0)
  let [disabledClass, setDisabledClass] = useState('')
  let [showContinue, setShowContinue] = useState(false)
  let [answerColor, setAnswerColor] = useState('green')
  let [gameOver, setGameOver] = useState(false)
  let [lives, setLives] = useState(3)

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
      default:
        return 'error'
    }
  }

  function renderHearts() {
    return ([...Array(lives)].map((e,i) => (
      <svg className="heart" key={i} viewBox="0 0 32 29.6">
        <path d="M23.6,0c-3.4,0-6.3,2.7-7.6,5.6C14.7,2.7,11.8,0,8.4,0C3.8,0,0,3.8,0,8.4c0,9.4,9.5,11.9,16,21.2c6.1-9.3,16-12.1,16-21.2C32,3.8,28.2,0,23.6,0z"/>
      </svg>
    )))
  }

  function clickHandler(e){
    setDisabledClass('disabled')
    setShowContinue(true)
    if(parseInt(e.target.id) === props.QnA.correct_answer){
      setCorrectCount(correctCount + 1)
    }else{
      setAnswerColor('red')
      setLives(lives - 1)
    }
  }

  function resetQuestion() {
    setDisabledClass('')
    setShowContinue(false)
    setAnswerColor('green')
    props.renderAnswer()
  }

  function renderAnswer(){
    return(
      <ul style={{padding: 0, margin: 0}} onClick={clickHandler}>
        <MultiAnswer className={disabledClass} id="1">{props.QnA.answer1}</MultiAnswer>
        <MultiAnswer className={disabledClass} id="2">{props.QnA.answer2}</MultiAnswer>
        <MultiAnswer className={disabledClass} id="3">{props.QnA.answer3}</MultiAnswer>
      </ul>
    )
  }

  function updateAchievements(){
    if(!gameOver){
      props.updateAchievements(correctCount, props.currentLang)
      setGameOver(true)
    }
  }  

  return(
    <Container>
      <div style={{display: 'flex'}}>
        {renderHearts()}
      </div>
      <FlagImage src={getFlag()}/>
      {
        lives === 0 ? 
        <>
          {updateAchievements()}
          <Question>That's the end of your run! You ended with {correctCount} correct answers!</Question>
          <Button onClick={props.resetEndless}>Try Again</Button>
        </>
        :
        <>
        <Question>{props.QnA.translation}</Question>
        <Hr />      
        {renderAnswer()}
        {
          showContinue
          ? <>
              <h4 style={{color: answerColor}}>{props.QnA[`answer${props.QnA.correct_answer}`]}</h4>
              <Button onClick={resetQuestion}>Continue</Button>
            </>
          : null
        }
        </>
      }
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  .heart {
    fill: red;
    margin: 3px;
    height: 30px;
    width: 30px;
  }
  .disabled {
    pointer-events:none;
    opacity:0.6;
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

const Question = styled.h2`
  margin-bottom: 10px;
  `

const MultiAnswer = styled.li`
  list-style-type: none;
  margin: 10px;
  `

const Button = styled.button`
  margin: 20px;
  font-weight: bold;
  color: #A594F9;
  background-color: #333333;
  font-size: 20px;
  border: none;
  border-radius: 10px;
  padding: 6px 20px;

  &:hover {
    color: #272727;
    background-color: #A594F9;
    cursor: pointer;
  }
  `

const Hr = styled.hr`
  background-color: #A594F9;
  height: 2px;
  margin: 10px;
  width: 100%;
  `