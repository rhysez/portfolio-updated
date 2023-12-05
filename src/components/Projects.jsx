import { useState } from "react";

const Projects = (props) => {
  const projectList = [
    {
      name: "FRESH Activewear",
      description:
        "Fake clothing store application built with React, uses react-router and fetches data from FakeStoreAPI.",
      image: "/fresh-desktop.jpg",
      source: "https://fresh-activewear.netlify.app/",
      code: 'https://github.com/rhysez/fake-clothing-store',
      type: 'React',
      fullStack: false
    },
    {
      name: "StockManager (Node.js)",
      description:
        "A server-side CRUD application for creating, viewing, updating and deleting items for your imaginary office space. Password required for adding new items/categories for sake of security.",
      image: "/stockmanager.jpg",
      source: "https://inventory-manager-production-4dc0.up.railway.app/inventory",
      code: 'https://github.com/rhysez/inventory-manager',
      type: 'Node.js',
      fullStack: true
    },
    {
      name: "PokeGuess",
      description:
        "Pokemon themed memory card game built with React, uses PokeAPI to asynchronously fetch pokemon data.",
      image: "/poke-guess.png",
      source: "https://pokemonguessr.netlify.app/",
      code: 'https://github.com/rhysez/memory-card-game',
      type: 'React',
      fullStack: false
    },
    {
      name: "YourDoing",
      description:
        "To do list app built using vanilla JavaScript, uses object oriented programming and localStorage API.",
      image: "/todolistdesktopdark.png",
      source: "https://rhysez.github.io/todolist/",
      code: 'https://github.com/rhysez/todolist',
      type: 'Vanilla JS',
      fullStack: false
    },
    {
      name: "Weather.js",
      description:
        "Weather app built that uses asynchronous code to fetch real-time weather information using WeatherAPI.",
      image: "/weather-desktop-example.png",
      source: "https://rhysez.github.io/weather-app/",
      code: 'https://github.com/rhysez/weather-app',
      type: 'Vanilla JS',
      fullStack: false
    },
    {
      name: "Portfolio",
      description:
        "This website! It was built using React, and uses Vite as a bundler.",
      image: "/portfolio-home.png",
      source: 'https://rhyshodgsondev.netlify.app/',
      code: 'https://github.com/rhysez/portfolio-updated',
      type: 'React',
      fullStack: false
    },
  ];

  const projectListAll = projectList.map((item, index) => {
    return (
        <section className='project-card'>
            <div
            className="project"
            key={index}
            style={{ backgroundImage: `url(${item.image})` }}
            >
            </div>

            <div className='project-info-container'>
              <h4 className='project-info-title'>{item.name}</h4>
              <p className='project-info-description'>{item.description}</p>
            </div>

            <div className='project-buttons'>
              <a href={item.code} target='_blank'><button className='project-button'>Code</button></a>
              <a href={item.source} target='_blank'><button className='project-button'>Live</button></a>
            </div>
        </section>
     
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
