const services = [
    { title: "Home Cleaning", icon: "🏠", desc: "Deep cleaning for every corner of your home." },
    { title: "Office Cleaning", icon: "🏢", desc: "Professional cleaning for workspaces." },
    { title: "Kitchen Cleaning", icon: "🍳", desc: "Remove grease and grime from your kitchen." },
    { title: "Sofa Cleaning", icon: "🛋️", desc: "Shampooing and stain removal for sofas." },
    { title: "Washroom Cleaning", icon: "🚿", desc: "Hygienic and sanitized washrooms." },
    { title: "Villa Cleaning", icon: "🏡", desc: "Comprehensive cleaning for large villas." },
    { title: "Mattress Cleaning", icon: "🛏️", desc: "Dust mite removal and deep cleaning." },
    { title: "Apartment Cleaning", icon: "🏢", desc: "Move-in/Move-out cleaning services." },
];

const Services = () => {
    return (
        <section className="py-16 bg-white" id="services">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <span className="text-primary font-semibold tracking-wider uppercase">Our Services</span>
                    <h2 className="text-3xl md:text-4xl font-bold mt-2 text-gray-900">Cleaning Solutions for Every Need</h2>
                    <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
                        We offer a wide range of professional cleaning services tailored to keep your improved environment healthy and spotless.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {services.map((service, index) => (
                        <div key={index} className="group bg-blue-50 rounded-xl p-6 hover:bg-white hover:shadow-xl transition-all duration-300 border border-transparent hover:border-blue-100">
                            <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                                {service.icon}
                            </div>
                            <h3 className="text-xl font-bold text-gray-800 mb-2">{service.title}</h3>
                            <p className="text-gray-600 text-sm mb-4">{service.desc}</p>
                            <button className="text-primary font-semibold text-sm hover:underline flex items-center gap-1">
                                Book Service <span>→</span>
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
