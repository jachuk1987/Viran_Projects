import React from 'react';
import { MapPin, Phone, Clock, Instagram } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-neutral-900 border-t border-white/10 text-gray-300 py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

                    {/* Brand & About */}
                    <div>
                        <h3 className="text-2xl font-display font-bold text-yellow-500 mb-4">Chittoor Cafe</h3>
                        <p className="text-sm leading-relaxed mb-4">
                            Experience the authentic taste of Andhra with our special Mandi and Biryanis.
                            Fresh ingredients, traditional recipes, and a premium dining atmosphere.
                        </p>
                        <div className="flex space-x-4">
                            <a
                                href="https://www.instagram.com/chittoorcafe" // replace with actual username
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-yellow-400 transition-colors"
                            >
                                <Instagram size={20} />
                            </a>


                        </div>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-lg font-semibold text-white mb-4">Contact Us</h3>
                        <div className="space-y-3">
                            <div className="flex items-start">
                                <MapPin className="w-5 h-5 text-yellow-500 mr-2 mt-1" />
                                <p className="text-sm">
                                    32-802, Bengaluru - Tirupati Hwy,<br />
                                    near Sri Sai Convension, Murukampattu,<br />
                                    Andhra Pradesh 517127
                                </p>
                            </div>
                            <div className="flex items-center">
                                <Phone className="w-5 h-5 text-yellow-500 mr-2" />
                                <p className="text-sm">+91 9347157442</p>
                            </div>
                        </div>
                    </div>

                    {/* Hours */}
                    <div>
                        <h3 className="text-lg font-semibold text-white mb-4">Opening Hours</h3>
                        <div className="flex items-start">
                            <Clock className="w-5 h-5 text-yellow-500 mr-2 mt-1" />
                            <div>
                                <p className="text-sm">Mon - Sun: 7:00 AM - 11:00 PM</p>
                                <p className="text-xs text-green-400 mt-1">Open Now</p>
                            </div>
                        </div>
                        <div className="mt-6">
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

                </div>

                <div className="border-t border-white/10 mt-12 pt-8 text-center text-sm text-gray-500">
                    <p>&copy; {new Date().getFullYear()} Chittoor Cafe. All rights reserved.</p>
                </div>
            </div>
        </footer >
    );
};

export default Footer;
