import React, { useState } from 'react'
import styled from 'styled-components'

const HeaderStyle = styled.header`
  background-color: #e0ffbd;
  height: 150px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  font-size: 40px;
  font-weight: 800;
  padding-top: 100px;
`
const ButtonBoxStyle = styled.div`
    border: 3px solid greenyellow;
    border-radius: 20px;
    width: 400px;
    display: flex;
    justify-content: center;
    background-color: white;
  `
const CategoryBtnStyle = styled.button`
    border: 2px solid greenyellow;
    border-radius: 10px;
    background-color: ${props => props.btnColor};
    padding: 5px 10px 5px 10px;
    margin: 8px;
   `

function Header({ setIdolLettersShown, setActorLettersShown, setSingerLettersShown, setAllLettersShown }) {

  const [allbtnColor, setAllbtnColor] = useState("white")
  const [idolbtnColor, setIdolbtnColor] = useState("white")
  const [actorbtnColor, setActorbtnColor] = useState("white")
  const [singerbtnColor, setSingerbtnColor] = useState("white")


  const allBtnClickColorhandler = () => {
    setAllbtnColor('greenyellow')
    setIdolbtnColor('white')
    setActorbtnColor('white')
    setSingerbtnColor('white')
  }
  const IdolBtnClickColorhandler = () => {
    setAllbtnColor('white')
    setIdolbtnColor('greenyellow')
    setActorbtnColor('white')
    setSingerbtnColor('white')
  }
  const ActorBtnClickColorhandler = () => {
    setAllbtnColor('white')
    setIdolbtnColor('white')
    setActorbtnColor('greenyellow')
    setSingerbtnColor('white')
  }
  const SingerBtnClickColorhandler = () => {
    setAllbtnColor('white')
    setIdolbtnColor('white')
    setActorbtnColor('white')
    setSingerbtnColor('greenyellow')
  }
  return (
    <HeaderStyle>
      <h1>팬명록</h1>

      <ButtonBoxStyle>
        <CategoryBtnStyle key={0} btnColor={allbtnColor} onClick={() => {
          setAllLettersShown(true)
          setIdolLettersShown(false)
          setSingerLettersShown(false)
          setActorLettersShown(false)
          allBtnClickColorhandler()
        }}>전체</CategoryBtnStyle>
        <CategoryBtnStyle key={1} btnColor={idolbtnColor} onClick={() => {
          setAllLettersShown(false)
          setIdolLettersShown(true)
          setSingerLettersShown(false)
          setActorLettersShown(false)
          IdolBtnClickColorhandler()
        }}>아이돌</CategoryBtnStyle>
        <CategoryBtnStyle key={2} btnColor={singerbtnColor} onClick={() => {
          setAllLettersShown(false)
          setIdolLettersShown(false)
          setSingerLettersShown(true)
          setActorLettersShown(false)
          SingerBtnClickColorhandler()
        }}>솔로가수</CategoryBtnStyle>
        <CategoryBtnStyle key={3} btnColor={actorbtnColor} onClick={() => {
          setAllLettersShown(false)
          setIdolLettersShown(false)
          setSingerLettersShown(false)
          setActorLettersShown(true)
          ActorBtnClickColorhandler()
        }}>배우</CategoryBtnStyle>

      </ButtonBoxStyle>
    </HeaderStyle>
  )
}

export default Header

