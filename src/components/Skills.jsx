const Skills = (props) => {
    
  const technologies = [
    {
      name: "html",
      source:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    },
    {
      name: "css",
      source:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    },
    {
      name: "javascript",
      source:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    },
    {
      name: "react",
      source:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    },
    {
      name: "git",
      source:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    },
    {
      name: "jest",
      source:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg",
    },
    {
      name: "webpack",
      source:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/webpack/webpack-original.svg",
    },
    {
      name: "bash",
      source:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bash/bash-original.svg",
    },
  ];

  const technologiesMapped = technologies.map((item) => {
    return <img className='skills-image' src={item.source} alt="skill" />
  })

  return (
    <>
      <div className="skills-container">
        <h2 className="skills-header">Technologies I work with...</h2>
        <div className="technologies">
          {technologiesMapped}
        </div>
      </div>
    </>
  );
};

export default Skills;
