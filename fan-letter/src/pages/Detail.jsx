import { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import styled from 'styled-components';
const EditTextStyle = styled.textarea`
  width: 500px;
  height: 150px;
  margin: 10px;
`
const TextStyle = styled.p`
  width: 500px;
  height: 150px;
  margin: 10px;
`
const ProfileStyle = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`
const DetailStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
const DetailImg = styled.img`
  margin: 10px;
  width: 50px;
  height: 50px;
  border-radius: 50%;
`
const TimeStyle = styled.p`

  width: 430px;
  font-size:10px;
  text-align: right;
  color: #626262;
`
const DetailButton = styled.button`
  background-color: greenyellow;
  border: greenyellow;
  border-radius: 15px;
  padding: 5px 8px 5px 8px;
  margin: 10px 0px 10px 10px;
`

function Detail({ letters, setLetters }) {
  const params = useParams();

  const foundLetter = letters.find((letter) => {
    return letter.id === params.id
  });


  const navigate = useNavigate()

  const removeLetterHandler = (id) => {
    if (window.confirm("정말로 지우시겠습니까?")) {
      const filteredLetter = letters.filter(letter => letter.id !== id)
      setLetters(filteredLetter)
      navigate(`/`)
    } else {
      alert("취소되었습니다")
    }
  }

  const [isEdit, setIsEdit] = useState(false)
  const [editLetter, setEditLetter] = useState(foundLetter.content)

  const editTextHandler = (event) => { setEditLetter(event.target.value) }
  const finishEditHandler = (id) => {
    const editcontent = letters.map((item) => ({
      ...item, content: item.id === id ? editLetter : item.content

    }))
    if (editLetter === foundLetter.content) {
      alert("수정된 부분이 없습니다.")
    } else {
      setLetters(editcontent)
      setIsEdit(false)
    }

  }
  return (
    <div>
      <DetailButton onClick={() => { navigate(`/`) }}>
        Home
      </DetailButton>
      <DetailStyle key={foundLetter.id}>

        <ProfileStyle>
          <DetailImg src={foundLetter.avatar} alt=''></DetailImg>
          <div>
            <p>{foundLetter.nickname}</p>
            <TimeStyle>{foundLetter.createdAt}</TimeStyle>
          </div>

        </ProfileStyle>

        <div>
          {
            isEdit ?
              <EditTextStyle  value={editLetter} onChange={editTextHandler}>{foundLetter.content}</EditTextStyle> :
              <TextStyle>{foundLetter.content}</TextStyle>
          }

        </div>

        {isEdit ? <DetailButton onClick={() => (finishEditHandler(foundLetter.id))}>수정완료</DetailButton> : <div>
          <DetailButton onClick={() => { setIsEdit(!isEdit) }}>수정</DetailButton>
          <DetailButton onClick={() => (removeLetterHandler(foundLetter.id))}>삭제</DetailButton>
        </div>}

      </DetailStyle>
    </div>
  )
}

export default Detail