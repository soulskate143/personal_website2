"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { 
  FaCamera, 
  FaMusic, 
  FaBiking, 
  FaRunning, 
  FaHiking, 
  FaFish, 
  FaMotorcycle,
  FaSkating,
  FaCode,
  FaPlane,
  FaVideo,
  FaTableTennis
} from "react-icons/fa";
import { GiShuttlecock, GiTennisCourt } from "react-icons/gi";

// Hobbies with categories and icons
const hobbies = [
  { title: "Photography", type: "image", src: "/hobbies/photography.jpg", category: "Creative", icon: <FaCamera /> },
  { title: "Music", type: "video", src: "/hobbies/music.mp4", category: "Creative", icon: <FaMusic /> },
  { title: "Badminton", type: "video", src: "/hobbies/badminton.mp4", category: "Sports", icon: <GiShuttlecock /> },
  { title: "Riding", type: "video", src: "/hobbies/motor.mp4", category: "Adventure", icon: <FaMotorcycle /> },
  { title: "Biking", type: "video", src: "/hobbies/bike.mp4", category: "Sports", icon: <FaBiking /> },
  { title: "Hiking", type: "image", src: "/hobbies/hiking.jpg", category: "Adventure", icon: <FaHiking /> },
  { title: "Fishing", type: "image", src: "/hobbies/fishing.jpg", category: "Outdoor", icon: <FaFish /> },
  { title: "Motocross", type: "image", src: "/hobbies/motox.jpg", category: "Adventure", icon: <FaMotorcycle /> },
  { title: "Pickleball", type: "video", src: "/hobbies/pickle.mp4", category: "Sports", icon: <FaTableTennis /> },
  { title: "Running", type: "image", src: "/hobbies/running.jpg", category: "Sports", icon: <FaRunning /> },
  { title: "Ice Skating", type: "video", src: "/hobbies/skate.mp4", category: "Sports", icon: <FaSkating /> },
  { title: "Tennis", type: "video", src: "/hobbies/tennis.mp4", category: "Sports", icon: <GiTennisCourt /> },
  { title: "Traveling", type: "video", src: "/hobbies/travel.mp4", category: "Adventure", icon: <FaPlane /> },
  { title: "Videography", type: "video", src: "/hobbies/video.mp4", category: "Creative", icon: <FaVideo /> },
  { title: "Coding", type: "video", src: "/hobbies/code.mp4", category: "Tech", icon: <FaCode /> },
];

const categories = ["All", "Sports", "Creative", "Adventure", "Outdoor", "Tech"];

const categoryColors = {
  Sports: "from-blue-500 to-cyan-500",
  Creative: "from-purple-500 to-pink-500",
  Adventure: "from-orange-500 to-red-500",
  Outdoor: "from-green-500 to-emerald-500",
  Tech: "from-indigo-500 to-blue-500",
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: (index: number) => ({
    opacity: 1,
    scale: 1,
    transition: { duration: 0.4, delay: index * 0.05, ease: "easeOut" },
  }),
  exit: { opacity: 0, scale: 0.9, transition: { duration: 0.2 } },
};

const Hobbies = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const memoizedHobbies = useMemo(() => hobbies, []);

  const filteredHobbies = useMemo(() => {
    if (selectedCategory === "All") return memoizedHobbies;
    return memoizedHobbies.filter(hobby => hobby.category === selectedCategory);
  }, [selectedCategory, memoizedHobbies]);

  return (
    <section className="py-20 px-4 bg-transparent">
      {/* Header */}
      <div className="text-center mb-12">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/10 to-pink-600/10 border border-purple-500/20 backdrop-blur-sm mb-4"
        >
          <svg className="w-4 h-4 text-purple-400" fill="currentColor" viewBox="0 0 20 20">
            <path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z" />
          </svg>
          <span className="text-sm font-medium text-purple-400">
            Beyond the Code
          </span>
        </motion.div>

        <h2 className="text-4xl md:text-5xl font-bold mb-4 relative">
          <span className="relative inline-block">
            Hobbies & Interests
            <motion.span
              className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full"
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              transition={{ duration: 1, delay: 0.2 }}
              viewport={{ once: true }}
              style={{ display: "block" }}
            />
          </span>
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          When I&apos;m not building software, you&apos;ll find me staying active and exploring new adventures
        </p>
      </div>

      {/* Category Filter */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="flex flex-wrap justify-center gap-3 mb-12 max-w-4xl mx-auto"
      >
        {categories.map((category) => (
          <motion.button
            key={category}
            onClick={() => setSelectedCategory(category)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`px-6 py-2.5 rounded-full font-semibold text-sm transition-all duration-300 ${
              selectedCategory === category
                ? "bg-gradient-to-r from-purple-500 to-pink-600 text-white shadow-lg shadow-purple-500/30"
                : "bg-gray-800/50 text-gray-400 hover:bg-gray-700/50 border border-gray-700/50"
            }`}
          >
            {category}
            {category !== "All" && (
              <span className="ml-2 text-xs opacity-70">
                ({hobbies.filter(h => h.category === category).length})
              </span>
            )}
          </motion.button>
        ))}
      </motion.div>

      {/* Hobbies Grid */}
      <motion.div
        layout
        className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 max-w-7xl mx-auto"
      >
        <AnimatePresence mode="popLayout">
          {filteredHobbies.map((hobby, index) => (
            <motion.div
              key={hobby.title}
              layout
              custom={index}
              variants={itemVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              whileHover={{ y: -8, scale: 1.02 }}
              className="relative w-full aspect-square overflow-hidden group rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500"
            >
              {/* Category Badge */}
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className={`absolute top-3 left-3 z-20 px-3 py-1 rounded-full text-xs font-bold text-white bg-gradient-to-r ${
                  categoryColors[hobby.category as keyof typeof categoryColors]
                } shadow-lg backdrop-blur-sm`}
              >
                {hobby.category}
              </motion.div>

              {/* Media Content */}
              <div className="relative w-full h-full">
                {hobby.type === "image" ? (
                  <Image
                    src={hobby.src}
                    alt={hobby.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
                    priority={false}
                    loading="lazy"
                  />
                ) : (
                  <video
                    src={hobby.src}
                    className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
                    autoPlay
                    muted
                    loop
                    playsInline
                  />
                )}
              </div>

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />

              {/* Content Overlay */}
              <div className="absolute inset-0 flex flex-col items-center justify-center p-4 opacity-0 group-hover:opacity-100 transition-all duration-300">
                {/* Icon */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 200, delay: 0.1 }}
                  className={`text-5xl text-white mb-3 drop-shadow-lg bg-gradient-to-br ${
                    categoryColors[hobby.category as keyof typeof categoryColors]
                  } bg-clip-text text-transparent`}
                  style={{ filter: "drop-shadow(0 0 20px rgba(255,255,255,0.5))" }}
                >
                  {hobby.icon}
                </motion.div>

                {/* Title */}
                <motion.h3
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="text-white font-bold text-xl text-center drop-shadow-lg"
                >
                  {hobby.title}
                </motion.h3>

                {/* Type indicator */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="mt-2 px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm border border-white/30"
                >
                  <span className="text-xs text-white font-medium">
                    {hobby.type === "video" ? "📹 Video" : "📷 Photo"}
                  </span>
                </motion.div>
              </div>

              {/* Bottom Title (Always Visible) */}
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent group-hover:opacity-0 transition-opacity duration-300">
                <h3 className="text-white font-semibold text-base text-center drop-shadow-lg">
                  {hobby.title}
                </h3>
              </div>

              {/* Shine Effect on Hover */}
              <motion.div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
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

              {/* Border Glow */}
              <div className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none bg-gradient-to-r ${
                categoryColors[hobby.category as keyof typeof categoryColors]
              } p-[2px]`}>
                <div className="w-full h-full bg-transparent rounded-2xl" />
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Fun Stats */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        viewport={{ once: true }}
        className="mt-16 max-w-4xl mx-auto"
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { label: "Total Hobbies", value: hobbies.length, icon: "🎯" },
            { label: "Sports", value: hobbies.filter(h => h.category === "Sports").length, icon: "⚽" },
            { label: "Adventures", value: hobbies.filter(h => h.category === "Adventure").length, icon: "🏔️" },
            { label: "Creative", value: hobbies.filter(h => h.category === "Creative").length, icon: "🎨" },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: 0.4 + index * 0.05 }}
              viewport={{ once: true }}
              whileHover={{ y: -4 }}
              className="bg-gradient-to-br from-gray-900 to-gray-800/50 rounded-xl p-6 border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300 text-center"
            >
              <div className="text-3xl mb-2">{stat.icon}</div>
              <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
              <div className="text-sm text-gray-400">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Hobbies;