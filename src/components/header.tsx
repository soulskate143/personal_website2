"use client";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState, useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { doc, updateDoc, increment, getDoc } from "firebase/firestore";
import { db } from "../components/firebase";

export default function Header() {
  const [visible, setVisible] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const lastScrollY = useRef(0);
  const ticking = useRef(false);
  const [visitCount, setVisitCount] = useState<number | null>(null);

  useEffect(() => {
    const fetchVisitCount = async () => {
      try {
        const visitsRef = doc(db, "analytics", "visits");
        const docSnap = await getDoc(visitsRef);

        if (docSnap.exists()) {
          setVisitCount(docSnap.data().count);
        } else {
          console.log("No visit count found, initializing...");
          setVisitCount(1);
          await updateDoc(visitsRef, { count: 1 });
        }
      } catch (error) {
        console.error("Error fetching visit count:", error);
      }
    };

    const updateVisitCount = async () => {
      try {
        const visitsRef = doc(db, "analytics", "visits");
        await updateDoc(visitsRef, { count: increment(1) });

        // Fetch the updated count after incrementing
        const updatedSnap = await getDoc(visitsRef);
        if (updatedSnap.exists()) {
          setVisitCount(updatedSnap.data().count);
        }
      } catch (error) {
        console.error("Error updating visit count:", error);
      }
    };

    if (!sessionStorage.getItem("visitCounted")) {
      updateVisitCount();
      sessionStorage.setItem("visitCounted", "true");
    } else {
      fetchVisitCount();
    }
  }, []);

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
        {/* Left Section: Logo & Visit Counter */}
        <div className="flex items-center gap-0.09">
          {/* Logo */}
          <Link href="/">
            <Image
              src="/images/mt.png"
              alt="My Portfolio Logo"
              width={100}
              height={100}
              className="hover:scale-110 transition-transform duration-300 ease-in-out"
            />
          </Link>

          {/* Visit Counter */}
          <div className="flex items-center text-white px-4 py-2">
            <p className="text-lg text-yellow-400 mr-0.5">
              {visitCount !== null ? visitCount : "---"}
            </p>
            <p className="text-sm opacity-75">Portfolio Viewers</p>
          </div>
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
