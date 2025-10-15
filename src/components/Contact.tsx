"use client";
import React from "react";
import {
  FiUser,
  FiMail,
  FiPhone,
  FiMapPin,
  FiFacebook,
  FiInstagram,
  FiSend,
} from "react-icons/fi";
import { motion } from "framer-motion";

const contactInfo = [
  {
    icon: <FiUser />,
    label: "Name",
    value: "Marvin Toh",
    type: "text",
  },
  {
    icon: <FiMail />,
    label: "Email",
    value: "soulskate143@gmail.com",
    type: "email",
    href: "mailto:soulskate143@gmail.com",
  },
  {
    icon: <FiPhone />,
    label: "Phone",
    value: "09202075832",
    type: "tel",
    href: "tel:09202075832",
  },
  {
    icon: <FiMapPin />,
    label: "Location",
    value: "Tayud, Consolacion,\nCebu, Philippines",
    type: "text",
  },
];

const socialLinks = [
  {
    name: "Facebook",
    icon: <FiFacebook />,
    url: "https://www.facebook.com/marvin.toh.1",
    color: "from-blue-600 to-blue-400",
    hoverColor: "#1877F2",
  },
  {
    name: "Instagram",
    icon: <FiInstagram />,
    url: "https://www.instagram.com/dravenpvp?igsh=OGh0ano4NXN1OWE%3D&utm_source=qr",
    color: "from-pink-600 via-purple-600 to-orange-500",
    hoverColor: "#E4405F",
  },
];

const ContactSection = () => {
  return (
    <>
      <section id="contacts" style={{ padding: "80px 20px", position: "relative" }}>
        {/* Header with Badge */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-green-500/10 to-emerald-600/10 border border-green-500/20 backdrop-blur-sm mb-4"
            style={{ display: "inline-flex" }}
          >
            <FiSend className="w-4 h-4 text-green-400" />
            <span className="text-sm font-medium text-green-400">
              Let&apos;s Connect
            </span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-bold mb-4 relative">
            <span className="relative inline-block">
              Get In Touch
              <motion.span
                className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full"
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                transition={{ duration: 1, delay: 0.2 }}
                viewport={{ once: true }}
                style={{ display: "block" }}
              />
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? Feel free to reach out - I&apos;m always open to discussing new opportunities
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Contact Information Cards */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                <span className="w-1 h-8 bg-gradient-to-b from-green-500 to-emerald-600 rounded-full"></span>
                Contact Information
              </h3>

              {contactInfo.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -4, scale: 1.02 }}
                  className="group relative bg-gradient-to-br from-gray-900 to-gray-800/50 rounded-2xl p-6 border border-gray-700/50 hover:border-green-500/50 transition-all duration-500 overflow-hidden"
                >
                  {/* Animated Background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-emerald-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Shimmer Effect */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                    <div className="animate-shimmer absolute inset-0 bg-[linear-gradient(110deg,transparent,rgba(34,197,94,0.1),transparent)] bg-[length:200%_100%]" />
                  </div>

                  <div className="relative z-10 flex items-center gap-4">
                    {/* Icon */}
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className="p-4 rounded-xl bg-gradient-to-br from-green-500/20 to-emerald-600/20 border border-green-500/30 text-green-400 text-2xl"
                    >
                      {item.icon}
                    </motion.div>

                    {/* Content */}
                    <div className="flex-1">
                      <p className="text-sm text-gray-400 mb-1">{item.label}</p>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="text-lg font-semibold text-white hover:text-green-400 transition-colors duration-300"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-lg font-semibold text-white whitespace-pre-line">
                          {item.value}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Bottom Accent */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-green-500 to-emerald-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </motion.div>
              ))}
            </motion.div>

            {/* Social Media & CTA */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              {/* Social Links Card */}
              <div className="bg-gradient-to-br from-gray-900 to-gray-800/50 rounded-2xl p-8 border border-gray-700/50">
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                  <span className="w-1 h-8 bg-gradient-to-b from-green-500 to-emerald-600 rounded-full"></span>
                  Connect With Me
                </h3>

                <div className="grid grid-cols-2 gap-4 mb-8">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      whileHover={{ y: -8, scale: 1.05 }}
                      className="group relative bg-gradient-to-br from-gray-800 to-gray-700/50 rounded-xl p-6 border border-gray-600/50 hover:border-transparent transition-all duration-300 overflow-hidden"
                    >
                      {/* Gradient Background on Hover */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${social.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

                      {/* Content */}
                      <div className="relative z-10 flex flex-col items-center gap-3">
                        <div className="text-4xl text-gray-300 group-hover:text-white transition-colors duration-300">
                          {social.icon}
                        </div>
                        <span className="text-sm font-semibold text-gray-300 group-hover:text-white transition-colors duration-300">
                          {social.name}
                        </span>
                      </div>

                      {/* Shine Effect */}
                      <motion.div
                        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                        style={{
                          background: "linear-gradient(45deg, transparent 30%, rgba(255,255,255,0.1) 50%, transparent 70%)",
                          backgroundSize: "200% 200%",
                        }}
                        animate={{
                          backgroundPosition: ["0% 0%", "100% 100%"],
                        }}
                        transition={{
                          duration: 1.5,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                      />
                    </motion.a>
                  ))}
                </div>

                {/* Quick Stats */}
                <div className="grid grid-cols-2 gap-4">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="text-center p-4 bg-gray-800/50 rounded-xl border border-gray-700/50"
                  >
                    <div className="text-3xl font-bold text-green-400 mb-1">5+</div>
                    <div className="text-sm text-gray-400">Years Experience</div>
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="text-center p-4 bg-gray-800/50 rounded-xl border border-gray-700/50"
                  >
                    <div className="text-3xl font-bold text-green-400 mb-1">20+</div>
                    <div className="text-sm text-gray-400">Projects Completed</div>
                  </motion.div>
                </div>
              </div>

              {/* CTA Card */}
              <motion.div
                whileHover={{ y: -4 }}
                className="relative bg-gradient-to-br from-green-500/20 to-emerald-600/20 rounded-2xl p-8 border border-green-500/30 overflow-hidden"
              >
                {/* Animated Background */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-emerald-600/10"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.5, 0.3],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />

                <div className="relative z-10">
                  <h3 className="text-2xl font-bold text-white mb-3">
                    Ready to Start a Project?
                  </h3>
                  <p className="text-gray-300 mb-6">
                    Let&apos;s discuss how we can work together to bring your ideas to life
                  </p>
                  <motion.a
                    href="mailto:soulskate143@gmail.com"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-semibold rounded-full shadow-lg shadow-green-500/30 hover:shadow-green-500/50 transition-all duration-300"
                  >
                    <FiSend className="text-lg" />
                    Send a Message
                  </motion.a>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Enhanced Footer */}
      <footer className="relative bg-gradient-to-br from-gray-900 to-gray-800/50 border-t border-gray-700/50 py-8">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row items-center justify-between gap-4"
          >
            {/* Copyright */}
            <div className="flex items-center gap-2">
              <span className="text-gray-400">© 2025</span>
              <span className="font-semibold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                Marvin Toh
              </span>
              <span className="text-gray-400">• All rights reserved</span>
            </div>

            {/* Quick Links */}
            <div className="flex items-center gap-6 text-sm text-gray-400">
              <motion.a
                href="#about"
                whileHover={{ scale: 1.05, color: "#4ade80" }}
                className="hover:text-green-400 transition-colors"
              >
                About
              </motion.a>
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.05, color: "#4ade80" }}
                className="hover:text-green-400 transition-colors"
              >
                Projects
              </motion.a>
              <motion.a
                href="#contacts"
                whileHover={{ scale: 1.05, color: "#4ade80" }}
                className="hover:text-green-400 transition-colors"
              >
                Contact
              </motion.a>
            </div>
          </motion.div>
        </div>
      </footer>

      {/* Shimmer Animation */}
      <style jsx>{`
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
    </>
  );
};

export default ContactSection;