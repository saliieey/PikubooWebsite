import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight, Check } from 'lucide-react';

const IntlWholesale = () => {
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
        <title>Wholesale Cloth Diapers for Export – Global Supply | Pikuboo</title>
        <meta name="description" content="Pikuboo supplies premium wholesale cloth diapers and cloth nappies for global buyers. Eco-friendly, customizable, and shipped worldwide with ease." />
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
          background-color: var(--bg-white);
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
              <h1 className="hero-title">Global Wholesale Cloth Diapers for Businesses Worldwide</h1>
              <p className="section-desc">
                We are your trusted supplier of wholesale reusable cloth nappies, with high-quality, eco-friendly, and comfortable products for retailers, distributors, and wholesalers worldwide. Our cloth nappies are manufactured in Kochi, India, to high standards of quality, ensuring durability and baby comfort. Competitive rates for bulk orders and consistent international shipping via our partner Blue Hawk Trading LLP, and a reliable trading history globally, mean you can stock your company with products that customers want. Work with us and build your business with a product that sells.
              </p>
              <Link to="/contact" className="btn-primary" style={{ display: 'inline-block', padding: '14px 32px', borderRadius: 'var(--radius-pill)', textDecoration: 'none' }}>
                Get Wholesale Prices
              </Link>
            </div>
            <div>
              <img src="/images/global-wholesale-cover-image.png" alt="Global Wholesale Cover" className="hero-img" />
            </div>
          </div>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="wholesale-section" style={{ backgroundColor: 'var(--bg-main)' }}>
        <div className="container">
          <div className="two-col-grid reverse-mobile">
            <div>
              <img src="/images/who-we-are-global-page.png" alt="Who We Are" className="hero-img" />
            </div>
            <div>
              <h2 className="section-title">Who We Are</h2>
              <p className="section-desc mb-3">
                Based in Kochi, Kerala, India, we are a responsible cloth diaper manufacturer that is serving customers worldwide. Our purpose is to make eco-friendly cloth diapers that are of the highest quality, safe to use on babies, and safe for the planet. We understand the implications of our production, which is why we are focused on creating a sustainable future and reducing the footprint of the enormous amount of diaper waste damaging our environment each year!
              </p>
              <p className="section-desc mb-3">
                We are intentional about creating each and every diaper, made from baby-safe and comfortable materials that can be reused dozens of times. Providing families with opportunities for dollar savings AND being better for the earth to preserve its precious resources for future generations.
              </p>
              <p className="section-desc">
                We want to make a positive impact on our planet, and we believe that small changes can make a big difference. Sometimes, it takes just one step, and in this case, we think switching to cloth diapering is a powerful next step in creating a cleaner and greener planet. We are committed to becoming a global service organization focused on quality, sustainability, and our true commitment to helping families and businesses across the world make better choices for their babies and for the planet.
              </p>
              <Link to="/about" className="btn-primary" style={{ display: 'inline-block', padding: '14px 32px', borderRadius: 'var(--radius-pill)', textDecoration: 'none', marginTop: '1rem' }}>
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Product Showcase Section */}
      <section className="wholesale-section showcase-section">
        <div className="container">
          <div className="two-col-grid">
            {/* Content */}
            <div>
              <h2 className="section-title">International Cloth Diaper Wholesale</h2>
              <p className="section-desc">
                Our premium cloth diapers provide supreme comfort, ultra durability, and eco-friendliness and are therefore an ideal product for wholesalers throughout the world. They are designed to be used long-term, are kind on baby's skin, and are reusable nappies that you can wash, reducing waste and providing an excellent deal for bulk buyers looking for quality, sustainable diapering options, and price-competitive shipping options worldwide.
              </p>
              <ul className="feature-list">
                <li><Check size={20} className="feature-icon" /> Attractive bulk discounts on large orders.</li>
                <li><Check size={20} className="feature-icon" /> Global shipping with customs clearance support.</li>
                <li><Check size={20} className="feature-icon" /> Private label and personal branding options.</li>
                <li><Check size={20} className="feature-icon" /> Certified quality meeting international standards.</li>
                <li><Check size={20} className="feature-icon" /> Sustainable and eco-friendly manufacturing.</li>
              </ul>
              <Link to="/shop" className="btn-primary" style={{ display: 'inline-block', padding: '14px 32px', borderRadius: 'var(--radius-pill)', textDecoration: 'none' }}>
                Explore More Products
              </Link>
            </div>

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
          </div>
        </div>
      </section>

      {/* Global Market Growth Section */}
      <section className="wholesale-section" style={{ backgroundColor: 'var(--bg-main)' }}>
        <div className="container">
          <div className="two-col-grid reverse-mobile">
            <div>
              <img src="/images/market-growth-cloth-diapers-global-page.png" alt="Market Growth Report" className="hero-img" style={{ mixBlendMode: 'multiply' }} />
            </div>
            <div>
              <h2 className="section-title">Global Cloth Diaper Wholesale Market Growth</h2>
              <p className="section-desc">
                The global cloth diaper market is growing at an unprecedented pace, as parents are looking for affordable and eco-friendly alternatives to disposable diapers. Working together with Blue Hawk Trading LLP allows for seamless global shipping, and they will take care of the clearance and shipping processes of your diapers to ensure reliable delivery—allowing us to reach customers across continents as you also help to meet the growing demand for worldwide reusable baby diapers.
              </p>
              <ul className="feature-list">
                <li><Check size={20} className="feature-icon" /> Areas Shipped – North America, Europe, Asia Pacific, South America, Middle East, and Africa</li>
                <li><Check size={20} className="feature-icon" /> <span>Blue Hawk Trading LLP - <a href="https://www.bluehawktrading.com/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--primary)', fontWeight: 600, textDecoration: 'none' }}>Visit Site</a></span></li>
                <li><Check size={20} className="feature-icon" /> <span>Global Reusable Baby Diaper Market – <a href="https://dataintelo.com/report/global-reusable-baby-diapers-market" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--primary)', fontWeight: 600, textDecoration: 'none' }}>Read More</a></span></li>
                <li><Check size={20} className="feature-icon" /> <span>Cloth Diaper Market – <a href="https://www.futuremarketinsights.com/reports/cloth-diaper-market" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--primary)', fontWeight: 600, textDecoration: 'none' }}>Read More</a></span></li>
                <li><Check size={20} className="feature-icon" /> <span>Cloth Diaper Market 2 – <a href="https://www.fortunebusinessinsights.com/cloth-diapers-market-103901" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--primary)', fontWeight: 600, textDecoration: 'none' }}>Read More</a></span></li>
              </ul>
              <Link to="/shop" className="btn-primary" style={{ display: 'inline-block', padding: '14px 32px', borderRadius: 'var(--radius-pill)', textDecoration: 'none' }}>
                Explore More Products
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Get in Touch Section */}
      <section className="wholesale-section" style={{ backgroundColor: 'var(--bg-white)' }}>
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

export default IntlWholesale;
