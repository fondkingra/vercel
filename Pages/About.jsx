import React from 'react';
import NavBar from '../Components/NavBar';

const About = () => {
  return (
    <div
      className="h-screen w-screen bg-cover bg-center bg-gray-100 flex flex-col"
      style={{ 
        backgroundImage: "url('/driving-wicked.gif')",
        backgroundAttachment: 'fixed', // Fix the background while scrolling
      }}
    >
      {/* NavBar */}
      <div className="flex justify-center py-10">
        <NavBar />
      </div>

      {/* About Content */}
      <div className="flex-1 flex items-center justify-center p-4">
        <div className="max-w-2xl bg-white/10 backdrop-blur-md border border-white/20 rounded-lg shadow-lg p-8 text-center">
          <img 
            src="/200.webp" 
            alt="Ashwin" 
            className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-white/20"
          />
          <h1 className="text-4xl font-bold text-white mb-4">About Me</h1>
          <p className="text-lg text-white/80 mb-6">
            Hi, I'm Ashwin, a passionate developer with a love for building creative and efficient solutions. 
            I specialize in React, Computer Vision, Machine Learning, and I enjoy working on projects 
            that challenge me to learn and grow.
          </p>
          <p className="text-lg text-white/80 mb-6">
            When I'm not coding, you can find me exploring new technologies, playing video games, 
            or reading sci-fi novels. I believe in continuous learning and always strive to improve my skills.
          </p>
          <p className="text-lg text-white/80">
            Feel free to reach out to me at{' '}
            <a href="mailto:dtrex460@gmail.com" className="text-blue-400 hover:underline">
              dtrex460@gmail.com
            </a>{' '}
            or connect with me on{' '}
            <a 
              href="https://www.linkedin.com/in/contact-ashwin-venkat/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-blue-400 hover:underline"
            >
              LinkedIn
            </a>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;