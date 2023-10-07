import { useState } from 'react'

const Projects = (props) => {

    const projectList = [
        {
            name: 'PokeGuess',
            description: 'Pokemon themed memory card game built with React, uses PokeAPI to asynchronously fetch pokemon data.'
        },
        {
            name: 'YourDoing',
            description: 'To do list app built using vanilla JavaScript, uses object oriented programming and localStorage API.',
            image: '/public/todolistdesktopdark.png'
        },
        {
            name: 'Weather.js',
            description: 'Weather app built that uses asynchronous code to fetch real-time weather information using WeatherAPI.',
            image: '/public/weather-desktop-example.png'
        },
        {
            name: 'eBook Library',
            description: 'Fake eBook library app which uses object oriented programming to generate books.',
            image: '/public/library-example.png'
        },
        {
            name: 'Battleship',
            description: 'Battleship game playable against a simple AI.',
            image: '/public/battleship-example.png'
        },
        {
            name: 'Portfolio',
            description: 'This website! It was built using React, and uses Vite as a bundler.',
        }
    ]

    const projectListMapped = projectList.map((item, index) => {
        return <div className='project' key={index} style={{backgroundImage: `url(${item.image})`}}></div>
    })

    return (
        <>
            <div className='projects-container'>
                {projectListMapped}
            </div>
        </>
    )
}

export default Projects