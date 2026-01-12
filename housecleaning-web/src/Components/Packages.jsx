const packages = [
  {
    name: "Basic Cleaning",
    price: "₹1999",
    features: [
      "1 BHK Home",
      "Basic Dusting",
      "Kitchen Cleaning",
      "Bathroom Cleaning",
    ],
  },
  {
    name: "Deep Cleaning",
    price: "₹3999",
    features: [
      "2–3 BHK Home",
      "Deep Floor Cleaning",
      "Kitchen + Bathroom",
      "Sofa Cleaning",
    ],
    popular: true,
  },
  {
    name: "Premium Cleaning",
    price: "₹5999",
    features: [
      "Villa / Large Home",
      "Full Sanitization",
      "All Rooms Deep Clean",
      "Premium Products",
    ],
  },
];

const Packages = () => {
  return (
    <section className="bg-secondary py-20">
      <div className="max-w-container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          Cleaning Packages
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {packages.map((pkg) => (
            <div
              key={pkg.name}
              className={`bg-white rounded-lg shadow-md p-8 text-center ${
                pkg.popular ? "border-2 border-primary scale-105" : ""
              }`}
            >
              {pkg.popular && (
                <p className="text-primary font-semibold mb-4">
                  Most Popular
                </p>
              )}

              <h3 className="text-xl font-semibold mb-4">{pkg.name}</h3>

              <p className="text-4xl font-bold text-primary mb-6">
                {pkg.price}
              </p>

              <ul className="text-textLight space-y-3 mb-8">
                {pkg.features.map((feature) => (
                  <li key={feature}>✔ {feature}</li>
                ))}
              </ul>

              <button className="bg-primary text-white px-6 py-3 rounded-md w-full">
                Book Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Packages;
