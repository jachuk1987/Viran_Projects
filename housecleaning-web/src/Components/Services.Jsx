import "./Services.css";

const services = [
  "House Deep Cleaning",
  "Office Cleaning",
  "Kitchen Cleaning",
  "Bathroom Cleaning",
  "Sofa Cleaning",
  "Sanitization",
];

const Services = () => {
  return (
    <section className="section">
      <div className="container">
        <h2 className="text-center">Our Services</h2>

        <div className="services-grid">
          {services.map((service) => (
            <div className="service-card" key={service}>
              {service}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
