import React, { useState } from 'react';

const BLOG_ARTICLES = [
    {
        id: "art-1",
        title: "Top 5 Safety Rules on Construction Sites",
        category: "Safety Guide",
        date: "June 10, 2026",
        readTime: "5 min read",
        excerpt: "Safety is paramount in civil construction. Here are the 5 critical practices every mason and laborer must follow.",
        content: [
            "In commercial and civil construction, maintaining zero-accident status requires strict adherence to safety protocols. From concrete mixers to structural masonry installations, hazards are present at every stage.",
            "First and foremost, Personal Protective Equipment (PPE) is non-negotiable. Steel-toe boots, high-visibility vest jackets, and safety helmets must be worn at all times. Second, always verify scaffolding certificates before ascending. An unchecked scaffold tower poses structural collapse risks.",
            "Third, practice safe lifting postures. Lift with your legs, not your back, to prevent spinal injuries. Fourth, keep pathways clear of masonry debris to prevent slips and falls. Finally, report any minor equipment malfunction or wire fraying immediately to site supervisors."
        ]
    },
    {
        id: "art-2",
        title: "How to Tailor Your Logistics CV for High-Bay Operations",
        category: "Career Advice",
        date: "June 08, 2026",
        readTime: "4 min read",
        excerpt: "Stand out to hiring managers by highlighting certifications, reach truck experience, and safety records on your CV.",
        content: [
            "Modern warehousing facilities rely heavily on speed and precision. When applying for logistics and forklift operator roles, a generic CV will rarely catch the eye of agency selectors.",
            "To stand out, lead with your active licenses and certifications. Explicitly state if you hold a Class 4 driving license, reach truck certificate, or counterbalance authorization. Clearly state your years of experience operating in high-bay setups (e.g., '3+ years loading 8-meter racking networks').",
            "Additionally, highlight your familiarity with RF scanner terminals and inventory management databases. End your CV with a section detailing your warehouse safety record, such as 'Zero safety incidents logged across 500+ operational shifts.' This shows you value safety as much as speed."
        ]
    },
    {
        id: "art-3",
        title: "Hospitality Masterclass: Navigating Customer Service Scenarios",
        category: "Training Guide",
        date: "June 05, 2026",
        readTime: "6 min read",
        excerpt: "Navigating front-desk registrations and customer complaints with professional poise and active listening.",
        content: [
            "In the premium hospitality sector, first impressions are lasting. Whether you are a receptionist or guest relations officer, your communication style sets the tone for the client's entire stay.",
            "When handling check-in operations, familiarize yourself thoroughly with Property Management Systems like Opera PMS. Efficiently processing check-ins decreases wait times and guest anxiety. Always welcome visitors with direct eye contact, a warm posture, and clear verbal directions.",
            "When handling customer complaints, practice the LAST method: Listen attentively, Apologize sincerely, Solve the issue proactively, and Thank the guest for their feedback. Professional poise under pressure distinguishes average hospitality staff from premium professionals."
        ]
    }
];

export default function Blog() {
    const [activeArticle, setActiveArticle] = useState(null);

    const openArticle = (article) => {
        setActiveArticle(article);
        document.body.style.overflow = "hidden"; // Disable scroll
    };

    const closeArticle = () => {
        setActiveArticle(null);
        document.body.style.overflow = "auto"; // Enable scroll
    };

    return (
        <section className="blog-section py-5" style={{ borderTop: '1px solid var(--border-color)' }}>
            <div className="container">
                <div className="section-header text-center">
                    <span className="subtitle">Resource Center</span>
                    <h2>Safety Standards & Career Guides</h2>
                    <p className="section-desc text-center-margin">
                        Expert advice, compliance tutorials, and insights from our recruitment managers to help you run safer projects and advance your career.
                    </p>
                </div>

                <div className="blog-grid">
                    {BLOG_ARTICLES.map((article) => (
                        <div className="blog-card" key={article.id}>
                            <div className="blog-card-header">
                                <span className={`blog-category-badge ${article.category.toLowerCase().replace(' ', '-')}`}>
                                    {article.category}
                                </span>
                                <span className="blog-read-time">{article.readTime}</span>
                            </div>
                            <h3>{article.title}</h3>
                            <p>{article.excerpt}</p>
                            <div className="blog-card-footer">
                                <span className="blog-date">{article.date}</span>
                                <button className="btn btn-link-arrow" onClick={() => openArticle(article)}>
                                    Read Article <i className="fa-solid fa-arrow-right"></i>
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Article Modal */}
            {activeArticle && (
                <div className="modal-backdrop" onClick={closeArticle}>
                    <div className="modal-box" onClick={(e) => e.stopPropagation()} style={{ maxWidth: '700px' }}>
                        <div className="modal-header">
                            <div>
                                <span className={`blog-category-badge ${activeArticle.category.toLowerCase().replace(' ', '-')}`} style={{ marginBottom: '8px', display: 'inline-block' }}>
                                    {activeArticle.category}
                                </span>
                                <h3>{activeArticle.title}</h3>
                                <p className="modal-subheading" style={{ marginTop: '4px' }}>
                                    Published: {activeArticle.date} | {activeArticle.readTime}
                                </p>
                            </div>
                            <button className="modal-close-btn" onClick={closeArticle} aria-label="Close modal">&times;</button>
                        </div>

                        <div className="modal-body" style={{ maxHeight: '65vh', overflowY: 'auto', paddingRight: '8px' }}>
                            {activeArticle.content.map((paragraph, index) => (
                                <p key={index} style={{ marginBottom: '16px', lineHeight: '1.7', fontSize: '15px', color: 'var(--text-secondary)' }}>
                                    {paragraph}
                                </p>
                            ))}
                        </div>

                        <div className="modal-footer-actions" style={{ marginTop: '20px', borderTop: '1px solid var(--border-color)', paddingTop: '15px' }}>
                            <button className="btn btn-outline" onClick={closeArticle}>Close Guide</button>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
}
