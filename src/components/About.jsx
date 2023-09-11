import Icon from "@mdi/react";
import { mdiArrowRightThin } from "@mdi/js";

const About = (props) => {
  return (
    <>
      <div className="about-container">
        <p className="about-front-end">&lt; Front End Developer /&gt;</p>
        <p className="about-me">
          I'm a proficient <span className="js">JavaScript</span> and{" "}
          <span className="react">React</span> developer with a passion for
          building beautiful, responsive web applications. <br />
          With a strong understanding of object oriented programming, I can
          build apps that are flexible and highly scalable. <br />
        </p>
      </div>
    </>
  );
};

export default About;
