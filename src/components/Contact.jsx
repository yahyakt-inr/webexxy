import "../styles/Contact.css";

function Contact() {
  return (
    <section className="contact" id="contact-form">
      <div className="contact-container">

        <div className="contact-info">
          <p className="contact-label">GET IN TOUCH</p>

          <h2>
            Let's Talk About
            <span> Your Project.</span>
          </h2>

          <p className="contact-description">
            Have a project in mind? Tell us what you are looking for
            and our team will get back to you.
          </p>

          <div className="contact-details">
            <div>
              <span>Email</span>
              <p>hello@webexxy.com</p>
            </div>

            <div>
              <span>Phone</span>
              <p>+91 00000 00000</p>
            </div>

            <div>
              <span>Location</span>
              <p>Kerala, India</p>
            </div>
          </div>
        </div>

        <form className="contact-form">

          <div className="form-group">
            <label>Your Name</label>
            <input
              type="text"
              placeholder="Enter your name"
            />
          </div>

          <div className="form-group">
            <label>Email Address</label>
            <input
              type="email"
              placeholder="Enter your email"
            />
          </div>

          <div className="form-group">
            <label>Subject</label>
            <input
              type="text"
              placeholder="What can we help you with?"
            />
          </div>

          <div className="form-group">
            <label>Message</label>
            <textarea
              rows="5"
              placeholder="Tell us about your project..."
            ></textarea>
          </div>

          <button type="submit">
            Send Message →
          </button>

        </form>

      </div>
    </section>
  );
}

export default Contact;