'use client';

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { Pacifico } from 'next/font/google';

const pacifico = Pacifico({ weight: '400', subsets: ['latin'] });

const Hero = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    gsap.from(titleRef.current, {
      y: 40,
      opacity: 0,
      duration: 1.2,
      ease: 'power3.out',
    });

    gsap.from(descRef.current, {
      y: 20,
      opacity: 0,
      delay: 0.3,
      duration: 1,
      ease: 'power2.out',
    });

    gsap.from(buttonRef.current, {
      y: 20,
      opacity: 0,
      delay: 0.4,
      duration: 0.8,
      ease: 'power2.out',
    });
  }, []);

  return (
    <div
      className="min-h-screen w-full bg-fixed bg-cover bg-center bg-no-repeat flex items-center justify-center"
      style={{ backgroundImage: "url('/hero_cakes.jpg')" }}
    >
      <div className="absolute inset-0 bg-fixed z-0" />
      <div className="relative z-10 px-6 md:px-4 max-w-6xl w-full">
        <h1
          ref={titleRef}
          className={`text-4xl md:text-6xl lg:text-7xl text-white font-bold leading-tight ${pacifico.className}`}
        >
          Crave-Worthy Cakes,<br /> Freshly Baked in Aba
        </h1>
        <p
          ref={descRef}
          className="text-white/80 mt-6 font-sans font-extralight text-lg md:text-xl max-w-[650px]"
        >
          Whether it’s a birthday, wedding, surprise gift or just a sweet tooth
          calling—<span className="font-semibold text-yellow-300">Cake World</span> delivers
          rich, moist, unforgettable cakes that melt in your mouth and wow every crowd.
        </p>
        <button
            ref={buttonRef}
            onClick={() => {
                gsap.to(buttonRef.current, {
                scale: 0.95,
                duration: 0.1,
                ease: 'power2.out',
                yoyo: true,
                repeat: 1,
                });
                // Optional: Add actual click action here, e.g., navigate or open modal
            }}
            className="mt-6 bg-yellow-400 cursor-pointer font-sans hover:bg-yellow-500 text-white font-semibold px-6 py-3 rounded-xl shadow-lg text-lg w-fit"
            >
            🎂 Order Your Dream Cake Now
        </button>

      </div>
    </div>
  );
};

export default Hero;
