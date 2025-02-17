import React from 'react';
import CardSection from '../components/CardSection';
import NavBar from '../components/NavBar';

const Blog = () => {
  return (
    <div
      className="w-screen h-screen bg-cover bg-center bg-no-repeat bg-gray-100 flex flex-col"
      style={{ backgroundImage: "url('/cowboy-bebop-cowboy-bebop-movie.gif')" }}
    >
      <div className="flex justify-center py-4">
        <NavBar />
      </div>
      <div className="mt-auto p-4"> {/* Push to the bottom with margin-top: auto */}
        <CardSection />
      </div>
    </div>
  );
};

export default Blog;