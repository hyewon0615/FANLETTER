import React from 'react'
import Router from './shared/Router';
import { data } from 'shared/fakedata'
import { useState } from 'react'
import "./reset.css"

function App() {
  const [letters, setLetters] = useState(data);

  return (
  <Router letters={letters} setLetters={setLetters} />
  )
}

export default App