import "../styles/WhyChooseUs.css";

function WhyChooseUs() {
  const reasons = [
    {
      number: "01",
      title: "Creative Solutions",
      description:
        "We turn ideas into creative and practical digital solutions.",
    },
    {
      number: "02",
      title: "Modern Technology",
      description:
        "We use modern technologies to build reliable and scalable products.",
    },
    {
      number: "03",
      title: "Client Focused",
      description:
        "Your business goals and requirements remain at the heart of every project.",
    },
    {
      number: "04",
      title: "Quality First",
      description:
        "We focus on clean design, performance and quality throughout the development process.",
    },
  ];

  return (
    <section className="why-us">
      <div className="why-us-container">

        <div className="why-us-heading">
          <p>WHY WEBEXXY</p>

          <h2>
            Why Choose
            <span> Us?</span>
          </h2>

          <p className="why-us-description">
            We combine technology, creativity and business understanding
            to create digital solutions that deliver real value.
          </p>
        </div>

        <div className="reasons-grid">
          {reasons.map((reason) => (
            <div className="reason-card" key={reason.number}>
              <span>{reason.number}</span>

              <h3>{reason.title}</h3>

              <p>{reason.description}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default WhyChooseUs;