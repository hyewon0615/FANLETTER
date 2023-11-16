import React from 'react'
import Letters from 'components/Letters'
import styled from 'styled-components'

const LetterBoxStyle = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
`

function LetterBox({ letters, idolLettersShown, singerLettersShown, actorLettersShown, allLettersShown }) {
  return (
    <LetterBoxStyle>
      {allLettersShown === true ? <Letters letters={letters} writedTo={"아이돌 솔로가수 배우"} /> : ""}
      {idolLettersShown === true ? <Letters letters={letters} writedTo={"아이돌"} /> : ""}
      {singerLettersShown === true ? <Letters letters={letters} writedTo={"솔로가수"} /> : ""}
      {actorLettersShown === true ? <Letters letters={letters} writedTo={"배우"} /> : ""}
    </LetterBoxStyle>
  )
}

export default LetterBox