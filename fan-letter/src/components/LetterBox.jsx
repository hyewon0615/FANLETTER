import React from 'react'
import Letters from 'components/Letters'
import styled from 'styled-components'

const LetterBoxStyle = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
`
function LetterBox() {
  console.log("letterBox randering")

  return (
    <LetterBoxStyle>
      <Letters/>
    </LetterBoxStyle>
  )
}

export default React.memo(LetterBox) 