import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight, Check } from 'lucide-react';

const DomesticWholesale = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    "/images/cotton-diaper-and-box-rebranding-wholesale-page.png",
    "/images/diaper-inserts-rebranding-wholesale-page.png",
    "/images/cotton-diaper-rebranding-wholesale-page.png"
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <Helmet>
        <title>Cloth Diaper Wholesale Supplier India | Pikuboo</title>
        <meta name="description" content="Partner with Pikuboo, a trusted cloth diaper wholesale supplier in India. Buy premium bulk cloth diapers at great prices with fast delivery and support." />
      </Helmet>

      <style>{`
        .wholesale-section {
          padding: 6rem 1rem;
        }
        
        .two-col-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: center;
        }

        h2.section-title {
          font-size: 2.5rem;
          color: var(--text-dark);
          margin-bottom: 1.5rem;
          font-weight: 800;
        }

        p.section-desc {
          color: var(--text-body);
          font-size: 1.1rem;
          line-height: 1.8;
          margin-bottom: 2rem;
        }

        /* Hero Specific */
        .wholesale-hero {
          background-color: var(--bg-white);
        }
        .hero-img {
          width: 100%;
          border-radius: var(--radius-lg);
          object-fit: cover;
        }
        .hero-title {
          font-size: 3.5rem;
          color: var(--text-dark);
          margin-bottom: 1.5rem;
          font-weight: 800;
          line-height: 1.15;
          letter-spacing: -1px;
        }

        /* Carousel Specific */
        .showcase-section {
          background-color: var(--bg-main);
        }
        .carousel-container {
          position: relative;
          width: 100%;
          border-radius: var(--radius-lg);
          overflow: hidden;
          box-shadow: var(--shadow-soft);
          background-color: white;
          aspect-ratio: 4/3;
        }
        .carousel-slide {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          opacity: 0;
          transition: opacity 0.5s ease-in-out;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 2rem;
        }
        .carousel-slide.active {
          opacity: 1;
        }
        .carousel-slide img {
          max-width: 100%;
          max-height: 100%;
          object-fit: contain;
        }
        .carousel-btn {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          background-color: white;
          border: none;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          box-shadow: 0 4px 10px rgba(0,0,0,0.1);
          color: var(--primary);
          z-index: 10;
          transition: all 0.2s;
        }
        .carousel-btn:hover {
          background-color: var(--primary);
          color: white;
        }
        .carousel-btn.prev { left: 1rem; }
        .carousel-btn.next { right: 1rem; }
        
        .feature-list {
          list-style: none;
          padding: 0;
          margin: 0 0 2rem 0;
        }
        .feature-list li {
          display: flex;
          align-items: flex-start;
          gap: 1rem;
          margin-bottom: 1rem;
          color: var(--text-body);
          font-size: 1.05rem;
        }
        .feature-icon {
          color: var(--primary);
          flex-shrink: 0;
          margin-top: 3px;
        }

        /* How It Works Specific */
        .how-section {
          background-color: var(--bg-white);
        }
        .how-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
          margin-top: 4rem;
        }
        .how-card {
          background-color: var(--bg-main);
          border-radius: var(--radius-lg);
          padding: 3rem 2rem;
          text-align: center;
          transition: transform 0.3s;
        }
        .how-card:hover {
          transform: translateY(-5px);
        }
        .how-number {
          width: 60px;
          height: 60px;
          background-color: var(--primary);
          color: white;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.5rem;
          font-weight: 700;
          margin: 0 auto 1.5rem auto;
        }

        /* Contact Cards Specific */
        .contact-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
        }
        .contact-card {
          background-color: var(--bg-white);
          padding: 3rem 2rem;
          border-radius: var(--radius-lg);
          text-align: center;
          box-shadow: 0 10px 30px rgba(0,0,0,0.05);
          border: 1px solid rgba(0,0,0,0.04);
        }

        @media (max-width: 992px) {
          .two-col-grid {
            grid-template-columns: 1fr;
            gap: 3rem;
          }
          .hero-title { font-size: 2.5rem; }
          .section-title { font-size: 2rem; }
          .reverse-mobile {
            display: flex;
            flex-direction: column-reverse;
          }
        }
      `}</style>

      {/* Hero Section */}
      <section className="wholesale-section wholesale-hero">
        <div className="container">
          <div className="two-col-grid">
            <div>
              <h1 className="hero-title">Cloth Diaper Wholesale Supplier in India</h1>
              <p className="section-desc">
                We are a leading wholesale cloth diaper supplier based in Kochi, Kerala, India. Our products are high quality, safe, and made from certified materials that parents trust nationally. Along with our cloth diapers, we are expanding into multiple other baby products to accommodate your growth as a baby business. We deliver India-wide with rapid shipping. Unbeatable prices for bulk orders, flexible rebrand options, safety certifications, consistent quality, and best-in-market value make us the easiest decision you can make to grow your wholesale business with trusted products loved by parents nationwide!
              </p>
              <Link to="/contact" className="btn-primary" style={{ display: 'inline-block', padding: '14px 32px', borderRadius: 'var(--radius-pill)', textDecoration: 'none' }}>
                Get Wholesale Prices
              </Link>
            </div>
            <div>
              <img src="/images/domestic-wholesale-cover-image.png" alt="Wholesale Cover" className="hero-img" />
            </div>
          </div>
        </div>
      </section>

      {/* Product Showcase Section */}
      <section className="wholesale-section showcase-section">
        <div className="container">
          <div className="two-col-grid reverse-mobile">
            {/* Carousel */}
            <div className="carousel-container">
              {slides.map((slide, idx) => (
                <div key={idx} className={`carousel-slide ${idx === currentSlide ? 'active' : ''}`}>
                  <img src={slide} alt={`Product ${idx + 1}`} />
                </div>
              ))}
              <button className="carousel-btn prev" onClick={prevSlide}><ChevronLeft size={24} /></button>
              <button className="carousel-btn next" onClick={nextSlide}><ChevronRight size={24} /></button>
            </div>

            {/* Content */}
            <div>
              <h2 className="section-title">Wholesale Cloth Diapers & More</h2>
              <p className="section-desc">
                We offer high-quality cloth diapers and baby products at the cheapest wholesale prices in India. We use premium certified materials, you have beautiful rebranding options, and we can guarantee delivery throughout India. You will outperform your competition with us. You provide value for your customers, while we provide the quality, long-term sustainability, and a trusted source.
              </p>
              <ul className="feature-list">
                <li><Check size={20} className="feature-icon" /> Premium certified materials for baby safety.</li>
                <li><Check size={20} className="feature-icon" /> Competitive wholesale pricing & bulk discounts.</li>
                <li><Check size={20} className="feature-icon" /> White-label / rebranding options available.</li>
                <li><Check size={20} className="feature-icon" /> Fast, reliable shipping across India.</li>
                <li><Check size={20} className="feature-icon" /> Expanding catalogue of premium baby care products.</li>
              </ul>
              <Link to="/shop" className="btn-primary" style={{ display: 'inline-block', padding: '14px 32px', borderRadius: 'var(--radius-pill)', textDecoration: 'none' }}>
                Explore More Products
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="wholesale-section how-section">
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
            <p style={{ color: 'var(--text-light)', fontWeight: 500, marginBottom: '0.5rem' }}>Steps</p>
            <h2 className="section-title">How It Works</h2>
            <p className="section-desc mb-0">
              We make selling premium cloth diapers easy for wholesalers. From manufacturing without our branding to shipping under your label, we have set you up for success. You are free to run your business while we handle production, branding, and delivery at unbeatable wholesale prices.
            </p>
          </div>

          <div className="how-grid">
            <div className="how-card">
              <div className="how-number">1</div>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem' }}>Bulk Manufacturing</h3>
              <p style={{ color: 'var(--text-body)', lineHeight: 1.7 }}>
                We offer you quality cloth diapers supplied in bulk at the highest possible grade. All our cloth diapers are made in bulk from the best material and certified safe. All our cloth diapers will be supplied to you without our branding, leaving you complete flexibility to brand for your company or label. All your orders will be distilled from the bulk manufacturing process that satisfies your quality standards and wholesale quantity.
              </p>
            </div>
            <div className="how-card">
              <div className="how-number">2</div>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem' }}>Your Brand, Our Quality</h3>
              <p style={{ color: 'var(--text-body)', lineHeight: 1.7 }}>
                You choose a brand name, logo, or packaging style, and then we do the rest. We will manufacture the cloth diapers with your branding, and you will be able to sell diapers that look and feel like your product. It couldn't be easier to establish a brand to build an identity and differentiate yourself from your competitors while gaining loyal customers.
              </p>
            </div>
            <div className="how-card">
              <div className="how-number">3</div>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem' }}>Pan-India Delivery</h3>
              <p style={{ color: 'var(--text-body)', lineHeight: 1.7 }}>
                After production, we will pack and ship your branded cloth diapers securely to your door wherever you are located in India. We are committed to delivering as promised by the deadlines outlined in our timelines. You will receive your products ready for sale, and you will be guaranteed the presentation, style, and quality you ordered. You can start selling your cloth diapers this day if you want!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="wholesale-section" style={{ backgroundColor: 'var(--bg-main)' }}>
        <div className="container">
          <div className="two-col-grid">
            <div>
              <h2 className="section-title">Who We Are</h2>
              <p className="section-desc">
                Pikuboo, located in Kochi, Kerala, India, is a specialized manufacturer of premium-quality and eco-friendly cloth diapers. Our cloth diapers are designed to provide comfort, durability, and sustainability. We focus on manufacturing quality reusable diaper solutions for both our retail and wholesale customers. We ship worldwide with our logistics partner, <a href="https://www.bluehawktrading.com" target="_blank" rel="noreferrer" style={{ color: 'var(--primary)', fontWeight: 600, textDecoration: 'none' }}>Blue Hawk Trading LLP</a>, so you can feel confident that you will get a smooth, reliable delivery anytime, anywhere in the world. As a company building a movement for eco-conscious parenting, our mission is to promote eco-conscious parenting, with a vision to reduce the use of disposables but still maintain the same benefits. With modern manufacturing methods, we combine beyond basic business practices that are responsible and ethically guided, while you can rely on the wholesaling possibilities of our products that fulfill quality, consistency, and market expectations!
              </p>
              <Link to="/about" className="btn-primary" style={{ display: 'inline-block', padding: '14px 32px', borderRadius: 'var(--radius-pill)', textDecoration: 'none' }}>
                Learn More
              </Link>
            </div>
            <div>
              <img src="/images/pikuboo-price-tags-wholesale-page.png" alt="Who We Are" className="hero-img" style={{ mixBlendMode: 'multiply' }} />
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="wholesale-section" style={{ backgroundColor: 'var(--bg-white)' }}>
        <div className="container">
          <div className="two-col-grid reverse-mobile">
            <div>
              <img src="/images/baby-photo-in-pikuboo-cloth-diaper.png" alt="Why Choose Us" className="hero-img" />
            </div>
            <div>
              <h2 className="section-title">Why Choose Us</h2>
              <p className="section-desc">
                We make buying wholesale easy, profitable, and stress-free! Our bulk order discounts are perfectly structured to maximize your margin. With proven experience in international shipping, rest assured your order will be fulfilled quickly and courteously with our logistics partner, <a href="https://www.bluehawktrading.com" target="_blank" rel="noreferrer" style={{ color: 'var(--primary)', fontWeight: 600, textDecoration: 'none' }}>Blue Hawk Trading LLP</a>, to guarantee effective distribution anywhere in the world. As an added bonus, we also offer a full-time customer service representative always available to assist you with every aspect of your order from the time you place it to after-sale service. When you establish a partnership with us, you ensure competitive prices, reliable logistics, and a simple, seamless buying experience that will keep your business moving in the right direction!
              </p>
              <Link to="/about" className="btn-primary" style={{ display: 'inline-block', padding: '14px 32px', borderRadius: 'var(--radius-pill)', textDecoration: 'none' }}>
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Get in Touch Section */}
      <section className="wholesale-section" style={{ backgroundColor: 'var(--bg-main)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 className="section-title">Get in Touch With Us</h2>
          </div>

          <div className="contact-grid">
            <div className="contact-card">
              <img src="/images/email-icon-contact-pikuboo-page.png" alt="Email" style={{ width: '40px', margin: '0 auto 1rem auto' }} />
              <h4 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>Email Us</h4>
              <p style={{ color: 'var(--text-body)', marginBottom: '1.5rem' }}>info@pikuboo.com</p>
              <a href="mailto:info@pikuboo.com" className="btn-primary" style={{ display: 'inline-block', padding: '10px 24px', borderRadius: 'var(--radius-pill)', textDecoration: 'none', backgroundColor: 'var(--bg-white)', color: 'var(--primary)', border: '1px solid var(--primary)' }}>
                Send Email
              </a>
            </div>
            
            <div className="contact-card">
              <img src="/images/phone-icon-contact-pikuboo-page.png" alt="Phone" style={{ width: '40px', margin: '0 auto 1rem auto' }} />
              <h4 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>Call Us</h4>
              <p style={{ color: 'var(--text-body)', marginBottom: '1.5rem' }}>+91 98765 43210</p>
              <a href="tel:+919876543210" className="btn-primary" style={{ display: 'inline-block', padding: '10px 24px', borderRadius: 'var(--radius-pill)', textDecoration: 'none', backgroundColor: 'var(--bg-white)', color: 'var(--primary)', border: '1px solid var(--primary)' }}>
                Call Now
              </a>
            </div>

            <div className="contact-card">
              <img src="/images/location-icon-contact-pikuboo-page.png" alt="Location" style={{ width: '40px', margin: '0 auto 1rem auto' }} />
              <h4 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>Visit Us</h4>
              <p style={{ color: 'var(--text-body)', marginBottom: '1.5rem' }}>123 Pikuboo Street, Kochi, Kerala</p>
              <a href="https://maps.google.com" target="_blank" rel="noreferrer" className="btn-primary" style={{ display: 'inline-block', padding: '10px 24px', borderRadius: 'var(--radius-pill)', textDecoration: 'none', backgroundColor: 'var(--bg-white)', color: 'var(--primary)', border: '1px solid var(--primary)' }}>
                Get Directions
              </a>
            </div>
          </div>
        </div>
      </section>

    </>
  );
};

export default DomesticWholesale;
