const steps = [
    { number: "01", title: "Book Appointment", desc: "Call us or book online to schedule a visit." },
    { number: "02", title: "Confirm Service", desc: "We confirm the time and requirements with you." },
    { number: "03", title: "Expert Cleaning", desc: "Our trained team arrives and cleans your space." },
    { number: "04", title: "Final Inspection", desc: "You inspect the work and pay only if satisfied." },
];

const HowItWorks = () => {
    return (
        <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900">How It Works</h2>
                    <p className="text-gray-600 mt-4">Simple 4-step process to a sparkling clean home.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
                    {/* Connector line for desktop */}
                    <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-blue-100 -z-10 -translate-y-1/2"></div>

                    {steps.map((step, index) => (
                        <div key={index} className="bg-white p-6 rounded-lg text-center relative">
                            <div className="w-16 h-16 bg-primary text-white text-2xl font-bold rounded-full flex items-center justify-center mx-auto mb-6 border-4 border-white shadow-lg">
                                {step.number}
                            </div>
                            <h3 className="text-xl font-bold text-gray-800 mb-2">{step.title}</h3>
                            <p className="text-gray-600">{step.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;
