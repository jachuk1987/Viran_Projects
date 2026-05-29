import React from 'react';
import NavigationBar from './components/Navbar';
import Hero from './components/Hero';
import AboutUs from './components/AboutUs';
import Services from './components/Services';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <Hero />
      <AboutUs />
      <Services />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;
