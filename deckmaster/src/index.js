import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import Home from './pages/Home';
import Library from './pages/Library';
import Deck from './pages/Deck';
import About from './pages/About';
import Admin from './pages/Admin';

const App = () => {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="Library" element={<Library />} />
          <Route path="Deck" element={<Deck />} />
          <Route path="About" element={<About />} />
          <Route path="Admin" element={<Admin />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <App />
);
