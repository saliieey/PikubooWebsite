import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer style={{ backgroundColor: 'var(--bg-white)', paddingTop: '4rem', borderTop: '1px solid var(--border-color)', marginTop: 'auto' }}>
      <div className="container">
        {/* Adjusted Grid layout for optimal column sizing to match original */}
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1.5fr', gap: '2rem', marginBottom: '3rem' }} className="footer-grid">
          
          {/* Brand Info */}
          <div className="footer-brand-info" style={{ display: 'flex', flexDirection: 'column' }}>
            <img src="/images/pikuboo-logo-navbar.png" alt="Pikuboo Logo" className="footer-logo" style={{ height: '40px', marginBottom: '1.5rem', objectFit: 'contain' }} loading="lazy" decoding="async" />
            <p style={{ color: 'var(--text-body)', marginBottom: '1.5rem', fontSize: '0.95rem', lineHeight: '1.6' }}>
              Pikuboo is Kerala's reliable manufacturer of quality baby diapers, providing comfortable, eco-friendly, and economical diapering solutions to parents everywhere. Through quality and thoughtfulness, we make being a parent simple while reducing our impact on our planet. Start your path to smarter, greener, and happier baby care with us today!
            </p>
            <div className="footer-contact-details" style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.95rem', color: 'var(--text-dark)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                <span>Connect@pikuboo.com</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                <span>9778447996</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-links-col">
            <h4 style={{ marginBottom: '1.5rem', fontSize: '1.1rem' }}>Quick Links</h4>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }} className="footer-links-list">
              <li><Link to="/terms" style={{ color: 'var(--text-light)', transition: 'color 0.2s' }}>Terms</Link></li>
              <li><Link to="/conditions" style={{ color: 'var(--text-light)', transition: 'color 0.2s' }}>Conditions</Link></li>
              <li><Link to="/refund" style={{ color: 'var(--text-light)', transition: 'color 0.2s' }}>Refund</Link></li>
              <li><Link to="/groups" style={{ color: 'var(--text-light)', transition: 'color 0.2s' }}>Groups</Link></li>
              <li><Link to="/careers" style={{ color: 'var(--text-light)', transition: 'color 0.2s' }}>Careers</Link></li>
              <li><Link to="/policy" style={{ color: 'var(--text-light)', transition: 'color 0.2s' }}>Policy</Link></li>
              <li><Link to="/support" style={{ color: 'var(--text-light)', transition: 'color 0.2s' }}>Support</Link></li>
            </ul>
          </div>

          {/* Social */}
          <div className="footer-social-col">
            <h4 style={{ marginBottom: '1.5rem', fontSize: '1.1rem' }}>Social</h4>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }} className="footer-social-list">
              <li><a href="#" style={{ color: 'var(--text-light)', display: 'flex', alignItems: 'center', gap: '8px' }}><i className="fab fa-facebook-square"></i> Facebook</a></li>
              <li><a href="#" style={{ color: 'var(--text-light)', display: 'flex', alignItems: 'center', gap: '8px' }}><i className="fab fa-instagram-square"></i> Instagram</a></li>
              <li><a href="#" style={{ color: 'var(--text-light)', display: 'flex', alignItems: 'center', gap: '8px' }}><i className="fab fa-linkedin"></i> LinkedIn</a></li>
            </ul>
          </div>

          {/* Buy Our Products */}
          <div className="footer-buy-col">
            <h4 style={{ marginBottom: '1.5rem', fontSize: '1.1rem' }}>Buy Our Products From</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }} className="footer-buy-links">
              <a href="#" style={{ display: 'inline-block', border: '1px solid var(--border-color)', borderRadius: 'var(--radius-sm)', padding: '8px', maxWidth: '140px', backgroundColor: 'white' }}>
                <img src="/images/flipkart-logo-footer-icon.png" alt="Buy on Flipkart" style={{ width: '100%' }} loading="lazy" decoding="async" />
              </a>
              <a href="#" style={{ display: 'inline-block', border: '1px solid var(--border-color)', borderRadius: 'var(--radius-sm)', padding: '8px', maxWidth: '140px', backgroundColor: 'white' }}>
                <img src="/images/amazon-logo-footer-icon.png" alt="Buy on Amazon" style={{ width: '100%' }} loading="lazy" decoding="async" />
              </a>
            </div>
          </div>

        </div>

        {/* Copyright */}
        <div style={{ borderTop: '1px solid var(--border-color)', padding: '1.5rem 0', color: 'var(--text-light)', fontSize: '0.9rem' }} className="footer-copyright">
          <p>© 2025 Pikuboo. All Rights Reserved.</p>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .footer-grid {
            grid-template-columns: 1fr !important;
            text-align: center;
            gap: 3rem !important;
          }
          .footer-brand-info {
            align-items: center;
          }
          .footer-logo {
            margin: 0 auto 1.5rem auto !important;
          }
          .footer-contact-details {
            align-items: center;
          }
          .footer-links-list {
            align-items: center;
          }
          .footer-social-list {
            align-items: center;
          }
          .footer-buy-links {
            align-items: center;
          }
          .footer-copyright {
            text-align: center;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
