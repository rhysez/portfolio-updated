import Icon from '@mdi/react';
import { mdiEmailFast } from '@mdi/js';

const Contact = () => {
  const contactEmail = "rhyshodgsondev@gmail.com";
  const lookingForWorkMessage =
    "I am currently looking for job opportunities as a Front End Developer!";
  const notLookingForWorkMessage =
    "I am currently not looking for any professional opportunities.";
  const lookingForWork = true;

  return (
    <>
      <div className='contact-header-container'>
        <h1 className='lets'>Let's</h1>
        <h1 className='connect'>connect.</h1>
      </div>
      <div className="contact-container">
        <div className='email-container'>
          <p classJake='send-me-an-email'>Send me an email</p>
          <a href="mailto:rhyshodgsondev@gmail.com"><Icon path={mdiEmailFast} size={3} className='email-icon' /></a>
        </div>
      </div>
    </>
  );
};

export default Contact;
