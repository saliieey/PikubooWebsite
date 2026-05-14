import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, User, ArrowRight } from 'lucide-react';
import { urlFor } from '../sanityClient';

const BlogCard = ({ post }) => {
  // Format date
  const formattedDate = new Date(post.publishedAt).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <div className="blog-card" style={{
      backgroundColor: 'white',
      borderRadius: 'var(--radius-lg)',
      overflow: 'hidden',
      boxShadow: 'var(--shadow-md)',
      transition: 'transform 0.3s ease, box-shadow 0.3s ease',
      display: 'flex',
      flexDirection: 'column',
      height: '100%'
    }}>
      <div style={{ position: 'relative', width: '100%', paddingTop: '65%', overflow: 'hidden' }}>
        {post.mainImage && (
          <img 
            src={urlFor(post.mainImage).width(600).height(400).url()} 
            alt={post.title}
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              transition: 'transform 0.5s ease'
            }}
            className="blog-card-image"
          />
        )}
        {post.category && (
          <div style={{
            position: 'absolute',
            top: '1.2rem',
            left: '1.2rem',
            backgroundColor: 'rgba(255, 255, 255, 0.8)',
            backdropFilter: 'blur(8px)',
            WebkitBackdropFilter: 'blur(8px)',
            color: '#2A7A70', // Deep teal for high contrast and premium feel
            padding: '0.4rem 1.2rem',
            borderRadius: '30px',
            fontSize: '0.75rem',
            fontWeight: '700',
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            boxShadow: '0 4px 15px rgba(0,0,0,0.08)',
            border: '1px solid rgba(255, 255, 255, 0.5)'
          }}>
            {post.category}
          </div>
        )}
      </div>

      <div style={{ padding: '2rem', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
        <div style={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center', 
          color: 'var(--text-light)', 
          fontSize: '0.85rem',
          marginBottom: '1rem'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
            <Calendar size={14} />
            <span>{formattedDate}</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
            <User size={14} />
            <span>{post.author || 'Pikuboo'}</span>
          </div>
        </div>

        <h3 style={{ 
          fontSize: '1.4rem', 
          lineHeight: '1.4', 
          marginBottom: '1rem',
          color: 'var(--text-main)',
          fontFamily: 'var(--font-heading, inherit)' // Fallback if no heading font
        }}>
          <Link to={`/blog/${post.slug.current}`} style={{ color: 'inherit', textDecoration: 'none' }} className="blog-card-title">
            {post.title}
          </Link>
        </h3>

        {post.excerpt && (
          <p style={{ 
            color: 'var(--text-body)', 
            lineHeight: '1.6', 
            marginBottom: '1.5rem',
            fontSize: '0.95rem',
            flexGrow: 1
          }}>
            {post.excerpt}
          </p>
        )}

        <div style={{ marginTop: 'auto', paddingTop: '1rem' }}>
          <Link 
            to={`/blog/${post.slug.current}`} 
            style={{ 
              display: 'inline-flex', 
              alignItems: 'center', 
              gap: '0.5rem', 
              color: 'var(--primary)', 
              fontWeight: '600',
              textDecoration: 'none',
              fontSize: '0.9rem',
              letterSpacing: '0.05em',
              textTransform: 'uppercase'
            }}
            className="read-article-link"
          >
            READ ARTICLE <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
