
const Header = (props) => {
  const navBarButtons = ["About", "Tech Stack", "Projects", "Contact"];

  const navBarButtonsMapped = navBarButtons.map((button, index) => (
    <li key={index} id={index} className="nav-button">
      {button}
    </li>
  ));

  return (
    <>
      <div className="header-container">
        <div className="nav-bar">
          <ul className="nav-list">{navBarButtonsMapped}</ul>
        </div>
        <div className="header">
          <div className="header-main">
            <h2 className="header-title">Hi, I'm Rhys.</h2>
            <h2 className='header-subtitle'>A Front End Developer.</h2>
          </div>
        <img src="/public/man-at-desk.png" alt="man at desk" className='header-image' />
        </div>
      </div>
    </>
  );
};

export default Header;
