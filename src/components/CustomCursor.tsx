"use client";

import { useLayoutEffect, useRef, useState } from "react";

const CustomCursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const trailRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [isMobile, setIsMobile] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  
  // Position tracking
  const mousePos = useRef({ x: 0, y: 0 });
  const trailPositions = useRef([
    { x: 0, y: 0 },
    { x: 0, y: 0 },
    { x: 0, y: 0 },
    { x: 0, y: 0 },
    { x: 0, y: 0 },
  ]);

  useLayoutEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  useLayoutEffect(() => {
    if (isMobile) return;

    // Track mouse position
    const handleMouseMove = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
    };

    // Detect hovering over interactive elements
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        target.onclick ||
        target.closest("a") ||
        target.closest("button")
      ) {
        setIsHovering(true);
      }
    };

    const handleMouseOut = () => {
      setIsHovering(false);
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseover", handleMouseOver, true);
    document.addEventListener("mouseout", handleMouseOut, true);

    // Optimized animation loop
    let animationFrameId: number;
    
    const animate = () => {
      // Update main cursor (instant)
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate(${mousePos.current.x}px, ${mousePos.current.y}px)`;
      }

      // Update trail with smooth following (each trail follows the previous with delay)
      trailPositions.current[0].x += (mousePos.current.x - trailPositions.current[0].x) * 0.2;
      trailPositions.current[0].y += (mousePos.current.y - trailPositions.current[0].y) * 0.2;

      for (let i = 1; i < trailPositions.current.length; i++) {
        trailPositions.current[i].x += (trailPositions.current[i - 1].x - trailPositions.current[i].x) * 0.15;
        trailPositions.current[i].y += (trailPositions.current[i - 1].y - trailPositions.current[i].y) * 0.15;
      }

      // Apply transforms
      trailRefs.current.forEach((trail, index) => {
        if (trail) {
          trail.style.transform = `translate(${trailPositions.current[index].x}px, ${trailPositions.current[index].y}px)`;
        }
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseover", handleMouseOver, true);
      document.removeEventListener("mouseout", handleMouseOut, true);
      cancelAnimationFrame(animationFrameId);
    };
  }, [isMobile]);

  if (isMobile) return null;

  return (
    <>
      {/* Trail Elements (5 circles, decreasing size) */}
      {[...Array(5)].map((_, index) => {
        const size = 15 - index * 2; // 15, 13, 11, 9, 7
        const opacity = 1 - index * 0.15; // 1, 0.85, 0.7, 0.55, 0.4
        
        return (
          <div
            key={index}
            ref={(el) => {
              if (el) trailRefs.current[index] = el;
            }}
            className="fixed top-0 left-0 pointer-events-none z-[9998]"
            style={{
              width: `${size}px`,
              height: `${size}px`,
              borderRadius: "50%",
              background: isHovering
                ? `radial-gradient(circle, rgba(102, 126, 234, ${opacity}) 0%, rgba(118, 75, 162, ${opacity * 0.5}) 100%)`
                : `radial-gradient(circle, rgba(96, 165, 250, ${opacity}) 0%, rgba(168, 139, 250, ${opacity * 0.5}) 100%)`,
              boxShadow: isHovering
                ? `0 0 ${20 - index * 3}px ${8 - index}px rgba(102, 126, 234, ${opacity * 0.6})`
                : `0 0 ${20 - index * 3}px ${8 - index}px rgba(96, 165, 250, ${opacity * 0.5})`,
              transform: "translate(-50%, -50%)",
              willChange: "transform",
              transition: "width 0.2s ease, height 0.2s ease",
            }}
          />
        );
      })}

      {/* Main Cursor */}
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 pointer-events-none z-[9999]"
        style={{
          width: isHovering ? "20px" : "18px",
          height: isHovering ? "20px" : "18px",
          borderRadius: "50%",
          background: isHovering
            ? "radial-gradient(circle, rgba(102, 126, 234, 1) 0%, rgba(118, 75, 162, 0.8) 100%)"
            : "radial-gradient(circle, rgba(255, 255, 255, 1) 0%, rgba(96, 165, 250, 0.8) 100%)",
          boxShadow: isHovering
            ? "0 0 30px 12px rgba(102, 126, 234, 0.7)"
            : "0 0 25px 10px rgba(255, 255, 255, 0.8)",
          transform: "translate(-50%, -50%)",
          willChange: "transform",
          transition: "width 0.2s ease, height 0.2s ease, background 0.2s ease, box-shadow 0.2s ease",
        }}
      />

      {/* Hide Default Cursor */}
      <style jsx>{`
        * {
          cursor: none !important;
        }

        @media (max-width: 768px) {
          * {
            cursor: auto !important;
          }
        }
      `}</style>
    </>
  );
};

export default CustomCursor;