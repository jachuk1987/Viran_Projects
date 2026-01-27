import "./Testimonials.css";

const testimonials = [
  {
    name: "Ramesh Kumar",
    review:
      "Excellent service! The team was punctual and my home looks spotless.",
  },
  {
    name: "Priya Sharma",
    review:
      "Very professional staff. Deep cleaning was done perfectly.",
  },
  {
    name: "Anil Reddy",
    review:
      "Affordable pricing and great quality work. Highly recommended.",
  },
];

const Testimonials = () => {
  return (
    <section className="section">
      <div className="container">
        <h2 className="section-title">What Our Customers Say</h2>

        <div className="testimonial-grid">
          {testimonials.map((t) => (
            <div className="testimonial-card" key={t.name}>
              <p className="review">“{t.review}”</p>
              <h4>{t.name}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
