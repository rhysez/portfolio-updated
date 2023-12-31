const Hamburger = () => {

    return (
        <section id='hamburger-menu-container'>
            <section className='hamburger-menu'>
                <ul className='hamburger-list'>
                    <a href="#about-container"><li className="menu-option">About</li></a>
                    <a href="#skills-container"><li className="menu-option">Skills</li></a>
                    <a href="#projects-container"><li className="menu-option">Work</li></a>
                    <a href="#contact-container"><li className="menu-option">Contact</li></a>
                </ul>
            </section>
        </section>
    )
}

export default Hamburger