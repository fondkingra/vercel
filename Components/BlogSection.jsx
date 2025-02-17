import React from 'react';

const BlogSection = () => {
  const blogPosts = [
    {
      title: 'Introduction to React Hooks',
      excerpt: 'Learn how to use React Hooks to manage state and side effects in functional components. This post covers useState, useEffect, and custom hooks.',
      imageUrl: '/What-is-React--1.webp',
      blogUrl: 'https://example.com/react-hooks',
      date: 'October 10, 2023',
    },
    {
      title: 'Building a REST API with Node.js',
      excerpt: 'A step-by-step guide to building a RESTful API using Node.js, Express, and MongoDB. Perfect for beginners looking to get started with backend development.',
      imageUrl: '/rest_api.webp',
      blogUrl: 'https://example.com/nodejs-api',
      date: 'September 25, 2023',
    },
    {
      title: 'Mastering CSS Grid',
      excerpt: 'CSS Grid is a powerful layout system for the web. This post dives into the basics and advanced techniques to create responsive layouts with ease.',
      imageUrl: '/css_img.webp',
      blogUrl: 'https://example.com/css-grid',
      date: 'September 15, 2023',
    },
    {
      title: 'Getting Started with Docker',
      excerpt: 'Docker simplifies application deployment by containerizing your apps. Learn how to set up Docker and deploy your first containerized application.',
      imageUrl: '/docker.webp',
      blogUrl: 'https://example.com/docker',
      date: 'August 30, 2023',
    },
    {
      title: 'Introduction to Machine Learning',
      excerpt: 'A beginner-friendly guide to understanding the basics of machine learning, including supervised and unsupervised learning, and popular algorithms.',
      imageUrl: '/ml.webp',
      blogUrl: 'https://example.com/machine-learning',
      date: 'August 15, 2023',
    },
    {
      title: 'Building a Blog with Next.js',
      excerpt: 'Learn how to build a modern blog using Next.js, a React framework. This post covers static site generation, dynamic routing, and more.',
      imageUrl: '/next_js.webp',
      blogUrl: 'https://example.com/nextjs-blog',
      date: 'July 30, 2023',
    },
  ];

  return (
    <div className="overflow-y-auto p-4 w-full max-w-7xl mx-auto scrollbar-thin scrollbar-thumb-white/30 scrollbar-track-white/10">
      <div className="flex flex-col gap-4">
        {blogPosts.map((post, index) => (
          <div
            key={index}
            className="border border-white/20 rounded-lg overflow-hidden shadow-lg transition-transform hover:transform hover:-translate-y-1 hover:shadow-xl bg-white/10 w-full"
          >
            <img src={post.imageUrl} alt={post.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h2 className="text-xl font-bold mb-2">{post.title}</h2>
              <p className="text-sm text-white/80 mb-4">{post.excerpt}</p>
              <p className="text-xs text-white/60 mb-4">{post.date}</p>
              <a
                href={post.blogUrl}
                className="inline-block px-4 py-2 bg-white text-black rounded-lg transition-colors hover:bg-blue-600"
                target="_blank"
                rel="noopener noreferrer"
              >
                Read More
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogSection;