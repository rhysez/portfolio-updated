const Contact = () => {
  const contactEmail = "rhyshodgsondev@gmail.com";
  const lookingForWorkMessage =
    "I am currently looking for job opportunities as a Front End Developer!";
  const notLookingForWorkMessage =
    "I am currently not looking for any professional opportunities.";
  const lookingForWork = true;

  return (
    <>
      <div className="contact-container">
        {lookingForWork ? (
          <h3
            className="looking-for-work"
            style={{ backgroundColor: "var(--highlight-green)" }}
          >
            {lookingForWorkMessage}
          </h3>
        ) : (
          <h3
            className="looking-for-work"
            style={{ backgroundColor: "var(--background-dark)" }}
          >
            {notLookingForWorkMessage}
          </h3>
        )}

        <p className="contact-info">
          For business inquiries, job offers or general queries: {contactEmail}{" "}
        </p>
      </div>
    </>
  );
};

export default Contact;
