import Icon from "@mdi/react";
import { mdiInstagram, mdiGithub, mdiLinkedin } from "@mdi/js";

const TopNav = () => {
    return (
        <nav className="nav-bar">
            <div className="socials">
                <a href="https://www.linkedin.com/in/rhys-hodgson-8262b3218/" target="_blank">
                    <Icon path={mdiLinkedin} size={2} className="nav-social-option"/>
                </a>
                <a href="https://www.instagram.com/rhyshodgsondev/" target="_blank">
                    <Icon path={mdiInstagram} size={2} className="nav-social-option"/>
                </a>
                <a href="https://github.com/rhysez" target="_blank">
                    <Icon path={mdiGithub} size={2} className="nav-social-option"/>
                </a>
            </div>
        </nav>
    )
}

export default TopNav;