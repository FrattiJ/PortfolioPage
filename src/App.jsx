import { useState } from 'react'
import Navbar from './components/Navbar'
import Main from './components/Main'
import Resume from './components/Resume'
import Projects from './components/Projects'
import Contact from './components/Contact'

function App() {

  return (
    <div>
      <Navbar />
      <Main />
      <Resume />
      <Projects />
      <Contact />
      {/* Footer */}
    </div>
  )
}

export default App
