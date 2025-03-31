"use client";

import { useMemo } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

// 🔹 Memoized Hobbies Data (prevents re-creation)
const hobbies = [
  { title: "Photography", type: "image", src: "/hobbies/photography.jpg" },
  { title: "Music", type: "video", src: "/hobbies/music.mp4" },
  { title: "Badminton", type: "video", src: "/hobbies/badminton.mp4" },
  { title: "Riding", type: "video", src: "/hobbies/motor.mp4" },
  { title: "Biking", type: "video", src: "/hobbies/bike.mp4" },
  { title: "Hiking", type: "image", src: "/hobbies/hiking.jpg" },
  { title: "Fishing", type: "image", src: "/hobbies/fishing.jpg" },
  { title: "Motocross", type: "image", src: "/hobbies/motox.jpg" },
  { title: "Pickleball", type: "video", src: "/hobbies/pickle.mp4" },
  { title: "Running", type: "image", src: "/hobbies/running.jpg" },
  { title: "Ice Skating", type: "video", src: "/hobbies/skate.mp4" },
  { title: "Tennis", type: "video", src: "/hobbies/tennis.mp4" },
  { title: "Traveling", type: "video", src: "/hobbies/travel.mp4" },
  { title: "Videography", type: "video", src: "/hobbies/video.mp4" },
  { title: "Coding", type: "video", src: "/hobbies/code.mp4" },
];

// 🔹 Framer Motion Variants for smoother animation
const itemVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: (index: number) => ({
    opacity: 1,
    scale: 1,
    transition: { duration: 0.4, delay: index * 0.03, ease: "easeOut" },
  }),
  hover: { scale: 1.05, transition: { duration: 0.2 } },
};

const Hobbies = () => {
  const memoizedHobbies = useMemo(() => hobbies, []);

  return (
    <section className="py-16 px-4 bg-transparent">
      <h2 className="text-4xl font-bold text-center mb-16 relative">
        <span className="relative inline-block">
          Hobbies
          <motion.span
            className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-blue-500 to-purple-600"
            initial={{ width: 0 }}
            whileInView={{ width: "100%" }}
            transition={{ duration: 1, delay: 0.2 }}
            viewport={{ once: true }}
          />
        </span>
      </h2>

      <motion.div
        className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2 sm:gap-4 max-w-6xl mx-auto"
        initial="hidden"
        animate="visible"
        variants={{ visible: { transition: { staggerChildren: 0.05 } } }}
      >
        {memoizedHobbies.map((hobby, index) => (
          <motion.div
            key={hobby.title} // 🔹 Use title as key to avoid duplicate key errors
            custom={index}
            variants={itemVariants}
            whileHover="hover"
            className="relative w-full aspect-square overflow-hidden group rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            {hobby.type === "image" ? (
              <Image
                src={hobby.src}
                alt={hobby.title}
                fill
                className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                priority={false} // 🔹 Lazy load images
                loading="lazy"
              />
            ) : (
              <video
                src={hobby.src}
                className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                autoPlay
                muted
                loop
                playsInline
                poster="/hobbies/loading.jpg" // 🔹 Add placeholder while loading
              />
            )}

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
              <motion.span
                initial={{ y: 20 }}
                animate={{ y: 0 }}
                className="text-white font-semibold text-lg drop-shadow-md"
              >
                {hobby.title}
              </motion.span>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Hobbies;
