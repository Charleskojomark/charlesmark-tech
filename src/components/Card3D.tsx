"use client";

import React, { useRef, useState } from "react";

interface Card3DProps {
  children: React.ReactNode;
  className?: string;
  glowColor?: string;
  maxTilt?: number;
}

export function Card3D({
  children,
  className = "",
  glowColor = "rgba(181, 138, 100, 0.22)",
  maxTilt = 12,
}: Card3DProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [glarePosition, setGlarePosition] = useState({
    x: 50,
    y: 50,
    opacity: 0,
  });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    // Calculate 3D tilt angles based on mouse offset from center
    const rX = ((mouseY - height / 2) / height) * -maxTilt;
    const rY = ((mouseX - width / 2) / width) * maxTilt;

    setRotateX(rX);
    setRotateY(rY);
    setGlarePosition({
      x: (mouseX / width) * 100,
      y: (mouseY / height) * 100,
      opacity: 0.35,
    });
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
    setGlarePosition((prev) => ({ ...prev, opacity: 0 }));
  };

  return (
    <div
      style={{ perspective: "1000px" }}
      className="w-full h-full max-w-full overflow-hidden"
    >
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(${
            rotateX !== 0 || rotateY !== 0 ? 8 : 0
          }px)`,
          transformStyle: "preserve-3d",
          transition: "transform 0.12s ease-out, box-shadow 0.25s ease-out",
        }}
        className={`relative w-full h-full ${className}`}
      >
        {/* Dynamic Specular 3D Light Glare */}
        <div
          aria-hidden="true"
          style={{
            background: `radial-gradient(circle at ${glarePosition.x}% ${glarePosition.y}%, ${glowColor}, transparent 60%)`,
            opacity: glarePosition.opacity,
          }}
          className="absolute inset-0 rounded-[inherit] pointer-events-none transition-opacity duration-300 z-30"
        />

        {children}
      </div>
    </div>
  );
}

export function Card3DItem({
  children,
  translateZ = 24,
  className = "",
}: {
  children: React.ReactNode;
  translateZ?: number;
  className?: string;
}) {
  return (
    <div
      style={{
        transform: `translateZ(${translateZ}px)`,
        transformStyle: "preserve-3d",
      }}
      className={className}
    >
      {children}
    </div>
  );
}
