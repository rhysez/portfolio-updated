import ProjectItem from "./ProjectItem.jsx";

const Projects = () => {
  return (
    <section id={'projects'}>
      <h2 className='section-title'>Latest Project</h2>
      <section id="projects-container">
        <ProjectItem
            image={"/spotify-insights.png"}
            name={"Spotify Insights"}
            description={
          "Data visualisation web app that provides tailor-made music insights for the user based on real artists from Spotify." +
                " Built with NextJS and PostgreSQL."
        }
            source={"https://spotify-insights-three.vercel.app"}
            code={'https://github.com/rhysez/spotify-insights'} />
      </section>
    </section>
  );
};

export default Projects;
