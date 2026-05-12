import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { useState, useEffect } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [wholesaleOpen, setWholesaleOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  // Add scroll listener for premium navbar glassmorphism/shadow
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', position: 'relative' }}>
        
        {/* Mobile Menu Toggle */}
        <div className="mobile-only" style={{ flex: 1 }}>
          <button onClick={toggleMenu} style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--text-dark)', padding: '5px' }}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Logo */}
        <Link to="/" style={{ display: 'flex', alignItems: 'center', flex: 1, justifyContent: 'center' }} className="nav-logo-container">
          <img src="/images/pikuboo-logo-navbar.png" alt="Pikuboo" style={{ height: '45px', objectFit: 'contain' }} />
        </Link>

        {/* Desktop Nav */}
        <nav style={{ display: 'none', gap: '2.5rem', alignItems: 'center', flex: 2, justifyContent: 'center' }} id="desktop-nav">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/shop" className="nav-link">Shop</Link>
          
          {/* Wholesale Dropdown */}
          <div style={{ position: 'relative', padding: '20px 0' }} className="nav-dropdown-wrapper">
            <div style={{ display: 'flex', alignItems: 'center', gap: '4px', cursor: 'pointer' }} className="nav-link">
              Wholesale <ChevronDown size={14} className="dropdown-icon" />
            </div>
            <div className="dropdown-content">
              <Link to="/domestic-wholesale" className="dropdown-item">Domestic Wholesale</Link>
              <Link to="/international-wholesale" className="dropdown-item">International Wholesale</Link>
            </div>
          </div>

          {/* About Dropdown */}
          <div style={{ position: 'relative', padding: '20px 0' }} className="nav-dropdown-wrapper">
            <div style={{ display: 'flex', alignItems: 'center', gap: '4px', cursor: 'pointer' }} className="nav-link">
              About <ChevronDown size={14} className="dropdown-icon" />
            </div>
            <div className="dropdown-content">
              <Link to="/about" className="dropdown-item">About Us</Link>
              <Link to="/why-reusable" className="dropdown-item">Why Reusable Diapers</Link>
            </div>
          </div>

          <Link to="/blog" className="nav-link">Blog</Link>
          <Link to="/faq" className="nav-link">FAQ</Link>
          <Link to="/contact" className="nav-link">Contact</Link>
        </nav>

        {/* Right Actions - WhatsApp Button */}
        <div style={{ display: 'flex', alignItems: 'center', flex: 1, justifyContent: 'flex-end' }}>
          <a href="https://wa.me/919778447996" target="_blank" rel="noreferrer" className="whatsapp-btn desktop-whatsapp">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>
            <span className="whatsapp-text">WhatsApp Us</span>
          </a>
        </div>

      </div>

      {/* Mobile Nav Dropdown - Sleek E-Commerce Style */}
      <div className={`mobile-menu-overlay ${isOpen ? 'open' : ''}`}>
        <nav className="mobile-menu-content">
          <Link to="/" className="mobile-link" onClick={toggleMenu}>Home</Link>
          <Link to="/shop" className="mobile-link" onClick={toggleMenu}>Shop</Link>
          
          <div className="mobile-accordion">
            <button className="mobile-accordion-btn" onClick={() => setWholesaleOpen(!wholesaleOpen)}>
              Wholesale <ChevronDown size={20} style={{ transition: 'transform 0.3s ease', transform: wholesaleOpen ? 'rotate(180deg)' : 'rotate(0)' }} />
            </button>
            <div className={`mobile-accordion-content ${wholesaleOpen ? 'open' : ''}`}>
              <div className="mobile-accordion-inner">
                <Link to="/domestic-wholesale" className="mobile-sublink" onClick={toggleMenu}>Domestic Wholesale</Link>
                <Link to="/international-wholesale" className="mobile-sublink" onClick={toggleMenu}>International Wholesale</Link>
              </div>
            </div>
          </div>
          
          <div className="mobile-accordion">
            <button className="mobile-accordion-btn" onClick={() => setAboutOpen(!aboutOpen)}>
              About <ChevronDown size={20} style={{ transition: 'transform 0.3s ease', transform: aboutOpen ? 'rotate(180deg)' : 'rotate(0)' }} />
            </button>
            <div className={`mobile-accordion-content ${aboutOpen ? 'open' : ''}`}>
              <div className="mobile-accordion-inner">
                <Link to="/about" className="mobile-sublink" onClick={toggleMenu}>About Us</Link>
                <Link to="/why-reusable" className="mobile-sublink" onClick={toggleMenu}>Why Reusable Diapers</Link>
              </div>
            </div>
          </div>
          
          <Link to="/blog" className="mobile-link" onClick={toggleMenu}>Blog</Link>
          <Link to="/faq" className="mobile-link" onClick={toggleMenu}>FAQ</Link>
          <Link to="/contact" className="mobile-link" onClick={toggleMenu}>Contact</Link>

          <a href="https://wa.me/919778447996" target="_blank" rel="noreferrer" className="mobile-whatsapp" onClick={toggleMenu}>
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>
            Chat With Us
          </a>
        </nav>
      </div>

      <style>{`
        /* --- Premium Navbar Core --- */
        .navbar {
          background-color: var(--bg-main);
          position: sticky;
          top: 0;
          z-index: 50;
          transition: all 0.3s ease;
          padding: 1.2rem 0;
          border-bottom: 1px solid transparent;
        }
        .navbar.scrolled {
          background-color: rgba(250, 244, 238, 0.95);
          backdrop-filter: blur(10px);
          box-shadow: 0 4px 20px rgba(0,0,0,0.04);
          border-bottom: 1px solid rgba(0,0,0,0.05);
          padding: 0.8rem 0;
        }

        /* --- Desktop Links --- */
        .nav-link {
          color: var(--text-dark);
          font-weight: 500;
          font-size: 1rem;
          transition: color 0.2s ease;
          position: relative;
        }
        .nav-link:hover {
          color: #25D366; /* WhatsApp Green Accent */
        }
        
        /* Dropdown styling */
        .dropdown-icon {
          transition: transform 0.2s ease;
        }
        .nav-dropdown-wrapper:hover .dropdown-icon {
          transform: rotate(180deg);
        }
        
        .dropdown-content {
          position: absolute;
          top: 100%;
          left: 50%;
          transform: translateX(-50%) translateY(10px);
          background-color: var(--bg-white);
          box-shadow: 0 10px 40px rgba(0,0,0,0.08);
          border-radius: var(--radius-md);
          padding: 0.8rem 0;
          min-width: 240px;
          opacity: 0;
          visibility: hidden;
          transition: all 0.2s cubic-bezier(0.16, 1, 0.3, 1);
          z-index: 100;
          border: 1px solid rgba(0,0,0,0.05);
        }
        .nav-dropdown-wrapper:hover .dropdown-content {
          opacity: 1;
          visibility: visible;
          transform: translateX(-50%) translateY(0);
        }
        .dropdown-item {
          display: block;
          padding: 12px 24px;
          color: var(--text-body);
          font-size: 0.95rem;
          font-weight: 500;
          transition: all 0.2s ease;
        }
        .dropdown-item:hover {
          background-color: #F9FBF9;
          color: #25D366;
          padding-left: 28px; /* subtle indent on hover */
        }

        /* --- Buttons --- */
        .whatsapp-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          padding: 10px 24px;
          border-radius: var(--radius-pill);
          border: 1px solid #25D366;
          color: #25D366;
          background-color: transparent;
          font-weight: 600;
          font-size: 1rem;
          text-decoration: none;
          transition: all 0.3s ease;
        }
        .whatsapp-btn:hover {
          background-color: #25D366;
          color: white;
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(37, 211, 102, 0.2);
        }

        /* --- Mobile Layout & Menu --- */
        .mobile-only { display: flex; }
        
        .mobile-menu-overlay {
          position: absolute;
          top: 100%;
          left: 0;
          width: 100%;
          height: calc(100vh - 70px);
          background-color: var(--bg-white);
          opacity: 0;
          visibility: hidden;
          transform: translateY(-10px);
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
          z-index: 90;
          overflow-y: auto;
          box-shadow: 0 10px 30px rgba(0,0,0,0.05);
        }
        .mobile-menu-overlay.open {
          opacity: 1;
          visibility: visible;
          transform: translateY(0);
        }
        
        .mobile-menu-content {
          padding: 1rem 1.5rem 4rem;
          display: flex;
          flex-direction: column;
        }

        .mobile-link, .mobile-accordion-btn {
          font-family: var(--font-body);
          font-size: 1.15rem;
          font-weight: 600;
          color: var(--text-dark);
          padding: 1.2rem 0;
          border-bottom: 1px solid rgba(0,0,0,0.05);
          text-decoration: none;
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 100%;
          background: none;
          border-left: none; border-right: none; border-top: none;
          cursor: pointer;
        }
        
        .mobile-accordion-content {
          display: grid;
          grid-template-rows: 0fr;
          transition: grid-template-rows 0.3s ease;
        }
        .mobile-accordion-content.open {
          grid-template-rows: 1fr;
        }
        .mobile-accordion-inner {
          overflow: hidden;
          display: flex;
          flex-direction: column;
          background-color: #F9FBF9; /* Subtle indent color */
        }
        
        .mobile-sublink {
          font-family: var(--font-body);
          font-size: 1.05rem;
          font-weight: 500;
          color: var(--text-body);
          padding: 1rem 1.5rem;
          text-decoration: none;
          border-bottom: 1px solid rgba(0,0,0,0.03);
        }
        .mobile-sublink:last-child {
          border-bottom: none;
        }

        .mobile-whatsapp {
          margin-top: 2rem;
          padding: 14px 32px;
          border-radius: var(--radius-pill);
          background-color: #25D366;
          color: white;
          font-size: 1.1rem;
          font-weight: 600;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          text-decoration: none;
          box-shadow: 0 10px 20px rgba(37, 211, 102, 0.2);
        }

        /* --- Responsive Tweaks --- */
        @media (max-width: 767px) {
          .whatsapp-text { display: none; } /* Hide text to prevent squeezing logo on tiny phones */
          .desktop-whatsapp { padding: 10px; border-radius: 50%; }
        }

        @media (min-width: 1024px) {
          .mobile-only { display: none !important; }
          .mobile-menu-overlay { display: none !important; }
          #desktop-nav { display: flex !important; }
          .nav-logo-container { justify-content: flex-start !important; }
        }
      `}</style>
    </header>
  );
};

export default Navbar;
