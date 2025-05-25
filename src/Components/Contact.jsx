import "../CssFolder/Contact.css";

function Contact() {
  const handleEmailClick = () => {
    window.location.href = "mailto:lincydiyo39@gmail.com";
  };

  return (
    <>
      <div className="ContactDiv">
        <section className="ContactSection">
          <h3>Contact Details</h3>
          <h5>Name: Lincy D</h5>
          <h5>Email: lincydiyo39@gmail.com</h5>
          <h5>Phone: 8754891257</h5>
          <h5>Message: Feel free to reach out to me for any collaborations!</h5>
          <button type="button" onClick={handleEmailClick}>
            Send Email
          </button>
        </section>
      </div>
    </>
  );
}

export default Contact;
