import { useState } from "react";

const Projects = (props) => {
  const projectList = [
    {
      name: "FRESH Activewear",
      description:
        "Fake clothing store application built with React, uses react-router and fetches data from FakeStoreAPI.",
      image: "/fresh-desktop.jpg",
      source: "https://fresh-activewear.netlify.app/",
    },
    {
      name: "PokeGuess",
      description:
        "Pokemon themed memory card game built with React, uses PokeAPI to asynchronously fetch pokemon data.",
      image: "/poke-guess.png",
      source: "https://pokemonguessr.netlify.app/",
    },
    {
      name: "YourDoing",
      description:
        "To do list app built using vanilla JavaScript, uses object oriented programming and localStorage API.",
      image: "/todolistdesktopdark.png",
      source: "https://rhysez.github.io/todolist/",
    },
    {
      name: "Weather.js",
      description:
        "Weather app built that uses asynchronous code to fetch real-time weather information using WeatherAPI.",
      image: "/weather-desktop-example.png",
      source: "https://rhysez.github.io/weather-app/",
    },
    {
      name: "eBook Library",
      description:
        "Fake eBook library app which uses object oriented programming to generate books.",
      image: "/library-example.png",
      source: "https://rhysez.github.io/library/",
    },
    {
      name: "Portfolio",
      description:
        "This website! It was built using React, and uses Vite as a bundler.",
      image: "/portfolio-home.png",
    },
  ];

  const projectListMapped = projectList.map((item, index) => {
    return (
      <a href={item.source} target="_blank">
        <div
          className="project"
          key={index}
          style={{ backgroundImage: `url(${item.image})` }}
        >

        </div>
      </a>
    );
  });

  return (
    <>
      <h2 className='projects-title'>Work</h2>
      <div id="projects-container">{projectListMapped}</div>
    </>
  );
};

export default Projects;
