const services = [
  "House Deep Cleaning",
  "Office Cleaning",
  "Kitchen Cleaning",
  "Bathroom Cleaning",
  "Sofa & Carpet Cleaning",
  "Sanitization Services",
];

const Services = () => (
  <section className="py-16 px-6 grid md:grid-cols-3 gap-6">
    {services.map((service) => (
      <div key={service} className="shadow p-6 rounded bg-white">
        <h3 className="font-semibold text-lg">{service}</h3>
      </div>
    ))}
  </section>
);

export default Services;
