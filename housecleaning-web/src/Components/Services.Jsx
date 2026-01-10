import ServiceCard from "./ServiceCard";

const Services = () => {
  return (
    <section className="py-16 px-6 grid md:grid-cols-3 gap-6">
      <ServiceCard title="Home Cleaning" description="Deep and regular cleaning" />
      <ServiceCard title="Office Cleaning" description="Corporate solutions" />
      <ServiceCard title="Sofa Cleaning" description="Professional sofa care" />
    </section>
  );
};

export default Services;
