import React from 'react'
import Router from './shared/Router';
import { data } from 'shared/fakedata'
import { useState } from 'react'
import "./reset.css"
import { Context } from 'shared/Context';

function App() {
  const [letters, setLetters] = useState(data);

  return (
    <Context.Provider value={{
      letters,
      setLetters
    }}>
      <Router />
    </Context.Provider>
  )
}

export default App