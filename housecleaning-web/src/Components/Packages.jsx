import "./Packages.css";

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
    <section className="section packages">
      <div className="container">
        <h2 className="section-title">Cleaning Packages</h2>

        <div className="packages-grid">
          {packages.map((pkg) => (
            <div
              key={pkg.name}
              className={`package-card ${
                pkg.popular ? "popular" : ""
              }`}
            >
              {pkg.popular && <span className="badge">Most Popular</span>}

              <h3>{pkg.name}</h3>
              <p className="price">{pkg.price}</p>

              <ul>
                {pkg.features.map((f) => (
                  <li key={f}>✔ {f}</li>
                ))}
              </ul>

              <button className="btn-primary full-width">
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
