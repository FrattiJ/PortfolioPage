import { useState } from 'react'
import Navbar from './components/Navbar'
import Main from './components/Main'
import Resume from './components/Resume'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
// Didn't understand resolver code to create jsx routes to allow for mulitple pages with some shared components
  return (
    <div>
      <Navbar />
      <Main />
      <Resume />
      <Projects />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
