import React from 'react';
import { Helmet } from 'react-helmet-async';
import ProductCard from '../components/ProductCard';

const Home = () => {
  const categories = [
    { name: 'Yellow', image: '/images/pikuboo-cloth-diaper-yellow.png', color: 'var(--bg-card-1)' },
    { name: 'Green', image: '/images/pikuboo-cloth-diaper-green.png', color: 'var(--bg-card-3)' },
    { name: 'Red', image: '/images/pikuboo-cloth-diaper-red.png', color: 'var(--bg-card-2)' },
    { name: 'Blue', image: '/images/pikuboo-cloth-diaper-blue.png', color: 'var(--bg-card-4)' }
  ];

  const products = [
    { id: 1, title: 'Pikuboo Cloth Diaper (Yellow)', price: '799', rating: '4.6', image: '/images/pikuboo-cloth-diaper-yellow.png', bgColor: 'var(--bg-card-1)' },
    { id: 2, title: 'Pikuboo Cloth Diaper (Green)', price: '799', rating: '4.9', image: '/images/pikuboo-cloth-diaper-green.png', bgColor: 'var(--bg-card-3)' },
    { id: 3, title: 'Pikuboo Cloth Diaper (Red)', price: '799', rating: '4.7', image: '/images/pikuboo-cloth-diaper-red.png', bgColor: 'var(--bg-card-2)' },
    { id: 4, title: 'Pikuboo Cloth Diaper (Blue)', price: '799', rating: '4.8', image: '/images/pikuboo-cloth-diaper-blue.png', bgColor: 'var(--bg-card-4)' },
  ];

  const features = [
    { title: 'Reusable & Washable', desc: 'Pikuboo diapers are made to be used over and over. Just wash, dry, and reuse—it’s the easiest and most affordable way for parents to make a responsible, eco-friendly decision.', icon: '/images/washable-icon-feature-home-page.png' },
    { title: 'Multiple Snaps for Adjustments', desc: 'You can easily adjust the size as your baby grows and develops. With multi-snap buttons, our diapers fit from newborn to toddler.', icon: '/images/adjustable-icon-features-home-page.png' },
    { title: 'Soft Elastic', desc: 'We use a soft, stretchy elastic that holds on snugly but comfortably, so your baby is safe without leaving a mark.', icon: '/images/soft-fabric-icon-feature-home-page.png' },
    { title: 'Soft Inside Fabric & Leakproof', desc: 'Our inside fabric is soft and breathable, keeping your baby comfy all day long. Multiple absorbent layers prevent leaks and keep your baby dry.', icon: '/images/leak-proof-icon-features-home-page.png' },
  ];

  return (
    <>
      <Helmet>
        <title>Pikuboo | Soft Reusable Diapers for Happy Babies</title>
      </Helmet>

      {/* Hero Image Section */}
      <section className="hero-section" style={{ width: '100%', backgroundColor: '#E3D4CF', position: 'relative', overflow: 'hidden' }}>
        <img src="/images/Untitled design (40).png" alt="Pikuboo Hero" className="hero-image" />
      </section>

      {/* Wavy Marquee - Mathematically Perfect Alignment */}
      <div style={{ position: 'relative', zIndex: 10 }}>
        {/* Top Wave (Absolutely positioned above the marquee container) */}
        <svg viewBox="0 0 1440 20" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', display: 'block', position: 'absolute', bottom: 'calc(100% - 1px)', left: 0 }}>
          <path d="M0 10C240 20 480 20 720 10C960 0 1200 0 1440 10V20H0V10Z" fill="var(--primary)"/>
        </svg>
        
        <div className="marquee-container" style={{ transform: 'none', padding: '12px 0', margin: 0, display: 'flex', alignItems: 'center', backgroundColor: 'var(--primary)' }}>
          <div className="marquee-content" style={{ display: 'flex', alignItems: 'center' }}>
            <span style={{ margin: '0 20px' }}>• Pikuboo - Soft Reusable Diapers for Happy Babies</span>
            <span style={{ margin: '0 20px' }}>• Pikuboo - Soft Reusable Diapers for Happy Babies</span>
            <span style={{ margin: '0 20px' }}>• Pikuboo - Soft Reusable Diapers for Happy Babies</span>
            <span style={{ margin: '0 20px' }}>• Pikuboo - Soft Reusable Diapers for Happy Babies</span>
          </div>
        </div>
        
        {/* Bottom Wave (Absolutely positioned below the marquee container) */}
        <svg viewBox="0 0 1440 20" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', display: 'block', position: 'absolute', top: 'calc(100% - 1px)', left: 0, transform: 'rotate(180deg)' }}>
          <path d="M0 10C240 20 480 20 720 10C960 0 1200 0 1440 10V20H0V10Z" fill="var(--primary)"/>
        </svg>
      </div>

      {/* Top Picks / Categories Section */}
      <section style={{ padding: '4rem 0 3rem 0', backgroundColor: 'var(--bg-main)' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 style={{ fontSize: '2.25rem', marginBottom: '2.5rem' }}>Shop By Color</h2>
          
          <div style={{ display: 'flex', justifyItems: 'center', justifyContent: 'center', gap: '3rem', flexWrap: 'wrap' }}>
            {categories.map((cat, idx) => (
              <div key={idx} className="circular-category">
                <div className="circular-image-wrapper" style={{ backgroundColor: cat.color }}>
                  <img src={cat.image} alt={cat.name} />
                </div>
                <span className="circular-title">{cat.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Products Introduction */}
      <section style={{ padding: '3rem 0 1rem 0', backgroundColor: 'var(--bg-main)' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 style={{ fontSize: '2.25rem', marginBottom: '1.5rem' }}>Our Products</h2>
          <p style={{ maxWidth: '1000px', margin: '0 auto', fontSize: '1.05rem', color: 'var(--text-body)', lineHeight: '1.8', textAlign: 'center' }}>
            Explore Pikuboo's high-quality baby products designed with comfort and care in mind. Our reusable diapers use a breathable cotton blend that is gentle on delicate skin and keeps your babe dry. Made for easy washing and leak protection, our reusable diapers ensure a lifetime of use with super cute designs parents love. Our products are washable, long-lasting, and cost-effective for the environmentally conscious parent. Whether you're in India or anywhere else in the world, Pikuboo gets you quality diapers delivered straight to your home. Switch to comfort and sustainability; switch to Pikuboo! As manufacturers in Kerala, we offer factory-direct pricing exclusively for wholesalers so bulk buyers can take advantage! Retail customers can still order the same trusted quality at the leading online platforms like Flipkart and Amazon. Every diaper from Pikuboo brings you quality!
          </p>
        </div>
      </section>

      {/* Products Grid Section */}
      <section style={{ padding: '2rem 0 4rem 0', backgroundColor: 'var(--bg-main)' }}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '2rem' }}>
            <button style={{ background: 'none', border: 'none', display: 'flex', alignItems: 'center', gap: '6px', cursor: 'pointer', fontWeight: 600, fontSize: '1rem', color: 'var(--text-dark)' }}>
              View all <span style={{ backgroundColor: '#E0E0E0', borderRadius: '50%', width: '22px', height: '22px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '14px' }}>›</span>
            </button>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '2rem' }}>
            {products.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section style={{ padding: '4rem 0', backgroundColor: 'var(--bg-white)' }}>
        <div className="container">
          <div style={{ marginBottom: '3rem', textAlign: 'center' }}>
            <h2 style={{ fontSize: '2.25rem', marginBottom: '1rem', textAlign: 'center' }}>Top Features of Pikuboo Caped Diapers</h2>
            <p style={{ maxWidth: '900px', margin: '0 auto', color: 'var(--text-body)', fontSize: '1.05rem', lineHeight: '1.7', textAlign: 'center' }}>
              Pikuboo diapers come loaded with features that parents will love! Our diapers provide superior comfort and absorption, are adjustable, waterproof, and made out of baby-safe cotton. The reusable inserts provide long-lasting dryness, allow air to circulate to manage rashes and irritation, and are sweat-proof. They are simple to wash and quick to dry, providing convenient utility without sacrificing quality. Pikuboo diapers come in a variety of vibrant colors in combination with designs that allow for thought, showcase both style and function, and also provide a joyful experience of diapering babies with our innovative and parent-approved baby diapering solutions today!
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem', marginTop: '3rem' }}>
            {features.map((feature, index) => (
              <div key={index} style={{ padding: '2rem', borderRadius: 'var(--radius-lg)', backgroundColor: 'var(--bg-main)', textAlign: 'center' }}>
                <div style={{ width: '60px', height: '60px', backgroundColor: 'white', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem auto', boxShadow: 'var(--shadow-soft)' }}>
                  <img src={feature.icon} alt={feature.title} style={{ width: '30px', height: '30px', objectFit: 'contain' }} onError={(e) => e.target.style.display='none'} />
                </div>
                <h3 style={{ fontSize: '1.15rem', marginBottom: '1rem', textAlign: 'center' }}>{feature.title}</h3>
                <p style={{ fontSize: '0.95rem', color: 'var(--text-light)', lineHeight: '1.6', textAlign: 'center' }}>{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Eco-Friendly Brand Story */}
      <section style={{ padding: '4rem 0', backgroundColor: 'var(--bg-main)' }}>
        <div className="container">
          <div style={{ backgroundColor: 'white', padding: '4rem 2rem', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-soft)', textAlign: 'center', maxWidth: '1000px', margin: '0 auto' }}>
            <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem', textAlign: 'center' }}>Chemical-Free, Eco-Friendly Diapers Made in Kerala</h2>
            <p style={{ fontSize: '1.1rem', color: 'var(--text-body)', maxWidth: '800px', margin: '0 auto', lineHeight: '1.7', textAlign: 'center' }}>
              At Pikuboo we care for your baby and the planet. Our environmentally friendly diapers are made using breathable cotton fabric, sourced responsibly from the beautiful place of Kerala. By choosing Pikuboo, you are avoiding plastic and chemicals for a greener future. These washable diapers can also help create a world where diapering can be affordable while caring for the environment. Our diapers are safe for babies and naturally sustainable for nature. Join the thousands of parents who trust Pikuboo to deliver eco-friendly baby product solutions for everyday diapering.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section style={{ padding: '5rem 0', backgroundColor: '#F9FBF9' }}>
        <div className="container">
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4rem', alignItems: 'center' }}>
            
            <div style={{ flex: '1 1 400px' }}>
              <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>Get in Touch With Us</h2>
              <p style={{ fontSize: '1.1rem', color: 'var(--text-body)', lineHeight: '1.8' }}>
                Contact Pikuboo for all your bulk and wholesale needs. As a trusted manufacturer of premium cloth diapers, we sell factory direct to wholesalers, distributors, and retailers on a global scale. For the individual customer, you can find our reusable, long-lasting diapers on Amazon and Flipkart for easy access to our premium products. Whether you need our product for your store or will be purchasing in bulk, our team is here to help and provide prompt support, order shipping, and superior service.
              </p>
            </div>

            <div style={{ flex: '1 1 400px', backgroundColor: 'white', padding: '3rem', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-soft)' }}>
              <h3 style={{ fontSize: '1.75rem', marginBottom: '2rem' }}>Contact Us</h3>
              <form style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <input type="text" placeholder="Full Name *" style={{ width: '100%', padding: '12px 16px', borderRadius: 'var(--radius-pill)', border: '1px solid #E0E0E0', fontSize: '1rem' }} />
                <input type="email" placeholder="Email Address *" style={{ width: '100%', padding: '12px 16px', borderRadius: 'var(--radius-pill)', border: '1px solid #E0E0E0', fontSize: '1rem' }} />
                <input type="tel" placeholder="Phone Number (Optional)" style={{ width: '100%', padding: '12px 16px', borderRadius: 'var(--radius-pill)', border: '1px solid #E0E0E0', fontSize: '1rem' }} />
                
                <select style={{ width: '100%', padding: '12px 16px', borderRadius: 'var(--radius-pill)', border: '1px solid #E0E0E0', fontSize: '1rem', color: 'var(--text-light)', appearance: 'none' }}>
                  <option>Select Inquiry Type *</option>
                  <option>Wholesale</option>
                  <option>Retail</option>
                  <option>Support</option>
                </select>
                
                <input type="text" placeholder="Company Name (Optional)" style={{ width: '100%', padding: '12px 16px', borderRadius: 'var(--radius-pill)', border: '1px solid #E0E0E0', fontSize: '1rem' }} />
                <input type="text" placeholder="Country / Region" style={{ width: '100%', padding: '12px 16px', borderRadius: 'var(--radius-pill)', border: '1px solid #E0E0E0', fontSize: '1rem' }} />
                
                <textarea placeholder="Your Message *" rows="4" style={{ width: '100%', padding: '12px 16px', borderRadius: 'var(--radius-md)', border: '1px solid #E0E0E0', fontSize: '1rem', fontFamily: 'inherit', resize: 'none' }}></textarea>
                
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                  <input type="checkbox" id="agree" style={{ marginTop: '5px' }} />
                  <label htmlFor="agree" style={{ fontSize: '0.9rem', color: 'var(--text-light)' }}>I agree to be contacted regarding my inquiry.</label>
                </div>

                <button type="button" className="btn-primary" style={{ borderRadius: 'var(--radius-pill)', padding: '14px', fontSize: '1.05rem', marginTop: '1rem' }}>
                  Submit Inquiry
                </button>
              </form>
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
