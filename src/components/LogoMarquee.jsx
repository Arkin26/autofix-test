// components/LogoMarquee.jsx
import { gsap } from "gsap";
import React, { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function LogoMarquee() {
  const logos = [];
  const marqueeRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
              marqueeRef.current,
              { filter:"blur(10px)" },
              {
                filter: "blur(0px)",
                duration:0.9,
                ease: "power2.out",
              }
            );

  });

  for (let i = 0; i < 10; i++) {
    logos.push(
      <div
        key={`set-${i}`}
        className="flex items-center justify-between gap-2 mx-4"
      >
        <img
          src="/logo-a.png"
          alt="Logo A"
          className="h-[15px] object-contain"
        />
        <img
          src="/logo-b.png"
          alt="Logo B"
          className="h-[15px] object-contain"
        />
        <div className="w-2 h-2 rounded-full bg-black ml-[20px]" />
      </div>
    );
  }

  return (
    <div ref={marqueeRef} className="w-full h-[60px] overflow-hidden bg-white relative z-10 py-[22.5px]">
      <div className="absolute w-max flex animate-marquee whitespace-nowrap">
        {logos}
      </div>
    </div>
  );
}
