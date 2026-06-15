import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import ProductCard from '../components/ProductCard';
import { client, urlFor } from '../sanityClient';

const reviews = [
  {
    id: 1,
    name: "Meera S",
    image: "/images/priya-menon-g-review.png",
    rating: 5,
    text: "Pikuboo diapers have such a silky-soft, eco-conscious feeling. It's nice to know I'm choosing sustainable care for my little one."
  },
  {
    id: 2,
    name: "Rahul N",
    image: "/images/ravi-gupta-g-review.jpeg",
    rating: 5,
    text: "Really great fit and easy to clean! Pikuboo makes transition to reusable diapers so accessible for parents like us!"
  },
  {
    id: 3,
    name: "Ananya T",
    image: "/images/anil-sharma-g-review.png",
    rating: 5,
    text: "Nothing seems to irritate my baby's sensitive skin and helps us reduce waste. I'm glad I choose Pikuboo for my family."
  }
];

const slideVariants = {
  enter: (direction) => ({
    x: direction > 0 ? 100 : -100,
    opacity: 0
  }),
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1
  },
  exit: (direction) => ({
    zIndex: 0,
    x: direction < 0 ? 100 : -100,
    opacity: 0
  })
};

const Home = () => {

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [videoSrc, setVideoSrc] = useState('');

  // Reviews Carousel State
  const [currentReview, setCurrentReview] = useState(0);
  const [direction, setDirection] = useState(0); // -1 for prev, 1 for next
  const [isHovered, setIsHovered] = useState(false);

  const handleNext = () => {
    setDirection(1);
    setCurrentReview((prev) => (prev + 1) % reviews.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrentReview((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  const handleDotClick = (index) => {
    setDirection(index > currentReview ? 1 : -1);
    setCurrentReview(index);
  };

  useEffect(() => {
    if (isHovered) return;
    const timer = setInterval(() => {
      handleNext();
    }, 5000);
    return () => clearInterval(timer);
  }, [isHovered, currentReview]);

  // Contact Form State
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    inquiryType: '',
    company: '',
    country: '',
    message: '',
    agree: false,
    website_url: '' // Honeypot field for spam prevention
  });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState({
    submitting: false,
    success: false,
    error: null
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    
    // Clear error when user types/changes
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: null
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) {
      newErrors.name = 'Full Name is required.';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email Address is required.';
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email.trim())) {
        newErrors.email = 'Please enter a valid email address.';
      }
    }
    
    if (!formData.inquiryType) {
      newErrors.inquiryType = 'Please select an inquiry type.';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required.';
    }

    if (!formData.agree) {
      newErrors.agree = 'You must agree to be contacted.';
    }
    
    if (formData.phone.trim()) {
      const phoneRegex = /^[0-9+\s()-]{7,20}$/;
      if (!phoneRegex.test(formData.phone.trim())) {
        newErrors.phone = 'Please enter a valid phone number.';
      }
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // 1. Honeypot check: If bot filled website_url, block send, simulate success
    if (formData.website_url) {
      console.log('Spam bot detected via honeypot on homepage.');
      setStatus({ submitting: false, success: true, error: null });
      setFormData({
        name: '',
        email: '',
        phone: '',
        inquiryType: '',
        company: '',
        country: '',
        message: '',
        agree: false,
        website_url: ''
      });
      setErrors({});
      return;
    }

    // 2. Validate fields
    if (!validateForm()) {
      setStatus({ submitting: false, success: false, error: 'Please correct the highlighted errors.' });
      return;
    }
    
    setStatus({ submitting: true, success: false, error: null });

    const apiUrl = import.meta.env.VITE_API_URL || '';

    // Format fields correctly for the backend
    const submissionData = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      inquiryType: formData.inquiryType,
      company: formData.company,
      country: formData.country,
      message: formData.message,
      website_url: formData.website_url
    };

    try {
      const response = await fetch(`${apiUrl}/api/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(submissionData)
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setStatus({ submitting: false, success: true, error: null });
        setFormData({
          name: '',
          email: '',
          phone: '',
          inquiryType: '',
          company: '',
          country: '',
          message: '',
          agree: false,
          website_url: ''
        });
        setErrors({});
      } else {
        setStatus({ 
          submitting: false, 
          success: false, 
          error: result.message || 'Something went wrong. Please try again.' 
        });
      }
    } catch (err) {
      console.error('Submission error:', err);
      setStatus({ 
        submitting: false, 
        success: false, 
        error: 'Failed to connect to the email server. Please try again later.' 
      });
    }
  };

  useEffect(() => {
    // Defer heavy video loading to prevent blocking page load
    const timer = setTimeout(() => {
      setVideoSrc('/images/home-page-banner-landscape.mp4');
    }, 100);

    const fetchProducts = async () => {
      try {
        const query = `*[_type == "product"][0...4]`; // Fetch top 4 products for homepage
        const data = await client.fetch(query);
        const formattedData = data.map(item => ({
          id: item._id,
          title: item.title,
          price: item.price ? item.price.toString() : '799',
          rating: item.rating ? item.rating.toString() : '4.8',
          // Optimize Sanity images: resize to 400x400, auto-format to WebP/AVIF, quality 80
          image: item.images && item.images.length > 0 
            ? urlFor(item.images[0]).width(400).height(400).auto('format').quality(80).url() 
            : '/images/pikuboo-cloth-diaper-yellow.png',
          amazonLink: item.amazonLink,
          flipkartLink: item.flipkartLink
        }));
        setProducts(formattedData);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching products from Sanity:", error);
        setLoading(false);
      }
    };

    fetchProducts();
    return () => clearTimeout(timer);
  }, []);

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

      {/* Hero Video Section */}
      <section className="hero-section" style={{ width: '100%', backgroundColor: '#E3D4CF', position: 'relative', overflow: 'hidden' }}>
        {videoSrc && (
          <video 
            className="hero-video"
            src={videoSrc} 
            autoPlay 
            muted 
            loop 
            playsInline 
            preload="none"
          />
        )}
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

      {/* Community Reviews Section */}
      <section 
        className="reviews-carousel-section" 
        style={{ 
          padding: '6rem 1rem 4rem 1rem', 
          backgroundColor: 'var(--bg-white)', 
          borderBottom: '1px solid rgba(0,0,0,0.05)',
          overflow: 'hidden'
        }}
      >
        <div className="container" style={{ position: 'relative', maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 style={{ fontSize: '2.5rem', color: 'var(--text-dark)', marginBottom: '1rem', fontWeight: 800 }}>
              What Parents Say
            </h2>
            <p style={{ color: 'var(--text-body)', fontSize: '1.1rem', maxWidth: '600px', margin: '0 auto', lineHeight: '1.6' }}>
              Discover real stories from families who trust Pikuboo for comfort, eco-friendliness, and simple diapering.
            </p>
          </div>

          {/* DESKTOP VIEW: 3-Column Grid */}
          <div className="reviews-desktop-view">
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '3rem' }}>
              {reviews.map((review) => (
                <div key={review.id} style={{ textAlign: 'center', padding: '1rem' }}>
                  <img 
                    src={review.image} 
                    alt={review.name} 
                    style={{ 
                      width: '120px', 
                      height: '120px', 
                      borderRadius: '50%', 
                      objectFit: 'cover', 
                      margin: '0 auto 1.5rem', 
                      border: '4px solid white', 
                      boxShadow: '0 10px 20px rgba(0,0,0,0.05)' 
                    }} 
                    loading="lazy" 
                    decoding="async" 
                  />
                  <h4 style={{ fontSize: '1.3rem', color: 'var(--text-dark)', marginBottom: '0.5rem', fontWeight: 700 }}>
                    {review.name}
                  </h4>
                  <div style={{ display: 'flex', justifyContent: 'center', gap: '4px', marginBottom: '1.5rem' }}>
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} size={18} fill="#FFC107" color="#FFC107" />
                    ))}
                  </div>
                  <p style={{ color: 'var(--text-body)', fontStyle: 'italic', lineHeight: '1.7', fontSize: '1.05rem', margin: 0 }}>
                    "{review.text}"
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* MOBILE VIEW: Carousel */}
          <div className="reviews-mobile-view" style={{ maxWidth: '600px', margin: '0 auto' }}>
            <div 
              className="reviews-carousel-container"
              style={{ 
                position: 'relative', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                width: '100%',
                minHeight: '360px',
                backgroundColor: 'var(--bg-main)',
                borderRadius: 'var(--radius-lg)',
                padding: '2.5rem 1.25rem',
                boxShadow: 'var(--shadow-soft)',
                border: '1px solid rgba(0,0,0,0.02)'
              }}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              {/* Left Chevron */}
              <button 
                onClick={handlePrev}
                style={{
                  position: 'absolute',
                  left: '10px',
                  zIndex: 10,
                  background: 'white',
                  border: 'none',
                  width: '36px',
                  height: '36px',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
                  color: 'var(--text-dark)',
                  transition: 'all 0.2s ease'
                }}
                className="carousel-nav-btn prev"
                aria-label="Previous Review"
              >
                <ChevronLeft size={24} />
              </button>

              {/* Animating Card Content */}
              <div style={{ width: '100%', maxWidth: '500px', textAlign: 'center' }}>
                <AnimatePresence mode="wait" custom={direction}>
                  <motion.div
                    key={currentReview}
                    custom={direction}
                    variants={slideVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{
                      x: { type: "spring", stiffness: 200, damping: 25 },
                      opacity: { duration: 0.2 }
                    }}
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}
                  >
                    <img 
                      src={reviews[currentReview].image} 
                      alt={reviews[currentReview].name} 
                      style={{ 
                        width: '90px', 
                        height: '90px', 
                        borderRadius: '50%', 
                        objectFit: 'cover', 
                        marginBottom: '1rem', 
                        border: '4px solid white', 
                        boxShadow: '0 8px 16px rgba(0,0,0,0.06)' 
                      }} 
                      loading="lazy"
                      decoding="async"
                    />
                    <h4 style={{ fontSize: '1.25rem', color: 'var(--text-dark)', marginBottom: '0.25rem', fontWeight: 700 }}>
                      {reviews[currentReview].name}
                    </h4>
                    
                    <div style={{ display: 'flex', gap: '4px', marginBottom: '1.2rem', justifyContent: 'center' }}>
                      {[...Array(reviews[currentReview].rating)].map((_, i) => (
                        <Star key={i} size={16} fill="#FFC107" color="#FFC107" />
                      ))}
                    </div>

                    <p 
                      className="reviews-carousel-text"
                      style={{ 
                        color: 'var(--text-body)', 
                        fontStyle: 'italic', 
                        lineHeight: '1.6', 
                        fontSize: '0.95rem',
                        margin: 0
                      }}
                    >
                      "{reviews[currentReview].text}"
                    </p>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Right Chevron */}
              <button 
                onClick={handleNext}
                style={{
                  position: 'absolute',
                  right: '10px',
                  zIndex: 10,
                  background: 'white',
                  border: 'none',
                  width: '36px',
                  height: '36px',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
                  color: 'var(--text-dark)',
                  transition: 'all 0.2s ease'
                }}
                className="carousel-nav-btn next"
                aria-label="Next Review"
              >
                <ChevronRight size={24} />
              </button>
            </div>

            {/* Dots Indicator */}
            <div style={{ display: 'flex', justifyContent: 'center', gap: '8px', marginTop: '1.5rem' }}>
              {reviews.map((_, index) => (
                <button
                  key={index}
                  onClick={() => handleDotClick(index)}
                  style={{
                    width: index === currentReview ? '24px' : '8px',
                    height: '8px',
                    borderRadius: '4px',
                    backgroundColor: index === currentReview ? 'var(--primary)' : '#D0D0D0',
                    border: 'none',
                    cursor: 'pointer',
                    padding: 0,
                    transition: 'all 0.3s ease'
                  }}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
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
            <Link to="/shop#products" style={{ background: 'none', border: 'none', display: 'flex', alignItems: 'center', gap: '6px', cursor: 'pointer', fontWeight: 600, fontSize: '1rem', color: 'var(--text-dark)' }}>
              View all <span style={{ backgroundColor: '#E0E0E0', borderRadius: '50%', width: '22px', height: '22px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '14px' }}>›</span>
            </Link>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '2rem' }}>
            {loading ? (
              <div style={{ textAlign: 'center', gridColumn: '1 / -1', padding: '2rem 0', color: 'var(--text-light)' }}>
                Loading our bestsellers...
              </div>
            ) : products.length === 0 ? (
              <div style={{ textAlign: 'center', gridColumn: '1 / -1', padding: '2rem 0', color: 'var(--text-light)' }}>
                No products found. Add some in your Sanity admin dashboard!
              </div>
            ) : (
              products.map((product) => (
                <ProductCard key={product.id} {...product} />
              ))
            )}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section style={{ padding: '4rem 0', backgroundColor: 'var(--bg-white)' }}>
        <div className="container">
          <div style={{ marginBottom: '3rem', textAlign: 'center' }}>
            <h2 style={{ fontSize: '2.25rem', marginBottom: '1.5rem', textAlign: 'center' }}>Top Features of Pikuboo Caped Diapers</h2>
            <div className="features-image-container">
              <img 
                src="/images/caped_diaper-removebg-preview.png" 
                alt="Pikuboo Caped Diaper Top Features" 
                className="features-showcase-image" 
                loading="lazy" 
                decoding="async" 
              />
            </div>
            <p style={{ maxWidth: '900px', margin: '0 auto', color: 'var(--text-body)', fontSize: '1.05rem', lineHeight: '1.7', textAlign: 'center' }}>
              Pikuboo diapers come loaded with features that parents will love! Our diapers provide superior comfort and absorption, are adjustable, waterproof, and made out of baby-safe cotton. The reusable inserts provide long-lasting dryness, allow air to circulate to manage rashes and irritation, and are sweat-proof. They are simple to wash and quick to dry, providing convenient utility without sacrificing quality. Pikuboo diapers come in a variety of vibrant colors in combination with designs that allow for thought, showcase both style and function, and also provide a joyful experience of diapering babies with our innovative and parent-approved baby diapering solutions today!
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem', marginTop: '3rem' }}>
            {features.map((feature, index) => (
              <div key={index} style={{ padding: '2rem', borderRadius: 'var(--radius-lg)', backgroundColor: 'var(--bg-main)', textAlign: 'center' }}>
                <div style={{ width: '60px', height: '60px', backgroundColor: 'white', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem auto', boxShadow: 'var(--shadow-soft)' }}>
                  <img src={feature.icon} alt={feature.title} style={{ width: '30px', height: '30px', objectFit: 'contain' }} loading="lazy" decoding="async" onError={(e) => e.target.style.display='none'} />
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
              
              {status.success && (
                <div style={{ padding: '12px 20px', backgroundColor: '#eef9eb', color: '#3c763d', borderRadius: 'var(--radius-sm)', marginBottom: '1.5rem', border: '1px solid #d6e9c6', fontWeight: 500, fontSize: '0.95rem' }}>
                  Thank you! Your enquiry has been sent successfully. We will get back to you shortly.
                </div>
              )}
              {status.error && (
                <div style={{ padding: '12px 20px', backgroundColor: '#fdf2f2', color: '#a94442', borderRadius: 'var(--radius-sm)', marginBottom: '1.5rem', border: '1px solid #ebccd1', fontWeight: 500, fontSize: '0.95rem' }}>
                  {status.error}
                </div>
              )}

              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
                <div>
                  <input 
                    type="text" 
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Full Name *" 
                    required
                    style={{ 
                      width: '100%', 
                      padding: '12px 16px', 
                      borderRadius: 'var(--radius-pill)', 
                      border: errors.name ? '1px solid #e53e3e' : '1px solid #E0E0E0', 
                      fontSize: '1rem',
                      outline: 'none',
                      backgroundColor: 'white'
                    }} 
                  />
                  {errors.name && <span style={{ color: '#e53e3e', fontSize: '0.85rem', marginTop: '4px', display: 'block', paddingLeft: '0.5rem' }}>{errors.name}</span>}
                </div>

                <div>
                  <input 
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email Address *" 
                    required
                    style={{ 
                      width: '100%', 
                      padding: '12px 16px', 
                      borderRadius: 'var(--radius-pill)', 
                      border: errors.email ? '1px solid #e53e3e' : '1px solid #E0E0E0', 
                      fontSize: '1rem',
                      outline: 'none',
                      backgroundColor: 'white'
                    }} 
                  />
                  {errors.email && <span style={{ color: '#e53e3e', fontSize: '0.85rem', marginTop: '4px', display: 'block', paddingLeft: '0.5rem' }}>{errors.email}</span>}
                </div>

                <div>
                  <input 
                    type="tel" 
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Phone Number (Optional)" 
                    style={{ 
                      width: '100%', 
                      padding: '12px 16px', 
                      borderRadius: 'var(--radius-pill)', 
                      border: errors.phone ? '1px solid #e53e3e' : '1px solid #E0E0E0', 
                      fontSize: '1rem',
                      outline: 'none',
                      backgroundColor: 'white'
                    }} 
                  />
                  {errors.phone && <span style={{ color: '#e53e3e', fontSize: '0.85rem', marginTop: '4px', display: 'block', paddingLeft: '0.5rem' }}>{errors.phone}</span>}
                </div>
                
                <div style={{ position: 'relative' }}>
                  <select 
                    name="inquiryType"
                    value={formData.inquiryType}
                    onChange={handleChange}
                    required
                    style={{ 
                      width: '100%', 
                      padding: '12px 16px', 
                      borderRadius: 'var(--radius-pill)', 
                      border: errors.inquiryType ? '1px solid #e53e3e' : '1px solid #E0E0E0', 
                      fontSize: '1rem', 
                      color: formData.inquiryType ? 'var(--text-dark)' : 'var(--text-light)',
                      appearance: 'none',
                      backgroundColor: 'white',
                      outline: 'none'
                    }}
                  >
                    <option value="" disabled>Select Inquiry Type *</option>
                    <option value="wholesale">Wholesale / Bulk Order</option>
                    <option value="distributor">Distributor Inquiry</option>
                    <option value="support">Customer Support</option>
                    <option value="other">Other Inquiry</option>
                  </select>
                  <span style={{ position: 'absolute', right: '16px', top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none', color: 'var(--text-light)', fontSize: '0.8rem' }}>▼</span>
                  {errors.inquiryType && <span style={{ color: '#e53e3e', fontSize: '0.85rem', marginTop: '4px', display: 'block', paddingLeft: '0.5rem' }}>{errors.inquiryType}</span>}
                </div>

                {/* Honeypot field (hidden from users, filled by bots) */}
                <input 
                  type="text" 
                  name="website_url" 
                  value={formData.website_url} 
                  onChange={handleChange} 
                  style={{ display: 'none' }} 
                  tabIndex="-1" 
                  autoComplete="off" 
                />
                
                <input 
                  type="text" 
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="Company Name (Optional)" 
                  style={{ width: '100%', padding: '12px 16px', borderRadius: 'var(--radius-pill)', border: '1px solid #E0E0E0', fontSize: '1rem', outline: 'none', backgroundColor: 'white' }} 
                />
                <input 
                  type="text" 
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                  placeholder="Country / Region" 
                  style={{ width: '100%', padding: '12px 16px', borderRadius: 'var(--radius-pill)', border: '1px solid #E0E0E0', fontSize: '1rem', outline: 'none', backgroundColor: 'white' }} 
                />
                
                <div>
                  <textarea 
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your Message *" 
                    rows="4" 
                    required
                    style={{ 
                      width: '100%', 
                      padding: '12px 16px', 
                      borderRadius: 'var(--radius-md)', 
                      border: errors.message ? '1px solid #e53e3e' : '1px solid #E0E0E0', 
                      fontSize: '1rem', 
                      fontFamily: 'inherit', 
                      resize: 'none',
                      outline: 'none',
                      backgroundColor: 'white'
                    }}
                  ></textarea>
                  {errors.message && <span style={{ color: '#e53e3e', fontSize: '0.85rem', marginTop: '4px', display: 'block', paddingLeft: '0.5rem' }}>{errors.message}</span>}
                </div>
                
                <div>
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                    <input 
                      type="checkbox" 
                      id="agree" 
                      name="agree"
                      checked={formData.agree}
                      onChange={handleChange}
                      style={{ marginTop: '5px' }} 
                    />
                    <label htmlFor="agree" style={{ fontSize: '0.9rem', color: errors.agree ? '#e53e3e' : 'var(--text-light)' }}>I agree to be contacted regarding my inquiry. *</label>
                  </div>
                  {errors.agree && <span style={{ color: '#e53e3e', fontSize: '0.85rem', marginTop: '4px', display: 'block', paddingLeft: '1.8rem' }}>{errors.agree}</span>}
                </div>

                <button 
                  type="submit" 
                  disabled={status.submitting}
                  className="btn-primary" 
                  style={{ 
                    borderRadius: 'var(--radius-pill)', 
                    padding: '14px', 
                    fontSize: '1.05rem', 
                    marginTop: '1rem',
                    opacity: status.submitting ? 0.7 : 1,
                    cursor: status.submitting ? 'not-allowed' : 'pointer'
                  }}
                >
                  {status.submitting ? 'Submitting...' : 'Submit Inquiry'}
                </button>
              </form>
            </div>

          </div>
        </div>
      </section>

      <style>{`
        /* Top Features Image Showcase Styling */
        .features-image-container {
          max-width: 440px;
          margin: 0 auto 2rem auto;
          position: relative;
        }

        .features-showcase-image {
          width: 100%;
          height: auto;
          display: block;
          object-fit: contain;
        }

        @media (max-width: 900px) {
          .features-image-container {
            margin: 0 auto 1.5rem auto;
            max-width: 90%;
          }
        }

        /* Reviews Carousel Styling & Responsive Overrides */
        .reviews-desktop-view {
          display: block;
        }
        .reviews-mobile-view {
          display: none;
        }

        .carousel-nav-btn {
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1) !important;
        }
        .carousel-nav-btn:hover {
          background-color: var(--primary) !important;
          color: white !important;
          transform: scale(1.08) !important;
          box-shadow: 0 6px 20px rgba(37, 211, 102, 0.15) !important;
        }
        .carousel-nav-btn:active {
          transform: scale(0.95) !important;
        }

        @media (max-width: 900px) {
          .reviews-desktop-view {
            display: none;
          }
          .reviews-mobile-view {
            display: block;
          }
          .reviews-carousel-section {
            padding: 4rem 1rem 3rem 1rem !important;
          }
          .reviews-carousel-container {
            padding: 2.5rem 1.25rem !important;
            min-height: 360px !important;
          }
          .carousel-nav-btn {
            width: 36px !important;
            height: 36px !important;
          }
          .carousel-nav-btn.prev {
            left: 10px !important;
          }
          .carousel-nav-btn.next {
            right: 10px !important;
          }
          .reviews-carousel-text {
            font-size: 0.95rem !important;
            line-height: 1.6 !important;
          }
        }
      `}</style>
    </>
  );
};

export default Home;
