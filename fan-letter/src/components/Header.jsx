import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import {writeToSelect} from 'redux/modules/filteredLetter'

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
  background-color: ${props => props.btncolor};
  padding: 5px 10px 5px 10px;
  margin: 8px;
`


function Header() {

  const [allbtnColor, setAllbtnColor] = useState("greenyellow")
  const [idolbtnColor, setIdolbtnColor] = useState("white")
  const [actorbtnColor, setActorbtnColor] = useState("white")
  const [singerbtnColor, setSingerbtnColor] = useState("white")

const dispatch = useDispatch()
  const allBtnClickColorhandler = () => {
    setAllbtnColor('greenyellow')
    setIdolbtnColor('white')
    setActorbtnColor('white')
    setSingerbtnColor('white')
    dispatch(
      writeToSelect("아이돌 솔로가수 배우")
    )

  }
  const IdolBtnClickColorhandler = () => {
    setAllbtnColor('white')
    setIdolbtnColor('greenyellow')
    setActorbtnColor('white')
    setSingerbtnColor('white')
    dispatch(
      writeToSelect("아이돌")
    )

  }
  const ActorBtnClickColorhandler = () => {
    setAllbtnColor('white')
    setIdolbtnColor('white')
    setActorbtnColor('greenyellow')
    setSingerbtnColor('white')
    dispatch(
      writeToSelect("배우")
    )

  }
  const SingerBtnClickColorhandler = () => {
    setAllbtnColor('white')
    setIdolbtnColor('white')
    setActorbtnColor('white')
    setSingerbtnColor('greenyellow')
    dispatch(
      writeToSelect("솔로가수")
    )

  }
  console.log("header randering")
  return (
    <HeaderStyle>
      <h1>팬명록</h1>

      <ButtonBoxStyle>
        <CategoryBtnStyle btncolor={allbtnColor} onClick={allBtnClickColorhandler}>전체</CategoryBtnStyle>
        <CategoryBtnStyle btncolor={idolbtnColor} onClick={IdolBtnClickColorhandler}>아이돌</CategoryBtnStyle>
        <CategoryBtnStyle btncolor={singerbtnColor} onClick={SingerBtnClickColorhandler}>솔로가수</CategoryBtnStyle>
        <CategoryBtnStyle btncolor={actorbtnColor} onClick={ActorBtnClickColorhandler}>배우</CategoryBtnStyle>

      </ButtonBoxStyle>
    </HeaderStyle>
  )
}

export default React.memo(Header)

