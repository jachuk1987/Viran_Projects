const testimonials = [
  {
    name: "Ramesh Kumar",
    feedback:
      "Excellent service! The team was punctual and did a fantastic deep cleaning.",
  },
  {
    name: "Priya Sharma",
    feedback:
      "Very professional staff. My house looks brand new after the service.",
  },
  {
    name: "Anil Reddy",
    feedback:
      "Highly recommended. Affordable pricing and great quality work.",
  },
];

const Testimonials = () => {
  return (
    <section className="py-20">
      <div className="max-w-container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          What Our Customers Say
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((item) => (
            <div
              key={item.name}
              className="bg-white shadow-md rounded-lg p-8 text-center"
            >
              <p className="text-textLight italic mb-6">
                “{item.feedback}”
              </p>
              <h4 className="font-semibold text-textDark">
                {item.name}
              </h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
