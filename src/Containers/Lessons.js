import React from 'react'
import styled from 'styled-components'
import LessonsStart from '../Components/LessonsStart'
import LessonLevel from '../Components/LessonLevel'

export default class Lessons extends React.Component {
  state = {
    currentLang: 'French',
    selectedCourse: false
  }

  startCourse = (lang) => {
    this.setState({
      currentLang: lang ? lang : "French",
      selectedCourse: true
    })
  }

  render(){
    return(
      <>
        <Container>
          {
            this.state.selectedCourse
            ? <LessonLevel questionList={[]} currentLang={this.state.currentLang}/>
            : <LessonsStart startCourse={this.startCourse}/>
          }
        </Container>
      </>
    )
  }
}

const Container = styled.div`
  background-color: #303030;
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
