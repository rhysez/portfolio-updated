
const About = (props) => {
  return (
    <>
      <div className="about-container">
        <p className="about-front-end">&lt; <span className='contents-number'>0.1</span> Front End Developer /&gt;</p>
        <p className="about-me">
          <span className='hello'>Hello!</span> My name is Rhys, and I'm from Cornwall, United Kingdom. <br />
          I'm a proficient <span className="js">JavaScript</span> and{" "}
          <span className="react">React</span> developer with a passion for
          building beautiful, responsive web applications. <br />
          With a strong understanding of object oriented programming, I can
          build apps that are flexible and highly scalable. <br />
        </p>

        <p className='about-me'>
          When I'm not coding, I like to spend my spare time gaming or reading a book
          by the sea near my home town. 
        </p>
      </div>
    </>
  );
};

export default About;
