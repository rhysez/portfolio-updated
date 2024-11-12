
// eslint-disable-next-line react/prop-types
const ProjectItem = ({key, image, name, description, code, source,}) => {
    return (
        <section className='project-card' key={key}>
            <div
                className="project"
                style={{backgroundImage: `url(${image})`}}
            >
            </div>

            <div className='project-info-container'>
                <h4 className='project-info-title'>{name}</h4>
                <p className='project-info-description'>{description}</p>
            </div>

            <div className='project-buttons'>
                <a href={code} target='_blank'>
                    <button className='project-button'>Code</button>
                </a>
                <a href={source} target='_blank'>
                    <button className='project-button'>Live</button>
                </a>
            </div>
        </section>
    )
}

export default ProjectItem;