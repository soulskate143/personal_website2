"use client";
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
  useSpring,
} from "framer-motion";
import Image from "next/image";
import { useState, useEffect } from "react";
import Header from "../components/header";
import AboutSection from "../components/About";



const words = ["Software", "Hardware", "IoT"];

export default function Home() {
  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);
  const [index, setIndex] = useState(0);
  const { scrollY } = useScroll();
  const parallaxY = useTransform(scrollY, [0, 600], [0, -100]); // You can adjust range

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 2000); // Change word every 2 seconds

    return () => clearInterval(interval);
  }, []);


  // Track Mouse Movement
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMouseX(e.clientX - window.innerWidth / 2);
      setMouseY(e.clientY - window.innerHeight / 2);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <main>
      <div className="relative w-full h-screen overflow-hidden bg-black text-white ">
        <FallingStars />
        <Header />
        {/* Background Layer with Opposite Mouse Motion Effect */}

        <motion.div
          className="fixed top-0 left-0 w-full h-full z-0"
          style={{
            x: -mouseX * 0.02, // Moves in opposite direction of mouse
            y: parallaxY, // scroll-based Y parallax only
            scale: 1.1, // Slightly scale up to avoid black edges
          }}
          transition={{ type: "tween", ease: "easeOut", duration: 0.3 }}
        >
          <Image
            src="/images/background.jpg"
            alt="Background"
            fill
            style={{ objectFit: "cover" }}
            priority
            quality={100}
            unoptimized
          />
        </motion.div>

        {/* Foreground Layer with Motion */}
        <motion.div
          className="relative z-10 flex flex-col items-center justify-center h-screen text-center px-5 mt-10"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="relative flex flex-col items-center gap-0 md:flex-row md:justify-center md:gap-5 mb-0 pb-0">
            {/* Marvin PNG - Moves to top on mobile */}
            <motion.div
              className="w-[200px] md:w-[450px] md:absolute md:left-[-30px] md:top-1/2 md:transform md:-translate-y-1/2"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.8 }}
            >
              <Image
                src="/images/marvin.png"
                alt="First Name"
                width={500}
                height={500}
                className="w-full object-contain mx-auto"
              />
            </motion.div>

            {/* Profile Image - Centered */}
            <motion.div
              className="rounded-full overflow-hidden border-4 border-white z-10 mt-[-60px] md:mt-0"
              initial={{ scale: 2.8 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.7 }}
            >
              <Image
                src="/images/TOH.png"
                alt="My Picture"
                width={800}
                height={800}
                className="rounded-full"
              />
            </motion.div>

            {/* Toh1 PNG - Moves to bottom on mobile */}
            <motion.div
              className="w-[200px] md:w-[450px] md:absolute md:right-[-120px] md:top-1/2 md:transform md:-translate-y-1/2 z-10 mt-[-55px] md:mt-0"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 1 }}
            >
              <Image
                src="/images/toh1.png"
                alt="Last Name"
                width={500}
                height={500}
                className="w-full object-contain mx-auto"
              />
            </motion.div>
          </div>

          <div className="text-center mt-[-55px] md:mt-5">
            {/* Static Sentence */}
            <motion.h1
              className="text-2xl md:text-5xl font-bold"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.5, delay: 0.5 }}
            >
              Building the future of
            </motion.h1>

            {/* Changing Word Below */}
            <div className="relative h-12 mt-2 flex justify-center items-center">
              <AnimatePresence mode="wait">
                <motion.span
                  key={words[index]}
                  className="absolute text-5xl font-bold text-amber-400 [text-shadow:0_0_20px_#60a5fa]"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                >
                  {words[index]}
                </motion.span>
              </AnimatePresence>
            </div>
          </div>
          <motion.p
            className="text-lg mt-3 max-w-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, delay: 1 }}
          >
            Hello, I'm{" "}
            <span className="text-amber-400 [text-shadow:0_0_20px_#60a5fa]">
              Marvin
            </span>
            . A versatile Developer crafting immersive futuristic solutions that
            push boundaries.
          </motion.p>
        </motion.div>
      </div>
      

    <AboutSection />
    
   
    </main>
  );
}
