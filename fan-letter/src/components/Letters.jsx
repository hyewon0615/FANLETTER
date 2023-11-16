import styled from 'styled-components'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const LetterImg = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 50%;
`
const LetterStyle = styled.li`
  display: flex;
  flex-direction: row;
  border: 3px solid greenyellow;
  width: 400px;
  gap : 10px;
  padding: 10px;
  margin-top: 10px;
  border-radius: 10px;
`
const ContentStyle = styled.p`
  height: 30px;
  width: 350px;
  background-color: #e0ffbd;
  line-height: 30px;
  padding-left: 8px;
  border-radius: 10px;
`
const TimeStyle = styled.p`
  font-size:10px;
  text-align: right;
  color: #626262;
`


function Letters({ letters, writedTo, }) {
  const navigate = useNavigate();

  return (
    <div>
      {letters
        .filter((L) => {
          return writedTo.includes(L.writedTo)
        })
        .map((letter) => {
          return (
            <LetterStyle key={letter.id} onClick={() => { navigate(`/detail/${letter.id}`) }}>
              <div>
                <LetterImg src={letter.avatar} alt=''></LetterImg>
              </div>
              <div>
                <p>{letter.nickname}</p>
                <TimeStyle>{letter.createdAt}</TimeStyle>
                {letter.content.length <= 45 ? <ContentStyle>{letter.content}</ContentStyle> : <ContentStyle>{letter.content.slice(0, 35)}...</ContentStyle>}
              </div>
            </LetterStyle>
          )
        })}

    </div>
  )
}

export default Letters