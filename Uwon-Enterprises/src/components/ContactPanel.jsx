import React, { useState } from 'react';

export default function ContactPanel({ showToast }) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        showToast("Thank you for contacting UWON. We will reply to your message via email.", "success");
        setName('');
        setEmail('');
        setSubject('');
        setMessage('');
    };

    return (
        <div class="container py-5">
            <div class="layout-split">
                {/* Details Info */}
                <div class="contact-details">
                    <span class="subtitle">Get in Touch</span>
                    <h2>Let's Discuss Your Personnel Needs</h2>
                    <p class="section-desc">Our dedicated recruitment managers are available to assist you. Find us at our corporate offices or reach us directly.</p>

                    <div class="contact-methods">
                        <div class="method-card">
                            <div class="icon"><i class="fa-solid fa-phone"></i></div>
                            <div>
                                <h4>Phone Lines</h4>
                                <p>+91 9885058859 (Hotline)</p>
                                <p>+91 8217083919 (Emergency Placement)</p>
                            </div>
                        </div>
                        <div class="method-card">
                            <div class="icon"><i class="fa-solid fa-envelope"></i></div>
                            <div>
                                <h4>Email Address</h4>
                                <p>jachu.k1212@gmail.com</p>
                                <p>gnanashekar045@gmail.com</p>
                            </div>
                        </div>
                        <div class="method-card">
                            <div class="icon"><i class="fa-solid fa-map-location-dot"></i></div>
                            <div>
                                <h4>Headquarters</h4>
                                <p>20-316/1,2nd floor Hassan Khan Street, Mittoor, Chittoor, India</p>
                                <p>Mon - Fri: 8:00 AM - 06:00 PM</p>
                            </div>
                        </div>
                    </div>

                    {/* Mini map mockup */}
                    <div class="map-mockup">
                        <div class="map-overlay">
                            <i class="fa-solid fa-location-pin map-pin-icon"></i>
                            <span>Chittoor Headquarters Office</span>
                        </div>
                    </div>
                </div>

                {/* General Contact Form */}
                <div class="form-wrapper">
                    <h3>Send a Quick Message</h3>
                    <p>Have a general inquiry? Write to us, and we will direct your query to the correct department.</p>

                    <form id="general-contact-form" class="interactive-form" onSubmit={handleSubmit}>
                        <div class="form-group">
                            <label htmlFor="contact-name">Name *</label>
                            <input
                                type="text"
                                id="contact-name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                                placeholder="Your full name"
                            />
                        </div>
                        <div class="form-group">
                            <label htmlFor="contact-email">Email Address *</label>
                            <input
                                type="email"
                                id="contact-email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                placeholder="your.email@gmail.com"
                            />
                        </div>
                        <div class="form-group">
                            <label htmlFor="contact-subject">Subject</label>
                            <input
                                type="text"
                                id="contact-subject"
                                value={subject}
                                onChange={(e) => setSubject(e.target.value)}
                                placeholder="What are you writing about?"
                            />
                        </div>
                        <div class="form-group">
                            <label htmlFor="contact-msg">Message *</label>
                            <textarea
                                id="contact-msg"
                                rows="5"
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                required
                                placeholder="Type your message details..."
                            ></textarea>
                        </div>
                        <button type="submit" class="btn btn-primary btn-block btn-lg" id="submit-contact-form">
                            <i class="fa-solid fa-paper-plane"></i> Send Message
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}
