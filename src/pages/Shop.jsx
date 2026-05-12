import React from 'react';
import { Helmet } from 'react-helmet-async';
import ShopProductCard from '../components/ShopProductCard';
import productsData from '../data/products.json';

const Shop = () => {
  return (
    <>
      <Helmet>
        <title>Shop Reusable Cloth Diapers & Inserts | Pikuboo</title>
        <meta name="description" content="Shop reusable cloth diapers and cloth diaper inserts at Pikuboo. Soft, washable, eco-friendly options made for rash free comfort, safety, and easy parenting." />
      </Helmet>
      
      {/* Hero Section */}
      <section className="shop-hero-section">
        <div className="container">
          <div className="shop-hero-grid">
            <div className="shop-hero-content">
              <h1 className="shop-hero-heading">
                Shop Pikuboo’s Reusable Cloth Diapers and Cloth Diaper Inserts Online
              </h1>
              <p className="shop-hero-subheading">
                Welcome to Pikuboo's official shop page! You can find our premium Reusable Cloth Diapers and Cloth Diaper Inserts, designed with comfort, eco-friendliness, and convenience in mind. We put a lot of effort into making all of our products to ensure that your baby's diapering experience is the best it can be. We try to limit fabric material to make diapering great and good for the planet and minimize waste. We'll try to keep this page updated with the latest products, and it's convenient to shop in one place. Also, we'll include links to purchase our products through trusted services like Amazon and Flipkart, so you can have a stress-free shopping experience. This page is ideal for all eco-aware parents looking for high-quality diapering solutions. This is clearly the place for quality, eco-friendly baby care!
              </p>
              <div className="shop-hero-actions">
                <a href="#products">
                  <img src="/images/amazon-icon-shop-page.png" alt="Buy on Amazon" className="shop-hero-btn-img" />
                </a>
                <a href="#products">
                  <img src="/images/flipkart-icon-shop-page.png" alt="Buy on Flipkart" className="shop-hero-btn-img" />
                </a>
              </div>
            </div>
            <div className="shop-hero-image-col">
              <img src="/images/cart-image-hero-component-shop-page.png" alt="Pikuboo Shop Cart" className="shop-hero-img" />
            </div>
          </div>
        </div>
      </section>

      {/* Products Section Heading */}
      <section id="products" className="shop-products-heading-section">
        <div className="container text-center">
          <h2 className="shop-section-heading">Our Bestselling Products</h2>
          <p className="shop-section-desc">
            Browse through our collection of comfortable, reusable cotton diapers, Cloth diaper inserts - available in a variety of colors, styles, and sizes to suit your baby's needs.
          </p>
        </div>
      </section>

      {/* Products List */}
      <section className="shop-products-list">
        <div className="container">
          {productsData.map((product) => (
            <ShopProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Community CTA Section */}
      <section className="shop-whatsapp-section">
        <div className="container">
          <div className="text-center" style={{ marginBottom: '2rem' }}>
            <h2 className="shop-whatsapp-heading">Stay Updated With Pikuboo</h2>
            <p className="shop-whatsapp-description">
              Join our WhatsApp community to get the latest product updates, offers, and important news. Ideal for mothers, retailers, and wholesale partners.
            </p>
          </div>

          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <div className="shop-whatsapp-card text-center">
              <div className="shop-whatsapp-icon mb-3">
                <img src="/images/community-icon-shop-page.png" alt="WhatsApp Icon" style={{ width: '40px' }} />
              </div>
              <h4 className="shop-whatsapp-title">Join Our WhatsApp Community</h4>
              <p className="shop-whatsapp-text">
                Be the first to know about new products, deals, and announcements.
              </p>
              <a href="https://wa.me/917012941992" target="_blank" rel="noopener noreferrer" className="btn-primary whatsapp-btn">
                <img src="/images/whatsapp-icon-navbar.png" alt="WhatsApp" style={{ width: '20px', marginRight: '8px' }} />
                Join Community
              </a>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        /* Shop Hero Section */
        .shop-hero-section {
          padding: 6rem 1rem 4rem;
          background-color: var(--bg-main);
        }
        .shop-hero-grid {
          display: grid;
          grid-template-columns: 1.2fr 0.8fr;
          gap: 4rem;
          align-items: center;
        }
        .shop-hero-heading {
          font-size: 2.8rem;
          color: var(--text-dark);
          margin-bottom: 1.5rem;
          font-weight: 800;
          line-height: 1.2;
          letter-spacing: -1px;
        }
        .shop-hero-subheading {
          color: var(--text-body);
          line-height: 1.8;
          font-size: 1.05rem;
          margin-bottom: 2.5rem;
        }
        .shop-hero-actions {
          display: flex;
          gap: 1.5rem;
          flex-wrap: wrap;
        }
        .shop-hero-btn-img {
          height: 48px;
          object-fit: contain;
          transition: transform 0.3s ease;
        }
        .shop-hero-btn-img:hover {
          transform: translateY(-3px);
        }
        .shop-hero-img {
          width: 100%;
          max-width: 500px;
          border-radius: var(--radius-lg);
          object-fit: cover;
          display: block;
          margin: 0 auto;
        }

        /* Products Heading */
        .shop-products-heading-section {
          padding: 5rem 1rem 2rem;
          background-color: #fcfcfc;
        }
        .shop-section-heading {
          font-size: 2.5rem;
          color: var(--text-dark);
          margin-bottom: 1rem;
          font-weight: 700;
        }
        .shop-section-desc {
          font-size: 1.15rem;
          color: var(--text-body);
          max-width: 800px;
          margin: 0 auto;
          line-height: 1.7;
        }

        /* Products List */
        .shop-products-list {
          padding: 2rem 1rem 6rem;
          background-color: #fcfcfc;
        }

        /* Shop Product Card Component Styles */
        .product-row-card {
          background-color: white;
          border-radius: var(--radius-lg);
          box-shadow: 0 10px 40px rgba(0,0,0,0.04);
          padding: 3rem;
          margin-bottom: 3rem;
          border: 1px solid rgba(0,0,0,0.05);
        }
        .product-card-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: center;
        }
        .product-carousel-container {
          position: relative;
          width: 100%;
          border-radius: var(--radius-md);
          overflow: hidden;
          background-color: var(--bg-card-1);
          aspect-ratio: 1/1;
        }
        .carousel-wrapper {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
        }
        .carousel-btn {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          background: white;
          border: none;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          box-shadow: 0 4px 10px rgba(0,0,0,0.1);
          color: var(--text-dark);
          z-index: 10;
          transition: all 0.2s ease;
        }
        .carousel-btn:hover {
          background: var(--bg-main);
        }
        .carousel-btn.prev {
          left: 10px;
        }
        .carousel-btn.next {
          right: 10px;
        }
        .product-info-container {
          display: flex;
          flex-direction: column;
        }
        .product-title {
          font-size: 2rem;
          color: var(--text-dark);
          font-weight: 700;
          margin-bottom: 1rem;
          line-height: 1.3;
        }
        .product-reviews {
          color: var(--text-body);
          font-weight: 400;
          margin-bottom: 1.5rem;
          display: flex;
          align-items: center;
          gap: 6px;
        }
        .review-link {
          color: var(--primary);
          cursor: pointer;
        }
        .product-price {
          font-size: 1.8rem;
          font-weight: 700;
          color: var(--primary);
          margin-bottom: 2rem;
        }
        .option-group {
          margin-bottom: 1.5rem;
        }
        .option-title {
          font-size: 1rem;
          font-weight: 600;
          color: var(--text-dark);
          margin-bottom: 0.5rem;
        }
        .option-badge {
          display: inline-block;
          padding: 8px 24px;
          border-radius: 50px;
          font-size: 0.95rem;
          background: #f5f5f5;
          color: var(--text-body);
          margin-right: 10px;
        }
        .option-badge.active {
          background: var(--primary);
          color: white;
          font-weight: 500;
        }
        .product-actions {
          display: flex;
          gap: 1rem;
          margin-top: 1rem;
          flex-wrap: wrap;
        }
        .buy-btn img {
          height: 44px;
          transition: transform 0.2s ease;
        }
        .buy-btn:hover img {
          transform: translateY(-3px);
        }

        /* WhatsApp Section */
        .shop-whatsapp-section {
          padding: 4rem 1rem 6rem;
          background-color: var(--bg-main);
        }
        .shop-whatsapp-heading {
          font-size: 2.2rem;
          font-weight: 800;
          color: var(--text-dark);
          margin-bottom: 1rem;
        }
        .shop-whatsapp-description {
          font-size: 1.1rem;
          color: var(--text-body);
          max-width: 600px;
          margin: 0 auto;
          line-height: 1.7;
        }
        .shop-whatsapp-card {
          background: white;
          padding: 3rem;
          border-radius: var(--radius-lg);
          box-shadow: 0 10px 40px rgba(0,0,0,0.05);
          max-width: 500px;
          width: 100%;
        }
        .shop-whatsapp-title {
          font-size: 1.4rem;
          font-weight: 700;
          margin-bottom: 0.5rem;
          color: var(--text-dark);
        }
        .shop-whatsapp-text {
          color: var(--text-body);
          margin-bottom: 2rem;
        }
        .whatsapp-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 12px 28px;
          font-weight: 600;
          border-radius: 50px;
        }

        /* Responsive Overrides */
        @media (max-width: 992px) {
          .shop-hero-grid {
            grid-template-columns: 1fr;
            text-align: center;
          }
          .shop-hero-actions {
            justify-content: center;
          }
          .product-card-grid {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
          .product-info-container {
            text-align: center;
          }
          .product-actions {
            justify-content: center;
          }
          .product-reviews {
            justify-content: center;
          }
        }
        @media (max-width: 768px) {
          .shop-hero-section {
            padding: 4rem 1rem 2rem;
          }
          .product-row-card {
            padding: 1.5rem;
            margin-bottom: 2rem;
          }
          .product-card-grid {
            gap: 1.5rem;
          }
          .product-carousel-container {
            aspect-ratio: 4/3; /* Less vertical height on mobile */
          }
          .product-price {
            font-size: 1.5rem;
            margin-bottom: 1rem;
          }
          .option-group {
            margin-bottom: 1rem;
          }
          .product-reviews {
            margin-bottom: 1rem;
          }
        }
      `}</style>
    </>
  );
};

export default Shop;
