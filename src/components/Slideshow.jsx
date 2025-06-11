import { useState } from 'react';
import { gsap } from "gsap";
import React, { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const images = [
  '/REBRAND-ANNOUNCEMENT-1.jpg',
  '/TEAM_BANNER.jpg',
  '/new-jersey.jpg',
  '/HAPPY-EASTER-new.jpg',
];

const SLIDE_DURATION = 5000;

export default function Slideshow() {

    const SlideShow = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const [animating, setAnimating] = useState(false); // Prevent premature render
  const intervalRef = useRef(null);

  useEffect(() => {
     gsap.fromTo(
              SlideShow.current,
              { filter:"blur(10px)" },
              {
                filter: "blur(0px)",
                duration:0.9,
                ease: "power2.out",
              }
            );
    // Reset progress and prevent animation flicker
    setAnimating(false);
    setProgress(0);

    // Delay start to allow reset to render before animating
    const timeout = setTimeout(() => {
      setAnimating(true); // Allow rendering of animated bar
      startProgress();
    }, 50);

    return () => {
      clearInterval(intervalRef.current);
      clearTimeout(timeout);
    };
  }, [currentIndex]);

  const startProgress = () => {
    const start = Date.now();
    clearInterval(intervalRef.current);

    intervalRef.current = setInterval(() => {
      const now = Date.now();
      const elapsed = now - start;
      const percent = Math.min((elapsed / SLIDE_DURATION) * 100, 100);
      setProgress(percent);

      if (elapsed >= SLIDE_DURATION) {
        setCurrentIndex((prev) => (prev + 1) % images.length);
      }
    }, 50);
  };

  const handleBarClick = (index) => {
    clearInterval(intervalRef.current);
    setCurrentIndex(index);
    setProgress(0);
    setAnimating(false);
  };

  return (
    <div ref={SlideShow} className="relative w-full h-[500px] overflow-hidden">
      {/* Fading Banners */}
      <div className="absolute top-0 left-0 w-full h-full z-0">
        {images.map((src, idx) => (
          <img
            key={idx}
            src={src}
            alt={`slide-${idx}`}
            className={`absolute w-full h-full object-cover transition-opacity duration-700 ease-in-out ${
              idx === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
          />
        ))}
      </div>

      {/* Progress Bars */}
      <div className="absolute bottom-4 left-0 right-0 px-4 flex gap-2 w-full z-20">
        {images.map((_, idx) => (
          <div
            key={idx}
            onClick={() => handleBarClick(idx)}
            className="flex-1 h-2 bg-[#e0e0e0] rounded-full cursor-pointer relative overflow-hidden"
          >
            {idx === currentIndex && animating && (
              <div
                className="absolute top-0 left-0 h-full bg-[#4DA0C7]"
                style={{
                  width: `${progress}%`,
                  transition: 'width 0.1s linear',
                }}
              ></div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
