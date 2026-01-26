import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';

const FloatingActions = () => {
    return (
        <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-4">
            {/* WhatsApp Button */}
            <a
                href="https://wa.me/919347157442" // Replace with actual number
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:scale-110 transition-transform duration-300 flex items-center justify-center"
                aria-label="Chat on WhatsApp"
            >
                <MessageCircle size={28} />
            </a>

            {/* Call Button */}
            <a
                href="tel:+919347157442" // Replace with actual number
                className="bg-yellow-500 text-black p-4 rounded-full shadow-lg hover:scale-110 transition-transform duration-300 flex items-center justify-center animate-pulse"
                aria-label="Call Now"
            >
                <Phone size={28} />
            </a>
        </div>
    );
};

export default FloatingActions;
