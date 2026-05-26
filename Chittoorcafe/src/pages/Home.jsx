import React from 'react';
import Hero from '../components/Hero';
import MenuSection from '../components/MenuSection';
import Reviews from '../components/Reviews';
import ContactSection from '../components/ContactSection';

const Home = () => {
    return (
        <main className="bg-black min-h-screen">
            <Hero />

            {/* Short About Section */}
            <section id="about" className="py-16 bg-neutral-900 border-b border-white/5 text-center px-4">
                <div className="max-w-2xl mx-auto">
                    <h2 className="text-2xl font-bold text-yellow-500 mb-4 font-display">About Us</h2>
                    <p className="text-gray-300 text-lg leading-relaxed">
                        "Chittoor Cafe serves authentic Andhra-style vegetarian and non-vegetarian meals made with traditional recipes and fresh ingredients. Experience the true taste of home."
                    </p>
                </div>
            </section>

            {/* Menu Preview */}
            <MenuSection preview={true} />

            {/* Reviews Section */}
            <Reviews />

            {/* Contact Section */}
            <ContactSection />
        </main>
    );
};

export default Home;
