import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { client } from '../sanityClient';
import BlogCard from '../components/BlogCard';

const Blog = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const query = `*[_type == "post"] | order(publishedAt desc) {
          _id,
          title,
          slug,
          author,
          category,
          publishedAt,
          mainImage,
          excerpt
        }`;
        const data = await client.fetch(query);
        setPosts(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching posts:", error);
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  return (
    <>
      <Helmet>
        <title>Blog | Pikuboo</title>
      </Helmet>
      
      <section className="section-padding bg-white" style={{ minHeight: '80vh' }}>
        <div className="container">
          <div className="text-center mb-5">
            <span style={{
              display: 'inline-block',
              backgroundColor: 'var(--primary-light)',
              color: 'var(--primary-dark)',
              padding: '0.4rem 1.2rem',
              borderRadius: '20px',
              fontSize: '0.85rem',
              fontWeight: '600',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              marginBottom: '1rem'
            }}>
              Our Journal
            </span>
            <h1 style={{ 
              fontSize: '3.5rem', 
              color: 'var(--text-main)', 
              marginBottom: '1rem',
              fontWeight: '400',
              fontFamily: 'serif' 
            }}>
              Stories & Inspiration
            </h1>
            <p style={{ 
              margin: '0 auto', 
              maxWidth: '650px', 
              color: 'var(--text-body)',
              fontSize: '1.1rem',
              lineHeight: '1.6'
            }}>
              Tips, guides, and beautiful stories to inspire your eco-friendly parenting journey and help you choose the best for your baby.
            </p>
          </div>

          {loading ? (
            <div className="text-center" style={{ padding: '4rem 0' }}>
              <div className="spinner"></div>
              <p>Loading posts...</p>
            </div>
          ) : posts.length > 0 ? (
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
              gap: '2.5rem',
              marginTop: '3rem',
              paddingBottom: '4rem'
            }}>
              {posts.map((post) => (
                <BlogCard key={post._id} post={post} />
              ))}
            </div>
          ) : (
            <div style={{ marginTop: 'var(--spacing-xl)', textAlign: 'center', padding: 'var(--spacing-xl)', backgroundColor: 'var(--primary-light)', borderRadius: 'var(--radius-lg)' }}>
              <h3 style={{ color: 'var(--primary)', marginBottom: '0.5rem' }}>No posts yet!</h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-light)' }}>
                Check back soon for new articles and inspiration.
              </p>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default Blog;
