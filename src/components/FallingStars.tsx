"use client";
import Particles from "react-tsparticles";
import { Engine } from "tsparticles-engine"; // Updated import
import { loadFull } from "tsparticles"; // Correct import path
import { loadSlim } from "tsparticles-slim"; // Alternative import

export default function FallingStars() {
    const particlesInit = async (engine: Engine) => {
        await loadSlim(engine); // Lighter version with basic features
      };

  return (
    <Particles
      id="falling-stars"
      init={particlesInit}
      options={{
        fullScreen: { enable: false },
        background: { color: "transparent" },
        particles: {
          number: { value: 100, density: { enable: true, value_area: 1000 } },
          color: { value: "#ffffff" },
          shape: { type: "circle" },
          opacity: { value: 0.8, random: true },
          size: { value: 1.5, random: true },
          move: {
            direction: "bottom",
            enable: true,
            speed: 1,
            straight: false,
            outModes: { default: "out" },
          },
        },
        interactivity: {
          events: {
            onHover: { enable: false },
            onClick: { enable: false },
          },
        },
        detectRetina: true,
      }}
      className="absolute top-0 left-0 w-full h-full z-0 pointer-events-none"
    />
  );
}
