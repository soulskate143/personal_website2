"use client";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState, useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { FiEye, FiHome, FiUser, FiBriefcase, FiMail } from "react-icons/fi";
import { doc, updateDoc, increment, getDoc } from "firebase/firestore";
import { db } from "../components/firebase";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [visible, setVisible] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState("home");
  const lastScrollY = useRef(0);
  const ticking = useRef(false);
  const [visitCount, setVisitCount] = useState<number | null>(null);

  const navItems = [
    { name: "Home", href: "/", icon: <FiHome /> },
    { name: "About", href: "#about", icon: <FiUser /> },
    { name: "Projects", href: "#projects", icon: <FiBriefcase /> },
    { name: "Contact", href: "#contacts", icon: <FiMail /> },
  ];

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

        // Show/hide header
        if (!isMenuOpen) {
          if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
            setVisible(false);
          } else {
            setVisible(true);
          }
        }

        // Background blur effect
        setScrolled(currentScrollY > 50);

        // Scroll progress
        const winScroll = document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (winScroll / height) * 100;
        setScrollProgress(scrolled);

        // Active section detection
        const sections = ["home", "about", "projects", "contacts"];
        for (const section of sections) {
          const element = document.getElementById(section);
          if (element) {
            const rect = element.getBoundingClientRect();
            if (rect.top <= 100 && rect.bottom >= 100) {
              setActiveSection(section);
              break;
            }
          }
        }
        if (currentScrollY < 100) setActiveSection("home");

        lastScrollY.current = currentScrollY;
        ticking.current = false;
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isMenuOpen]);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: visible ? 0 : -100 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? "backdrop-blur-xl bg-gray-900/80 shadow-lg shadow-black/20 border-b border-white/5"
            : "bg-transparent"
        }`}
      >
        <nav className="flex justify-between items-center px-6 py-4 md:px-12 max-w-7xl mx-auto">
          {/* Left Section: Logo & Visit Counter */}
          <div className="flex items-center gap-4">
            {/* Logo */}
            <Link href="/">
              <motion.div
                whileHover={{ scale: 1.05, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Image
                  src="/images/mt.png"
                  alt="My Portfolio Logo"
                  width={60}
                  height={60}
                  className="transition-transform duration-300"
                />
              </motion.div>
            </Link>

            {/* Visit Counter Badge */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="hidden md:flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-600/10 border border-blue-500/20 backdrop-blur-sm"
            >
              <FiEye className="text-blue-400 text-lg" />
              <div className="flex flex-col leading-none">
                <span className="text-lg font-bold text-yellow-400">
                  {visitCount !== null ? visitCount.toLocaleString() : "---"}
                </span>
                <span className="text-[10px] text-gray-400">Visitors</span>
              </div>
            </motion.div>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            className="md:hidden text-3xl text-white hover:text-blue-400 transition-colors relative z-50"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <AnimatePresence mode="wait">
              {isMenuOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <FaTimes />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <FaBars />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center space-x-2">
            {navItems.map((item, index) => {
              const isActive = 
                (item.href === "/" && activeSection === "home") ||
                (item.href !== "/" && activeSection === item.href.replace("#", ""));

              return (
                <motion.li
                  key={item.name}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    href={item.href}
                    className={`relative flex items-center gap-2 px-5 py-2.5 rounded-full font-semibold text-sm transition-all duration-300 group ${
                      isActive
                        ? "text-white bg-gradient-to-r from-blue-500 to-purple-600 shadow-lg shadow-blue-500/30"
                        : "text-gray-300 hover:text-white"
                    }`}
                  >
                    <span className={`text-lg ${isActive ? "text-white" : "text-gray-400 group-hover:text-blue-400"} transition-colors`}>
                      {item.icon}
                    </span>
                    {item.name}
                    
                    {/* Hover underline */}
                    {!isActive && (
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-600 group-hover:w-full transition-all duration-300" />
                    )}
                  </Link>
                </motion.li>
              );
            })}
          </ul>
        </nav>

        {/* Scroll Progress Bar */}
        <motion.div
          className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 origin-left"
          style={{ width: `${scrollProgress}%` }}
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
        />
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/70 backdrop-blur-sm z-40 md:hidden"
              onClick={() => setIsMenuOpen(false)}
            />

            {/* Menu Panel */}
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 left-0 h-full w-[85%] max-w-sm bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 z-50 md:hidden shadow-2xl"
            >
              <div className="flex flex-col h-full p-8">
                {/* Logo & Close */}
                <div className="flex items-center justify-between mb-12">
                  <Link href="/" onClick={() => setIsMenuOpen(false)}>
                    <Image
                      src="/images/mt.png"
                      alt="My Portfolio Logo"
                      width={80}
                      height={80}
                      className="hover:scale-110 transition-transform"
                    />
                  </Link>
                </div>

                {/* Visit Counter Mobile */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="flex items-center gap-3 px-4 py-3 rounded-xl bg-gradient-to-r from-blue-500/20 to-purple-600/20 border border-blue-500/30 mb-8"
                >
                  <FiEye className="text-blue-400 text-2xl" />
                  <div className="flex flex-col leading-none">
                    <span className="text-2xl font-bold text-yellow-400">
                      {visitCount !== null ? visitCount.toLocaleString() : "---"}
                    </span>
                    <span className="text-xs text-gray-400">Portfolio Visitors</span>
                  </div>
                </motion.div>

                {/* Navigation Links */}
                <nav className="flex-1">
                  <ul className="space-y-3">
                    {navItems.map((item, index) => {
                      const isActive = 
                        (item.href === "/" && activeSection === "home") ||
                        (item.href !== "/" && activeSection === item.href.replace("#", ""));

                      return (
                        <motion.li
                          key={item.name}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.2 + index * 0.1 }}
                        >
                          <Link
                            href={item.href}
                            onClick={() => setIsMenuOpen(false)}
                            className={`flex items-center gap-4 px-5 py-4 rounded-xl font-semibold text-lg transition-all duration-300 ${
                              isActive
                                ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg"
                                : "text-gray-300 hover:bg-gray-800/50 hover:text-white"
                            }`}
                          >
                            <span className={`text-2xl ${isActive ? "text-white" : "text-gray-400"}`}>
                              {item.icon}
                            </span>
                            {item.name}
                          </Link>
                        </motion.li>
                      );
                    })}
                  </ul>
                </nav>

                {/* Footer */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="text-center text-sm text-gray-500 border-t border-gray-700 pt-6"
                >
                  © 2025 Marvin Toh
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}