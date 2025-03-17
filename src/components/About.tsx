"use client";

import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaPython,
  FaJava,
  FaDatabase,
  FaPhp,
} from "react-icons/fa";
import { SiNextdotjs, SiC } from "react-icons/si";
import { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Lenis from "@studio-freight/lenis";
import Projects from "../components/Projects";
import Hobbies from "../components/Hobbies";
import Contact from "../components/Contact";

const skills = [
  { name: "HTML", icon: <FaHtml5 className="text-orange-500 text-3xl" /> },
  { name: "CSS", icon: <FaCss3Alt className="text-blue-500 text-3xl" /> },
  { name: "JavaScript", icon: <FaJs className="text-yellow-400 text-3xl" /> },
  { name: "React", icon: <FaReact className="text-cyan-400 text-3xl" /> },
  { name: "PHP", icon: <FaPhp className="text-green-500 text-3xl" /> }, // Changed Node.js to PHP
  { name: "Next.js", icon: <SiNextdotjs className="text-white text-3xl" /> },
  { name: "Python", icon: <FaPython className="text-yellow-300 text-3xl" /> },
  { name: "C", icon: <SiC className="text-gray-200 text-3xl" /> },
  { name: "Java", icon: <FaJava className="text-red-500 text-3xl" /> },
  { name: "MySQL", icon: <FaDatabase className="text-blue-300 text-3xl" /> },
];

const certificates = [
  {
    name: "HTML/CSS",
    provider: "TestDome",
    url: "https://www.testdome.com/certificates/4413a8aca3b341999ba9e3eed92fd813",
  },
  {
    name: "First Aid & Basic Life Support",
    type: "image",
    src: "/images/cert.jpg",
  },
];

export default function AboutPage() {
  const containerRef = useRef(null);

  useEffect(() => {
    const lenis = new Lenis();

    const raf = (time: number) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    requestAnimationFrame(raf);

    return () => lenis.destroy();
  }, []);

  // Certificate Embed CSS
  useEffect(() => {
    const link = document.createElement("link");
    link.href = "https://www.testdome.com/content/certificates/embed.css";
    link.type = "text/css";
    link.rel = "stylesheet";
    link.media = "screen,print";
    document.head.appendChild(link);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const parallaxY = useTransform(scrollYProgress, [0, 1], ["0%", "-40%"]);

  return (
    <div
      id="about"
      ref={containerRef}
      className="relative overflow-hidden bg-gray-950 text-white"
    >
      {/* Parallax Background Glow Layers */}
      <motion.div
        className="absolute inset-0 -z-10 bg-gradient-to-br from-blue-500/10 via-purple-600/10 to-black blur-3xl opacity-50"
        style={{ y: parallaxY }}
      />
      <section className="min-h-screen w-full px-6 md:px-20 lg:px-32 pt-24 pb-36">
        {/* Header */}
        <motion.div
  className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-4 md:gap-8 p-4 md:p-6"
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.7 }}
  viewport={{ once: true }}
>
  {/* IMAGE SECTION */}
  <div className="w-full md:w-[40%] md:mr-0 md:pl-40 flex justify-center md:justify-start">
    <div className="w-full max-w-[280px] overflow-hidden rounded-xl shadow-lg border border-gray-700">
      <Image
        src="/images/logo2.png"
        alt="About Me"
        className="w-full h-auto object-cover"
      />
    </div>
  </div>

  {/* TEXT SECTION */}
  <div className="w-full md:w-[60%] text-left md:mt-0 -mt-2">
    <h2 className="text-3xl md:text-4xl font-bold mb-3 text-white relative">
      <span className="inline-block relative">
        About <span className="text-amber-400 glow-text">Me</span>
        <motion.span
          className="absolute -bottom-2 left-0 h-1 w-full bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"
          initial={{ width: 0 }}
          whileInView={{ width: "100%" }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        />
      </span>
    </h2>
    <motion.p
      className="text-base md:text-lg text-gray-300 leading-relaxed"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      viewport={{ once: true }}
    >
      A developer passionate about merging the digital and physical worlds. I
      specialize in architecting immersive web applications and scalable IoT
      ecosystems, bridging the gap between elegant software interfaces and
      intelligent hardware systems.
    </motion.p>
  </div>
</motion.div>





        {/* Skills */}
        <motion.section
          className="mt-24 w-full max-w-7xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-center mb-16 relative">
            <span className="relative inline-block">
              Tech Stack
              <motion.span
                className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-blue-500 to-purple-600"
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                transition={{ duration: 1, delay: 0.2 }}
                viewport={{ once: true }}
              />
            </span>
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 px-4">
            {skills.map((skill, i) => (
              <motion.div
                key={skill.name}
                className="group relative flex flex-col items-center p-6 rounded-2xl bg-gray-900 hover:bg-gray-800/50 transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)]"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: i * 0.05,
                  type: "spring",
                  stiffness: 50,
                }}
                viewport={{ once: true, margin: "0px 0px -100px 0px" }}
              >
                {/* Gradient Border */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/30 via-purple-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Animated Background */}
                <div className="absolute inset-0 rounded-2xl overflow-hidden">
                  <div className="absolute -inset-24 opacity-0 group-hover:opacity-30 transition-opacity duration-500">
                    <div className="animate-shimmer absolute inset-0 bg-[linear-gradient(110deg,rgba(255,255,255,0.1),rgba(255,255,255,0.05),rgba(255,255,255,0.1))] bg-[length:200%_100%]" />
                  </div>
                </div>

                {/* Skill Content */}
                <div className="relative z-10 flex flex-col items-center">
                  <div className="mb-4 relative">
                    {skill.icon}
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-200 group-hover:text-white transition-colors">
                    {skill.name}
                  </h3>
                </div>

                {/* Hover Indicator */}
                <div className="absolute bottom-0 h-1 w-8 bg-gradient-to-r from-blue-500 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Certificates */}
        <motion.section
      className="mt-30 w-full max-w-4xl mx-auto"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
    >
      <h2 className="text-4xl font-bold text-center mb-16 relative">
        <span className="relative inline-block">
          Certificates
          <motion.span
            className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-blue-500 to-purple-600"
            initial={{ width: 0 }}
            whileInView={{ width: "100%" }}
            transition={{ duration: 1, delay: 0.2 }}
            viewport={{ once: true }}
          />
        </span>
      </h2>

      <div className="flex justify-center flex-wrap gap-6">
        {certificates.map((certificate, i) => (
          <motion.a
            key={certificate.name}
            href={certificate.url}
            className="testdome-certificate-stamp gold transform hover:scale-105 transition duration-300"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.3, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <span className="testdome-certificate-name">Marvin Toh</span>
            <span className="testdome-certificate-test-name">
              {certificate.name}
            </span>
            <span className="testdome-certificate-card-logo">
              TestDome
              <br />
              Certificate
            </span>
          </motion.a>
        ))}
      </div>
    </motion.section>

        <Projects />
        <Hobbies />
        <Contact />
      </section>

      {/* Glow Text CSS */}
      <style jsx>{`
        .glow-text {
          text-shadow: 0 0 10px rgba(59, 130, 246, 0.6),
            0 0 20px rgba(59, 130, 246, 0.6), 0 0 30px rgba(59, 130, 246, 0.6);
        }
      `}</style>
    </div>
  );
}
