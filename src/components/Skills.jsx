import { useState } from "react";

const Skills = (props) => {
  const [selectedSkill, setSelectedSkill] = useState(
    "Front end tech stack"
  );
  const [skillColor, setSkillColor] = useState("var(--background-light)");

  const technologies = [
    {
      name: "HTML - Markup",
      color: "orange",
      source:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    },
    {
      name: "CSS - Styling",
      color: "dodgerblue",
      source:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    },
    {
      name: "JavaScript - Programming",
      color: "yellow",
      source:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    },
    {
      name: "React - Library",
      color: "dodgerblue",
      source:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    },
    {
      name: "Git - Version control",
      color: "mediumseagreen",
      source:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    },
    {
      name: "Jest - Testing",
      color: "violet",
      source:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg",
    },
    {
      name: "Webpack - Bundler",
      color: "dodgerblue",
      source:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/webpack/webpack-original.svg",
    },
    {
      name: "Bash - Command line",
      color: "lightgreen",
      source:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bash/bash-original.svg",
    },
    {
      name: "Chrome - Developer tools",
      color: "yellow",
      source:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/chrome/chrome-original.svg",
    },
  ];

  const handleChangeSkill = (skill) => {
    setSelectedSkill(skill.name);
    setSkillColor(skill.color);
  };

  const technologiesMapped = technologies.map((item, index) => {
    return (
      <img
        className="skills-image"
        src={item.source}
        alt="skill"
        key={index}
        onClick={() => {
          handleChangeSkill(item);
        }}
      />
    );
  });

  return (
    <>
      <div className="skills-container" style={{ backgroundColor: skillColor }}>
        <h2 className="skills-header">
          {selectedSkill}
        </h2>
        <div className="technologies">{technologiesMapped}</div>
      </div>
    </>
  );
};

export default Skills;
