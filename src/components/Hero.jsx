import "../styles/Hero.css";
import {
  FiCode,
  FiGrid,
  FiSmartphone,
  FiPenTool,
  FiTrendingUp,
} from "react-icons/fi";

function Hero() {
  const floatingServices = [
    {
      icon: <FiCode />,
      title: "Web",
      subtitle: "Development",
      className: "card-web",
    },
    {
      icon: <FiGrid />,
      title: "Web",
      subtitle: "Design",
      className: "card-design",
    },
    {
      icon: <FiSmartphone />,
      title: "Mobile",
      subtitle: "Apps",
      className: "card-mobile",
    },
    {
      icon: <FiPenTool />,
      title: "Graphic",
      subtitle: "Design",
      className: "card-graphic",
    },
    {
      icon: <FiTrendingUp />,
      title: "Digital",
      subtitle: "Marketing",
      className: "card-marketing",
    },
  ];

  return (
    <section className="hero" id="home">

      <div className="hero-container">

        {/* LEFT CONTENT */}
        <div className="hero-content">

          <div className="hero-badge">
            Web & App Development
          </div>

          <h1>
            We Build{" "}
            <span>Web &</span>
            <br />

            <span>Mobile Apps</span>{" "}
            that
            <br />

            Drive Growth
          </h1>

          <p className="hero-description">
            From custom web applications to native mobile apps, our
            expert team crafts tailored software solutions that help
            your business thrive in the digital landscape.
          </p>

          <div className="hero-buttons">

            <a
              href="#contact-form"
              className="hero-primary-btn"
            >
              Start a Project
              <span>›</span>
            </a>

            <a
              href="#services"
              className="hero-secondary-btn"
            >
              Our Services
            </a>

          </div>

        </div>

        {/* RIGHT VISUAL */}
        <div className="hero-visual">

          <div className="visual-glow"></div>

          {floatingServices.map((service) => (
            <div
              className={`floating-card ${service.className}`}
              key={service.className}
            >
              <div className="floating-icon">
                {service.icon}
              </div>

              <div className="floating-title">
                {service.title}
                <br />
                {service.subtitle}
              </div>
            </div>
          ))}

        </div>

      </div>

    </section>
  );
}

export default Hero;