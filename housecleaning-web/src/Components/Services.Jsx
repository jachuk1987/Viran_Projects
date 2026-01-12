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
    <section className="py-20">
      <div className="max-w-container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          Our Services
        </h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service}
              className="bg-white shadow-md rounded-lg p-8 text-center hover:shadow-xl transition"
            >
              <h3 className="font-semibold text-lg">{service}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
