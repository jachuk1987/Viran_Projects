import { contact } from "../Utils/ContactInfo";

const Hero = () => {
    return (
        <section className="pt-24 pb-12 md:pt-32 md:pb-20 bg-gradient-to-r from-blue-50 to-white">
            <div className="container mx-auto px-4 grid md:grid-cols-2 gap-8 items-center">

                {/* Text Content */}
                <div className="text-center md:text-left space-y-6">
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                        Professional <span className="text-primary">House Cleaning</span> Services
                    </h2>
                    <p className="text-lg text-gray-600 md:max-w-lg">
                        Trusted home & office cleaning services in Bangalore. We make your space sparkle with our expert deep cleaning solutions.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                        <a href={`tel:${contact.phone}`} className="px-8 py-3 bg-primary text-white text-lg font-semibold rounded-full shadow-lg hover:bg-blue-700 transition transform hover:-translate-y-1">
                            Book Cleaning
                        </a>
                        <a href={`tel:${contact.phone}`} className="px-8 py-3 border-2 border-primary text-primary text-lg font-semibold rounded-full hover:bg-blue-50 transition">
                            Call Now
                        </a>
                    </div>

                    <div className="pt-4 flex items-center justify-center md:justify-start gap-4 text-sm text-gray-500 font-medium">
                        <span className="flex items-center gap-1">
                            ✅ 5-Star Rated
                        </span>
                        <span className="flex items-center gap-1">
                            ✅ Verified Staff
                        </span>
                        <span className="flex items-center gap-1">
                            ✅ Eco-Friendly
                        </span>
                    </div>
                </div>

                {/* Hero Image */}
                <div className="relative">
                    <div className="absolute -inset-4 bg-blue-200 rounded-full blur-3xl opacity-30 animate-pulse"></div>
                    <img
                        src="/hero-cleaning.png"
                        alt="Professional Cleaner"
                        className="relative z-10 w-full max-w-lg mx-auto md:ml-auto drop-shadow-2xl rounded-lg"
                    />
                </div>
            </div>
        </section>
    );
};

export default Hero;
