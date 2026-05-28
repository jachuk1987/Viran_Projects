import React from 'react';
import { Star, Quote } from 'lucide-react';

const Reviews = () => {
    const reviews = [
        {
            id: 1,
            name: "Danamjaya reddy",
            role: "Local Guide",
            rating: 3,
            comment: "My wife and I recently visited Chittoor Cafe hoping for a pleasant meal. Ordered Lemon Chicken and Fry Piece Biryani.",
            image: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=1887&auto=format&fit=crop"
        },
        {
            id: 2,
            name: "Mehboob",
            role: "Loyal Customer",
            rating: 5,
            comment: "I personally like the THALI OFFER, it would be great if every Sunday is available. I really like the way they come with new offers.",
            image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1887&auto=format&fit=crop"
        },
        {
            id: 3,
            name: "Shahul Shaik",
            role: "Customer",
            rating: 2, // As per user data "completely not Good"
            comment: "Taste of items what I ordered is completely not Good. This is my second visit, unfortunately same experience.",
            image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1887&auto=format&fit=crop"
        }
    ];

    return (
        <section id="reviews" className="py-20 bg-black">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <span className="text-yellow-500 font-semibold tracking-wider uppercase text-sm">Reviews</span>
                        <h2 className="mt-2 text-3xl md:text-4xl font-display font-bold text-white mb-6">
                            What Our Customers Say
                        </h2>
                        <div className="flex items-center space-x-4 mb-8">
                            <div className="text-5xl font-bold text-white">4.1</div>
                            <div>
                                <div className="flex text-yellow-500">
                                    <Star className="w-5 h-5 fill-current" />
                                    <Star className="w-5 h-5 fill-current" />
                                    <Star className="w-5 h-5 fill-current" />
                                    <Star className="w-5 h-5 fill-current" />
                                    <Star className="w-5 h-5 text-gray-600 fill-gray-600" />
                                </div>
                                <p className="text-gray-400 text-sm mt-1">Based on 714 reviews</p>
                            </div>
                        </div>
                        <p className="text-gray-400 text-lg leading-relaxed mb-8">
                            "Great place to have tasty food and to spend time with family nd beloved once."
                            We value honest feedback to keep improving.
                        </p>
                        <a
                            href="https://www.google.com/maps/search/?api=1&query=Chittoor+Cafe,32-802,Bengaluru-Tirupati+Hwy,Murukampattu,Andhra+Pradesh+517127"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <button className="bg-white text-black hover:bg-gray-100 px-8 py-3 rounded-full font-bold transition-colors">
                                Write a Review
                            </button>
                        </a>

                    </div>

                    <div className="space-y-6">
                        {reviews.map((review) => (
                            <div key={review.id} className="bg-neutral-900 p-6 rounded-xl border border-white/5 relative">
                                <Quote className="absolute top-4 right-4 w-8 h-8 text-white/10" />
                                <div className="flex items-center mb-4">
                                    <img src={review.image} alt={review.name} className="w-10 h-10 rounded-full object-cover mr-4" />
                                    <div>
                                        <h4 className="text-white font-bold text-sm">{review.name}</h4>
                                        <p className="text-gray-500 text-xs">{review.role}</p>
                                    </div>
                                    <div className="ml-auto flex text-yellow-500">
                                        {[...Array(5)].map((_, i) => (
                                            <Star
                                                key={i}
                                                className={`w-4 h-4 ${i < review.rating ? 'fill-current' : 'text-neutral-700 fill-neutral-700'}`}
                                            />
                                        ))}
                                    </div>
                                </div>
                                <p className="text-gray-400 text-sm italic">"{review.comment}"</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Reviews;
