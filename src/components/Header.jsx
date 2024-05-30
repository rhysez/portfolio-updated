import TopNav from "./TopNav.jsx";

const Header = () => {

  return (
    <>
      <section className="header-container">
        <TopNav />
        <header className="header">
          <section className="header-main">
            <h2 className="header-title">Rhys Hodgson</h2>
            <h2 className="header-subtitle">Full Stack Engineer</h2>
          </section>
        </header>
      </section>
    </>
  );
};

export default Header;
