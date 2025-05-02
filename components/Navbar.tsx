'use client';

import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import Link from 'next/link';

const Navbar: React.FC = () => {
  const navRef = useRef<HTMLElement | null>(null);
  const linkRefs = useRef<HTMLLIElement[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    gsap.from(navRef.current, {
      y: -50,
      opacity: 0,
      duration: 1,
      ease: 'power3.out',
    });

    gsap.from(linkRefs.current, {
      opacity: 0,
      y: 20,
      stagger: 0.1,
      delay: 0.3,
      duration: 0.6,
      ease: 'power2.out',
    });
  }, []);

  const toggleMenu = () => setIsOpen(prev => !prev);

  const navLinks = ['Home', 'About', 'Services', 'Contact'];

  return (
    <nav ref={navRef} className="fixed top-0 left-0 w-full bg-white/10 backdrop-blur-lg shadow-md z-50">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-800">Logo</h1>
        <button
          onClick={toggleMenu}
          className="md:hidden text-2xl text-gray-700 focus:outline-none"
          aria-label="Toggle menu"
        >
          ☰
        </button>

        <ul className="hidden md:flex space-x-6 text-gray-700 font-medium">
          {navLinks.map((text, i) => (
            <li
              key={i}
              ref={el => {
                if (el) linkRefs.current[i] = el;
              }}
            >
              <Link href={`/${text.toLowerCase()}`} className="hover:text-yellow-500 transition-colors">
                {text}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white px-4 pb-4">
          <ul className="flex flex-col space-y-4 text-gray-700 font-medium">
            {navLinks.map((text, i) => (
              <li key={i}>
                <Link
                  href={`/${text.toLowerCase()}`}
                  className="hover:text-blue-500"
                  onClick={() => setIsOpen(false)}
                >
                  {text}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
