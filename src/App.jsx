import { useState } from 'react'
import Navbar from './components/Navbar'
import Main from './components/Main'
import Resume from './components/Resume'
import Projects from './components/Projects'

function App() {

  return (
    <div>
      <Navbar />
      <Main />
      <Resume />
      <Projects />
    </div>
  )
}

export default App
