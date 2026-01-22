import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

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

function App() {
  return (
    <Router>
      <Routes>
        {/* Home Page */}
        <Route
          path="/"
          element={
            <>
              <Header />
              <Slideshow />
              <LogoMarquee />
              <HoverCards />
              <MerchShowcase />
              <div className="w-full h-[2px] bg-[#4DA0C7]" />
              <Footer />
            </>
          }
        />

        {/* Game Pages */}
        <Route path="/cs2" element={<CS2Page />} />
        <Route path="/marvel-rivals" element={<RivalsPage />} />
        <Route path="/r6" element={<R6Page />} />
        <Route path="/rocket-league" element={<RocketLeaguePage />} />
      </Routes>
    </Router>
  );
}

export default App;