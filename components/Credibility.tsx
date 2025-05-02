"use client";
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Credibility = () => {
  const numberRef = useRef<HTMLSpanElement>(null);
  const textContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Count-up animation
    const obj = { count: 0 };
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: numberRef.current,
        start: 'top 80%',
        toggleActions: 'play none none none',
      },
    });

    tl.to(obj, {
      count: 1000,
      duration: 2,
      ease: 'power1.out',
      onUpdate: () => {
        if (numberRef.current) {
          numberRef.current.innerText = Math.floor(obj.count).toLocaleString();
        }
      },
    });

    // Staggered pan from left animation
    const texts = textContainerRef.current?.querySelectorAll('p');
    if (texts) {
      gsap.from(texts, {
        x: -100,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: textContainerRef.current,
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
      });
    }

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <div className='py-10 font-sans w-screen overflow-x-hidden flex px-6 flex-col  justify-center bg-gray-100 '>
      <div
        ref={textContainerRef}
        className='flex flex-col md:flex-row gap-10 md:gap-0 justify-between w-full max-w-8xl px-4 md:px-40'
      >
        <p className="text-2xl text-black text-center">
          Over <span ref={numberRef}>0</span>+ <br /> Customers
        </p>
        <p className='text-2xl text-black text-center'>
          1 - 2 days <br /> delivery
        </p>
        <p className='text-2xl text-black text-center'>
          Delicious <br /> Cakes
        </p>
      </div>
    </div>
  );
};

export default Credibility;
