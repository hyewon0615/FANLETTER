import React, { useState } from 'react'

import Form from 'components/Form'
import Header from 'components/Header'
import LetterBox from 'components/LetterBox'
import Footer from 'components/Footer'


function Home({ letters, setLetters }) {


  const [allLettersShown, setAllLettersShown] = useState(true)
  const [idolLettersShown, setIdolLettersShown] = useState(false)
  const [actorLettersShown, setActorLettersShown] = useState(false)
  const [singerLettersShown, setSingerLettersShown] = useState(false)


  return (
    <div>
      <Header
        setIdolLettersShown={setIdolLettersShown}
        setActorLettersShown={setActorLettersShown}
        setSingerLettersShown={setSingerLettersShown}
        setAllLettersShown={setAllLettersShown}
      />
      <Form letters={letters} setLetters={setLetters} />

      <LetterBox
        idolLettersShown={idolLettersShown}
        actorLettersShown={actorLettersShown}
        singerLettersShown={singerLettersShown}
        allLettersShown={allLettersShown}
        letters={letters}
        setLetters={setLetters}
      />
      {/* <Footer /> */}


    </div>
  )
}


export default Home