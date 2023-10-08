import { useState } from "react";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  const [toggleAbout, setToggleAbout] = useState(false);
  const [toggleSkills, setToggleSkills] = useState(false);
  const [toggleProjects, setToggleProjects] = useState(false);
  const [toggleContact, setToggleContact] = useState(false);

  const handleHamburger = () => {};

  const handleRenderContent = (e) => {
    if (e.target.textContent === "About") {
      setToggleAbout(true);
      setToggleSkills(false);
      setToggleProjects(false);
      setToggleContact(false);
    }

    if (e.target.textContent === "Tech Stack") {
      setToggleAbout(false);
      setToggleSkills(true);
      setToggleProjects(false);
      setToggleContact(false);
    }

    if (e.target.textContent === "Projects") {
      setToggleAbout(false);
      setToggleSkills(false);
      setToggleProjects(true);
      setToggleContact(false);
    }

    if (e.target.textContent === "Contact") {
      setToggleAbout(false);
      setToggleSkills(false);
      setToggleProjects(false);
      setToggleContact(true);
    }
  };

  return (
    <>
      <Header openHamburger={handleHamburger} />
      <NavBar renderContent={handleRenderContent} />
      {toggleAbout ? <About /> : null}
      {toggleSkills ? <Skills /> : null}
      {toggleProjects ? <Projects /> : null}
    </>
  );
}

export default App;
