import React, { useState } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import menu from '../data/menu';

const MenuSlider = ({ items }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const next = () => setCurrentIndex((prev) => (prev + 1) % items.length);
    const prev = () => setCurrentIndex((prev) => (prev - 1 + items.length) % items.length);

    const item = items[currentIndex];

    return (
        <div className="relative group">
            <AnimatePresence mode="wait">
                <motion.div
                    key={currentIndex}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                    className="bg-black/40 rounded-3xl border border-white/5 overflow-hidden flex flex-col md:flex-row gap-6 p-4 h-full min-h-[400px]"
                >
                    <div className="w-full md:w-1/2 h-64 md:h-[400px] relative rounded-2xl overflow-hidden shadow-2xl">
                        {item.image ? (
                            <img
                                src={item.image}
                                alt={item.name}
                                className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                            />
                        ) : (
                            <div className="w-full h-full bg-neutral-800 flex items-center justify-center text-gray-500 italic">
                                Image Coming Soon
                            </div>
                        )}
                        <div className="absolute top-4 left-4">
                            <span title={item.veg ? "Vegetarian" : "Non-Vegetarian"} className="bg-black/60 backdrop-blur-md px-3 py-1 rounded-full text-lg shadow-lg">
                                {item.veg ? "🟢 Veg" : "🔴 Non-Veg"}
                            </span>
                        </div>
                    </div>

                    <div className="w-full md:w-1/2 flex flex-col justify-center p-4">
                        <h4 className="text-3xl font-display font-bold text-white mb-2">{item.name}</h4>
                        <div className="w-12 h-1 bg-yellow-500 rounded-full mb-6"></div>
                        <p className="text-gray-400 text-lg mb-8 italic">
                            {item.description || "A delicious house specialty made with the freshest local ingredients and authentic Andhra spices."}
                        </p>
                        <div className="flex items-center justify-between mt-auto">
                            <span className="text-3xl font-bold text-yellow-500">₹{item.price}</span>
                            <div className="text-sm text-gray-500">
                                {currentIndex + 1} / {items.length}
                            </div>
                        </div>
                    </div>
                </motion.div>
            </AnimatePresence>

            {items.length > 1 && (
                <>
                    <button
                        onClick={prev}
                        className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-yellow-500 hover:text-black text-white p-3 rounded-full backdrop-blur-md border border-white/10 transition-all opacity-0 group-hover:opacity-100 z-10"
                    >
                        <ChevronLeft size={24} />
                    </button>
                    <button
                        onClick={next}
                        className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-yellow-500 hover:text-black text-white p-3 rounded-full backdrop-blur-md border border-white/10 transition-all opacity-0 group-hover:opacity-100 z-10"
                    >
                        <ChevronRight size={24} />
                    </button>
                </>
            )}
        </div>
    );
};

const MenuSection = ({ preview = false }) => {
    // For preview mode, we'll pick specific popular items
    const previewItems = (() => {
        const popularNames = ["Andhra Veg Meals", "Dosa", "Idli", "Chicken Biryani", "Filter Coffee"];
        const foundItems = [];

        // Flatten the menu to search
        menu.forEach(category => {
            category.items.forEach(item => {
                if (popularNames.includes(item.name)) {
                    foundItems.push(item);
                }
            });
        });

        // Sort by the order in popularNames if possible, or just return found
        return foundItems.sort((a, b) => popularNames.indexOf(a.name) - popularNames.indexOf(b.name));
    })();

    const displayData = preview ? [{ category: "Popular Favorites", items: previewItems }] : menu;

    return (
        <section id="menu" className="py-20 bg-black">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <motion.span
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="text-yellow-500 font-semibold tracking-wider uppercase text-sm"
                    >
                        {preview ? "Taste the Best" : "Explore Our Flavors"}
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="mt-2 text-4xl md:text-5xl font-display font-bold text-white"
                    >
                        {preview ? "Customer Favorites" : "Our Full Menu"}
                    </motion.h2>
                    <div className="w-20 h-1 bg-yellow-500 mx-auto mt-6 rounded-full"></div>
                </div>

                <div className="space-y-20">
                    {displayData.map((section, index) => (
                        <div key={index}>
                            {!preview && (
                                <h3 className="text-2xl font-bold text-yellow-500 mb-8 border-l-4 border-yellow-500 pl-4">
                                    {section.category}
                                </h3>
                            )}
                            <MenuSlider items={section.items} />
                        </div>
                    ))}
                </div>

                {preview ? (
                    <div className="text-center mt-20">
                        <Link to="/menu" className="inline-flex items-center gap-2 bg-yellow-500 hover:bg-yellow-600 text-black px-10 py-4 rounded-full font-bold text-lg transition-all transform hover:scale-105 shadow-xl shadow-yellow-500/10">
                            View Full Menu <ArrowRight size={20} />
                        </Link>
                    </div>
                ) : (
                    <div className="text-center mt-20">
                        <Link to="/" className="inline-flex items-center gap-2 bg-white/5 hover:bg-white/10 text-white px-10 py-4 rounded-full font-bold text-lg transition-all border border-white/10">
                            <X size={20} /> Exit Menu
                        </Link>
                    </div>
                )}
            </div>
        </section>
    );
};

export default MenuSection;
