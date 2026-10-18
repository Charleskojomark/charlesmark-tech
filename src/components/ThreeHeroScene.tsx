"use client";

import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { Sparkles, Activity, Rotate3d, Zap } from "lucide-react";

interface NodeData {
  name: string;
  category: string;
  color: string;
  position: [number, number, number];
}

const NODES_DATA: NodeData[] = [
  {
    name: "n8n Automation",
    category: "Pipelines",
    color: "#B58A64",
    position: [3.4, 1.2, 1.0],
  },
  {
    name: "RAG Assistant",
    category: "AI Agent",
    color: "#10B981",
    position: [-3.2, 1.6, -1.2],
  },
  {
    name: "FastAPI Backend",
    category: "Core API",
    color: "#4A3428",
    position: [2.2, -2.4, 1.8],
  },
  {
    name: "PostgreSQL & pgvector",
    category: "Database",
    color: "#25D366",
    position: [-2.6, -2.0, -1.5],
  },
  {
    name: "LangGraph Multi-Agent",
    category: "State Engine",
    color: "#D8C5AF",
    position: [0.0, 3.2, 2.0],
  },
];

export function ThreeHeroScene() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const [activeMode, setActiveMode] = useState<"neural" | "pipeline" | "agents">("neural");
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);
  const [fps] = useState(60);
  const [isInteracting, setIsInteracting] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    const canvas = canvasRef.current;
    if (!container || !canvas) return;

    let width = container.clientWidth;
    let height = container.clientHeight;

    // 1. Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.set(0, 0, 11);

    const renderer = new THREE.WebGLRenderer({
      canvas,
      alpha: true,
      antialias: true,
      powerPreference: "high-performance",
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    // 2. Lighting
    const ambientLight = new THREE.AmbientLight(0xf5f0e8, 1.8);
    scene.add(ambientLight);

    const coreLight = new THREE.PointLight(0xb58a64, 4, 18);
    coreLight.position.set(0, 0, 0);
    scene.add(coreLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 2.0);
    directionalLight.position.set(5, 8, 7);
    scene.add(directionalLight);

    // Root 3D container group for smooth mouse rotation
    const rootGroup = new THREE.Group();
    scene.add(rootGroup);

    // 3. Central AI Neural Core
    // Outer wireframe icosahedron
    const coreGeo = new THREE.IcosahedronGeometry(2.0, 1);
    const coreWireMat = new THREE.MeshStandardMaterial({
      color: 0x4a3428,
      wireframe: true,
      roughness: 0.3,
      metalness: 0.8,
    });
    const coreMesh = new THREE.Mesh(coreGeo, coreWireMat);
    rootGroup.add(coreMesh);

    // Inner glowing faceted core
    const innerGeo = new THREE.IcosahedronGeometry(1.4, 2);
    const innerMat = new THREE.MeshStandardMaterial({
      color: 0xb58a64,
      roughness: 0.2,
      metalness: 0.9,
      emissive: 0x38261d,
      emissiveIntensity: 0.5,
    });
    const innerMesh = new THREE.Mesh(innerGeo, innerMat);
    rootGroup.add(innerMesh);

    // 4. Concentric Gyroscope Rings
    const ringMat1 = new THREE.MeshBasicMaterial({
      color: 0xb58a64,
      wireframe: true,
      transparent: true,
      opacity: 0.4,
    });
    const ringGeo1 = new THREE.TorusGeometry(2.8, 0.02, 16, 80);
    const ring1 = new THREE.Mesh(ringGeo1, ringMat1);
    ring1.rotation.x = Math.PI / 3;
    rootGroup.add(ring1);

    const ringMat2 = new THREE.MeshBasicMaterial({
      color: 0x10b981,
      wireframe: true,
      transparent: true,
      opacity: 0.35,
    });
    const ringGeo2 = new THREE.TorusGeometry(3.3, 0.02, 16, 80);
    const ring2 = new THREE.Mesh(ringGeo2, ringMat2);
    ring2.rotation.y = Math.PI / 4;
    rootGroup.add(ring2);

    // 5. Satellite Nodes and Data Synapses
    const satelliteGroup = new THREE.Group();
    rootGroup.add(satelliteGroup);

    const satellites: {
      mesh: THREE.Mesh;
      position: THREE.Vector3;
      curve: THREE.QuadraticBezierCurve3;
      pulseMesh: THREE.Mesh;
      pulseProgress: number;
      speed: number;
    }[] = [];

    NODES_DATA.forEach((node, i) => {
      const nodePos = new THREE.Vector3(...node.position);

      // Node mesh
      const satGeo = new THREE.OctahedronGeometry(0.36, 0);
      const satMat = new THREE.MeshStandardMaterial({
        color: new THREE.Color(node.color),
        roughness: 0.2,
        metalness: 0.8,
        emissive: new THREE.Color(node.color),
        emissiveIntensity: 0.3,
      });
      const satMesh = new THREE.Mesh(satGeo, satMat);
      satMesh.position.copy(nodePos);
      satMesh.userData = { id: i, name: node.name };
      satelliteGroup.add(satMesh);

      // Curved synapse connecting node to central core
      const midPoint = new THREE.Vector3(
        nodePos.x * 0.5 + (Math.random() - 0.5) * 0.8,
        nodePos.y * 0.5 + (Math.random() - 0.5) * 0.8,
        nodePos.z * 0.5 + (Math.random() - 0.5) * 0.8
      );
      const curve = new THREE.QuadraticBezierCurve3(
        nodePos,
        midPoint,
        new THREE.Vector3(0, 0, 0)
      );

      const points = curve.getPoints(24);
      const curveGeo = new THREE.BufferGeometry().setFromPoints(points);
      const curveMat = new THREE.LineBasicMaterial({
        color: new THREE.Color(node.color),
        transparent: true,
        opacity: 0.45,
      });
      const curveLine = new THREE.Line(curveGeo, curveMat);
      satelliteGroup.add(curveLine);

      // Traveling data packet pulse
      const pulseGeo = new THREE.SphereGeometry(0.1, 8, 8);
      const pulseMat = new THREE.MeshBasicMaterial({
        color: 0x25d366,
      });
      const pulseMesh = new THREE.Mesh(pulseGeo, pulseMat);
      satelliteGroup.add(pulseMesh);

      satellites.push({
        mesh: satMesh,
        position: nodePos,
        curve,
        pulseMesh,
        pulseProgress: (i * 0.2) % 1,
        speed: 0.008 + i * 0.002,
      });
    });

    // 6. 3D Floating Particle Constellation (Dust)
    const particleCount = 280;
    const particlePositions = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount * 3; i += 3) {
      particlePositions[i] = (Math.random() - 0.5) * 16;
      particlePositions[i + 1] = (Math.random() - 0.5) * 16;
      particlePositions[i + 2] = (Math.random() - 0.5) * 16;
    }
    const particleGeo = new THREE.BufferGeometry();
    particleGeo.setAttribute(
      "position",
      new THREE.BufferAttribute(particlePositions, 3)
    );
    const particleMat = new THREE.PointsMaterial({
      color: 0xb58a64,
      size: 0.06,
      transparent: true,
      opacity: 0.6,
    });
    const particles = new THREE.Points(particleGeo, particleMat);
    rootGroup.add(particles);

    // 7. Mouse and Touch Smooth Tracking
    let mouseX = 0;
    let mouseY = 0;
    let targetRotationX = 0;
    let targetRotationY = 0;
    let isDragging = false;
    let previousPointerX = 0;
    let previousPointerY = 0;

    const handlePointerMove = (e: MouseEvent | TouchEvent) => {
      const clientX = "touches" in e ? e.touches[0].clientX : e.clientX;
      const clientY = "touches" in e ? e.touches[0].clientY : e.clientY;

      const rect = canvas.getBoundingClientRect();
      const x = ((clientX - rect.left) / rect.width) * 2 - 1;
      const y = -((clientY - rect.top) / rect.height) * 2 + 1;

      mouseX = x;
      mouseY = y;

      if (isDragging) {
        const deltaX = clientX - previousPointerX;
        const deltaY = clientY - previousPointerY;
        targetRotationY += deltaX * 0.01;
        targetRotationX += deltaY * 0.01;
        previousPointerX = clientX;
        previousPointerY = clientY;
      } else {
        targetRotationY = mouseX * 0.45;
        targetRotationX = -mouseY * 0.35;
      }
    };

    const handlePointerDown = (e: MouseEvent | TouchEvent) => {
      setIsInteracting(true);
      isDragging = true;
      const clientX = "touches" in e ? e.touches[0].clientX : e.clientX;
      const clientY = "touches" in e ? e.touches[0].clientY : e.clientY;
      previousPointerX = clientX;
      previousPointerY = clientY;
    };

    const handlePointerUp = () => {
      setIsInteracting(false);
      isDragging = false;
    };

    canvas.addEventListener("mousemove", handlePointerMove);
    canvas.addEventListener("mousedown", handlePointerDown);
    window.addEventListener("mouseup", handlePointerUp);
    canvas.addEventListener("touchmove", handlePointerMove, { passive: true });
    canvas.addEventListener("touchstart", handlePointerDown, { passive: true });
    window.addEventListener("touchend", handlePointerUp);

    // 8. Resize Handler
    const handleResize = () => {
      if (!container || !canvas) return;
      width = container.clientWidth;
      height = container.clientHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    };

    const resizeObserver = new ResizeObserver(handleResize);
    resizeObserver.observe(container);

    // 9. Animation Loop
    let animationFrameId: number;
    const clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      const elapsedTime = clock.getElapsedTime();

      // Smooth camera/rootGroup lerp
      rootGroup.rotation.y += (targetRotationY - rootGroup.rotation.y) * 0.05;
      rootGroup.rotation.x += (targetRotationX - rootGroup.rotation.x) * 0.05;

      // Base idle continuous spinning
      coreMesh.rotation.y = elapsedTime * 0.25;
      coreMesh.rotation.x = elapsedTime * 0.15;
      innerMesh.rotation.y = -elapsedTime * 0.35;

      ring1.rotation.z = elapsedTime * 0.2;
      ring2.rotation.z = -elapsedTime * 0.25;

      // Pulse core scale (breathing heartbeat)
      const breath = 1.0 + Math.sin(elapsedTime * 2.0) * 0.04;
      innerMesh.scale.set(breath, breath, breath);

      // Animate satellites and data pulses along bezier curves
      satellites.forEach((sat) => {
        // Subtle orbital hover oscillation
        sat.mesh.rotation.y += 0.02;
        sat.mesh.rotation.x += 0.01;

        // Data pulse movement
        sat.pulseProgress = (sat.pulseProgress + sat.speed) % 1;
        const pulsePos = sat.curve.getPointAt(sat.pulseProgress);
        sat.pulseMesh.position.copy(pulsePos);

        // Scale pulse according to progress
        const pScale = Math.sin(sat.pulseProgress * Math.PI) * 1.4;
        sat.pulseMesh.scale.set(pScale, pScale, pScale);
      });

      // Background particle drift
      particles.rotation.y = elapsedTime * 0.03;
      particles.rotation.x = elapsedTime * 0.02;

      renderer.render(scene, camera);
    };

    animate();

    // 10. Cleanup on unmount
    return () => {
      cancelAnimationFrame(animationFrameId);
      resizeObserver.disconnect();
      canvas.removeEventListener("mousemove", handlePointerMove);
      canvas.removeEventListener("mousedown", handlePointerDown);
      window.removeEventListener("mouseup", handlePointerUp);
      canvas.removeEventListener("touchmove", handlePointerMove);
      canvas.removeEventListener("touchstart", handlePointerDown);
      window.removeEventListener("touchend", handlePointerUp);

      // Dispose Three.js resources
      coreGeo.dispose();
      coreWireMat.dispose();
      innerGeo.dispose();
      innerMat.dispose();
      ringGeo1.dispose();
      ringMat1.dispose();
      ringGeo2.dispose();
      ringMat2.dispose();
      particleGeo.dispose();
      particleMat.dispose();
      renderer.dispose();
    };
  }, [activeMode]);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-[460px] sm:h-[500px] lg:h-[520px] rounded-3xl bg-[#FAF7F2] border border-[#D8C5AF] shadow-xl overflow-hidden flex flex-col justify-between p-4 sm:p-6"
    >
      {/* Top Console Bar: System Telemetry HUD */}
      <div className="relative z-10 flex items-center justify-between border-b border-[#D8C5AF]/60 pb-3">
        <div className="flex items-center gap-2">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#10B981] opacity-75" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#10B981]" />
          </span>
          <span className="font-mono text-xs font-bold tracking-wider text-[#241A15] uppercase">
            AI NEURAL CORE // 3D WEBGL
          </span>
        </div>

        <div className="flex items-center gap-2 text-[10px] font-mono text-[#4A3428]">
          <span className="hidden sm:inline-flex items-center gap-1 px-2 py-0.5 rounded bg-[#F5F0E8] border border-[#D8C5AF]">
            <Activity className="w-3 h-3 text-[#10B981]" />
            <span>{fps} FPS HARDWARE ACCELERATED</span>
          </span>
          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-[#241A15] text-[#F5F0E8] font-semibold">
            <Rotate3d className="w-3 h-3 text-[#B58A64]" />
            <span>{isInteracting ? "ORBITING" : "DRAG 3D"}</span>
          </span>
        </div>
      </div>

      {/* 3D WebGL Canvas Surface */}
      <div className="absolute inset-0 z-0 cursor-grab active:cursor-grabbing">
        <canvas ref={canvasRef} className="w-full h-full block" />
      </div>

      {/* Floating Interactive 3D Node Chips Overlay */}
      <div className="relative z-10 pointer-events-none mt-auto pt-4">
        {/* Active Node Info Drawer */}
        {hoveredNode && (
          <div className="mb-3 p-3 rounded-2xl bg-[#241A15]/90 backdrop-blur-md text-[#F5F0E8] border border-[#B58A64]/40 shadow-lg animate-in fade-in slide-in-from-bottom-2 duration-150">
            <div className="flex items-center justify-between">
              <span className="font-mono text-xs font-bold text-[#B58A64]">
                ACTIVE ARCHITECTURE NODE:
              </span>
              <Zap className="w-3.5 h-3.5 text-[#10B981]" />
            </div>
            <div className="font-display font-bold text-sm text-white mt-0.5">
              {hoveredNode}
            </div>
          </div>
        )}

        {/* Node quick pills */}
        <div className="flex flex-wrap gap-1.5 pointer-events-auto">
          {NODES_DATA.map((node) => (
            <button
              key={node.name}
              type="button"
              onMouseEnter={() => setHoveredNode(`${node.name} (${node.category})`)}
              onMouseLeave={() => setHoveredNode(null)}
              className="px-2.5 py-1 rounded-lg bg-[#F5F0E8]/90 hover:bg-[#241A15] text-[#241A15] hover:text-[#F5F0E8] border border-[#D8C5AF] text-[10px] font-mono font-bold transition-all shadow-xs cursor-pointer flex items-center gap-1.5"
            >
              <span
                className="w-1.5 h-1.5 rounded-full"
                style={{ backgroundColor: node.color }}
              />
              <span>{node.name}</span>
            </button>
          ))}
        </div>

        {/* Bottom Mode Switcher & Drag instructions */}
        <div className="mt-3 pt-3 border-t border-[#D8C5AF]/60 flex items-center justify-between text-[11px] font-mono text-[#4A3428]">
          <span className="flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-[#B58A64]" />
            <span>Interactive 3D System Architecture</span>
          </span>

          <div className="flex items-center gap-1">
            <button
              type="button"
              onClick={() => setActiveMode("neural")}
              className={`px-2 py-0.5 rounded text-[10px] font-bold transition-colors cursor-pointer ${
                activeMode === "neural"
                  ? "bg-[#241A15] text-[#F5F0E8]"
                  : "bg-[#F5F0E8] hover:bg-[#D8C5AF] text-[#4A3428]"
              }`}
            >
              Mesh
            </button>
            <button
              type="button"
              onClick={() => setActiveMode("pipeline")}
              className={`px-2 py-0.5 rounded text-[10px] font-bold transition-colors cursor-pointer ${
                activeMode === "pipeline"
                  ? "bg-[#241A15] text-[#F5F0E8]"
                  : "bg-[#F5F0E8] hover:bg-[#D8C5AF] text-[#4A3428]"
              }`}
            >
              Pipeline
            </button>
            <button
              type="button"
              onClick={() => setActiveMode("agents")}
              className={`px-2 py-0.5 rounded text-[10px] font-bold transition-colors cursor-pointer ${
                activeMode === "agents"
                  ? "bg-[#241A15] text-[#F5F0E8]"
                  : "bg-[#F5F0E8] hover:bg-[#D8C5AF] text-[#4A3428]"
              }`}
            >
              Agents
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
