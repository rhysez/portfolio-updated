import Icon from "@mdi/react";
import {mdiInstagram, mdiGithub, mdiLinkedin, mdiThoughtBubble} from "@mdi/js";

const TopNav = () => {
    return (
        <nav className="nav-bar">
            <p style={{
                fontWeight: 'bold',
                fontSize: '2.25rem',
                marginLeft: '15%',
                marginTop: 0,
                marginBottom: 0
            }}>Rh<span className={"accent-full-stop"}>.</span></p>
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
                <a href="https://medium.com/@rhyshodgson97/learn-web-development-on-your-coffee-break-preface-read-this-first-a0519581c805" target="_blank">
                    <Icon path={mdiThoughtBubble} size={2} className="nav-social-option"/>
                </a>
            </div>
        </nav>
    )
}

export default TopNav;