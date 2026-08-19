import "../styles/About.css";
import { FiArrowUpRight, FiCheck } from "react-icons/fi";

function About() {
  return (
    <section className="about" id="about">
      <div className="about-container">

        {/* LEFT VISUAL */}
        <div className="about-visual">

          <div className="about-main-card">
            <div className="about-card-logo">
              WX
            </div>

            <div className="about-card-text">
              <span>WEBEXXY</span>
              <small>
                BUILDING DIGITAL
                <br />
                POSSIBILITIES
              </small>
            </div>
          </div>

          <div className="about-floating-card">
            <strong>100%</strong>
            <span>Digital Focus</span>
          </div>

          <div className="about-number">
            01
          </div>

        </div>

        {/* RIGHT CONTENT */}
        <div className="about-content">

          <p className="about-label">
            WHO WE ARE
          </p>

          <h2>
            Turning Ideas Into
            <span> Digital Reality</span>
          </h2>

          <p className="about-intro">
            We are a technology-driven team passionate about creating
            digital products that make businesses better, faster and
            more connected.
          </p>

          <p className="about-text">
            At Webexxy, we combine creativity, technology and business
            understanding to build websites, applications and software
            solutions that are designed around your goals.
          </p>

          <div className="about-features">

            <div className="about-feature">
              <FiCheck />
              <span>Modern Technology</span>
            </div>

            <div className="about-feature">
              <FiCheck />
              <span>Creative Approach</span>
            </div>

            <div className="about-feature">
              <FiCheck />
              <span>Business Focused</span>
            </div>

            <div className="about-feature">
              <FiCheck />
              <span>Quality Driven</span>
            </div>

          </div>

          <div className="about-bottom">

            <div className="about-stats">

              <div className="about-stat">
                <strong>10+</strong>
                <span>Projects</span>
              </div>

              <div className="about-stat">
                <strong>5+</strong>
                <span>Services</span>
              </div>

              <div className="about-stat">
                <strong>100%</strong>
                <span>Commitment</span>
              </div>

            </div>

            <a href="#contact-form" className="about-link">
              More About Us
              <FiArrowUpRight />
            </a>

          </div>

        </div>

      </div>
    </section>
  );
}

export default About;