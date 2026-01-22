import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

import Header from './components/Header';
import Slideshow from './components/Slideshow';
import LogoMarquee from './components/LogoMarquee';
import HoverCards from './components/HoverCards';
import MerchShowcase from './components/MerchShowcase';
import Footer from './components/Footer';

import CS2Page from "./components/Team-pages/CS2";
import RivalsPage from "./components/Team-pages/Marvel-Rivals";
import R6Page from "./components/Team-pages/R6";
import RocketLeaguePage from "./components/Team-pages/Rocket-League";
import AboutUs from "./components/AboutUs";

import ScrollToTop from './components/ScrollToTop';

// Scroll to hash target if present
function ScrollToHashElement() {
  const location = useLocation();
  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) element.scrollIntoView({ behavior: "smooth" });
    }
  }, [location]);
  return null;
}

function HomePage() {
  return (
    <>
      <Header />
      <Slideshow />
      <LogoMarquee />
      <HoverCards />
      <MerchShowcase />
      <div className="w-full h-[2px] bg-[#4DA0C7]" />
      <Footer />
    </>
  );
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <ScrollToHashElement />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/cs2" element={<CS2Page />} />
        <Route path="/marvel-rivals" element={<RivalsPage />} />
        <Route path="/r6" element={<R6Page />} />
        <Route path="/rocket-league" element={<RocketLeaguePage />} />
      </Routes>
    </Router>
  );
}

export default App;