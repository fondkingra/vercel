import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import About from '../Pages/About';
import Blog from '../Pages/Blog';
import Contact from "../Pages/Contact";
import Projects from "../Pages/Projects";

const App = () => {
  return (
    <Router >
      <Routes>
        <Route path="/" element={<About/>} />
        <Route path="/about" element={<About/>}/>
        <Route path="/blog" element={<Blog />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/projects' element={<Projects />} />
        
      </Routes>
    </Router>
  );
};

export default App;