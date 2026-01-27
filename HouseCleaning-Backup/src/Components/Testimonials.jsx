const testimonials = [
    { name: "Priya Sharma", role: "Homeowner", text: "The team did a fantastic job! My kitchen looks brand new. Highly recommended." },
    { name: "Rahul Verma", role: "Office Manager", text: "Professional and punctual. They cleaned our office space thoroughly without disrupting work." },
    { name: "Anita Desai", role: "Villa Owner", text: "Excellent service. The sofa cleaning was very effective. Will book again." },
];

const Testimonials = () => {
    return (
        <section className="py-16 bg-blue-50">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Customer Stories</h2>
                    <p className="text-gray-600 mt-4">See what our happy customers say about us.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((review, index) => (
                        <div key={index} className="bg-white p-8 rounded-xl shadow-sm border border-blue-50">
                            <div className="flex text-yellow-400 mb-4">
                                ★★★★★
                            </div>
                            <p className="text-gray-600 mb-6 italic">"{review.text}"</p>
                            <div>
                                <h4 className="font-bold text-gray-900">{review.name}</h4>
                                <span className="text-sm text-gray-500">{review.role}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
