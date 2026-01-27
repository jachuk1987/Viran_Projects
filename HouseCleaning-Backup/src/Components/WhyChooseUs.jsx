const reasons = [
    { title: "10+ Years Experience", icon: "📅", desc: "Decades of expertise in home cleaning." },
    { title: "250,000+ Projects", icon: "🏆", desc: "Successfully completed over 2.5 lakh projects." },
    { title: "4.8-Star Rating", icon: "⭐", desc: "Rated highly by thousands of happy customers." },
    { title: "Eco-Friendly Products", icon: "🌿", desc: "Safe for kids, pets, and the environment." },
    { title: "100% Satisfaction", icon: "😊", desc: "We guarantee you'll love our service." },
];

const WhyChooseUs = () => {
    return (
        <section className="py-16 bg-blue-50">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Why Choose Us?</h2>
                    <p className="text-gray-600 mt-4">We are the most trusted cleaning service provider in the city.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {reasons.map((reason, index) => (
                        <div key={index} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition">
                            <div className="text-4xl mb-4">{reason.icon}</div>
                            <h3 className="text-xl font-bold text-gray-800 mb-2">{reason.title}</h3>
                            <p className="text-gray-600">{reason.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;
