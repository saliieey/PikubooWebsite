import React from 'react';
import { motion } from 'framer-motion';

const ProductCard = ({ title, price, image, rating, bgColor }) => {
  return (
    <motion.div 
      whileHover={{ y: -5 }}
      style={{ 
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        cursor: 'pointer'
      }}
    >
      <div style={{ 
        backgroundColor: bgColor || 'var(--bg-card-1)', 
        aspectRatio: '1/1',
        borderRadius: 'var(--radius-md)', 
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '2rem',
        marginBottom: '1rem'
      }}>
        <img src={image} alt={title} style={{ width: '85%', height: '85%', objectFit: 'contain' }} />
        
        {/* Floating Rating Badge */}
        <div style={{
          position: 'absolute',
          bottom: '12px',
          left: '12px',
          backgroundColor: 'white',
          padding: '4px 8px',
          borderRadius: '4px',
          fontSize: '0.85rem',
          fontWeight: '700',
          display: 'flex',
          alignItems: 'center',
          gap: '4px',
          color: 'var(--text-dark)',
          boxShadow: 'var(--shadow-soft)'
        }}>
          {rating} <span style={{ color: '#F5A623', fontSize: '1rem' }}>★</span>
        </div>
      </div>
      
      <div style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
        <h3 style={{ fontSize: '1rem', fontWeight: 600, marginBottom: '0.25rem' }}>{title}</h3>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
          <span style={{ fontSize: '0.9rem', color: 'var(--text-light)' }}>₹</span>
          <span style={{ fontSize: '1.1rem', fontWeight: 700 }}>{price}</span>
        </div>
        
        <button className="btn-primary" style={{ width: '100%', marginTop: 'auto', padding: '10px' }}>
          Add to cart
        </button>
      </div>
    </motion.div>
  );
};

export default ProductCard;
