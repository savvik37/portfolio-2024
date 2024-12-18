import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Routes, Route } from "react-router";
import App from './App';
import MainComponent from './mainComponent';
import Nav from './nav';
import Projects from './projects';
import About from './about';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Nav style={{ textDecoration: 'none' }}/>
    <Routes>
      <Route path="/" element={<MainComponent />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/about" element={<About />} />
    </Routes>
  </BrowserRouter>
);