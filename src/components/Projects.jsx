import ProjectItem from "./ProjectItem.jsx";

const Projects = () => {
  const projectList = [
    {
      name: "Spotify Insights",
        description:
          "Data visualisation web app driven by Spotify's web API. Built with NextJS and PostgreSQL.",
        image: "/spotify-insights.png",
        source: "https://spotify-insights-three.vercel.app",
        code: 'https://github.com/rhysez/spotify-insights',
        type: 'MERN',
    },
    {
    name: "MembersOnly",
      description:
        "Private message board that allows users to become a club member and gain access to posts. Built with Express and MongoDB.",
      image: "/membersonly.jpg",
      source: "https://members-only-production-73c0.up.railway.app",
      code: 'https://github.com/rhysez/members-only',
      type: 'NodeJS',
    },
    {
      name: "FRESH",
      description:
        "Fake clothing store that allows users to add, update and delete items from their shopping card. Built with React.",
      image: "/fresh-desktop.jpg",
      source: "https://fresh-activewear.netlify.app/",
      code: 'https://github.com/rhysez/fake-clothing-store',
      type: 'React',
    },
    {
      name: "Portfolio",
      description:
        "This website! It was built using React, and uses Vite as a bundler.",
      image: "/portfolio.png",
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
    <section id={'projects'}>
      <h2 className='section-title'>Projects</h2>
      <section id="projects-container">{projectListAll}</section>
    </section>
  );
};

export default Projects;
