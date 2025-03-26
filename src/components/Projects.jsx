"use client";
import { useRef, useState } from "react";
import styles from "../app/page.module.css";
import Modal from "@mui/material/Modal";
import { Box, IconButton, Typography, Link } from "@mui/material";
import { IoClose } from "react-icons/io5";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

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
    languages: [{ name: "Next.js", logo: "/images/icons/nextjs.png" }],
    web: "https://stars.avegabros.org",
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
    languages: [{ name: "php", logo: "/images/icons/php.png" }],
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
    languages: [{ name: "Kotlin", logo: "/images/icons/kotlin.png" }],
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
    languages: [{ name: "Java", logo: "/images/icons/Java.png" }],
    languages: [{ name: "Java", logo: "/images/icons/java.png" }],
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
    languages: [{ name: "Java", logo: "/icons/Java.png" }],
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
    languages: [{ name: "Java", logo: "/images/icons/Java.png" }],
  },
];

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState("software");
  const [selectedProject, setSelectedProject] = useState(null);
  const [open, setOpen] = useState(false);

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
    setSelectedProject(null);
  };

  return (
    <section id="projects" className={styles.projects}>
      <h2 className="text-4xl font-bold text-center mb-16 relative">
        <span className="relative inline-block">
          Projects
          <motion.span
            className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-blue-500 to-purple-600"
            initial={{ width: 0 }}
            whileInView={{ width: "100%" }}
            transition={{ duration: 1, delay: 0.2 }}
            viewport={{ once: true }}
          />
        </span>
      </h2>

      <div
        className={`${styles.toggleContainer} ${
          selectedCategory === "hardware" ? styles.hardware : ""
        }`}
      >
        <button
          className={`${styles.toggleButton} ${
            selectedCategory === "software" ? styles.active : ""
          }`}
          onClick={() => setSelectedCategory("software")}
        >
          Software
        </button>
        <button
          className={`${styles.toggleButton} ${
            selectedCategory === "hardware" ? styles.active : ""
          }`}
          onClick={() => setSelectedCategory("hardware")}
        >
          Hardware
        </button>
      </div>

      <Swiper
        ref={swiperRef}
        modules={[Navigation, Pagination, EffectCoverflow]}
        breakpoints={{
          320: {
            slidesPerView: 1.5,
            spaceBetween: 20, // Reduced space between slides
            coverflowEffect: {
              rotate: 10, // Reduced rotation
              stretch: 0, // No stretch
              depth: 800, // Reduced depth
              modifier: 1,
              slideShadows: true,
            },
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
            coverflowEffect: {
              rotate: 15,
              stretch: 20,
              depth: 1200,
              modifier: 1,
              slideShadows: true,
            },
          },
          1024: {
            slidesPerView: 2.5,
            spaceBetween: 20,
            coverflowEffect: {
              rotate: 20,
              stretch: 50,
              depth: 2000,
              modifier: 1,
              slideShadows: true,
            },
          },
        }}
        spaceBetween={10}
        slidesPerView={2.5}
        navigation={false}
        effect="coverflow"
        centeredSlides={true}
        coverflowEffect={{
          rotate: 20,
          stretch: 50,
          depth: 2000,
          modifier: 1,
          slideShadows: true,
        }}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        className={styles.swiperContainer}
      >
        {projectsToDisplay.map((project, index) => (
          <SwiperSlide key={index} className={styles.cardSlide}>
            <img
              src={project.images[0]}
              alt={project.title}
              className={styles.projectImage}
              onClick={() => handleCardClick(index)}
              style={{
                width: "100%",
                height: "auto",
                // Add mobile-specific styling
                "@media (maxWidth: 640px)": {
                  maxWidth: "90vw",
                  margin: "0 auto",
                },
              }}
            />

            {/* Content below the image */}
            <div className={styles.projectText}>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <button
                className={styles.projectLink}
                onClick={() => handleOpen(project)}
              >
                <span>Visit Project</span>
              </button>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Modal for Project Details */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="project-modal-title"
        aria-describedby="project-modal-description"
      >
        <Box
          sx={{
            width: { xs: "95%", sm: "80%", md: "60%" },
            maxWidth: "800px",
            margin: "auto",
            backgroundColor: "#fff",
            padding: { xs: "16px", sm: "24px", md: "32px" },
            borderRadius: "12px",
            marginTop: "5%",
            position: "relative",
            boxShadow: "0px 15px 35px rgba(0, 0, 0, 0.3)",
          }}
        >
          {/* Close Button */}
          <IconButton
            onClick={handleClose}
            sx={{
              position: "absolute",
              top: 16,
              right: 16,
              color: "#333",
              transition: "0.3s",
              "&:hover": { color: "#ff5722" },
            }}
          >
            <IoClose size={28} />
          </IconButton>

          {/* Modal Content */}
          {selectedProject && (
            <>
              <Typography
                id="project-modal-title"
                variant="h5"
                fontWeight="bold"
                textAlign="center"
                gutterBottom
              >
                {selectedProject.title}
              </Typography>
              <Typography
                id="project-modal-description"
                variant="body1"
                textAlign="center"
                color="text.secondary"
                sx={{ marginBottom: "16px" }}
              >
                {selectedProject.description2}
              </Typography>

              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 2,
                  marginBottom: 3,
                }}
              >
                {/* "Language Use:" Text */}
                <Typography variant="h6">Language Use:</Typography>

                {/* Logos of Used Programming Languages */}
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 1,
                  }}
                >
                  {selectedProject.languages?.map((language, index) => (
                    <Box
                      key={index}
                      sx={{ width: 40, height: 40, position: "relative" }}
                    >
                      <Image
                        src={language.logo}
                        alt={language.name}
                        layout="fill"
                        objectFit="contain"
                      />
                    </Box>
                  ))}
                </Box>

                {/* Website Link */}
                {selectedProject.web && (
                  <Link
                    href={selectedProject.web}
                    target="_blank"
                    rel="noopener noreferrer"
                    underline="hover"
                    sx={{ fontWeight: "bold", fontSize: "1rem" }}
                  >
                    Visit Website
                  </Link>
                )}
              </Box>

              {/* Swiper Carousel */}
              <Swiper
                modules={[Pagination, Navigation]}
                spaceBetween={20}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                loop
                autoplay={{ delay: 3000 }}
                className={styles.swiperContainer}
                style={{ borderRadius: "8px", overflow: "hidden" }}
              >
                {selectedProject.images.map((image, index) => (
                  <SwiperSlide key={index}>
                    {image.endsWith(".mp4") ? (
                      // Video remains the same
                      <video
                        controls
                        style={{
                          width: "100%",
                          height: "350px",
                          maxHeight: "400px",
                          objectFit: "contain",
                          borderRadius: "8px",
                          backgroundColor: "#000",
                        }}
                      >
                        <source src={image} type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                    ) : (
                      // Changed image styling
                      <div
                        style={{
                          width: "100%",
                          height: "400px", // Increased height
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          backgroundColor: "#f5f5f5", // Add background for letterboxing
                          borderRadius: "8px",
                        }}
                      >
                        <img
                          src={image}
                          alt={`Slide ${index + 1}`}
                          style={{
                            maxWidth: "100%",
                            maxHeight: "100%",
                            objectFit: "contain",
                            borderRadius: "8px",
                            boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.2)",
                          }}
                        />
                      </div>
                    )}
                  </SwiperSlide>
                ))}
              </Swiper>
            </>
          )}
        </Box>
      </Modal>
    </section>
  );
}
