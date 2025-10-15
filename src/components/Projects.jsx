"use client";
import { useRef, useState } from "react";
import styles from "../app/page.module.css";
import Modal from "@mui/material/Modal";
import { Box, IconButton, Typography, Link, Chip, Fade, Backdrop } from "@mui/material";
import { IoClose, IoRocketOutline, IoCodeSlashOutline } from "react-icons/io5";
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
import { FaReact, FaPhp } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const softwareProjects = [
  {
    title: "Stars",
    description:
      "A comprehensive digital platform designed to monitor, analyze, and optimize maritime operations in real time",
    description2:
      "A comprehensive digital solution that integrates advanced technologies to monitor, analyze, and optimize maritime activities in real time. Designed for ports, shipping companies, and logistics operators, the platform enhances safety, efficiency, and compliance across maritime ecosystems.",
    images: [
      "/images/stars/stars_laptop.png",
      "/images/stars/2.png",
      "/images/stars/3.png",
      "/images/stars/4.png",
      "/images/stars/5.png",
      "/images/stars/6.png",
      "/images/stars/7.png",
      "/images/stars/8.png",
      "/images/stars/9.png",
      "/images/stars/10.png",
      "/images/stars/11.png",
      "/images/stars/12.png",
      "/images/stars/13.png",
    ],
    languages: [
      { name: "Next.js", logo: "/images/icons/nextjs.png" },
  { name: "Redis", icon: <SiRedis style={{ color: '#d82c20', fontSize: 28 }} /> },
  { name: "Firebase", icon: <SiFirebase style={{ color: '#ffcb2b', fontSize: 28 }} /> },
  { name: "MariaDB", icon: <SiMariadb style={{ color: '#003545', fontSize: 28 }} /> },
      { name: "PHP", logo: "/images/icons/php.png" }
    ],
    tags: ["Web Platform", "Real-time", "Analytics"],
    web: "https://stars.avegabros.org",
  },
  {
    title: "Master 360 Bidding",
    description:
      "A digital bidding platform for property and asset auctions, featuring real-time updates and secure transactions.",
    description2:
      "An advanced web application designed for property and asset bidding, enabling users to participate in auctions, track bids, and manage transactions securely. The platform provides a seamless experience with real-time notifications and transparent processes.",
    images: [
      "/images/bidding/image (1).png",
      "/images/bidding/image (2).png",
      "/images/bidding/image (3).png",
      "/images/bidding/image (4).png",
      "/images/bidding/image (5).png",
      "/images/bidding/image (6).png",
      "/images/bidding/image (7).png",
      "/images/bidding/image.png",
    ],
    languages: [
      { name: "React", icon: <FaReact style={{ color: '#61dafb', fontSize: 28 }} /> },
      { name: "PHP (Laravel)", icon: <FaPhp style={{ color: '#4F5B93', fontSize: 28 }} /> },
      { name: "Postgres", icon: <SiPostgresql style={{ color: '#336791', fontSize: 28 }} /> },
      { name: "Redis", icon: <SiRedis style={{ color: '#d82c20', fontSize: 28 }} /> },
      { name: "Docker", icon: <SiDocker style={{ color: '#2496ed', fontSize: 28 }} /> }
    ],
    tags: ["Bidding", "Auction", "Web Platform"],
    web: undefined,
  },
  {
    title: "Digital Titling and Registration",
    description:
      "A digital titling management system for property documentation and verification.",
    description2:
      "A robust web solution for managing property titles, documentation, and verification processes. The platform streamlines title transfers, document uploads, and compliance checks, ensuring secure and efficient property management.",
    images: [
      "/images/titling/stars_laptop.png",
      "/images/titling/image (1).png",
      "/images/titling/image (2).png",
      "/images/titling/image (3).png",
      "/images/titling/image (4).png",
      "/images/titling/image (5).png",
      "/images/titling/image (6).png",
      "/images/titling/image (7).png",
      "/images/titling/image (8).png",
      "/images/titling/image (9).png",
      "/images/titling/image (10).png",
      "/images/titling/image.png",
    ],
    languages: [
      { name: "React", icon: <FaReact style={{ color: '#61dafb', fontSize: 28 }} /> },
      { name: "PHP (Laravel)", icon: <FaPhp style={{ color: '#4F5B93', fontSize: 28 }} /> },
      { name: "Postgres", icon: <SiPostgresql style={{ color: '#336791', fontSize: 28 }} /> },
      { name: "Redis", icon: <SiRedis style={{ color: '#d82c20', fontSize: 28 }} /> },
      { name: "Docker", icon: <SiDocker style={{ color: '#2496ed', fontSize: 28 }} /> }
    ],
    tags: ["Titling", "Property", "Web Platform"],
    web: undefined,
  },
  {
    title: "Nayuta Inquiry",
    description:
      "A digital platform that automates request management, enabling users to submit, and resolve queries in real time",
    description2:
      "A dynamic digital platform that streamlines request management, empowering users to effortlessly submit, track, and resolve queries in real-time with enhanced efficiency and transparency.",
    images: [
      "/images/inquiry/nayuta_laptop.png",
      "/images/inquiry/2.jpg",
      "/images/inquiry/3.jpg",
      "/images/inquiry/4.jpg",
      "/images/inquiry/5.jpg",
      "/images/inquiry/6.jpg",
      "/images/inquiry/7.jpg",
    ],
    languages: [
      { name: "PHP", logo: "/images/icons/php.png" },
      { name: "MySQL", icon: <SiMysql style={{ color: '#00758f', fontSize: 28 }} /> },
      { name: "Redis", icon: <SiRedis style={{ color: '#d82c20', fontSize: 28 }} /> }
    ],
    tags: ["Automation", "CRM", "Dashboard"],
  },
  {
    title: "Ehome",
    description:
      "A cutting-edge ecosystem that seamlessly integrates smart appliance control with robust security protocols",
    description2:
      "A cutting-edge mobile IoT ecosystem that seamlessly integrates smart appliance control with advanced security protocols, enabling real-time automation, remote monitoring, and AI-driven insights for a smarter and more secure connected experience.",
    images: [
      "/images/ehome/ehome_phone.png",
      "/images/ehome/2.jpg",
      "/images/ehome/3.jpg",
      "/images/ehome/4.jpg",
      "/images/ehome/5.jpg",
      "/images/ehome/6.jpg",
      "/images/ehome/7.jpg",
    ],
    languages: [
      { name: "Kotlin", logo: "/images/icons/kotlin.png" },
      { name: "Firebase", icon: <SiFirebase style={{ color: '#ffcb2b', fontSize: 28 }} /> },
      { name: "MySQL", icon: <SiMysql style={{ color: '#00758f', fontSize: 28 }} /> }
    ],
    tags: ["IoT", "Mobile", "Smart Home"],
  },
];

const hardwareProjects = [
  {
    title: "GPS",
    description:
      "The hardware system used for my STARS project, used for retrieving NMEA data",
    description2:
      "GPS that enables real-time location tracking, smart navigation, and seamless data integration, ensuring precise positioning, enhanced security, and optimized fleet or personal mobility management.",
    images: [
      "/images/gps/gps_dslr.png",
      "/images/gps/5.mp4",
      "/images/gps/3.jpg",
      "/images/gps/4.jpg",
      "/images/gps/2.jpg",
      "/images/gps/6.mp4",
    ],
    languages: [{ name: "Java", logo: "/images/icons/java.png" }],
    tags: ["GPS", "Tracking", "IoT"],
  },
  {
    title: "Disaster",
    description:
      "A hardware system used in remote locations to detect floods, rain, wind, and alarm",
    description2:
      "A rugged IoT-enabled hardware system designed for remote locations, capable of detecting floods, rainfall, and wind conditions in real time. Equipped with smart sensors and an automated alarm system, it ensures early warnings, enhances disaster preparedness, and enables rapid response to environmental hazards.",
    images: [
      "/images/disaster/disaster_dslr.png",
      "/images/disaster/2.jpg",
      "/images/disaster/3.jpg",
      "/images/disaster/4.jpg",
      "/images/disaster/5.jpg",
    ],
    languages: [{ name: "Java", logo: "/images/icons/java.png" }],
    tags: ["Sensors", "Safety", "Alert System"],
  },
  {
    title: "Cloud Biometrics",
    description:
      "A biometrics prototype used for remote locations directly connected to Firebase",
    description2:
      "A biometrics prototype designed for remote locations, seamlessly integrated with Firebase for real-time authentication and secure data storage. Equipped with advanced fingerprint recognition technology, it enables instant identity verification, remote access control, and centralized user management with cloud-based synchronization.",
    images: [
      "/images/bio/bio_dslr.png",
      "/images/bio/2.jpg",
      "/images/bio/3.mp4",
      "/images/bio/4.mp4",
    ],
    languages: [{ name: "Java", logo: "/images/icons/java.png" }],
    tags: ["Biometrics", "Security", "Cloud"],
  },
  {
    title: "IP Cam",
    description:
      "ESP32 Camera prototype used for remote streaming and recording",
    description2:
      "ESP32 Camera prototype used for remote streaming and recording",
    images: [
      "/images/cam/cam_dslr.png",
      "/images/cam/2.jpg",
      "/images/cam/3.jpg",
      "/images/cam/5.mp4",
    ],
    languages: [{ name: "Java", logo: "/images/icons/java.png" }],
    tags: ["Camera", "Streaming", "ESP32"],
  },
];

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState("software");
  const [selectedProject, setSelectedProject] = useState(null);
  const [open, setOpen] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const projectsToDisplay =
    selectedCategory === "software" ? softwareProjects : hardwareProjects;
  const swiperRef = useRef(null);

  const handleCardClick = (index) => {
    if (swiperRef.current) {
      swiperRef.current.slideTo(index, 500);
    }
  };

  const handleOpen = (project) => {
    setSelectedProject(project);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setTimeout(() => setSelectedProject(null), 300);
  };

  return (
    <section id="projects" className={styles.projects} style={{ padding: "80px 20px", position: "relative" }}>
      {/* Header with Badge */}
      <div className="text-center mb-12">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-600/10 border border-blue-500/20 backdrop-blur-sm mb-4"
          style={{ display: "inline-flex" }}
        >
          <svg className="w-4 h-4 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm5 6a1 1 0 10-2 0v3.586l-1.293-1.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 11.586V8z" clipRule="evenodd" />
          </svg>
          <span className="text-sm font-medium text-blue-400">
            Featured Work
          </span>
        </motion.div>

        <h2 className="text-4xl md:text-5xl font-bold mb-4 relative">
          <span className="relative inline-block">
            Projects Portfolio
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
          Innovative solutions bridging software and hardware - from web platforms to IoT systems
        </p>
      </div>

      {/* Enhanced Toggle Buttons */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        style={{ display: "flex", justifyContent: "center", marginBottom: "4rem" }}
      >
        <div style={{
          position: "relative",
          display: "inline-flex",
          background: "rgba(255, 255, 255, 0.05)",
          backdropFilter: "blur(10px)",
          borderRadius: "50px",
          padding: "6px",
          boxShadow: "0 4px 20px rgba(0, 0, 0, 0.3), inset 0 1px 2px rgba(255, 255, 255, 0.1)",
          border: "1px solid rgba(255, 255, 255, 0.1)",
        }}>
          {/* Sliding Background */}
          <motion.div
            animate={{
              x: selectedCategory === "software" ? 0 : "100%",
            }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            style={{
              position: "absolute",
              top: "6px",
              left: "6px",
              width: "calc(50% - 6px)",
              height: "calc(100% - 12px)",
              background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
              borderRadius: "50px",
              boxShadow: "0 4px 12px rgba(102, 126, 234, 0.4)",
            }}
          />
          
          <button
            onClick={() => setSelectedCategory("software")}
            style={{
              position: "relative",
              padding: "12px 32px",
              border: "none",
              background: "transparent",
              color: selectedCategory === "software" ? "#fff" : "#94a3b8",
              fontWeight: 600,
              fontSize: "16px",
              cursor: "pointer",
              transition: "color 0.3s",
              display: "flex",
              alignItems: "center",
              gap: "8px",
              zIndex: 1,
            }}
          >
            <IoCodeSlashOutline size={20} />
            Software
          </button>
          
          <button
            onClick={() => setSelectedCategory("hardware")}
            style={{
              position: "relative",
              padding: "12px 32px",
              border: "none",
              background: "transparent",
              color: selectedCategory === "hardware" ? "#fff" : "#94a3b8",
              fontWeight: 600,
              fontSize: "16px",
              cursor: "pointer",
              transition: "color 0.3s",
              display: "flex",
              alignItems: "center",
              gap: "8px",
              zIndex: 1,
            }}
          >
            <IoRocketOutline size={20} />
            Hardware
          </button>
        </div>
      </motion.div>

      {/* Enhanced Swiper */}
      <AnimatePresence mode="wait">
        <motion.div
          key={selectedCategory}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.4 }}
        >
          <Swiper
            ref={swiperRef}
            modules={[Navigation, Pagination, EffectCoverflow]}
            breakpoints={{
              320: {
                slidesPerView: 1.2,
                spaceBetween: 30,
              },
              640: {
                slidesPerView: 1.8,
                spaceBetween: 40,
              },
              1024: {
                slidesPerView: 2.5,
                spaceBetween: 50,
              },
            }}
            navigation={false}
            effect="coverflow"
            centeredSlides={true}
            coverflowEffect={{
              rotate: 15,
              stretch: 30,
              depth: 150,
              modifier: 2,
              slideShadows: true,
            }}
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            className={styles.swiperContainer}
            style={{ padding: "60px 0 80px" }}
          >
            {projectsToDisplay.map((project, index) => (
              <SwiperSlide key={index} className={styles.cardSlide}>
                <div
                  style={{
                    cursor: "pointer",
                    display: "flex",
                    flexDirection: "column",
                    gap: "24px",
                  }}
                  onClick={() => handleOpen(project)}
                >
                  {/* Floating Mockup Image with Tags */}
                  <motion.div
                    onHoverStart={() => setHoveredIndex(index)}
                    onHoverEnd={() => setHoveredIndex(null)}
                    whileHover={{ y: -12, scale: 1.02 }}
                    style={{
                      position: "relative",
                      width: "100%",
                      transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                    }}
                  >
                    {/* Technology Tags Overlay */}
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      style={{
                        position: "absolute",
                        top: "20px",
                        left: "20px",
                        display: "flex",
                        gap: "8px",
                        flexWrap: "wrap",
                        zIndex: 2,
                      }}
                    >
                      {project.tags?.slice(0, 2).map((tag, i) => (
                        <span
                          key={i}
                          style={{
                            padding: "8px 16px",
                            background: "rgba(255, 255, 255, 0.95)",
                            backdropFilter: "blur(10px)",
                            borderRadius: "24px",
                            fontSize: "13px",
                            fontWeight: 700,
                            color: "#667eea",
                            boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
                            border: "1px solid rgba(102, 126, 234, 0.2)",
                          }}
                        >
                          {tag}
                        </span>
                      ))}
                    </motion.div>

                    {/* Mockup Image */}
                    <img
                      src={project.images[0]}
                      alt={project.title}
                      className={styles.projectImage}
                      style={{
                        width: "100%",
                        height: "auto",
                        display: "block",
                        filter: hoveredIndex === index 
                          ? "drop-shadow(0 25px 50px rgba(102, 126, 234, 0.35))" 
                          : "drop-shadow(0 15px 35px rgba(0, 0, 0, 0.2))",
                        transition: "filter 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                      }}
                    />
                  </motion.div>

                  {/* Content Card Below Image */}
                  <motion.div
                    whileHover={{ y: -4 }}
                    style={{
                      background: "rgba(255, 255, 255, 0.03)",
                      backdropFilter: "blur(20px)",
                      borderRadius: "24px",
                      padding: "24px",
                      boxShadow: hoveredIndex === index 
                        ? "0 20px 60px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(102, 126, 234, 0.3)"
                        : "0 10px 30px rgba(0, 0, 0, 0.2), 0 0 0 1px rgba(255, 255, 255, 0.05)",
                      transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                      border: "1px solid rgba(255, 255, 255, 0.1)",
                    }}
                  >
                    <h3 style={{
                      fontSize: "26px",
                      fontWeight: 700,
                      marginBottom: "12px",
                      background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}>
                      {project.title}
                    </h3>
                    
                    <p style={{
                      fontSize: "15px",
                      color: "#94a3b8",
                      lineHeight: "1.7",
                      marginBottom: "20px",
                    }}>
                      {project.description}
                    </p>

                    {/* Languages and CTA */}
                    <div style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      paddingTop: "16px",
                      borderTop: "1px solid rgba(255, 255, 255, 0.05)",
                    }}>
                      <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
                        {project.languages?.map((language, i) => (
                          <div
                            key={i}
                            style={{
                              width: "32px",
                              height: "32px",
                              position: "relative",
                              borderRadius: "8px",
                              padding: "6px",
                              background: "rgba(102, 126, 234, 0.1)",
                              boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center"
                            }}
                          >
                            {language.logo && language.logo !== "" ? (
                              language.name === "Next.js" ? (
                                <div style={{
                                  width: "100%",
                                  height: "100%",
                                  borderRadius: "50%",
                                  background: "#fff",
                                  display: "flex",
                                  alignItems: "center",
                                  justifyContent: "center",
                                  boxShadow: "0 2px 8px rgba(0,0,0,0.08)"
                                }}>
                                  <Image
                                    src={language.logo}
                                    alt={language.name}
                                    layout="fill"
                                    objectFit="contain"
                                    style={{ filter: "drop-shadow(0 0 2px #fff)" }}
                                  />
                                </div>
                              ) : (
                                <Image
                                  src={language.logo}
                                  alt={language.name}
                                  layout="fill"
                                  objectFit="contain"
                                />
                              )
                            ) : null}
                            {language.icon ? language.icon : null}
                          </div>
                        ))}
                      </div>
                      
                      <motion.span
                        style={{
                          fontSize: "15px",
                          fontWeight: 700,
                          color: "#667eea",
                          display: "flex",
                          alignItems: "center",
                          gap: "6px",
                        }}
                        whileHover={{ x: 4 }}
                      >
                        View Details →
                      </motion.span>
                    </div>
                  </motion.div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </AnimatePresence>

      {/* Enhanced Modal (same as before) */}
      <Modal
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
          sx: {
            backdropFilter: "blur(8px)",
            backgroundColor: "rgba(0, 0, 0, 0.7)",
          },
        }}
      >
        <Fade in={open}>
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: { xs: "95%", sm: "85%", md: "70%", lg: "60%" },
              maxWidth: "900px",
              maxHeight: "90vh",
              overflowY: "auto",
              background: "linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(255, 255, 255, 0.98) 100%)",
              backdropFilter: "blur(20px)",
              padding: { xs: "24px", sm: "32px", md: "40px" },
              borderRadius: "24px",
              boxShadow: "0 25px 80px rgba(0, 0, 0, 0.3)",
              border: "1px solid rgba(255, 255, 255, 0.3)",
              outline: "none",
              "&::-webkit-scrollbar": {
                width: "8px",
              },
              "&::-webkit-scrollbar-track": {
                background: "transparent",
              },
              "&::-webkit-scrollbar-thumb": {
                background: "rgba(102, 126, 234, 0.3)",
                borderRadius: "4px",
              },
            }}
          >
            <IconButton
              onClick={handleClose}
              sx={{
                position: "absolute",
                top: { xs: 16, sm: 20 },
                right: { xs: 16, sm: 20 },
                background: "rgba(255, 255, 255, 0.9)",
                backdropFilter: "blur(10px)",
                boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
                transition: "all 0.3s",
                zIndex: 10,
                "&:hover": {
                  background: "#fee",
                  transform: "rotate(90deg)",
                  boxShadow: "0 6px 16px rgba(255, 0, 0, 0.2)",
                },
              }}
            >
              <IoClose size={24} color="#333" />
            </IconButton>

            {selectedProject && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Typography
                  variant="h4"
                  fontWeight="bold"
                  textAlign="center"
                  sx={{
                    background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                    marginBottom: "16px",
                  }}
                >
                  {selectedProject.title}
                </Typography>

                <Typography
                  variant="body1"
                  textAlign="center"
                  sx={{
                    color: "#64748b",
                    marginBottom: "32px",
                    lineHeight: 1.8,
                    maxWidth: "700px",
                    margin: "0 auto 32px",
                  }}
                >
                  {selectedProject.description2}
                </Typography>

                <Box sx={{ display: "flex", justifyContent: "center", gap: 1, flexWrap: "wrap", marginBottom: 3 }}>
                  {selectedProject.tags?.map((tag, i) => (
                    <Chip
                      key={i}
                      label={tag}
                      size="small"
                      sx={{
                        background: "linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(118, 75, 162, 0.1) 100%)",
                        color: "#667eea",
                        fontWeight: 600,
                        border: "1px solid rgba(102, 126, 234, 0.2)",
                      }}
                    />
                  ))}
                </Box>

                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 3,
                    marginBottom: 4,
                    padding: "20px",
                    background: "rgba(102, 126, 234, 0.05)",
                    borderRadius: "16px",
                    flexWrap: "wrap",
                  }}
                >
                  <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
                    <Typography variant="body2" fontWeight="600" color="#64748b">
                      Built with:
                    </Typography>
                    {selectedProject.languages?.map((language, index) => (
                      <Box
                        key={index}
                        sx={{
                          width: 32,
                          height: 32,
                          position: "relative",
                          background: "#fff",
                          borderRadius: "8px",
                          padding: "6px",
                          boxShadow: "0 2px 8px rgba(0, 0, 0, 0.08)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center"
                        }}
                      >
                        {language.logo && language.logo !== "" ? (
                          <Image
                            src={language.logo}
                            alt={language.name}
                            layout="fill"
                            objectFit="contain"
                          />
                        ) : null}
                        {language.icon ? language.icon : null}
                      </Box>
                    ))}
                  </Box>

                  {selectedProject.web && (
                    <Link
                      href={selectedProject.web}
                      target="_blank"
                      rel="noopener noreferrer"
                      underline="none"
                      sx={{
                        padding: "10px 24px",
                        background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                        color: "#fff",
                        borderRadius: "50px",
                        fontWeight: 600,
                        fontSize: "14px",
                        transition: "all 0.3s",
                        boxShadow: "0 4px 12px rgba(102, 126, 234, 0.3)",
                        "&:hover": {
                          transform: "translateY(-2px)",
                          boxShadow: "0 6px 20px rgba(102, 126, 234, 0.4)",
                        },
                      }}
                    >
                      Visit Website →
                    </Link>
                  )}
                </Box>

                <Box
                  sx={{
                    borderRadius: "16px",
                    overflow: "hidden",
                    boxShadow: "0 10px 40px rgba(0, 0, 0, 0.1)",
                  }}
                >
                  <Swiper
                    modules={[Pagination, Navigation]}
                    spaceBetween={20}
                    slidesPerView={1}
                    navigation
                    pagination={{ clickable: true }}
                    loop
                    style={{ borderRadius: "16px" }}
                  >
                    {selectedProject.images.map((image, index) => (
                      <SwiperSlide key={index}>
                        {image.endsWith(".mp4") ? (
                          <video
                            controls
                            style={{
                              width: "100%",
                              height: "450px",
                              objectFit: "contain",
                              borderRadius: "16px",
                              backgroundColor: "#000",
                            }}
                          >
                            <source src={image} type="video/mp4" />
                            Your browser does not support the video tag.
                          </video>
                        ) : (
                          <div
                            style={{
                              width: "100%",
                              height: "450px",
                              display: "flex",
                              justifyContent: "center",
                              alignItems: "center",
                              background: "linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)",
                              borderRadius: "16px",
                            }}
                          >
                            <img
                              src={image}
                              alt={`Slide ${index + 1}`}
                              style={{
                                maxWidth: "100%",
                                maxHeight: "100%",
                                objectFit: "contain",
                                borderRadius: "12px",
                              }}
                            />
                          </div>
                        )}
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </Box>
              </motion.div>
            )}
          </Box>
        </Fade>
      </Modal>
    </section>
  );
}