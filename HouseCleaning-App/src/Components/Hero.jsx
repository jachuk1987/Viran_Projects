import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero">
      <div className="container hero-grid">
        <div>
          <h2>Professional House Cleaning Services</h2>
          <p>
            Trusted home & office cleaning services in Bangalore and Hyderabad.
          </p>

          <div className="hero-buttons">
            <button className="btn-primary">Book Cleaning</button>
            <button className="btn-outline">Call Now</button>
          </div>
        </div>

        <img src="/hero-cleaning.png" alt="Cleaning" />
      </div>
    </section>
  );
};

export default Hero;
