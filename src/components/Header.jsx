import { useState } from 'react'
import Icon from "@mdi/react";
import { mdiInstagram, mdiGithub, mdiLinkedin, mdiHamburger } from "@mdi/js";

const Header = (props) => {

  return (
    <>
      <section className="header-container">
        <nav className="nav-bar">
          <Icon path={mdiHamburger} size={2} className='hamburger' onClick={props.handleHamburger} />
          <div className="socials">
            <a href="https://www.linkedin.com/in/rhys-hodgson-8262b3218/" target="_blank">
              <Icon path={mdiLinkedin} size={2} className="nav-social-option" />
            </a>
            <a href="https://www.instagram.com/rhyshodgsondev/" target="_blank">
              <Icon path={mdiInstagram} size={2} className="nav-social-option" />
            </a>
            <a href="https://github.com/rhysez" target="_blank">
              <Icon path={mdiGithub} size={2} className="nav-social-option" />
            </a>
          </div>
        </nav>
        <div className="header">
          <div className="header-main">
            <h2 className="header-title">Hi, I'm Rhys</h2>
            <h2 className="header-subtitle">A Full Stack Developer</h2>
          </div>
          <img src="/memoji.png" alt="man at desk" className="header-image" />
        </div>
      </section>
    </>
  );
};

export default Header;
