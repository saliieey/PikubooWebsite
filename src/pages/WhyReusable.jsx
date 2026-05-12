import React from 'react';
import { Helmet } from 'react-helmet-async';

const WhyReusable = () => {
  return (
    <>
      <Helmet>
        <title>Why Choose Pikuboo | Fabric Diapers to Prevent Diaper Rash</title>
        <meta name="description" content="Learn how Pikuboo’s fabric diapers help prevent diaper rash. Our breathable, washable design offers comfort, safety, and a natural diapering solution." />
      </Helmet>

      {/* Scoped CSS */}
      <style>{`
        /* Hero Section */
        .why-hero-section {
          padding: 6rem 1rem 4rem;
          background-color: var(--bg-main);
        }
        .why-hero-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(min(100%, 400px), 1fr));
          gap: 4rem;
          align-items: center;
        }
        .why-hero-text h1 {
          font-size: 3rem;
          color: var(--text-dark);
          margin-bottom: 1.5rem;
          font-weight: 800;
          line-height: 1.15;
          letter-spacing: -1px;
        }
        .why-hero-text p {
          color: var(--text-body);
          font-size: 1.15rem;
          line-height: 1.8;
          margin-bottom: 1.5rem;
        }
        .why-hero-img-wrapper {
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .why-hero-img {
          width: 100%;
          max-width: 450px;
          object-fit: contain;
        }

        /* Content Section */
        .why-content-section {
          padding: 6rem 1rem;
          background-color: var(--bg-white);
        }
        .why-content-wrapper {
          max-width: 800px;
          margin: 0 auto;
        }
        .why-content-wrapper h2 {
          font-size: 2.5rem;
          color: var(--text-dark);
          margin-bottom: 1rem;
          font-weight: 800;
        }
        .why-content-wrapper p {
          color: var(--text-body);
          font-size: 1.1rem;
          line-height: 1.8;
          margin-bottom: 2rem;
        }
        .why-content-wrapper h4 {
          font-size: 1.5rem;
          color: var(--text-dark);
          margin-top: 3rem;
          margin-bottom: 1rem;
          font-weight: 700;
        }

        /* WhatsApp Community Section */
        .whatsapp-community-section {
          padding: 6rem 1rem;
          background-color: var(--bg-main);
          border-top: 1px solid rgba(0,0,0,0.05);
        }
        .whatsapp-community-card {
          background-color: var(--bg-white);
          padding: 4rem 3rem;
          border-radius: var(--radius-lg);
          text-align: center;
          box-shadow: 0 20px 50px rgba(0,0,0,0.08);
          border: 1px solid rgba(0,0,0,0.04);
          max-width: 500px;
          width: 100%;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        @media (max-width: 768px) {
          .why-hero-section { padding: 4rem 1rem 2rem !important; gap: 2rem !important; }
          .why-hero-text h1 { font-size: 2.2rem !important; }
          .why-content-wrapper h2 { font-size: 1.8rem !important; }
          .why-hero-img { min-height: 250px !important; }
          .whatsapp-community-card { padding: 3rem 1.5rem; }
        }
      `}</style>

      {/* Hero Section */}
      <section className="why-hero-section">
        <div className="container">
          <div className="why-hero-grid">
            <div className="why-hero-text">
              <h1>Fabric Diapers: A Smarter, Healthier Choice Against Diaper Rash</h1>
              <p>
                On this page we will cover all there is to know about reusable cloth diapering for parents and wholesalers. You will learn how fabric-based choices save you money over the long term, minimize waste to the environment, and provide a more comfortable solution for babies. You will also learn how proper diapering can greatly decrease the chances of skin irritation in babies, along with tips on how to wash and take care of them. On top of that, you will get a glance at the massive global market scope for cloth diapers and why environmentally friendly solutions are the future of baby care across the globe.
              </p>
            </div>
            <div className="why-hero-img-wrapper">
              <img src="/images/safe-icon-why-choose-page-pikuboo.png" alt="Safe Shield Icon" className="why-hero-img" />
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="why-content-section">
        <div className="container">
          <div className="why-content-wrapper">
            <h2>Why Choose Reusable Diapers for Your Baby's Future</h2>
            <p style={{ fontSize: '1.25rem', fontWeight: 500, color: 'var(--text-dark)', marginBottom: '1.5rem' }}>
              Discover why reusable diapers are the future of baby care – eco-friendly, safe, and sustainable for families worldwide.
            </p>
            <p>
              Reusable diapers are designed to reduce waste, save costs, and provide comfort for babies. Made with soft, breathable fabrics, they help minimize environmental impact while ensuring healthier choices for little ones.
            </p>

            <h4>Cost Savings</h4>
            <p>
              Although disposable diapers may seem to be the more inexpensive option up front, the costs begin to add up quickly. One set of reusable diapers can last a minimum of several months; some will last years, and because of this families will enjoy considerable savings. Additionally, reusable diapers can be reused, so costly trips to the store to buy new packs are avoided, making them overall budget-friendly.
            </p>

            <h4>Comfort and Modern Styles</h4>
            <p>
              Today's cloth diapers are not the bulky cloth diapers of the past. Available in soft, breathable fabrics, containing adjustable snaps, waterproof covers, and absorbent inserts to prevent leaks, parents can enjoy the newest styles with the comfort of the baby in mind.
            </p>

            <h4>Health Benefits</h4>
            <p>
              Disposable diapers are made with chemicals, gels, and fragrances that may irritate some babies' sensitive skin. Reusable cloth diapers contain no harmful substances and allow airflow, allowing for a reduction in skin problems. One of the biggest advantages is the decreased incidence of diaper rash. Diaper rash is an issue many parents come across, and babies in cloth diapers tend to have significantly fewer rashes because they are made from natural materials that are gentle to the skin.
            </p>

            <h4>Flexibility for Every Need</h4>
            <p>
              Cloth diapers come in several different fabrics, patterns, and absorbencies, allowing parents flexibility for both day and night. Some cloth diapers come with extra padding for longer hours, while lighter-weight diapers will work perfectly during the day. There are so many options that parents can choose what is best to meet the needs of their baby.
            </p>

            <h4>A Smarter Parenting Option</h4>
            <p>
              Reusable cloth diapering is more than just a fad—it is a commitment to a different lifestyle. Families will save money, reduce their impact on the environment, and provide better skin health for their babies. It is a small step that can do a lot for a child and the planet they will call home.
            </p>
          </div>
        </div>
      </section>

      {/* WhatsApp Community Section */}
      <section className="whatsapp-community-section">
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 4rem' }}>
            <h2 style={{ fontSize: '2.5rem', color: 'var(--text-dark)', marginBottom: '1rem', fontWeight: 800 }}>
              Stay Updated With Pikuboo
            </h2>
            <p style={{ color: 'var(--text-body)', fontSize: '1.15rem', lineHeight: '1.8' }}>
              Join our WhatsApp community to get the latest product updates, offers, and important news. Ideal for mothers, retailers, and wholesale partners.
            </p>
          </div>

          <div className="whatsapp-community-card">
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
              <img src="/images/community-icon-shop-page.png" alt="Community Icon" style={{ width: '30px' }} />
            </div>
            <h3 style={{ fontSize: '1.5rem', color: 'var(--text-dark)', marginBottom: '1rem', fontWeight: 700 }}>
              Join Our WhatsApp Community
            </h3>
            <p style={{ color: 'var(--text-body)', marginBottom: '2.5rem', fontSize: '1.05rem', lineHeight: '1.6' }}>
              Be the first to know about new products, deals, and announcements.
            </p>
            <a 
              href="https://chat.whatsapp.com/YourGroupLinkHere" 
              target="_blank" 
              rel="noreferrer"
              className="btn-primary" 
              style={{ display: 'inline-block', padding: '14px 40px', borderRadius: 'var(--radius-pill)', textDecoration: 'none', fontSize: '1.1rem' }}
            >
              Join Now
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default WhyReusable;
