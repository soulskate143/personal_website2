"use client";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState, useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Header() {
  const [visible, setVisible] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const lastScrollY = useRef(0);
  const ticking = useRef(false);

  useEffect(() => {
    const handleScroll = () => {
      if (ticking.current) return;
      ticking.current = true;

      requestAnimationFrame(() => {
        const currentScrollY = window.scrollY;

        if (!isMenuOpen) {
          if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
            setVisible(false);
          } else {
            setVisible(true);
          }
        }

        lastScrollY.current = currentScrollY;
        ticking.current = false;
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isMenuOpen]);

  return (
    <header
      className={`fixed top-0 left-0 w-full transition-transform duration-300 bg-transparent z-50 ${
        visible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <nav className="flex justify-between items-center px-6 py-4 md:px-12">
        {/* Branding */}
        <div>
          <Link href="/">
            <Image
              src="/images/mt.png"
              alt="My Portfolio Logo"
              width={100}
              height={100}
              className="hover:scale-110 transition-transform duration-300 ease-in-out"
            />
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-3xl text-white hover:text-blue-500 transition-all duration-300 ease-in-out transform hover:rotate-180 hover:scale-110"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Navigation Menu */}
        <ul
          className={`fixed md:static top-0 left-0 w-full md:flex md:space-x-8 md:items-center md:w-auto transition-all duration-300 ease-in-out md:translate-x-0 p-6 md:p-0 text-white md:text-black shadow-lg md:shadow-none rounded-md md:rounded-none 
          ${
            isMenuOpen
              ? "backdrop-blur-lg bg-black/20 md:bg-transparent translate-x-0 flex flex-col items-center justify-center min-h-screen"
              : "-translate-x-full md:translate-x-0"
          }`}
        >
          {/* Close Button Inside Mobile Menu */}
          <button
            className="absolute top-5 right-5 text-3xl text-white md:hidden hover:text-yellow-400 transition-all duration-300 ease-in-out transform hover:scale-110"
            onClick={() => setIsMenuOpen(false)}
            aria-label="Close menu"
          >
            <FaTimes />
          </button>

          <li className="md:hidden flex justify-center py-4">
            <Link href="/" onClick={() => setIsMenuOpen(false)}>
              <Image
                src="/images/mt.png"
                alt="My Portfolio Logo"
                width={150}
                height={150}
                className="hover:scale-110 transition-transform duration-300 ease-in-out"
              />
            </Link>
          </li>
          <li>
            <Link
              href="/"
              className="block px-6 py-3 md:px-4 md:py-2 text-lg font-semibold transition-all duration-300 ease-in-out transform text-zinc-50 hover:[text-shadow:0_0_10px_#ffff33,0_0_20px_#ffff33,0_0_40px_#ffff33]"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="#about"
              className="block px-6 py-3 md:px-4 md:py-2 text-lg font-semibold transition-all duration-300 ease-in-out transform text-zinc-50 hover:[text-shadow:0_0_10px_#ffff33,0_0_20px_#ffff33,0_0_40px_#ffff33]"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="#projects"
              className="block px-6 py-3 md:px-4 md:py-2 text-lg font-semibold transition-all duration-300 ease-in-out transform text-zinc-50 hover:[text-shadow:0_0_10px_#ffff33,0_0_20px_#ffff33,0_0_40px_#ffff33]"
              onClick={() => setIsMenuOpen(false)}
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              href="#contacts"
              className="block px-6 py-3 md:px-4 md:py-2 text-lg font-semibold transition-all duration-300 ease-in-out transform text-zinc-50 hover:[text-shadow:0_0_10px_#ffff33,0_0_20px_#ffff33,0_0_40px_#ffff33]"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
