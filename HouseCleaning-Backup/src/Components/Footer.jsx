import { contact } from "../Utils/ContactInfo";

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white pt-16 pb-8">
            <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
                <div>
                    <h3 className="text-2xl font-bold mb-4">House Cleaning</h3>
                    <p className="text-gray-400">
                        Professional cleaning solutions for modern homes and offices. We care for your space.
                    </p>
                </div>

                <div>
                    <h4 className="text-lg font-bold mb-4">Quick Links</h4>
                    <ul className="space-y-2 text-gray-400">
                        <li className="hover:text-white cursor-pointer">Home</li>
                        <li className="hover:text-white cursor-pointer">About Us</li>
                        <li className="hover:text-white cursor-pointer">Services</li>
                        <li className="hover:text-white cursor-pointer">Contact</li>
                    </ul>
                </div>

                <div>
                    <h4 className="text-lg font-bold mb-4">Services</h4>
                    <ul className="space-y-2 text-gray-400">
                        <li className="hover:text-white cursor-pointer">Home Cleaning</li>
                        <li className="hover:text-white cursor-pointer">Office Cleaning</li>
                        <li className="hover:text-white cursor-pointer">Sofa Cleaning</li>
                        <li className="hover:text-white cursor-pointer">Kitchen Cleaning</li>
                    </ul>
                </div>

                <div>
                    <h4 className="text-lg font-bold mb-4">Contact Us</h4>
                    <ul className="space-y-2 text-gray-400">
                        <li>📞 {contact.phone}</li>
                        <li>📧 {contact.email}</li>
                        <li>📍 {contact.address}</li>
                    </ul>
                </div>
            </div>

            <div className="border-t border-gray-800 pt-8 text-center text-gray-500 text-sm">
                © {new Date().getFullYear()} House Cleaning Solutions. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
