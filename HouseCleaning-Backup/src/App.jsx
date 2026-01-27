import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Services from "./Components/Services";
import WhyChooseUs from "./Components/WhyChooseUs";
import HowItWorks from "./Components/HowItWorks";
import Testimonials from "./Components/Testimonials";
import Footer from "./Components/Footer";

function App() {
    return (
        <div className="min-h-screen bg-gray-50 font-sans">
            <Navbar />
            <main>
                <Hero />
                <Services />
                <WhyChooseUs />
                <HowItWorks />
                <Testimonials />
            </main>
            <Footer />
        </div>
    );
}

export default App;
