import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const ShopProductCard = ({ product }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-play carousel
  useEffect(() => {
    if (!product.images || product.images.length <= 1) return;
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === product.images.length - 1 ? 0 : prev + 1));
    }, 4000); // Change image every 4 seconds

    return () => clearInterval(interval);
  }, [product.images]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === product.images.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? product.images.length - 1 : prev - 1));
  };

  return (
    <div className="product-row-card">
      <div className="product-card-grid">
        {/* Carousel Left */}
        <div className="product-carousel-container">
          <div className="carousel-wrapper">
            {product.images.map((image, idx) => (
              <div 
                key={idx} 
                className={`carousel-slide ${idx === currentSlide ? 'active' : ''}`}
                style={{ 
                  opacity: idx === currentSlide ? 1 : 0, 
                  transition: 'opacity 0.4s ease-in-out', 
                  position: 'absolute', 
                  top: 0, left: 0, width: '100%', height: '100%', 
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  pointerEvents: idx === currentSlide ? 'auto' : 'none'
                }}
              >
                <img src={image} alt={`${product.title} image ${idx + 1}`} style={{ maxWidth: '100%', maxHeight: '400px', objectFit: 'contain' }} />
              </div>
            ))}
          </div>
          
          {product.images.length > 1 && (
            <>
              <button className="carousel-btn prev" onClick={prevSlide} aria-label="Previous image">
                <ChevronLeft size={24} />
              </button>
              <button className="carousel-btn next" onClick={nextSlide} aria-label="Next image">
                <ChevronRight size={24} />
              </button>
            </>
          )}
        </div>

        {/* Content Right */}
        <div className="product-info-container">
          <h3 className="product-title">{product.title}</h3>
          
          <div className="product-reviews">
            {product.rating} out of ({product.reviewsCount}) <span className="review-link">Reviews</span>
          </div>
          
          <h3 className="product-price">Rs. {product.price}/-</h3>

          <div className="product-options">
            <div className="option-group">
              <h5 className="option-title">Size: <span style={{ opacity: 0.5, fontWeight: 400 }}>{product.size}</span></h5>
              <div className="option-badge size-badge active">{product.size}</div>
            </div>
          </div>

          <div className="product-actions">
            {product.amazonLink && (
              <a href={product.amazonLink} target="_blank" rel="noopener noreferrer" className="buy-btn">
                <img src="/images/amazon-icon-shop-page.png" alt="Buy on Amazon" />
              </a>
            )}
            {product.flipkartLink && (
              <a href={product.flipkartLink} target="_blank" rel="noopener noreferrer" className="buy-btn">
                <img src="/images/flipkart-icon-shop-page.png" alt="Buy on Flipkart" />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopProductCard;
