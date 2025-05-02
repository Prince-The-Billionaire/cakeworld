'use client';
import React, { useEffect, useRef } from 'react';
import ProductCard from './ProductCard';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Products = () => {
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const elements = cardsRef.current?.querySelectorAll('.product-card');

    if (elements) {
      gsap.from(elements, {
        y: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: cardsRef.current,
          start: 'top 80%',
          toggleActions: 'play reverse play reverse',
        },
      });
    }
  }, []);

  return (
    <div className="min-h-screen w-full text-black bg-gray-100 flex flex-col items-center justify-center px-4">
      <p className="text-4xl md:text-5xl font-sans my-16 text-center">Categories</p>
      
      <div
        ref={cardsRef}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 items-center mb-16 w-full max-w-7xl"
      >
        <div className="product-card"><ProductCard /></div>
        <div className="product-card"><ProductCard /></div>
        <div className="product-card"><ProductCard /></div>
        <div className="product-card"><ProductCard /></div>
        <div className="product-card"><ProductCard /></div>
        <div className="product-card"><ProductCard /></div>
      </div>
    </div>
  );
};

export default Products;
