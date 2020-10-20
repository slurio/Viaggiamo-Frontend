import React from 'react'
import styled from 'styled-components'
import LessonsStart from '../Components/LessonsStart'
import LessonLevel from '../Components/LessonLevel'

export default class Lessons extends React.Component {
  state = {
    questionList: [],
    currentLang: 'French'
  }

  startCourse = (lang) => {
    if(!lang){lang = "French"}
      
    fetch(`http://localhost:3001/lessons/${lang}`)
      .then(resp=>resp.json())
      .then(data=> this.setState({
        questionList: data,
        currentLang: lang
      }
      ))
  }

  resetLessons = () => {
    this.setState({
      questionList: [],
      currentLang: 'French'
    })
  }

  render(){
    return(
      <Container>
        {
          this.state.questionList.length > 0
          ? <LessonLevel questionList={this.state.questionList} currentLang={this.state.currentLang} resetLessons={this.resetLessons} updateAchievements={this.props.updateAchievements}/>
          : <LessonsStart startCourse={this.startCourse}/>
        }
      </Container>
    )
  }
}

const Container = styled.div`
  background-color: #1b232c;
  box-shadow: 0px 0px 30px #A594F9;
  border-radius: 10px;
  padding: 20px;
  display: flex;
  width: 80%;
  justify-content: center;
  align-items: center;
  margin: auto;
  @media (min-width: 768px) {
    width: 40%;
  }
  `
