import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: "Are cloth diapers better for baby?",
      answer: "Of course cloth diapers are better for babies. They are soft, breathable, and chemical-free. Pikuboo cotton diapers are made from premium certified fabric, which means your baby’s skin is safe and rash-free from beginning to end. They are gentle, reusable, and healthier than disposables containing harmful chemicals."
    },
    {
      question: "Why cloth diapers are better than disposable diapers?",
      answer: "Cloth diapers use less waste, are reusable, and are safer for your baby. Pikuboo's eco-friendly diapers save parents money and limit exposure to chemicals in disposable products. The washable, breathable cotton will last and is consistent with the eco values of modern family living."
    },
    {
      question: "Can cloth diapers cause rash?",
      answer: "No, Pikuboo cloth diapers do not cause rashes when used properly. The breathable cotton allows for airflow, which minimizes moisture buildup. If you change your baby regularly and wash them correctly, they will be comfortable without the risk of rashes. All of our diapers are found to be skin-safe for babies based on our testing."
    },
    {
      question: "Do babies feel wet in cloth diapers?",
      answer: "With Pikuboo's inserts that wick up moisture, babies can be dry for longer. Our cotton diaper uses a \"soft\" inner layer that pulls moisture away from the skin. While babies feel comfortable and dry, parents easily check and change as needed for hygiene."
    },
    {
      question: "What cloth diapers are best?",
      answer: "The best cloth diaper will be soft, absorbent, and safe for sensitive skin. Pikuboo diapers are all eco-friendly cloth diapers, made with GOTS-certified cotton and high-quality inserts that will protect against leaks. They are reusable and cost-effective and also serve the purpose of being the most comfortable diapers for babies while being responsible for the planet."
    },
    {
      question: "Cloth diapers with inserts",
      answer: "Pikuboo's cloth diapers have washable inserts that lock in wetness and provide help against leaks. The inserts are easy to clean and can be reused over and over again. Once a child is comfortable in their eco diaper system, which is designed for day and night, a parent can rest easily."
    },
    {
      question: "When to wash cloth diapers?",
      answer: "It is a beneficial idea to wash cloth diapers every 1–2 days to maintain hygiene. Pikuboo cotton diapers are easy to wash and dry quickly. The best practice is to use mild baby detergent and warm water. Washing regularly will discourage odor, refresh your diapers, and maintain their absorbency."
    },
    {
      question: "Can cloth diapers cause rash?",
      answer: "Correctly changed and washed cloth diapers do not cause rashes. Pikuboo uses breathable cotton and safe fabrics tested for baby skin. Just simply keep the diaper area clean and dry. With that said, cloth diapers offer more safety and gentleness than any disposable option when cared for correctly."
    },
    {
      question: "Where do cloth diapers come from?",
      answer: "For generations, cloth diapers have been used in different regions across the globe. At Pikuboo, we localize our premium cotton diapers in Kochi, Kerala. Our cotton diapers are designed for local comfort and sustainability, representing a modern take on traditional diapering, which fights waste and protects our planet."
    },
    {
      question: "Is Pikuboo a trusted wholesale supplier of cloth diapers?",
      answer: "Yes, Pikuboo is a reputable manufacturer and wholesale provider of eco-friendly diapers from Kochi, Kerala. We supply certified cotton diapers to retailers, wholesalers, and parents around the world. Our diapers are renowned for quality and safety on all sustainable diapers, so when partnered with bulk orders and all eco-friendly baby care solutions, we are your trusted partner."
    }
  ];

  // Split into left and right columns
  const leftFaqs = faqs.slice(0, 5);
  const rightFaqs = faqs.slice(5, 10);

  return (
    <div style={{ backgroundColor: 'var(--bg-main)', minHeight: '100vh' }}>
      
      {/* 1. Hero Section */}
      <section className="container faq-hero-section" style={{ padding: '6rem 1rem 4rem', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 400px), 1fr))', gap: '4rem', alignItems: 'center' }}>
        <div>
          <h1 style={{ fontSize: '3rem', color: 'var(--text-dark)', marginBottom: '1.5rem', fontWeight: 800, lineHeight: '1.15', letterSpacing: '-1px' }}>
            Pikuboo FAQ: Cotton Diapers & Eco-Friendly Diapers Explained
          </h1>
          <p style={{ color: 'var(--text-body)', lineHeight: '1.8', marginBottom: '1.5rem', fontSize: '1.15rem' }}>
            Welcome to the Pikuboo FAQs section! We have compiled answers to the most frequently asked questions about cotton diapers and eco-friendly diapers.
          </p>
          <p style={{ color: 'var(--text-body)', lineHeight: '1.8', fontSize: '1.05rem' }}>
            We include questions such as, What are the benefits of using cotton diapers? How do I use them? What about washing? And why are they the safest diaper choice for your baby and the planet? We provide straightforward, specific answers that can help you make reasoned choices about sustainable diapering.
          </p>
        </div>
        <div style={{ height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div style={{ position: 'relative', width: '100%', display: 'flex', justifyContent: 'center' }}>
            <img src="/images/faq-right-image-faq-page.png" alt="Pikuboo FAQ" className="faq-hero-img" style={{ width: '100%', maxWidth: '450px', objectFit: 'contain' }} />
          </div>
        </div>
      </section>

      {/* 2. FAQ Accordion Section */}
      <section style={{ backgroundColor: '#F9FBF9', padding: '6rem 1rem' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 5rem' }}>
            <h2 style={{ fontSize: '2.5rem', color: 'var(--text-dark)', marginBottom: '1.5rem', fontWeight: 800 }}>
              Your Questions About Cotton Diapers and Eco-Friendly Diapers, Answered
            </h2>
            <p style={{ color: 'var(--text-body)', fontSize: '1.15rem', lineHeight: '1.8' }}>
              Find clear and simple answers to the most common questions about cotton diapers and eco-friendly diapers. Learn how they work, their benefits, and why they are better for your baby and the environment.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 450px), 1fr))', gap: '2rem' }}>
            
            {/* Left Column */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              {leftFaqs.map((faq, index) => (
                <div 
                  key={index} 
                  className="faq-card"
                  style={{ 
                    backgroundColor: 'white', 
                    borderRadius: 'var(--radius-md)', 
                    overflow: 'hidden',
                    boxShadow: openIndex === index ? '0 15px 30px rgba(0,0,0,0.05)' : '0 4px 15px rgba(0,0,0,0.02)',
                    border: '1px solid',
                    borderColor: openIndex === index ? 'var(--primary)' : 'rgba(0,0,0,0.04)',
                    transition: 'all 0.3s ease'
                  }}
                >
                  <button 
                    onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                    style={{ 
                      width: '100%', 
                      padding: '1.8rem 1.5rem', 
                      display: 'flex', 
                      justifyContent: 'space-between', 
                      alignItems: 'center', 
                      background: 'none', 
                      border: 'none', 
                      cursor: 'pointer',
                      textAlign: 'left'
                    }}
                  >
                    <div style={{ fontSize: '1.1rem', fontWeight: 500, color: 'var(--text-dark)', margin: 0, paddingRight: '1rem', lineHeight: '1.4' }}>{faq.question}</div>
                    <div style={{ color: openIndex === index ? 'var(--primary)' : 'var(--text-light)', transition: 'color 0.3s' }}>
                      {openIndex === index ? <Minus size={20} /> : <Plus size={20} />}
                    </div>
                  </button>
                  
                  <div style={{ 
                    display: 'grid',
                    gridTemplateRows: openIndex === index ? '1fr' : '0fr',
                    transition: 'grid-template-rows 0.35s ease-out, background-color 0.35s ease-out',
                    backgroundColor: openIndex === index ? 'rgba(161, 226, 217, 0.1)' : 'transparent'
                  }}>
                    <div style={{ overflow: 'hidden' }}>
                      <p style={{ padding: '0 1.5rem 1.8rem', color: 'var(--text-body)', lineHeight: '1.8', margin: 0, fontSize: '1.05rem' }}>
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Right Column */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              {rightFaqs.map((faq, idx) => {
                const globalIndex = idx + 5;
                return (
                  <div 
                    key={globalIndex} 
                    className="faq-card"
                    style={{ 
                      backgroundColor: 'white', 
                      borderRadius: 'var(--radius-md)', 
                      overflow: 'hidden',
                      boxShadow: openIndex === globalIndex ? '0 15px 30px rgba(0,0,0,0.05)' : '0 4px 15px rgba(0,0,0,0.02)',
                      border: '1px solid',
                      borderColor: openIndex === globalIndex ? 'var(--primary)' : 'rgba(0,0,0,0.04)',
                      transition: 'all 0.3s ease'
                    }}
                  >
                    <button 
                      onClick={() => setOpenIndex(openIndex === globalIndex ? -1 : globalIndex)}
                      style={{ 
                        width: '100%', 
                        padding: '1.8rem 1.5rem', 
                        display: 'flex', 
                        justifyContent: 'space-between', 
                        alignItems: 'center', 
                        background: 'none', 
                        border: 'none', 
                        cursor: 'pointer',
                        textAlign: 'left'
                      }}
                    >
                      <div style={{ fontSize: '1.1rem', fontWeight: 500, color: 'var(--text-dark)', margin: 0, paddingRight: '1rem', lineHeight: '1.4' }}>{faq.question}</div>
                      <div style={{ color: openIndex === globalIndex ? 'var(--primary)' : 'var(--text-light)', transition: 'color 0.3s' }}>
                        {openIndex === globalIndex ? <Minus size={20} /> : <Plus size={20} />}
                      </div>
                    </button>
                    
                    <div style={{ 
                      display: 'grid',
                      gridTemplateRows: openIndex === globalIndex ? '1fr' : '0fr',
                      transition: 'grid-template-rows 0.35s ease-out, background-color 0.35s ease-out',
                      backgroundColor: openIndex === globalIndex ? 'rgba(161, 226, 217, 0.1)' : 'transparent'
                    }}>
                      <div style={{ overflow: 'hidden' }}>
                        <p style={{ padding: '0 1.5rem 1.8rem', color: 'var(--text-body)', lineHeight: '1.8', margin: 0, fontSize: '1.05rem' }}>
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

          </div>
        </div>
      </section>

      {/* 3. Google Review CTA Section */}
      <section style={{ padding: '6rem 1rem', backgroundColor: 'var(--bg-white)', borderTop: '1px solid rgba(0,0,0,0.05)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 4rem' }}>
            <h2 style={{ fontSize: '2.5rem', color: 'var(--text-dark)', marginBottom: '1.5rem', fontWeight: 800 }}>
              Help Us Improve – Share Your Experience
            </h2>
            <p style={{ color: 'var(--text-body)', fontSize: '1.15rem', lineHeight: '1.8' }}>
              Found your answer here? We'd love your feedback! Post a review to help us improve our FAQ and deliver better products & support.
            </p>
          </div>

          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <div style={{ 
              backgroundColor: 'white', 
              padding: '4rem 3rem', 
              borderRadius: 'var(--radius-lg)', 
              textAlign: 'center', 
              boxShadow: '0 20px 50px rgba(0,0,0,0.08)', 
              border: '1px solid rgba(0,0,0,0.04)',
              maxWidth: '500px',
              width: '100%',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center'
            }}>
              <div style={{ 
                width: '60px', 
                height: '60px', 
                backgroundColor: '#ffffff', 
                borderRadius: '50%', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center', 
                marginBottom: '1.5rem',
                boxShadow: '0 5px 15px rgba(0,0,0,0.1)'
              }}>
                <img src="/images/google-review-icon-faq-page.png" alt="Google Review" style={{ width: '30px' }} onError={(e) => { e.target.onerror = null; e.target.src = "https://cdn-icons-png.flaticon.com/512/2991/2991148.png"; }} />
              </div>
              <h3 style={{ fontSize: '1.8rem', color: 'var(--text-dark)', marginBottom: '1rem', fontWeight: 700 }}>Post a Review</h3>
              <p style={{ color: 'var(--text-body)', marginBottom: '2.5rem', fontSize: '1.05rem', lineHeight: '1.6' }}>
                Share your thoughts on Google to help others and guide our improvements.
              </p>
              <a 
                href="https://www.google.com/search?q=pikuboo&rlz=1C5CHFA_enIN973IN973&oq=pikuboo#lrd=0x3b080d65fefc8a95:0x4d67e02c5a58f30a,1,,," 
                target="_blank" 
                rel="noreferrer"
                className="btn-primary" 
                style={{ display: 'inline-block', padding: '14px 40px', borderRadius: 'var(--radius-pill)', textDecoration: 'none', fontSize: '1.1rem' }}
              >
                Leave a Review
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Global overrides for this page */}
      <style>{`
        .faq-card:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 25px rgba(0,0,0,0.04) !important;
        }
        @media (max-width: 768px) {
          .container { padding-left: 1.5rem; padding-right: 1.5rem; }
          h1 { font-size: 2.2rem !important; }
          h2 { font-size: 1.8rem !important; }
          .faq-hero-section { padding: 4rem 1rem 2rem !important; gap: 2rem !important; }
          .faq-hero-img { min-height: 250px !important; }
        }
      `}</style>
    </div>
  );
};

export default FAQ;
