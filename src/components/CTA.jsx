import "../styles/CTA.css";
import { FiArrowRight } from "react-icons/fi";

function CTA() {
  return (
    <section className="cta">
      <div className="cta-container">

        <div className="cta-content">

          <p className="cta-label">
            LET'S BUILD SOMETHING GREAT
          </p>

          <h2>
            Ready to Start Your
            <span> Digital Journey?</span>
          </h2>

          <p className="cta-description">
            Let's collaborate to create a digital solution that helps
            your business grow. Get in touch today and let's discuss
            your project.
          </p>

          <div className="cta-buttons">

            <a
              href="#contact-form"
              className="cta-primary"
            >
              Start a Project
              <FiArrowRight />
            </a>

            <a
              href="#services"
              className="cta-secondary"
            >
              Our Services
            </a>

          </div>

        </div>

        <div className="cta-decoration">
          <div className="cta-circle circle-one"></div>
          <div className="cta-circle circle-two"></div>
          <div className="cta-circle circle-three"></div>

          <div className="cta-logo">
            WX
          </div>
        </div>

      </div>
    </section>
  );
}

export default CTA;