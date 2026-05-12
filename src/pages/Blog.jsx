import React from 'react';
import { Helmet } from 'react-helmet-async';

const Blog = () => {
  return (
    <>
      <Helmet>
        <title>Blog | Pikuboo</title>
      </Helmet>
      
      <section className="section-padding bg-white">
        <div className="container text-center">
          <h1 style={{ marginBottom: '1rem' }}>Our Blog</h1>
          <p style={{ margin: '0 auto', maxWidth: '600px', color: 'var(--text-body)' }}>
            Stay tuned! Our admin dashboard is being set up. Soon you will see articles about eco-friendly diapering, parenting tips, and Pikuboo news here.
          </p>
          
          <div style={{ marginTop: 'var(--spacing-xl)', padding: 'var(--spacing-xl)', backgroundColor: 'var(--primary-light)', borderRadius: 'var(--radius-lg)' }}>
            <h3 style={{ color: 'var(--primary)', marginBottom: '0.5rem' }}>Dynamic Content Area</h3>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-light)' }}>
              (Posts will be fetched automatically from Sanity CMS once the admin publishes them)
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog;
