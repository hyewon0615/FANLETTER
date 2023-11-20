import styled from 'styled-components'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'


const LetterImg = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 50%;
`
const LetterStyle = styled.li`
  display: flex;
  flex-direction: ${props => props.direction};
  border: 3px solid greenyellow;
  width: 400px;
  gap : 10px;
  padding: 10px;
  margin-top: 10px;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
`
const ContentStyle = styled.p`
  height:  ${props => props.height};
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
const emoStyle = styled.p`
  font-size: 150px;
`

function Letters() {

  const navigate = useNavigate();
  const fanletter = useSelector((state) => {
    return state.fanletter;
  })
  // console.log(fanletter)
  const writeToselect = useSelector((state) => {
    return state.filteredLetter;
  })
  console.log("letters randering")

  const filteredLetter = fanletter.letters
    .filter((L) => {
      return writeToselect.select.includes(L.writedTo)
    })

  return (
    <>
      {
        // filteredLetter얘가 아무것도 없어..
        // 근데 map돌려... 
        filteredLetter.length === 0 ? (<LetterStyle direction="column"><emoStyle>🙅‍♀️</emoStyle>편지가 없습니다! 첫 편지를 작성해주세요!</LetterStyle>) : (
          filteredLetter
            .map((letter) => (
              // 여기서 하는거 아님돠
              <LetterStyle direction="row" key={letter.id} onClick={() => { navigate(`/detail/${letter.id}`) }}>
                <div>
                  <LetterImg src={letter.avatar} alt=''></LetterImg>
                </div>
                <div>
                  <p>{letter.nickname}</p>
                  <TimeStyle>{letter.createdAt}</TimeStyle>
                  {letter.content.length <= 45 ? <ContentStyle height="30px">{letter.content}</ContentStyle> : <ContentStyle height="30px">{letter.content.slice(0, 35)}...</ContentStyle>}
                </div>
              </LetterStyle>

            )))
      }
    </>
  )
}

export default React.memo(Letters)