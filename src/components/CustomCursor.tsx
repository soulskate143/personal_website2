"use client";

import { useEffect, useRef } from "react";

const CustomCursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <>
      {/* Custom Cursor */}
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 pointer-events-none z-[9999]"
        style={{
          width: "15px", // Slightly bigger cursor
          height: "15px",
          borderRadius: "50%",
          background: "rgba(255, 255, 255, 1)",
          boxShadow: "0 0 150px 70px rgba(255, 255, 255, 1)",
          transform: "translate(-50%, -50%)",
          transition: "transform 0.1s linear",
          
        }}
      />

      {/* Hide Default Cursor */}
      <style>
        {`
          * {
            cursor: none;
          }
        `}
      </style>
    </>
  );
};

export default CustomCursor;
