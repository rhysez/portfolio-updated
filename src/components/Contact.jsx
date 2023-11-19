import Icon from '@mdi/react';
import { mdiEmailFast } from '@mdi/js';

const Contact = () => {

  const contactInfo = {
    contactEmail: "rhyshodgsondev@gmail.com",
    lookingForWorkMessage: "I am currently looking for job opportunities as a Front End Developer!",
    notLookingForWorkMessage: "I am currently not looking for any professional opportunities.",
    lookingForWork: true
  }

  const emailButton = <Icon path={mdiEmailFast} size={3} className='email-icon' />

  return (
    <>
      <section id="contact-container">
        <p className='contact-text'>You can contact me via any of my social links, or via email by clicking this button </p><a href="mailto:rhyshodgsondev@gmail.com">{emailButton}</a> 
      </section>
    </>
  );
};

export default Contact;
