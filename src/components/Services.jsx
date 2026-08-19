import "../styles/Services.css";
import {
  FiCode,
  FiSmartphone,
  FiLayers,
  FiTrendingUp,
  FiMonitor,
  FiPenTool,
} from "react-icons/fi";

function Services() {
  const services = [
    {
      icon: <FiCode />,
      title: "Web Development",
      description:
        "We build scalable, high-performance websites and web applications using modern technologies.",
    },
    {
      icon: <FiSmartphone />,
      title: "Mobile App Development",
      description:
        "Native and cross-platform mobile apps that deliver smooth and exceptional user experiences.",
    },
    {
      icon: <FiLayers />,
      title: "Custom Software Development",
      description:
        "Customized software solutions, business platforms, CRM, ERP and scalable digital products.",
    },
    {
      icon: <FiTrendingUp />,
      title: "Digital Marketing",
      description:
        "Data-driven digital strategies that improve visibility, reach customers and drive conversions.",
    },
    {
      icon: <FiMonitor />,
      title: "Web Design",
      description:
        "Modern, user-centered designs that combine beautiful visuals with powerful functionality.",
    },
    {
      icon: <FiPenTool />,
      title: "Graphic Design",
      description:
        "Creative graphics and visual identities that strengthen your brand and communicate your message.",
    },
  ];

  return (
    <section className="services" id="services">
      <div className="services-container">

        {/* SECTION HEADER */}
        <div className="services-header">
          <div>
            <p className="services-label">WHAT WE DO</p>

            <h2>
              Our <span>Services</span>
            </h2>
          </div>

          <p className="services-intro">
            We provide end-to-end digital solutions that help businesses
            grow and succeed in the digital world.
          </p>
        </div>

        {/* SERVICE CARDS */}
        <div className="services-grid">
          {services.map((service, index) => (
            <div className="service-card" key={index}>

              <div className="service-icon">
                {service.icon}
              </div>

              <h3>{service.title}</h3>

              <p>{service.description}</p>

              <a href="#contact-form">
                Learn More
                <span>→</span>
              </a>

            </div>
          ))}
        </div>

        {/* VIEW ALL */}
        <div className="services-bottom">
          <a href="#contact-form" className="view-services">
            View All Services
            <span>→</span>
          </a>
        </div>

      </div>
    </section>
  );
}

export default Services;