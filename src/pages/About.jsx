import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Plus, Minus } from 'lucide-react';

const About = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const values = [
    {
      title: "Brand Story",
      content: "Pikuboo was established in Kochi, Kerala, in 2023, with the aim of addressing the higher diaper waste crisis and protecting baby health. The founders of Pikuboo, witnessed the increasing problems related to disposable diapers, which drove him to create premium washable diapers made from certified organic cotton. We manufacture our diapers locally and are committed to minimizing our carbon impact by using sustainable and eco-friendly practices. We are providing peace of mind to countless numbers of parents, wholesalers, and retailers to have easily accessible, sustainable baby care products"
    },
    {
      title: "What Makes Us Unique",
      content: "As a certified manufacturer based in Kerala, Pikuboo is focused on diapering, specifically cotton diapers, and we are complying with international standards in quality and safety. Our eco-conscious thinking, local craftsmanship, and premium certified fabrics are reasons we have become the go-to sustainable diaper manufacturer."
    },
    {
      title: "Customer Focus",
      content: "We have customers—both parents and retailers and wholesalers—all over the world, from Africa to North America, Europe, and Oceania. We make and sell eco-friendly washable diapers designed for comfort and reliability. Whether you are buying one diaper for personal use or placing a bulk order, we pride ourselves on being customer first."
    },
    {
      title: "Certifications & Quality",
      content: "We use GOTS-certified cotton and subject ourselves to OEKO-TEX® testing. This way you can be assured each diaper is safe, soft, and durable. The testing and stripping process our cotton material goes through ensures that we are making premium cotton diapers parents all over the world can rely on to deliver above and beyond their expectations."
    }
  ];

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <>
      <Helmet>
        <title>About Pikuboo | Cotton Diapers & Washable Diapers Brand</title>
        <meta name="description" content="Discover Pikuboo’s story | A trusted brand making cotton diapers and washable diapers that are safe, eco-friendly, and comfortable for babies." />
      </Helmet>

      {/* Scoped CSS for About Page Consistency */}
      <style>{`
        /* Hero Section */
        .about-hero-section {
          padding: 5rem 0;
          background-color: var(--bg-main);
        }
        .about-hero-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: center;
        }
        .about-hero-text p {
          color: var(--text-body);
          font-size: 1.1rem;
          line-height: 1.8;
          margin-bottom: 1.5rem;
        }
        .about-hero-img-wrapper {
          border-radius: var(--radius-lg);
          overflow: hidden;
          box-shadow: var(--shadow-soft);
        }
        .about-hero-img {
          width: 100%;
          height: auto;
          object-fit: cover;
          display: block;
        }

        /* Mission & Vision Section */
        .mission-vision-section {
          padding: 5rem 0;
          background-color: var(--bg-white);
        }
        .mission-vision-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 3rem;
          margin-top: 3rem;
        }
        .mission-card {
          background-color: var(--bg-main);
          border-radius: var(--radius-lg);
          padding: 3rem;
          height: 100%;
        }
        .mission-icon {
          width: 50px;
          height: 50px;
          margin-bottom: 1.5rem;
          object-fit: contain;
        }

        /* Company Values / Accordion Section */
        .values-section {
          padding: 5rem 0;
          background-color: var(--bg-main);
        }
        .values-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
        }
        
        /* Accordion CSS (Consistent with FAQ) */
        .accordion-item {
          background-color: var(--bg-white);
          border-radius: var(--radius-md);
          margin-bottom: 1rem;
          overflow: hidden;
          box-shadow: 0 2px 10px rgba(0,0,0,0.02);
        }
        .accordion-header {
          padding: 1.5rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          cursor: pointer;
          font-weight: 600;
          font-size: 1.1rem;
          color: var(--text-dark);
          transition: background-color 0.2s;
        }
        .accordion-header:hover {
          background-color: #fcfcfc;
        }
        .accordion-icon {
          color: var(--primary-hover);
          transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1);
          font-size: 1.2rem;
        }
        .accordion-content {
          display: grid;
          grid-template-rows: 0fr;
          transition: grid-template-rows 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .accordion-content.open {
          grid-template-rows: 1fr;
        }
        .accordion-inner {
          overflow: hidden;
          padding: 0 1.5rem;
        }
        .accordion-text {
          padding-bottom: 1.5rem;
          color: var(--text-light);
          line-height: 1.7;
        }

        /* CEO Quote Section */
        .ceo-section {
          padding: 5rem 0;
          background-color: var(--bg-white);
          text-align: center;
        }
        .ceo-quote-text {
          font-size: 1.5rem;
          color: var(--text-dark);
          max-width: 800px;
          margin: 0 auto 3rem auto;
          line-height: 1.6;
          font-weight: 500;
        }
        .ceo-profile-img {
          width: 80px;
          height: 80px;
          border-radius: 50%;
          object-fit: cover;
          margin: 0 auto 1rem auto;
        }

        /* Responsive Overrides */
        @media (max-width: 992px) {
          .about-hero-grid, .mission-vision-grid, .values-grid {
            grid-template-columns: 1fr;
            gap: 3rem;
          }
          .ceo-quote-text {
            font-size: 1.25rem;
            padding: 0 1rem;
          }
        }
      `}</style>

      {/* Hero Section */}
      <section className="about-hero-section">
        <div className="container">
          <div className="about-hero-grid">
            <div className="about-hero-text">
              <h1 style={{ marginBottom: '1.5rem' }}>About Pikuboo</h1>
              <p>
                Meet Pikuboo, a locally owned and operated manufacturer of cotton diapers in Kerala. Our cotton diapers are made to provide comfort and safety for your baby and sustainability for our planet. We are your one-stop shop for eco-friendly diapering solutions tailored for you and your child's needs, so parents can provide the safest, most sustainable, and well-thought-out baby care options in an era of smarter, greener parenting.
              </p>
              <p>
                At Pikuboo, we are a manufacturer of premium cotton diapers that offer comfort, safety, and sustainability for parents today. We know that traditional diapering produces waste, which is why our baby products are functional and made locally using products that reduce waste and support customers in keeping strong babies that are happy and healthy. We are committed to sustainable design and manufacture, offering both retail and wholesale diapering options of high quality that protect children and the earth as you take care of your child with a cleaner, healthier tomorrow.
              </p>
              <Link to="/shop" className="btn-primary" style={{ marginTop: '1rem', borderRadius: 'var(--radius-pill)', padding: '14px 32px' }}>
                Shop Now
              </Link>
            </div>
            <div className="about-hero-img-wrapper">
              <img src="/images/Untitled design (27).png" alt="About Pikuboo" className="about-hero-img" />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="mission-vision-section">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', alignItems: 'center' }}>
            <div>
              <h2 style={{ marginBottom: '1rem' }}>Our Mission & Vision</h2>
            </div>
            <div>
              <p style={{ color: 'var(--text-body)', fontSize: '1.1rem', lineHeight: '1.8' }}>
                At Pikuboo, we have a primary mission and vision that helps to guide everything we do. We have a passion for eco-friendly diapering solutions that protect babies and reduce waste while promoting sustainable parenting for a cleaner, healthier planet.
              </p>
            </div>
          </div>
          
          <div className="mission-vision-grid">
            <div className="mission-card">
              <img src="/images/mission-icon-about-us-page.png" alt="Mission Icon" className="mission-icon" />
              <h3 style={{ marginBottom: '1rem' }}>Our Mission</h3>
              <p style={{ color: 'var(--text-body)', lineHeight: '1.7' }}>
                Our mission is to reduce diaper waste by providing safe, sustainable washable diapers for every child. Our purpose is to enable parents to have eco-friendly options that protect babies health and our planet through design and quality.
              </p>
            </div>
            
            <div className="mission-card">
              <img src="/images/vision-icon-about-us-page.png" alt="Vision Icon" className="mission-icon" />
              <h3 style={{ marginBottom: '1rem' }}>Our Vision</h3>
              <p style={{ color: 'var(--text-body)', lineHeight: '1.7' }}>
                We envision a world where disposable diapers are replaced with cotton diapers, moving toward sustainable parenting as a common choice for families everywhere, and in the process we will help reduce waste while protecting future generations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Company Values & Accordion */}
      <section className="values-section">
        <div className="container">
          <div className="values-grid">
            <div>
              <h2 style={{ marginBottom: '1.5rem' }}>Our Company and Values</h2>
              <p style={{ color: 'var(--text-body)', fontSize: '1.1rem', lineHeight: '1.8' }}>
                We are Pikuboo, and we are committed to changing baby care with eco-friendly cotton diapers focused on both baby health and the health of our planet. Founded in 2023 in Kerala, our locally manufactured products combine sustainability, safety, and comfort. With GOTS and OEKO-TEX® certifications, we offer parent-quality products that they can trust. We proudly serve individuals, retailers, and wholesalers everywhere by providing ethically and responsibly sourced products. More than products, we want to create a future where washable diapers will totally replace disposables and provide sustainable parenting globally.
              </p>
            </div>
            
            <div className="accordion-container">
              {values.map((item, index) => (
                <div className="accordion-item" key={index}>
                  <div className="accordion-header" onClick={() => toggleAccordion(index)}>
                    <span>{item.title}</span>
                    <div style={{ color: openIndex === index ? 'var(--primary)' : 'var(--text-light)', transition: 'color 0.3s' }}>
                      {openIndex === index ? <Minus size={20} /> : <Plus size={20} />}
                    </div>
                  </div>
                  <div className={`accordion-content ${openIndex === index ? 'open' : ''}`}>
                    <div className="accordion-inner">
                      <div className="accordion-text">{item.content}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CEO Quote */}
      <section className="ceo-section">
        <div className="container">
          <p className="ceo-quote-text">
            "We know sustainability today can feel overwhelming and expensive. Pikuboo was created to bridge that gap—so more parents can choose comfort and care that’s better for their baby and the planet."
          </p>
          <div>
            <img src="/images/siddarth-mathew-jacob-CEO-about-us-page.png" alt="Siddarth Mathew Jacob" className="ceo-profile-img" />
            <h4 style={{ fontSize: '1.2rem', marginBottom: '0.2rem' }}>Siddarth Mathew Jacob</h4>
            <p style={{ color: 'var(--text-light)', fontSize: '0.95rem' }}>CEO of Pikuboo</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
