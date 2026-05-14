import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { client, urlFor } from '../sanityClient';
import { PortableText } from '@portabletext/react';
import { ArrowLeft } from 'lucide-react';

// Custom components for Portable Text rendering
const components = {
  types: {
    image: ({ value }) => {
      if (!value?.asset?._ref) {
        return null;
      }
      return (
        <div style={{ margin: '3rem 0', borderRadius: '12px', overflow: 'hidden', boxShadow: 'var(--shadow-sm)' }}>
          <img
            alt={value.alt || 'Blog image'}
            src={urlFor(value).width(1000).auto('format').url()}
            style={{ width: '100%', height: 'auto', display: 'block' }}
          />
        </div>
      );
    },
  },
  block: {
    h2: ({ children }) => <h2 style={{ fontSize: '2rem', marginTop: '3rem', marginBottom: '1.5rem', color: 'var(--text-main)', fontFamily: 'var(--font-heading, inherit)' }}>{children}</h2>,
    h3: ({ children }) => <h3 style={{ fontSize: '1.5rem', marginTop: '2.5rem', marginBottom: '1rem', color: 'var(--text-main)', fontFamily: 'var(--font-heading, inherit)' }}>{children}</h3>,
    normal: ({ children }) => <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: 'var(--text-body)', marginBottom: '1.5rem' }}>{children}</p>,
    blockquote: ({ children }) => (
      <blockquote style={{ 
        borderLeft: '4px solid var(--primary)', 
        paddingLeft: '1.5rem', 
        fontStyle: 'italic', 
        fontSize: '1.2rem', 
        color: 'var(--text-light)', 
        margin: '2rem 0',
        backgroundColor: 'var(--primary-light)',
        padding: '1.5rem',
        borderRadius: '0 8px 8px 0'
      }}>
        {children}
      </blockquote>
    ),
  },
  list: {
    bullet: ({ children }) => <ul style={{ fontSize: '1.1rem', lineHeight: '1.8', color: 'var(--text-body)', marginBottom: '1.5rem', paddingLeft: '2rem' }}>{children}</ul>,
    number: ({ children }) => <ol style={{ fontSize: '1.1rem', lineHeight: '1.8', color: 'var(--text-body)', marginBottom: '1.5rem', paddingLeft: '2rem' }}>{children}</ol>,
  },
  listItem: {
    bullet: ({ children }) => <li style={{ marginBottom: '0.5rem' }}>{children}</li>,
    number: ({ children }) => <li style={{ marginBottom: '0.5rem' }}>{children}</li>,
  },
  marks: {
    strong: ({ children }) => <strong style={{ fontWeight: '600', color: 'var(--text-main)' }}>{children}</strong>,
    em: ({ children }) => <em style={{ fontStyle: 'italic' }}>{children}</em>,
    link: ({ children, value }) => {
      const rel = !value.href.startsWith('/') ? 'noreferrer noopener' : undefined;
      return (
        <a href={value.href} rel={rel} style={{ color: 'var(--primary)', textDecoration: 'underline', textUnderlineOffset: '4px' }}>
          {children}
        </a>
      );
    },
  },
};

const BlogPost = () => {
  const { slug } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const query = `*[_type == "post" && slug.current == $slug][0]{
          title,
          author,
          category,
          publishedAt,
          mainImage,
          body
        }`;
        const data = await client.fetch(query, { slug });
        setPost(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching post:", error);
        setLoading(false);
      }
    };

    fetchPost();
  }, [slug]);

  if (loading) {
    return (
      <div className="section-padding text-center" style={{ minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div className="spinner"></div>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="section-padding text-center" style={{ minHeight: '60vh' }}>
        <h2>Post not found</h2>
        <Link to="/blog" style={{ color: 'var(--primary)', marginTop: '1rem', display: 'inline-block' }}>Back to Blog</Link>
      </div>
    );
  }

  const formattedDate = new Date(post.publishedAt).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <>
      <Helmet>
        <title>{`${post.title} | Pikuboo Blog`}</title>
      </Helmet>

      <article style={{ backgroundColor: 'white', paddingBottom: '5rem' }}>
        {/* Header Section */}
        <div style={{ padding: '6rem 1rem 3rem', textAlign: 'center', maxWidth: '900px', margin: '0 auto' }}>
          {post.category && (
            <div style={{
              display: 'inline-block',
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              color: 'var(--primary)',
              fontWeight: '600',
              fontSize: '0.85rem',
              marginBottom: '1.5rem'
            }}>
              BLOG • {post.category}
            </div>
          )}
          
          <h1 style={{ 
            fontSize: 'clamp(2.5rem, 5vw, 4rem)', 
            lineHeight: '1.2', 
            color: 'var(--text-main)', 
            marginBottom: '2rem',
            fontFamily: 'serif',
            fontWeight: '400'
          }}>
            {post.title}
          </h1>

          <div style={{ 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center', 
            gap: '1rem',
            color: 'var(--text-light)',
            fontSize: '1rem'
          }}>
            <span>By <span style={{ color: 'var(--primary)', fontWeight: '500' }}>{post.author || 'Pikuboo'}</span></span>
            <span style={{ width: '4px', height: '4px', borderRadius: '50%', backgroundColor: 'var(--primary-light)' }}></span>
            <span>{formattedDate}</span>
          </div>
        </div>

        {/* Main Image */}
        {post.mainImage && (
          <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1rem', marginBottom: '4rem' }}>
            <img 
              src={urlFor(post.mainImage).width(1200).height(675).url()} 
              alt={post.title}
              style={{
                width: '100%',
                height: 'auto',
                borderRadius: 'var(--radius-lg)',
                boxShadow: 'var(--shadow-md)',
                objectFit: 'cover'
              }}
            />
          </div>
        )}

        {/* Content Section */}
        <div style={{ maxWidth: '800px', margin: '0 auto', padding: '0 1.5rem' }}>
          {post.body ? (
            <div className="portable-text-container">
              <PortableText value={post.body} components={components} />
            </div>
          ) : (
            <p className="text-center">No content available for this post.</p>
          )}

          <div style={{ marginTop: '5rem', borderTop: '1px solid var(--gray-200)', paddingTop: '2rem' }}>
            <Link 
              to="/blog" 
              style={{ 
                display: 'inline-flex', 
                alignItems: 'center', 
                gap: '0.5rem', 
                color: 'var(--text-main)', 
                fontWeight: '600',
                textDecoration: 'none',
                transition: 'color 0.2s ease'
              }}
              onMouseOver={(e) => e.target.style.color = 'var(--primary)'}
              onMouseOut={(e) => e.target.style.color = 'var(--text-main)'}
            >
              <ArrowLeft size={18} /> Back to all articles
            </Link>
          </div>
        </div>
      </article>
    </>
  );
};

export default BlogPost;
