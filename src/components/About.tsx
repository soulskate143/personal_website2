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
  FaNodeJs,
  FaAws,
  FaMicrochip,
  FaFileWord,
  FaVideo,
} from "react-icons/fa";
import { 
  SiNextdotjs, 
  SiMysql, 
  SiPostgresql, 
  SiMariadb, 
  SiFirebase, 
  SiRedis,
  SiGooglecloud,
  SiAutocad,
  SiMiro,
  SiAdobe,
  SiFigma,
  SiDocker
} from "react-icons/si";
import { TbCircuitResistor } from "react-icons/tb";
import { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Lenis from "@studio-freight/lenis";
import Projects from "../components/Projects";
import Hobbies from "../components/Hobbies";
import Contact from "../components/Contact";
import Image from "next/image";

const techCategories = [
  {
    title: "Frontend & UI/UX",
    icon: <FaReact className="text-cyan-400" />,
    color: "from-cyan-500 to-blue-500",
    skills: [
      { name: "HTML", icon: <FaHtml5 className="text-orange-500 text-3xl" /> },
      { name: "CSS", icon: <FaCss3Alt className="text-blue-500 text-3xl" /> },
      { name: "JavaScript", icon: <FaJs className="text-yellow-400 text-3xl" /> },
      { name: "React.js", icon: <FaReact className="text-cyan-400 text-3xl" /> },
      { name: "Next.js", icon: <SiNextdotjs className="text-white text-3xl" /> },
    ],
  },
  {
    title: "Backend & Programming",
    icon: <FaNodeJs className="text-green-500" />,
    color: "from-green-500 to-emerald-500",
    skills: [
      { name: "PHP", icon: <FaPhp className="text-indigo-400 text-3xl" /> },
      { name: "Python", icon: <FaPython className="text-yellow-300 text-3xl" /> },
      { name: "Java", icon: <FaJava className="text-red-500 text-3xl" /> },
      { name: "Node.js", icon: <FaNodeJs className="text-green-500 text-3xl" /> },
    ],
  },
  {
    title: "Cloud & Infrastructure",
    icon: <SiGooglecloud className="text-blue-400" />,
    color: "from-blue-500 to-cyan-500",
    skills: [
      { name: "GCP", icon: <SiGooglecloud className="text-blue-400 text-3xl" />, subtitle: "Google Cloud Platform" },
      { name: "Docker", icon: <SiDocker className="text-blue-500 text-3xl" />, subtitle: "Containerization" },
    ],
  },
  {
    title: "IoT & Hardware",
    icon: <FaMicrochip className="text-purple-400" />,
    color: "from-purple-500 to-pink-500",
    skills: [
      { name: "IoT Development", icon: <FaMicrochip className="text-purple-400 text-3xl" /> },
      { name: "Hardware Circuits", icon: <TbCircuitResistor className="text-yellow-400 text-3xl" /> },
      { name: "Sensor Integration", icon: <FaMicrochip className="text-green-400 text-3xl" /> },
      { name: "CCTV Networking", icon: <FaVideo className="text-red-400 text-3xl" /> },
    ],
  },
  {
    title: "Database",
    icon: <FaDatabase className="text-blue-400" />,
    color: "from-blue-500 to-indigo-500",
    skills: [
      { name: "MySQL", icon: <SiMysql className="text-blue-400 text-3xl" /> },
      { name: "Postgres", icon: <SiPostgresql className="text-blue-300 text-3xl" /> },
      { name: "MariaDB", icon: <SiMariadb className="text-blue-500 text-3xl" /> },
      { name: "Firebase", icon: <SiFirebase className="text-yellow-500 text-3xl" /> },
      { name: "Redis", icon: <SiRedis className="text-red-500 text-3xl" /> },
    ],
  },
  {
    title: "Design & Productivity",
    icon: <SiAdobe className="text-red-500" />,
    color: "from-pink-500 to-rose-500",
    skills: [
      { name: "Photo Editing", icon: <SiAdobe className="text-red-500 text-3xl" style={{ fill: 'currentColor' }} /> },
      { name: "AutoCAD", icon: <SiAutocad className="text-red-600 text-3xl" style={{ fill: 'currentColor' }} />, subtitle: "3D Modeling" },
      { name: "MS Office", icon: <FaFileWord className="text-blue-500 text-3xl" /> },
      { name: "Figma", icon: <SiFigma className="text-purple-500 text-3xl" style={{ fill: 'currentColor' }} /> },
      { name: "Miro", icon: <SiMiro className="text-yellow-400 text-3xl" style={{ fill: 'currentColor' }} />, subtitle: "Database Design" },
    ],
  },
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
    src: "/images/cert.png",
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
        {/* Header - Optimized for faster loading */}
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-4 md:gap-8 p-4 md:p-6">
          {/* IMAGE SECTION */}
          <motion.div 
            className="w-full md:w-[40%] md:mr-0 md:pl-40 flex justify-center md:justify-start"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            <div className="w-full max-w-[280px] overflow-hidden rounded-xl shadow-lg border border-gray-700 will-change-transform">
              <Image
                src="/images/logo2.png"
                alt="About Me"
                width={500}
                height={300}
                sizes="(max-width: 768px) 280px, 280px"
                className="w-full h-auto object-cover"
                priority
                loading="eager"
                quality={85}
              />
            </div>
          </motion.div>

          {/* TEXT SECTION - Enhanced */}
          <motion.div 
            className="w-full md:w-[60%] text-left md:mt-0 -mt-2"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.1, ease: "easeOut" }}
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.15 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-600/10 border border-blue-500/20 backdrop-blur-sm mb-4"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              <span className="text-sm font-medium bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Full-Stack Developer & IoT Engineer
              </span>
            </motion.div>

            {/* Title with Enhanced Styling */}
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white relative leading-tight">
              <motion.span 
                className="inline-block relative"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.2 }}
              >
                About{" "}
                <span className="relative inline-block">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-400 to-amber-500" style={{
                    textShadow: "0 0 20px rgba(251, 191, 36, 0.8), 0 0 40px rgba(251, 191, 36, 0.6), 0 0 60px rgba(251, 191, 36, 0.4), 0 0 80px rgba(251, 191, 36, 0.2)"
                  }}>
                    Me
                  </span>
                  {/* Animated dots */}
                  <motion.span
                    className="absolute -right-3 top-0 flex gap-1"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6, duration: 0.4 }}
                  >
                    <motion.span 
                      className="w-1.5 h-1.5 rounded-full bg-amber-400"
                      animate={{ scale: [1, 1.3, 1] }}
                      transition={{ repeat: Infinity, duration: 2, delay: 0 }}
                    />
                    <motion.span 
                      className="w-1.5 h-1.5 rounded-full bg-amber-400"
                      animate={{ scale: [1, 1.3, 1] }}
                      transition={{ repeat: Infinity, duration: 2, delay: 0.2 }}
                    />
                    <motion.span 
                      className="w-1.5 h-1.5 rounded-full bg-amber-400"
                      animate={{ scale: [1, 1.3, 1] }}
                      transition={{ repeat: Infinity, duration: 2, delay: 0.4 }}
                    />
                  </motion.span>
                </span>
                
                {/* Enhanced gradient underline */}
                <motion.span
                  className="absolute -bottom-2 left-0 h-1.5 w-full rounded-full overflow-hidden"
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500" />
                  <motion.span
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-50"
                    animate={{ x: ["-100%", "100%"] }}
                    transition={{ repeat: Infinity, duration: 2, ease: "linear", delay: 1 }}
                  />
                </motion.span>
              </motion.span>
            </h2>

            {/* Enhanced Description */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.25 }}
            >
              <p className="text-base md:text-lg text-gray-300 leading-relaxed mb-5">
                A developer passionate about{" "}
                <span className="text-blue-400 font-semibold">merging the digital and physical worlds</span>.
                {" "}I specialize in architecting{" "}
                <span className="text-purple-400 font-semibold">immersive web applications</span>
                {" "}and scalable{" "}
                <span className="text-cyan-400 font-semibold">IoT ecosystems</span>,
                {" "}bridging the gap between elegant software interfaces and intelligent hardware systems.
              </p>

              {/* Keywords/Tags */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.35 }}
                className="flex flex-wrap gap-2"
              >
                {["Web Development", "IoT Solutions", "Hardware Integration"].map((tag, index) => (
                  <motion.span
                    key={tag}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: 0.4 + index * 0.05 }}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="px-3 py-1.5 text-xs font-medium rounded-lg bg-gray-800/50 text-gray-300 border border-gray-700/50 hover:border-blue-500/50 hover:text-blue-400 transition-all duration-300 cursor-default"
                  >
                    {tag}
                  </motion.span>
                ))}
              </motion.div>
            </motion.div>

            {/* Decorative element */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.5, ease: "backOut" }}
              className="absolute -right-4 top-0 w-24 h-24 bg-gradient-to-br from-blue-500/20 to-purple-600/20 rounded-full blur-2xl -z-10"
            />
          </motion.div>
        </div>

        {/* Enhanced Tech Stack */}
        <motion.section
          className="mt-24 w-full max-w-7xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-12">
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-indigo-500/10 to-cyan-600/10 border border-indigo-500/20 backdrop-blur-sm mb-4"
              style={{ display: "inline-flex" }}
            >
              <svg className="w-4 h-4 text-indigo-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
              <span className="text-sm font-medium text-indigo-400">
                Technologies & Tools
              </span>
            </motion.div>

            <h2 className="text-4xl md:text-5xl font-bold mb-4 relative">
              <span className="relative inline-block">
                Tech Stack
                <motion.span
                  className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  transition={{ duration: 1, delay: 0.2 }}
                  viewport={{ once: true }}
                  style={{ display: "block" }}
                />
              </span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              A comprehensive toolkit spanning full-stack development, cloud infrastructure, and hardware engineering
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
            {techCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
                viewport={{ once: true }}
                className="group relative"
              >
                {/* Card Container */}
                <div className="relative h-full bg-gradient-to-br from-gray-900 to-gray-800/50 rounded-2xl p-6 border border-gray-700/50 hover:border-gray-600 transition-all duration-500 overflow-hidden">
                  {/* Animated Background Gradient */}
                  <div 
                    className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                  />
                  
                  {/* Shimmer Effect */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                    <div className="animate-shimmer absolute inset-0 bg-[linear-gradient(110deg,transparent,rgba(255,255,255,0.05),transparent)] bg-[length:200%_100%]" />
                  </div>

                  {/* Category Header */}
                  <div className="relative z-10 flex items-center gap-3 mb-6 pb-4 border-b border-gray-700/50">
                    <motion.div 
                      className={`text-2xl p-2 rounded-lg bg-gradient-to-br ${category.color} bg-opacity-20`}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      {category.icon}
                    </motion.div>
                    <h3 className="text-xl font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 transition-all duration-300">
                      {category.title}
                    </h3>
                  </div>

                  {/* Skills Grid */}
                  <div className="relative z-10 grid grid-cols-2 gap-3">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ 
                          duration: 0.3, 
                          delay: categoryIndex * 0.1 + skillIndex * 0.05 
                        }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.05, y: -2 }}
                        className="flex flex-col items-center p-3 rounded-xl bg-gray-800/50 hover:bg-gray-700/50 border border-gray-700/30 hover:border-gray-600/50 transition-all duration-300 cursor-pointer group/skill"
                      >
                        {/* Icon with Glow */}
                        <div className="relative mb-2">
                          {skill.icon}
                          <div className={`absolute inset-0 bg-gradient-to-br ${category.color} rounded-full opacity-0 group-hover/skill:opacity-30 blur-xl transition-opacity duration-300`} />
                        </div>
                        
                        {/* Skill Name */}
                        <span className="text-xs font-semibold text-gray-300 group-hover/skill:text-white transition-colors text-center">
                          {skill.name}
                        </span>
                        
                        {/* Subtitle if exists */}
                        {skill.subtitle && (
                          <span className="text-[10px] text-gray-500 text-center mt-1">
                            {skill.subtitle}
                          </span>
                        )}
                      </motion.div>
                    ))}
                  </div>

                  {/* Bottom Accent Line */}
                  <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${category.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Enhanced Certificates Section */}
        <motion.section
          className="mt-32 w-full max-w-6xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-amber-500/10 to-orange-600/10 border border-amber-500/20 backdrop-blur-sm mb-4"
            >
              <svg className="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <span className="text-sm font-medium text-amber-400">
                Verified Credentials
              </span>
            </motion.div>

            <h2 className="text-4xl md:text-5xl font-bold mb-4 relative">
              <span className="relative inline-block">
                Certificates & Awards
                <motion.span
                  className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 rounded-full"
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  transition={{ duration: 1, delay: 0.2 }}
                  viewport={{ once: true }}
                  style={{ display: "block" }}
                />
              </span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Professional certifications and achievements demonstrating continuous learning and expertise
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-4">
            {certificates.map((certificate, index) => (
              <motion.div
                key={certificate.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                {certificate.type === "image" ? (
                  // Image Certificate Card
                  <div className="relative h-full bg-gradient-to-br from-gray-900 to-gray-800/50 rounded-2xl p-6 border border-gray-700/50 hover:border-amber-500/50 transition-all duration-500 overflow-hidden">
                    {/* Animated Background */}
                    <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 to-orange-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    {/* Shimmer Effect */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                      <div className="animate-shimmer absolute inset-0 bg-[linear-gradient(110deg,transparent,rgba(251,191,36,0.1),transparent)] bg-[length:200%_100%]" />
                    </div>

                    <div className="relative z-10">
                      {/* Certificate Header */}
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center gap-3">
                          <div className="p-3 rounded-xl bg-gradient-to-br from-amber-500/20 to-orange-600/20 border border-amber-500/30">
                            <svg className="w-6 h-6 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                          </div>
                          <div>
                            <h3 className="text-xl font-bold text-white group-hover:text-amber-400 transition-colors">
                              {certificate.name}
                            </h3>
                            <p className="text-sm text-gray-400">Professional Certification</p>
                          </div>
                        </div>
                      </div>

                      {/* Certificate Image */}
                      <div className="rounded-xl overflow-hidden border border-gray-700/50 group-hover:border-amber-500/30 transition-all duration-500 mb-4">
                        <motion.img
                          src={certificate.src}
                          alt={certificate.name}
                          className="w-full h-auto"
                          whileHover={{ scale: 1.02 }}
                          transition={{ duration: 0.3 }}
                        />
                      </div>

                      {/* Footer */}
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-gray-500">Marvin Toh</span>
                        <motion.div
                          whileHover={{ x: 2 }}
                          className="flex items-center gap-1 text-sm text-amber-400 font-medium"
                        >
                          <span>View Certificate</span>
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </motion.div>
                      </div>
                    </div>

                    {/* Bottom Accent */}
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-500 to-orange-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                ) : (
                  // TestDome Certificate Card
                  <a
                    href={certificate.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block relative h-full bg-gradient-to-br from-gray-900 to-gray-800/50 rounded-2xl p-6 border border-gray-700/50 hover:border-blue-500/50 transition-all duration-500 overflow-hidden group"
                  >
                    {/* Animated Background */}
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    {/* Shimmer Effect */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                      <div className="animate-shimmer absolute inset-0 bg-[linear-gradient(110deg,transparent,rgba(59,130,246,0.1),transparent)] bg-[length:200%_100%]" />
                    </div>

                    <div className="relative z-10">
                      {/* Certificate Header */}
                      <div className="flex items-start justify-between mb-6">
                        <div className="flex items-center gap-3">
                          <div className="p-3 rounded-xl bg-gradient-to-br from-blue-500/20 to-purple-600/20 border border-blue-500/30">
                            <svg className="w-6 h-6 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                          </div>
                          <div>
                            <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                              {certificate.name}
                            </h3>
                            <p className="text-sm text-gray-400">TestDome Certification</p>
                          </div>
                        </div>
                      </div>

                      {/* Certificate Details */}
                      <div className="space-y-4 mb-6">
                        <div className="flex items-center gap-2">
                          <svg className="w-5 h-5 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                          </svg>
                          <span className="text-sm text-gray-300">Marvin Toh</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <svg className="w-5 h-5 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                          </svg>
                          <span className="text-sm text-gray-300">Verified by TestDome</span>
                        </div>
                      </div>

                      {/* View Certificate Button */}
                      <motion.div
                        whileHover={{ x: 2 }}
                        className="flex items-center justify-between px-4 py-3 rounded-lg bg-gray-800/50 border border-gray-700/50 group-hover:border-blue-500/50 transition-all duration-300"
                      >
                        <span className="text-sm font-medium text-gray-300 group-hover:text-blue-400 transition-colors">
                          View Certificate
                        </span>
                        <svg className="w-5 h-5 text-gray-400 group-hover:text-blue-400 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </motion.div>
                    </div>

                    {/* Bottom Accent */}
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </a>
                )}
              </motion.div>
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
        
        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
        .animate-shimmer {
          animation: shimmer 3s infinite;
        }
      `}</style>
    </div>
  );
}