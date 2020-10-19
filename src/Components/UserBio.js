import React, { useState } from 'react'
import styled from 'styled-components'

function UserBio(props){
  let [editBtn, setEditBtn] = useState('Edit Profile')
  let [currentBio, setCurrentBio] = useState(props.currentUser.bio)
  let [currentImage, setCurrentImage] = useState(props.currentUser.img)

  function updateProfile() {
    if(editBtn === 'Update'){
      setEditBtn('Edit Profile')

      const formData = new FormData
      formData.append('file', currentImage)

      console.log(formData)
      // props.updateProfile(currentBio, currentImage)
    }else{
      setEditBtn('Update')
    }
  }

  function updateText(e) {
    setCurrentBio(e.target.value)
  }

  function updateImage(e) {
    if(e.target.files[0]) {
      // var imageFile = e.target.files[0];
      // var fileReader = new FileReader();
      // fileReader.onload = function(fileLoadedEvent) {
      //   var srcData = fileLoadedEvent.target.result;
      //   setCurrentImage(srcData)
      // }
      // fileReader.readAsDataURL(imageFile);
      setCurrentImage(e.target.files[0])
    }
  }

  return(
    <>
      <Username>{props.currentUser.username}</Username>
      <Img src="https://www.americanaircraftsales.com/wp-content/uploads/2016/09/no-profile-img.jpg" />

      {
        editBtn === 'Update'
        ? <>
          <Form>
            <label for="file-upload">Custom Upload</label>
            <input id="file-upload" type="file" name="img" accept="image/*" onChange={updateImage} />
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
  max-width: 30vw;
  border-radius: 50%;
  box-shadow: 0px 0px 30px #d2869c;
  `

const Username = styled.h2`
  margin: 20px;
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
  & textarea {
    width: 100%;
    height: 20vh;
  }
  & input {
    display: none;
  }
  & label {
    display: inline-flex;
    background-color: transparent;
    border: 2px solid #870033;
    border-radius: 10px;
    padding: 6px;
    color: white;
    cursor: pointer;
  }
  `

const Button = styled.button`
  background-color: transparent;
  border: 2px solid #870033;
  border-radius: 10px;
  padding: 6px;
  color: white;
  `