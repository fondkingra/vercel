import React from 'react';
import { Link } from 'react-router-dom';
import DownloadLink from 'react-download-link';

  

const handleClick=(e)=>{
  e.preventDefault();

  const link =document.createElement('a');
  link.href = '/ash fin.docx';
  link.download ="ash fin.docx";
  link.click();
};

const NavBar = () => {
  return (
    <div className='fixed top-0 w-auto rounded-4xl justify-center bg-transparent backdrop-blur-sm h-20 bg-white/10 border border-white/20 z-60'>
      <nav className='container mx-auto h-full flex justify-between items-center'>
        <div className='flex space-x-8 ' 

        >
          
          <Link to="/about" className='text-white hover:text-gray-300 transition-colors'>Home</Link>
          <Link to="/Projects" className='text-white hover:text-gray-300 transition-colors'>Projects</Link>
          <Link to="/Blog" className='text-white hover:text-gray-300 transition-colors'>Blog</Link>
          <Link to="/Resume" onClick={handleClick} className='text-white hover:text-gray-300 transition-colors'>Resume</Link>
          <Link to="/Contact" className='text-white hover:text-gray-300 transition-colors'>Contact</Link>
        </div>
      </nav>
    </div>
  );
};

export default NavBar; 