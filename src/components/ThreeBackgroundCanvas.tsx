"use client";

import React, { useEffect, useRef } from "react";
import * as THREE from "three";

export function ThreeBackgroundCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // Check reduced motion
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion) return;

    let width = window.innerWidth;
    let height = window.innerHeight;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(50, width / height, 0.1, 100);
    camera.position.set(0, 0, 18);

    const renderer = new THREE.WebGLRenderer({
      canvas,
      alpha: true,
      antialias: true,
      powerPreference: "high-performance",
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));

    // 3D Particles
    const particleCount = 140;
    const positions = new Float32Array(particleCount * 3);
    const velocities: { x: number; y: number; z: number }[] = [];

    for (let i = 0; i < particleCount * 3; i += 3) {
      positions[i] = (Math.random() - 0.5) * 36;
      positions[i + 1] = (Math.random() - 0.5) * 36;
      positions[i + 2] = (Math.random() - 0.5) * 20;

      velocities.push({
        x: (Math.random() - 0.5) * 0.005,
        y: (Math.random() - 0.5) * 0.005,
        z: (Math.random() - 0.5) * 0.003,
      });
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));

    const material = new THREE.PointsMaterial({
      color: 0xb58a64,
      size: 0.14,
      transparent: true,
      opacity: 0.45,
    });

    const particleSystem = new THREE.Points(geometry, material);
    scene.add(particleSystem);

    // Dynamic Synapse Connecting Lines
    const lineMaterial = new THREE.LineBasicMaterial({
      color: 0xd8c5af,
      transparent: true,
      opacity: 0.18,
    });

    const maxConnections = 120;
    const linePositions = new Float32Array(maxConnections * 6);
    const lineGeometry = new THREE.BufferGeometry();
    lineGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(linePositions, 3)
    );
    const lineMesh = new THREE.LineSegments(lineGeometry, lineMaterial);
    scene.add(lineMesh);

    // Mouse and Scroll tracking
    let targetCameraY = 0;
    let targetCameraX = 0;
    let currentScrollY = window.scrollY;

    const handleScroll = () => {
      currentScrollY = window.scrollY;
      targetCameraY = -currentScrollY * 0.003;
    };

    const handleMouseMove = (e: MouseEvent) => {
      const mouseX = (e.clientX / window.innerWidth) * 2 - 1;
      targetCameraX = mouseX * 1.5;
    };

    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("resize", handleResize);

    // Animation Loop
    let animationFrameId: number;
    let time = 0;

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      time += 0.01;

      // Smooth scroll parallax glide in 3D
      camera.position.y += (targetCameraY - camera.position.y) * 0.05;
      camera.position.x += (targetCameraX - camera.position.x) * 0.03;

      // Slowly rotate 3D constellation
      particleSystem.rotation.y = time * 0.02;
      particleSystem.rotation.x = Math.sin(time * 0.015) * 0.05;
      lineMesh.rotation.copy(particleSystem.rotation);

      // Connect nearby particles with 3D lines
      const posAttr = geometry.attributes.position as THREE.BufferAttribute;
      const posArray = posAttr.array as Float32Array;

      let lineIndex = 0;
      for (let i = 0; i < particleCount && lineIndex < maxConnections * 6; i++) {
        const x1 = posArray[i * 3];
        const y1 = posArray[i * 3 + 1];
        const z1 = posArray[i * 3 + 2];

        for (let j = i + 1; j < particleCount && lineIndex < maxConnections * 6; j++) {
          const x2 = posArray[j * 3];
          const y2 = posArray[j * 3 + 1];
          const z2 = posArray[j * 3 + 2];

          const dist = Math.hypot(x1 - x2, y1 - y2, z1 - z2);
          if (dist < 5.0) {
            linePositions[lineIndex++] = x1;
            linePositions[lineIndex++] = y1;
            linePositions[lineIndex++] = z1;
            linePositions[lineIndex++] = x2;
            linePositions[lineIndex++] = y2;
            linePositions[lineIndex++] = z2;
          }
        }
      }

      lineGeometry.setDrawRange(0, lineIndex / 3);
      lineGeometry.attributes.position.needsUpdate = true;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);

      geometry.dispose();
      material.dispose();
      lineGeometry.dispose();
      lineMaterial.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden"
    >
      <canvas ref={canvasRef} className="w-full h-full block opacity-50" />
    </div>
  );
}
