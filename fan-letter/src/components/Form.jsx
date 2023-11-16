import React, { useState } from 'react'
import uuid from 'react-uuid'
import defaultAvarta from'assets/defaultAvarta.png'
import styled from 'styled-components'

const FormStyle = styled.form`
 margin-top:10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  padding: 10px;
`
const InputStyle =styled.input`
  width: 350px;
  height: 25px;
  border: 2px solid greenyellow;
  border-radius: 10px;
`
const AddButton = styled.button`
  background-color: greenyellow;
  border: greenyellow;
  border-radius: 15px;
  padding: 5px 8px 5px 8px;
`
const SelectStyle = styled.select`
  height: 25px;
  border: 2px solid greenyellow;
  border-radius: 15px;
`

function Form({ setLetters, letters }) {
  const writedToSelectList = ["아이돌", "솔로가수", "배우"]
  const [writedTo, setWritedTo] = useState("아이돌")

  const writedToHanldler = (event) => setWritedTo(event.target.value)
  const [nickname, setNickname] = useState("");
  const [content, setContent] = useState("");
 
  const nicknameHanldler = (event) => setNickname(event.target.value)
  const contentHanldler = (event) => setContent(event.target.value)

  const date = new Date()
  const years = date.getFullYear();
  const day = date.getDate();
  const month = date.getMonth();
  const hours = date.getHours();
  const minutes = date.getMinutes();

  const addLetter = function (event) {
    event.preventDefault()
    if (nickname === "" || content === "") {
      alert("닉네임과 내용은 필수입니다!")
    } else {
      const newLetter = {
        "createdAt": `${years}-${month + 1}-${day} ${hours}:${minutes}`,
        "nickname": nickname,
        "avatar": defaultAvarta,
        "content": content,
        "writedTo": writedTo,
        "id": uuid(),
        "isEdit": false
      }

      setLetters([...letters, newLetter])
      setContent("")
      setNickname("")
      // setAvatar("")
    }

  }
  return (
    <FormStyle>
      <div>이름 : <InputStyle value={nickname} onChange={nicknameHanldler} /></div>
      <div>내용 : <InputStyle value={content} onChange={contentHanldler} /></div>
      {/* <div>프로필 사진 : <input value={avatar} onChange={avartaHanldler} /></div> */}
      <div>
        <label for="entertainer">누구에게 보낼 실 건가요? </label>
        <SelectStyle id='entertainer' value={writedTo} onChange={writedToHanldler} required>
          {writedToSelectList.map((writedTo) => {
            return (<option key={writedTo} value={writedTo}>{writedTo}</option>)
          })}
        </SelectStyle>
      </div>
      <AddButton onClick={addLetter}>등록</AddButton>
    </FormStyle>
  )
}

export default Form