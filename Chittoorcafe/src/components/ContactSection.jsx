import React from 'react';
import { MapPin, Phone, Clock, Mail } from 'lucide-react';

const ContactSection = () => {
    return (
        <section id="contact" className="py-20 bg-neutral-900 border-t border-white/5">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <span className="text-yellow-500 font-semibold tracking-wider uppercase text-sm">Visit Us</span>
                    <h2 className="mt-2 text-3xl md:text-4xl font-display font-bold text-white">Find Our Location</h2>
                    <div className="w-20 h-1 bg-yellow-500 mx-auto mt-4 rounded-full"></div>
                </div>

                <div className="grid md:grid-cols-2 gap-12">
                    {/* Contact Info */}
                    <div className="bg-black p-8 rounded-2xl border border-white/10">
                        <h3 className="text-2xl font-bold text-white mb-6">Chittoor Cafe</h3>

                        <div className="space-y-6">
                            <div className="flex items-start group">
                                <div className="bg-yellow-500/10 p-3 rounded-full mr-4 group-hover:bg-yellow-500/20 transition-colors">
                                    <MapPin className="w-6 h-6 text-yellow-500" />
                                </div>
                                <div>
                                    <h4 className="text-white font-semibold mb-1">Address</h4>
                                    <p className="text-gray-400 text-sm leading-relaxed">
                                        32-802, Bengaluru - Tirupati Hwy, near Sri Sai Convension,
                                        Murukampattu, Andhra Pradesh 517127
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start group">
                                <div className="bg-yellow-500/10 p-3 rounded-full mr-4 group-hover:bg-yellow-500/20 transition-colors">
                                    <Phone className="w-6 h-6 text-yellow-500" />
                                </div>
                                <div>
                                    <h4 className="text-white font-semibold mb-1">Phone</h4>
                                    <p className="text-gray-400 text-sm">+91 9347157442</p>
                                </div>
                            </div>

                            <div className="flex items-start group">
                                <div className="bg-yellow-500/10 p-3 rounded-full mr-4 group-hover:bg-yellow-500/20 transition-colors">
                                    <Clock className="w-6 h-6 text-yellow-500" />
                                </div>
                                <div>
                                    <h4 className="text-white font-semibold mb-1">Hours</h4>
                                    <p className="text-gray-400 text-sm">Open daily from 7:00 AM - 11:00 PM</p>
                                </div>
                            </div>
                        </div>

                        <div className="mt-8">
                            <a
                                href="https://www.google.com/maps/dir//Chittoor+Cafe,32-802,Bengaluru-Tirupati+Hwy,Murukampattu,Andhra+Pradesh+517127"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <button className="bg-yellow-500 hover:bg-yellow-600 text-black px-6 py-2 rounded-full font-semibold transition-colors duration-300 w-full md:w-auto">
                                    Get Directions
                                </button>
                            </a>

                        </div>
                    </div>

                    {/* Map Placeholder or IFrame */}
                    <div className="rounded-2xl overflow-hidden h-full min-h-[400px] border border-white/10 relative">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15525.66986503683!2d79.0967!3d13.2173!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bad53c4c8b8888b%3A0x6a0a8607a7e8e50b!2sChittoor%20Cafe!5e0!3m2!1sen!2sin!4v1600000000000!5m2!1sen!2sin"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Chittoor Cafe Location"
                            className="grayscale hover:grayscale-0 transition-all duration-500"
                        ></iframe>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;
