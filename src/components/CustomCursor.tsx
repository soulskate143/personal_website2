"use client";

import { useLayoutEffect, useRef, useState } from "react";

const CustomCursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  useLayoutEffect(() => {
    // Function to check if the screen width is mobile-sized
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkScreenSize(); // Initial check
    window.addEventListener("resize", checkScreenSize);

    return () => {
      window.removeEventListener("resize", checkScreenSize);
    };
  }, []);

  useLayoutEffect(() => {
    if (isMobile) return;

    const handleMouseMove = (e: MouseEvent) => {
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [isMobile]);

  return (
    <>
      {/* Custom Cursor (hidden on mobile) */}
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 pointer-events-none z-[9999]"
        style={{
          width: "15px",
          height: "15px",
          borderRadius: "50%",
          background: "rgba(255, 255, 255, 1)",
          boxShadow: "0 0 150px 70px rgba(255, 255, 255, 1)",
          transform: "translate(-50%, -50%)",
          transition: "transform 0.1s linear",
          display: isMobile ? "none" : "block",
        }}
      />

      {/* Hide Default Cursor */}
      <style>
        {`
          * {
            cursor: none;
          }
          @media (max-width: 768px) {
            * {
              cursor: auto !important;
            }
          }
        `}
      </style>
    </>
  );
};

export default CustomCursor;
