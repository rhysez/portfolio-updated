import { useState } from 'react'

const Skills = (props) => {

  const [selectedSkill, setSelectedSkill] = useState('Technologies I work with...')
  const [skillColor, setSkillColor] = useState('var(--background-light)')

  const technologies = [
    {
      name: "HTML - Markup",
      color: 'orange',
      source:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    },
    {
      name: "CSS - Styling",
      color: 'dodgerblue',
      source:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    },
    {
      name: "JavaScript - Programming",
      color: 'yellow',
      source:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    },
    {
      name: "React - Library",
      color: 'dodgerblue',
      source:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    },
    {
      name: "Git - Version control",
      color: 'mediumseagreen',
      source:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    },
    {
      name: "Jest - Testing",
      color: 'violet',
      source:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg",
    },
    {
      name: "Webpack - Bundler",
      color: 'dodgerblue',
      source:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/webpack/webpack-original.svg",
    },
    {
      name: "Bash - Command line",
      color: 'lightgreen',
      source:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bash/bash-original.svg",
    },
  ];

  const changeSkill = (skill) => {
    setSelectedSkill(skill.name)
    setSkillColor(skill.color)
  }

  const technologiesMapped = technologies.map((item) => {
    return <img className='skills-image' src={item.source} alt="skill" onClick={() => { changeSkill(item) }} />
  })

  return (
    <>
      <div className="skills-container">
        <h2 className="skills-header" style={{color: skillColor}}>{selectedSkill}</h2> 
        <div className="technologies">
          {technologiesMapped}
        </div>
      </div>
    </>
  );
};

export default Skills;
