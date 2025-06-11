import { gsap } from "gsap";
import React, { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import "./flip.css"; // Make sure this file exists in the same directory
import {Link} from "react-router-dom"; // Assuming you're using react-router for navigation

const cards = [
  {
    name: "Counter Strike 2",
    baseImg: "/CS2-PAD.jpg",
    hoverImg: "/cs2/cs2-1.png",
    url: "/cs2",
  },
  {
    name: "Marvel Rivals",
    baseImg: "/RIVALS-PAD.jpg",
    hoverImg: "/mr/mr-1.png",
    url: "/marvel-rivals",
  },
  {
    name: "Rainbow Six Siege",
    baseImg: "/R6-PAD.jpg",
    hoverImg: "/r6/r6-1.png",
    url: "/r6",
  },
  {
    name: "Rocket League",
    baseImg: "/ROCKET LEAGUE-PAD.jpg",
    hoverImg: "/rl/rl-1.png",
    url: "/rocket-league",
  },
];


export default function HoverCards() {
  const text1=useRef(null);
  const card=useRef(null);

  useEffect(() => {
    gsap.fromTo(
          text1.current,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration:0.8,
            ease: "power2.out",
            scrollTrigger:{
                trigger: text1.current,
                start: "top 90%",
                toggleActions: "play none none none",
            }
          }
        );

        gsap.fromTo(
          card.current,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
         
            duration:1.2,
            ease: "power2.out",
            scrollTrigger:{
                trigger: card.current,
                start: "top 80%",
                toggleActions: "play none none none",
            }
          }
        );

  });

  return (
    <div
    id="team"
      className="h-[700px] w-full flex flex-col items-center justify-center bg-black bg-cover bg-center px-4"
      style={{
        backgroundImage: `url('/ROSTER-BG-2.png')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Headings */}
      <div ref={text1} className="text-center mb-10">
        <h2 className="text-black text-3xl font-bold tracking-wide DrukWide">ARRIVAL 7</h2>
        <p className="text-black text-8xl font-bold mt-2 DrukWide">ROSTER</p>
      </div>

      {/* Card Grid */}
      <div ref={card} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[35px] max-w-7xl w-full">
        {cards.map((card, idx) => (
          <HoverCard key={idx} {...card} />
        ))}
      </div>
    </div>
  );
}


function HoverCard({ baseImg, hoverImg, name, url }) {
  return (
    <Link to={url} className="w-[270px] h-[370px] flip-card block">
      <div className="flip-inner group">
        {/* Front */}
        <div className="flip-front">
          <img
            src={baseImg}
            alt={`${name} front`}
            className="w-full h-full object-cover rounded-2xl shadow-xl"
          />
        </div>

        {/* Back */}
        <div className="flip-back">
          <img
            src={hoverImg}
            alt={`${name} back`}
            className="w-full h-full object-cover rounded-2xl shadow-xl"
          />
        </div>
      </div>
    </Link>
  );
}

