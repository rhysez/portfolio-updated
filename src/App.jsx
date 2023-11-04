import { useState } from "react";
import Hamburger from "./components/Hamburger";
import Header from "./components/Header";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {

  const [toggleHamburger, setToggleHamburger] = useState(false);
  const hamburger = document.getElementById('hamburger-menu-container');

  const handleHamburger = () => {
    if (toggleHamburger == false) {
      setToggleHamburger(true)
    } else if (toggleHamburger == true) {
      setToggleHamburger(false)
    }
  }

  return (
    <>
      {toggleHamburger == true ? <Hamburger /> : null}
      <Header handleHamburger={handleHamburger} />
      <About />
      <Skills /> 
      <Projects /> 
      <Contact /> 
    </>
  );
}

export default App;
