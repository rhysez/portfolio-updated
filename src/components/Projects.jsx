import ProjectItem from "./ProjectItem.jsx";

const Projects = () => {
  const projectList = [
    {
      name: "Blogr",
        description:
          "Blogging platform for reading, liking and commenting on blog posts. Built with MongoDB, Express, React and Node.",
        image: "/blogr.jpg",
        source: "https://blogr-client.netlify.app/",
        code: 'https://github.com/rhysez/blogr-client',
        type: 'MERN',
    },
    {
    name: "MembersOnly",
      description:
        "Mini social posting platform where users can create an account and upgrade their membership to make posts, and show them to others.",
      image: "/membersonly.jpg",
      source: "https://members-only-production-73c0.up.railway.app",
      code: 'https://github.com/rhysez/members-only',
      type: 'NodeJS',
    },
    {
      name: "FRESH Activewear",
      description:
        "Fake clothing store application built with React, uses react-router and fetches data from FakeStoreAPI.",
      image: "/fresh-desktop.jpg",
      source: "https://fresh-activewear.netlify.app/",
      code: 'https://github.com/rhysez/fake-clothing-store',
      type: 'React',
    },
    {
      name: "PokeGuess",
      description:
        "Pokemon themed memory card game built with React, uses PokeAPI to asynchronously fetch pokemon data.",
      image: "/poke-guess.png",
      source: "https://pokemonguessr.netlify.app/",
      code: 'https://github.com/rhysez/memory-card-game',
      type: 'React',
    },
    {
      name: "Weather.js",
      description:
        "Weather app built that uses asynchronous code to fetch real-time weather information using WeatherAPI.",
      image: "/weather-desktop-example.png",
      source: "https://rhysez.github.io/weather-app/",
      code: 'https://github.com/rhysez/weather-app',
      type: 'Vanilla JS',
    },
    {
      name: "Portfolio",
      description:
        "This website! It was built using React, and uses Vite as a bundler.",
      image: "/portfolio-home.png",
      source: 'https://rhyshodgsondev.netlify.app/',
      code: 'https://github.com/rhysez/portfolio-updated',
      type: 'React',
    },
  ];

  const projectListAll = projectList.map((item, index) => {
    return (
     <ProjectItem key={index} image={item.image} name={item.name} description={item.description} source={item.source} code={item.code} />
    );
  });

  return (
    <>
      <h2 className='projects-title'>Work</h2>
      <section id="projects-container">{projectListAll}</section>
    </>
  );
};

export default Projects;
