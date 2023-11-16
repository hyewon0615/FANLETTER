import React from 'react'
import Letters from 'components/Letters'
import styled from 'styled-components'

const LetterBoxStyle = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
`

function LetterBox({idolLettersShown, singerLettersShown, actorLettersShown, allLettersShown }) {
  return (
    <LetterBoxStyle>
      {allLettersShown === true ? <Letters  writedTo={"아이돌 솔로가수 배우"} /> : ""}
      {idolLettersShown === true ? <Letters  writedTo={"아이돌"} /> : ""}
      {singerLettersShown === true ? <Letters writedTo={"솔로가수"} /> : ""}
      {actorLettersShown === true ? <Letters  writedTo={"배우"} /> : ""}
    </LetterBoxStyle>
  )
}

export default LetterBox