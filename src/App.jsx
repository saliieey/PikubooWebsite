import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Shop from './pages/Shop';
import About from './pages/About';
import WhyReusable from './pages/WhyReusable';
import DomesticWholesale from './pages/DomesticWholesale';
import IntlWholesale from './pages/IntlWholesale';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import FAQ from './pages/FAQ';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <Navbar />

      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/about" element={<About />} />
          <Route path="/why-reusable" element={<WhyReusable />} />
          <Route path="/domestic-wholesale" element={<DomesticWholesale />} />
          <Route path="/international-wholesale" element={<IntlWholesale />} />
          <Route path="/blog" element={<Blog />} />
          {/* Fallback routes for links */}
          <Route path="/wholesale" element={<Shop />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy-policy" element={<About />} />
          <Route path="/terms-and-conditions" element={<About />} />
          <Route path="/refund-policy" element={<About />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;
