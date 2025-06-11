import Header from "../Header";
import Footer from "../Footer";
import { gsap } from "gsap";
import React, { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const teamImages = [
  "/rl/rl-1.png",
  "/rl/rl-2.png",
  "/rl/rl-3.png",
  "/rl/rl-4.png",
  "/rl/rl-5.png",
  "/rl/rl-6.png",
];

const RL = () => {
  const pRef = useRef(null);
  const firstRowRef = useRef(null);
  const secondRowRef = useRef(null);
  const banner = useRef(null);

  useEffect(() => {

        gsap.fromTo(
          banner.current,
          { filter:"blur(10px)" },
          {
            filter: "blur(0px)",
            duration:0.9,
            ease: "power2.out",
          }
        );
    gsap.fromTo(
      pRef.current,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration:0.9,
        ease: "power2.out",
      }
    );
  

  gsap.fromTo(
      secondRowRef.current,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: "power2.out",
        scrollTrigger:{
            trigger: secondRowRef.current,
             start: "top 90%", 
            toggleActions: "play none none none",
        }
      }
    );

     gsap.fromTo(
      firstRowRef.current,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        delay:0.9,
        ease: "power2.out",
        scrollTrigger:{
            trigger: firstRowRef.current,
             start: "top 100%", 
            toggleActions: "play none none none",
        }
      }
    );
}, []);

  const firstRow = teamImages.slice(0, 3);
  const secondRow = teamImages.slice(3);

  return (
    <>
      <Header />
      <div
      ref={banner}
        className="w-full h-[400px] bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/rl-bg-1.jpg')",
        }}
      ></div>
      <p className="DrukWide text-center text-md m-[20px]" ref={pRef}>
     Speed, skill, and aerial supremacy<br/>Our Rocket League roster defies gravity and drives straight into victory.
      </p>

      <div className="w-full px-[70px] py-10 bg-white">
        {/* First Row */}
        <div
          ref={firstRowRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-[50px] justify-items-center mb-10"
        >
          {firstRow.map((src, index) => (
            <div
              key={index}
              className="w-[280px] h-[420px] bg-white rounded-xl overflow-hidden shadow-lg"
            >
              <img
                src={src}
                alt={`Team ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>

        {/* Second Row */}
        <div
          ref={secondRowRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-[50px] justify-items-center"
        >
          {secondRow.map((src, index) => (
            <div
              key={index + 3}
              className="w-[280px] h-[420px] bg-white rounded-xl overflow-hidden shadow-lg"
            >
              <img
                src={src}
                alt={`Team ${index + 4}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default RL;
