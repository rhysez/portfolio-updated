import { useState } from 'react'
import Header from './components/Header'
import NavBar from './components/NavBar'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'

function App() {
  const [toggleAbout, setToggleAbout] = useState(false)
  const [toggleSkills, setToggleSkills] = useState(false)
  const [toggleProjects, setToggleProjects] = useState(false)
  const [toggleContact, setToggleContact] = useState(false)

  
  const handleHamburger = () => {
    
  }

  return (
    <>
        <Header openHamburger={handleHamburger} />
        <NavBar />
        <About />
    </>
  )
}

export default App
