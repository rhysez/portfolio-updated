const NavBar = () => {
    const navBarButtons = ["About", "Tech Stack", "Projects", "Contact"];
    const navBarButtonsMapped = navBarButtons.map((button, index) => (
        <li key={index} id={index} className="nav-button">
        {button}
        </li>
    ));

    return (
        <div className='nav-list-container'>
            <ul className="nav-list">{navBarButtonsMapped}</ul>
        </div>
    )
}

export default NavBar