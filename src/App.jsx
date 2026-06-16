import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import './App.css';

// Lazy load page components for better initial bundle size and speed
const Home = lazy(() => import('./pages/Home'));
const Shop = lazy(() => import('./pages/Shop'));
const About = lazy(() => import('./pages/About'));
const WhyReusable = lazy(() => import('./pages/WhyReusable'));
const DomesticWholesale = lazy(() => import('./pages/DomesticWholesale'));
const IntlWholesale = lazy(() => import('./pages/IntlWholesale'));
const Blog = lazy(() => import('./pages/Blog'));
const BlogPost = lazy(() => import('./pages/BlogPost'));
const Contact = lazy(() => import('./pages/Contact'));
const FAQ = lazy(() => import('./pages/FAQ'));
const TermsAndConditions = lazy(() => import('./pages/TermsAndConditions'));
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy'));
const RefundPolicy = lazy(() => import('./pages/RefundPolicy'));

const UNDER_MAINTENANCE = true; // Toggle this to true to block the site; change to false to go live

function App() {
  if (UNDER_MAINTENANCE) {
    return (
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        fontFamily: '"Outfit", "Inter", sans-serif',
        textAlign: 'center',
        padding: '40px 20px',
        backgroundColor: '#f9fbf7',
        color: '#2d3748',
        boxSizing: 'border-box'
      }}>
        <div style={{
          backgroundColor: 'white',
          padding: '3rem 2rem',
          borderRadius: '24px',
          boxShadow: '0 10px 40px rgba(162, 207, 141, 0.1)',
          maxWidth: '500px',
          width: '100%',
          border: '1px solid rgba(162, 207, 141, 0.15)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
        }}>
          <img 
            src="/images/pikuboo-logo-navbar.png" 
            alt="Pikuboo Logo" 
            style={{ 
              height: '55px', 
              marginBottom: '2rem',
              objectFit: 'contain'
            }} 
          />
          <h1 style={{ 
            fontSize: '1.8rem', 
            fontWeight: 800, 
            color: '#2d3748',
            marginBottom: '1rem',
            lineHeight: '1.3'
          }}>
            Scheduled Site Maintenance
          </h1>
          <div style={{
            width: '50px',
            height: '4px',
            backgroundColor: '#a2cf8d',
            borderRadius: '2px',
            marginBottom: '1.5rem'
          }}></div>
          <p style={{ 
            fontSize: '1.05rem', 
            color: '#718096', 
            lineHeight: '1.6',
            margin: 0
          }}>
            We are currently performing scheduled system updates to prepare the platform for the final version. We will be back online shortly. Thank you for your patience!
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="app-container">
      <ScrollToTop />
      <Navbar />

      <main className="main-content">
        <Suspense fallback={
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '60vh' }}>
            <div className="spinner"></div>
          </div>
        }>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/about" element={<About />} />
            <Route path="/why-reusable" element={<WhyReusable />} />
            <Route path="/domestic-wholesale" element={<DomesticWholesale />} />
            <Route path="/international-wholesale" element={<IntlWholesale />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
            {/* Fallback routes for links */}
            <Route path="/wholesale" element={<Shop />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/policy" element={<PrivacyPolicy />} />
            <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
            <Route path="/terms" element={<TermsAndConditions />} />
            <Route path="/conditions" element={<TermsAndConditions />} />
            <Route path="/refund-policy" element={<RefundPolicy />} />
            <Route path="/refund" element={<RefundPolicy />} />
          </Routes>
        </Suspense>
      </main>

      <Footer />
    </div>
  );
}

export default App;
