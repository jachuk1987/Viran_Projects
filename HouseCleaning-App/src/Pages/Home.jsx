import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";
import Services from "../Components/Services";
import WhyChooseUs from "../Components/WhyChooseUs";
import Packages from "../Components/Packages";
import HowItWorks from "../Components/HowItWorks";
import Testimonials from "../Components/Testimonials";
import Locations from "../Components/Locations";
import Contact from "../Components/Contact";
import Footer from "../Components/Footer";
import FloatingCTA from "../Components/FloatingCTA";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <WhyChooseUs />
      <Packages />
      <HowItWorks />
      <Testimonials />
      <Locations />
      <Contact />
      <Footer />
      <FloatingCTA />

    </>
  );
};

export default Home;
