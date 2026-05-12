import { Send, ChevronDown, Mail, Phone, MapPin, Star } from 'lucide-react';

const Contact = () => {
  return (
    <div style={{ backgroundColor: 'var(--bg-main)', minHeight: '100vh' }}>
      
      {/* 1. Hero Section */}
      <section className="container contact-hero-section" style={{ padding: '6rem 1rem 4rem', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 400px), 1fr))', gap: '4rem', alignItems: 'center' }}>
        <div>
          <h1 style={{ fontSize: '2.8rem', color: 'var(--text-dark)', marginBottom: '1.5rem', fontWeight: 800, lineHeight: '1.2', letterSpacing: '-1px' }}>
            Contact Pikuboo: Wholesale, Retail & Support for Eco-Friendly Cotton Diapers
          </h1>
          <p style={{ color: 'var(--text-body)', lineHeight: '1.8', marginBottom: '1.5rem', fontSize: '1.05rem' }}>
            Contact Pikuboo today, your eco-friendly cotton diaper manufacturer in Kochi, India! Whether you are a parent looking to buy reusable diapers, a retailer looking to stock them, or a wholesaler looking to make a bulk purchase, either way, we are happy to help you. When it comes to answering your questions about our products regarding orders, shipping, partnerships, and support, we pride ourselves on quick response times.
          </p>
          <p style={{ color: 'var(--text-body)', lineHeight: '1.8', marginBottom: '1.5rem', fontSize: '1.05rem' }}>
            Complete our contact form, send us a direct email, or give us a call for quick replies. We also help bulk buyers with questions about pricing and custom design information with delivery options.
          </p>
          <p style={{ color: 'var(--text-body)', lineHeight: '1.8', marginBottom: '2.5rem', fontSize: '1.05rem', fontWeight: 500 }}>
            Whether purchasing for yourself, your baby, or on behalf of a store, Pikuboo is available wholesale and retail! Connect with us and join us as we make parenting greener and safer for every child!
          </p>
          <button onClick={() => document.getElementById('contact-form').scrollIntoView({ behavior: 'smooth' })} className="btn-primary" style={{ padding: '14px 36px', fontSize: '1.1rem', borderRadius: 'var(--radius-pill)' }}>
            Contact Us
          </button>
        </div>
        <div style={{ height: '100%', display: 'flex', alignItems: 'center' }}>
          <img src="/images/Untitled design (29).png" alt="Pikuboo Storefront" className="hero-img" style={{ width: '100%', borderRadius: 'var(--radius-lg)', boxShadow: '0 20px 40px rgba(0,0,0,0.08)', objectFit: 'cover', minHeight: '500px' }} />
        </div>
      </section>



      {/* 3. The Form Section (From previous step) */}
      <section id="contact-form" className="container form-section" style={{ padding: '6rem 1rem', maxWidth: '1200px' }}>
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 450px), 1fr))', 
          backgroundColor: 'var(--bg-white)',
          borderRadius: 'var(--radius-lg)',
          boxShadow: '0 20px 40px rgba(0,0,0,0.04)',
          overflow: 'hidden',
          border: '1px solid rgba(0,0,0,0.05)'
        }}>
          
          <div style={{ padding: '5rem', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <h2 style={{ fontSize: '3.2rem', color: 'var(--text-dark)', marginBottom: '2rem', fontWeight: 800, letterSpacing: '-1px' }}>
              Get in Touch With Us
            </h2>
            <p style={{ color: 'var(--text-body)', lineHeight: '1.9', fontSize: '1.15rem', maxWidth: '500px', fontWeight: 400 }}>
              Contact Pikuboo for all your bulk and wholesale needs. As a trusted manufacturer of premium cloth diapers, we sell factory direct to wholesalers, distributors, and retailers on a global scale. For the individual customer, you can find our reusable, long-lasting diapers on Amazon and Flipkart for easy access to our premium products.
              <br/><br/>
              Whether you need our product for your store or will be purchasing in bulk, our team is here to help and provide prompt support, order shipping, and superior service.
            </p>
          </div>

          <div style={{ backgroundColor: 'white', padding: '5rem', display: 'flex', flexDirection: 'column', justifyContent: 'center', borderLeft: '1px solid rgba(0,0,0,0.05)' }}>
            <h2 style={{ fontSize: '1.8rem', color: 'var(--text-dark)', marginBottom: '2.5rem', fontWeight: 800 }}>Contact Us</h2>
            
            <form onSubmit={(e) => e.preventDefault()} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <input type="text" placeholder="Full Name *" required style={inputStyle} onFocus={handleFocus} onBlur={handleBlur} />
              <input type="email" placeholder="Email Address *" required style={inputStyle} onFocus={handleFocus} onBlur={handleBlur} />
              <input type="tel" placeholder="Phone Number (Optional)" style={inputStyle} onFocus={handleFocus} onBlur={handleBlur} />
              <div style={{ position: 'relative' }}>
                <select required style={{...inputStyle, appearance: 'none', color: 'var(--text-light)'}} onFocus={handleFocus} onBlur={handleBlur} onChange={(e) => e.target.style.color = 'var(--text-dark)'}>
                  <option value="" disabled selected>Select Inquiry Type *</option>
                  <option value="wholesale">Wholesale / Bulk Order</option>
                  <option value="distributor">Distributor Inquiry</option>
                  <option value="support">Customer Support</option>
                  <option value="other">Other</option>
                </select>
                <ChevronDown size={18} color="var(--text-light)" style={{ position: 'absolute', right: '20px', top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none' }} />
              </div>
              <input type="text" placeholder="Company Name (Optional)" style={inputStyle} onFocus={handleFocus} onBlur={handleBlur} />
              <input type="text" placeholder="Country / Region" style={inputStyle} onFocus={handleFocus} onBlur={handleBlur} />
              <textarea rows="4" placeholder="Your Message *" required style={{...inputStyle, resize: 'vertical', borderRadius: 'var(--radius-md)'}} onFocus={handleFocus} onBlur={handleBlur}></textarea>
              <button className="btn-primary" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '8px', padding: '16px 32px', fontSize: '1.1rem', width: 'fit-content', marginTop: '1rem', borderRadius: 'var(--radius-pill)', alignSelf: 'flex-start' }}>
                Send Message <Send size={18} />
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* 4. Google Maps Section */}
      <section className="container maps-section" style={{ padding: '0 1rem 4rem' }}>
        <div style={{ borderRadius: 'var(--radius-lg)', overflow: 'hidden', height: '450px', width: '100%', boxShadow: '0 20px 40px rgba(0,0,0,0.06)' }}>
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d125745.78913615286!2d76.22384734324316!3d9.982342371285203!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b080d514abec6bf%3A0xbd582caa5844192!2sKochi%2C%20Kerala!5e0!3m2!1sen!2sin!4v1714000000000!5m2!1sen!2sin" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="Pikuboo Location"
          ></iframe>
        </div>
      </section>

      {/* 5. Community Reviews Section */}
      <section className="reviews-section" style={{ padding: '6rem 1rem', backgroundColor: 'var(--bg-white)', borderTop: '1px solid rgba(0,0,0,0.05)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
            <h2 style={{ fontSize: '2.8rem', color: 'var(--text-dark)', marginBottom: '1.5rem', fontWeight: 800 }}>Community Reviews</h2>
            <p style={{ color: 'var(--text-body)', fontSize: '1.15rem', maxWidth: '800px', margin: '0 auto', lineHeight: '1.8' }}>
              Hear from parents who trust Pikuboo! Discover their real stories about comfort, eco-friendliness, and how our cotton diapers make parenting simpler and greener.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))', gap: '4rem' }}>
            
            {/* Review 1 */}
            <div style={{ textAlign: 'center' }}>
              <img src="/images/priya-menon-g-review.png" alt="Meera S" style={{ width: '120px', height: '120px', borderRadius: '50%', objectFit: 'cover', margin: '0 auto 1.5rem', border: '4px solid white', boxShadow: '0 10px 20px rgba(0,0,0,0.05)' }} />
              <h4 style={{ fontSize: '1.3rem', color: 'var(--text-dark)', marginBottom: '0.5rem', fontWeight: 700 }}>Meera S</h4>
              <div style={{ display: 'flex', justifyContent: 'center', gap: '4px', marginBottom: '1.5rem' }}>
                {[1,2,3,4,5].map(i => <Star key={i} size={18} fill="#FFC107" color="#FFC107" />)}
              </div>
              <p style={{ color: 'var(--text-body)', fontStyle: 'italic', lineHeight: '1.7', fontSize: '1.05rem' }}>
                "Pikuboo diapers have such a silky-soft, eco-conscious feeling. It's nice to know I'm choosing sustainable care for my little one."
              </p>
            </div>

            {/* Review 2 */}
            <div style={{ textAlign: 'center' }}>
              <img src="/images/ravi-gupta-g-review.jpeg" alt="Rahul N" style={{ width: '120px', height: '120px', borderRadius: '50%', objectFit: 'cover', margin: '0 auto 1.5rem', border: '4px solid white', boxShadow: '0 10px 20px rgba(0,0,0,0.05)' }} />
              <h4 style={{ fontSize: '1.3rem', color: 'var(--text-dark)', marginBottom: '0.5rem', fontWeight: 700 }}>Rahul N</h4>
              <div style={{ display: 'flex', justifyContent: 'center', gap: '4px', marginBottom: '1.5rem' }}>
                {[1,2,3,4,5].map(i => <Star key={i} size={18} fill="#FFC107" color="#FFC107" />)}
              </div>
              <p style={{ color: 'var(--text-body)', fontStyle: 'italic', lineHeight: '1.7', fontSize: '1.05rem' }}>
                "Really great fit and easy to clean! Pikuboo makes transition to reusable diapers so accessible for parents like us!"
              </p>
            </div>

            {/* Review 3 */}
            <div style={{ textAlign: 'center' }}>
              <img src="/images/anil-sharma-g-review.png" alt="Ananya T" style={{ width: '120px', height: '120px', borderRadius: '50%', objectFit: 'cover', margin: '0 auto 1.5rem', border: '4px solid white', boxShadow: '0 10px 20px rgba(0,0,0,0.05)' }} />
              <h4 style={{ fontSize: '1.3rem', color: 'var(--text-dark)', marginBottom: '0.5rem', fontWeight: 700 }}>Ananya T</h4>
              <div style={{ display: 'flex', justifyContent: 'center', gap: '4px', marginBottom: '1.5rem' }}>
                {[1,2,3,4,5].map(i => <Star key={i} size={18} fill="#FFC107" color="#FFC107" />)}
              </div>
              <p style={{ color: 'var(--text-body)', fontStyle: 'italic', lineHeight: '1.7', fontSize: '1.05rem' }}>
                "Nothing seems to irritate my baby's sensitive skin and helps us reduce waste. I'm glad I choose Pikuboo for my family."
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Global overrides for this page */}
      <style>{`
        .contact-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 15px 40px rgba(0,0,0,0.05) !important;
        }
        @media (max-width: 1024px) {
          #contact-form > div { grid-template-columns: 1fr !important; }
          #contact-form > div > div { padding: 3rem 2rem !important; border-left: none !important; }
          #contact-form > div > div:last-child { border-top: 1px solid rgba(0,0,0,0.05); }
        }
        @media (max-width: 768px) {
          .container { padding-left: 1.5rem; padding-right: 1.5rem; }
          h1 { font-size: 2.2rem !important; }
          h2 { font-size: 1.8rem !important; }
          .contact-hero-section { padding: 3rem 1rem 2rem !important; gap: 2rem !important; }
          .hero-img { min-height: 250px !important; }
          .form-section { padding: 2rem 1rem 3rem !important; }
          .maps-section { padding: 0 1rem 3rem !important; }
          .reviews-section { padding: 4rem 1rem !important; }
        }
      `}</style>
    </div>
  );
};

/* Shared Input Styles */
const inputStyle = {
  width: '100%', 
  padding: '16px 24px', 
  borderRadius: 'var(--radius-pill)', 
  border: '1px solid var(--border-color)', 
  backgroundColor: 'white', 
  outline: 'none', 
  fontSize: '1rem', 
  transition: 'all 0.3s ease',
  color: 'var(--text-dark)'
};

const handleFocus = (e) => {
  e.target.style.borderColor = 'var(--primary)';
  e.target.style.boxShadow = '0 0 0 3px rgba(37, 211, 102, 0.1)';
};

const handleBlur = (e) => {
  e.target.style.borderColor = 'var(--border-color)';
  e.target.style.boxShadow = 'none';
};

export default Contact;
