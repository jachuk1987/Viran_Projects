const Hero = () => {
  return (
    <section className="bg-secondary">
      <div className="max-w-container mx-auto px-4 py-20 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-4xl md:text-5xl font-bold text-textDark leading-tight mb-6">
            Professional House Cleaning Services
          </h2>
          <p className="text-textLight mb-8">
            Trusted home & office cleaning services with trained professionals.
          </p>

          <div className="flex gap-4">
            <button className="bg-primary text-white px-6 py-3 rounded-md">
              Book Cleaning
            </button>
            <button className="border border-primary text-primary px-6 py-3 rounded-md">
              Call Now
            </button>
          </div>
        </div>

        <div>
          <img
            src="/hero-cleaning.png"
            alt="Cleaning Service"
            className="w-full"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
