import { useState } from "react";
import { contact } from "../Utils/ContactInfo";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="fixed w-full bg-white shadow-md z-50">
            <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                {/* Logo */}
                <h1 className="text-2xl font-bold text-primary">House Cleaning Solutions</h1>

                {/* Desktop Menu */}
                <ul className="hidden md:flex space-x-8 font-medium text-gray-700">
                    <li className="hover:text-primary cursor-pointer transition">Home</li>
                    <li className="hover:text-primary cursor-pointer transition">Services</li>
                    <li className="hover:text-primary cursor-pointer transition">Packages</li>
                    <li className="hover:text-primary cursor-pointer transition">Contact</li>
                </ul>

                {/* CTA Button */}
                <a href={`tel:${contact.phone}`} className="hidden md:block bg-primary text-white px-5 py-2 rounded-full font-medium hover:bg-blue-700 transition">
                    Book Now
                </a>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-gray-700 focus:outline-none"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        {isOpen ? (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                        ) : (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                        )}
                    </svg>
                </button>
            </div>

            {/* Mobile Menu Dropdown */}
            {isOpen && (
                <div className="md:hidden bg-white border-t">
                    <ul className="flex flex-col p-4 space-y-4 font-medium text-gray-700">
                        <li className="hover:text-primary cursor-pointer" onClick={() => setIsOpen(false)}>Home</li>
                        <li className="hover:text-primary cursor-pointer" onClick={() => setIsOpen(false)}>Services</li>
                        <li className="hover:text-primary cursor-pointer" onClick={() => setIsOpen(false)}>Packages</li>
                        <li className="hover:text-primary cursor-pointer" onClick={() => setIsOpen(false)}>Contact</li>
                        <li>
                            <a href={`tel:${contact.phone}`} className="block w-full text-center bg-primary text-white px-5 py-2 rounded-full hover:bg-blue-700 transition">
                                Book Now
                            </a>
                        </li>
                    </ul>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
