import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

function UserBio(props){
  let [editBtn, setEditBtn] = useState('EDIT')
  let [currentBio, setCurrentBio] = useState(props.currentUser.bio)
  let [oldImg, setOldImg] = useState("https://www.americanaircraftsales.com/wp-content/uploads/2016/09/no-profile-img.jpg")
  let [newImg, setNewImg] = useState("")

  useEffect(() => {
    if(props.currentUser.avatar_url){setOldImg(props.currentUser.avatar_url)}
  }, [props.currentUser.avatar_url])

  function updateProfile() {
    if(editBtn === 'UPDATE'){
      setEditBtn('EDIT')
      const formData = new FormData()
      formData.append('file', newImg)
      props.updateProfile(currentBio, formData)
    }else{
      setEditBtn('UPDATE')
    }
  }

  function updateText(e) {
    setCurrentBio(e.target.value)
  }

  function updateImage(e) {
    if(e.target.files[0]) {
      setNewImg(e.target.files[0])
      setOldImg(URL.createObjectURL(e.target.files[0]))
    }
  }

  return(
    <>
      <Username>{props.currentUser.username.toUpperCase()}</Username>
      <Img src={oldImg} />

      {
        editBtn === 'UPDATE'
        ? <>
          <Form>
            <label for="file-upload">Custom Upload</label>
            <input id="file-upload" type="file" name="avatar" accept="image/*" onChange={updateImage} />
            <textarea onChange={updateText} value={currentBio}></textarea>
          </Form>
          </>
        : <Bio>{currentBio}</Bio>
      }
      
      <Button onClick={updateProfile}>{editBtn}</Button>
    </>
  )

}
export default UserBio

const Img = styled.img`
  max-height: 30vh;
  max-width: 30vh;
  border-radius: 50%;
  `

const Username = styled.h2`
  margin: 20px;
  font-weight: bold;
  `

const Bio = styled.p`
  margin: 20px;
  `

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 15px;
  width: 80%;
  padding: 10px;
  & textarea {
    width: 100%;
    height: 20vh;
  }
  & input {
    display: none;
  }
  & label {
    display: inline-flex;
    color: #A594F9;
    background-color: transparent;
    border: 2px solid #A594F9;
    border-radius: 10px;
    font-weight: bold;
    padding: 6px;
    cursor: pointer;
    &:hover {
      color: #EBEBEB;
      background-color: #A594F9;
      cursor: pointer;
    }
  }
  `

const Button = styled.button`
  font-weight: bold;
  color: #A594F9;
  background-color: #333333;
  /* border: 2px solid #A594F9; */
  font-size: 20px;
  border: none;
  border-radius: 10px;
  padding-top: 6px;
  padding-bottom: 6px;
  padding-left: 30px;
  padding-right: 30px;

  &:hover {
    color: #272727;
    background-color: #A594F9;
    cursor: pointer;
  }
  `

