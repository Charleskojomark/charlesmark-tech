"use client";

import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { Sparkles, Activity, Rotate3d, Cpu, Network, Bot } from "lucide-react";

interface NodeData {
  id: string;
  name: string;
  category: string;
  color: string;
  position: [number, number, number];
  detail: string;
}

const ARCHITECTURE_NODES: NodeData[] = [
  {
    id: "n8n",
    name: "n8n Orchestrator",
    category: "Workflow Engine",
    color: "#B58A64",
    position: [3.2, 1.2, 1.0],
    detail: "Self-hosted webhook pipelines, schema-validated error recovery",
  },
  {
    id: "rag",
    name: "RAG Document Brain",
    category: "AI Agent",
    color: "#10B981",
    position: [-3.2, 1.4, -0.8],
    detail: "Hybrid semantic search, pgvector embeddings, verified citations",
  },
  {
    id: "fastapi",
    name: "FastAPI Backend",
    category: "Core API",
    color: "#4A3428",
    position: [2.0, -2.2, 1.6],
    detail: "Asynchronous microservices, Pydantic type safety, HMAC auth",
  },
  {
    id: "pgvector",
    name: "PostgreSQL & pgvector",
    category: "Persistent Store",
    color: "#25D366",
    position: [-2.4, -2.0, -1.4],
    detail: "ACID compliance, relational business data + vector embeddings",
  },
  {
    id: "langgraph",
    name: "LangGraph State Machine",
    category: "Agent Swarm",
    color: "#D8C5AF",
    position: [0.0, 2.9, 1.6],
    detail: "Multi-agent coordination, deterministic loops & human-in-the-loop",
  },
];

export function ThreeHeroScene() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const [activeNode, setActiveNode] = useState<NodeData | null>(null);
  const [activeMode, setActiveMode] = useState<"neural" | "pipeline" | "agents">("neural");
  const [isInteracting, setIsInteracting] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    const canvas = canvasRef.current;
    if (!container || !canvas) return;

    // Check prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let width = container.clientWidth;
    let height = container.clientHeight;

    // 1. Scene, Camera, Renderer
    const scene = new THREE.Scene();
    // Slightly pulled back camera so 3D objects never touch borders or telemetry
    const camera = new THREE.PerspectiveCamera(42, width / height, 0.1, 100);
    camera.position.set(0, 0, 13.5);

    const renderer = new THREE.WebGLRenderer({
      canvas,
      alpha: true,
      antialias: true,
      powerPreference: "high-performance",
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    // 2. Dynamic Lighting
    const ambientLight = new THREE.AmbientLight(0xfaf7f2, 1.6);
    scene.add(ambientLight);

    const coreLight = new THREE.PointLight(0xb58a64, 5, 20);
    coreLight.position.set(0, 0, 0);
    scene.add(coreLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 2.2);
    directionalLight.position.set(6, 10, 8);
    scene.add(directionalLight);

    const emeraldLight = new THREE.PointLight(0x10b981, 2, 14);
    emeraldLight.position.set(-4, -3, 3);
    scene.add(emeraldLight);

    // Root Group with magnetic mouse orientation
    const rootGroup = new THREE.Group();
    scene.add(rootGroup);

    // 3. Central Quantum AI Neural Core
    // Outer wireframe geometric hull
    const coreGeo = new THREE.IcosahedronGeometry(1.8, 1);
    const coreWireMat = new THREE.MeshStandardMaterial({
      color: 0x4a3428,
      wireframe: true,
      roughness: 0.3,
      metalness: 0.85,
    });
    const coreMesh = new THREE.Mesh(coreGeo, coreWireMat);
    rootGroup.add(coreMesh);

    // Inner glowing faceted obsidian/gold core
    const innerGeo = new THREE.IcosahedronGeometry(1.25, 2);
    const innerMat = new THREE.MeshStandardMaterial({
      color: 0xb58a64,
      roughness: 0.15,
      metalness: 0.95,
      emissive: 0x4a3428,
      emissiveIntensity: 0.6,
    });
    const innerMesh = new THREE.Mesh(innerGeo, innerMat);
    rootGroup.add(innerMesh);

    // 4. Concentric Gyroscope Rings with particle flow
    const ringMat1 = new THREE.MeshBasicMaterial({
      color: 0xb58a64,
      wireframe: true,
      transparent: true,
      opacity: 0.38,
    });
    const ringGeo1 = new THREE.TorusGeometry(2.7, 0.02, 16, 90);
    const ring1 = new THREE.Mesh(ringGeo1, ringMat1);
    ring1.rotation.x = Math.PI / 3;
    rootGroup.add(ring1);

    const ringMat2 = new THREE.MeshBasicMaterial({
      color: 0x10b981,
      wireframe: true,
      transparent: true,
      opacity: 0.32,
    });
    const ringGeo2 = new THREE.TorusGeometry(3.1, 0.02, 16, 90);
    const ring2 = new THREE.Mesh(ringGeo2, ringMat2);
    ring2.rotation.y = Math.PI / 4;
    rootGroup.add(ring2);

    // 5. Satellite Nodes & Active Curved Synapse Beziers
    const satelliteGroup = new THREE.Group();
    rootGroup.add(satelliteGroup);

    const satellites: {
      id: string;
      mesh: THREE.Mesh;
      position: THREE.Vector3;
      curve: THREE.QuadraticBezierCurve3;
      pulseMesh: THREE.Mesh;
      pulseProgress: number;
      speed: number;
      baseColor: string;
    }[] = [];

    ARCHITECTURE_NODES.forEach((node, i) => {
      const nodePos = new THREE.Vector3(...node.position);

      // Node mesh: Octahedron
      const satGeo = new THREE.OctahedronGeometry(0.38, 0);
      const satMat = new THREE.MeshStandardMaterial({
        color: new THREE.Color(node.color),
        roughness: 0.2,
        metalness: 0.85,
        emissive: new THREE.Color(node.color),
        emissiveIntensity: 0.35,
      });
      const satMesh = new THREE.Mesh(satGeo, satMat);
      satMesh.position.copy(nodePos);
      satMesh.userData = { id: node.id, name: node.name };
      satelliteGroup.add(satMesh);

      // Curved synapse connecting node to central core
      const midPoint = new THREE.Vector3(
        nodePos.x * 0.45 + (Math.random() - 0.5) * 0.5,
        nodePos.y * 0.45 + (Math.random() - 0.5) * 0.5,
        nodePos.z * 0.45 + (Math.random() - 0.5) * 0.5
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
        opacity: 0.42,
      });
      const curveLine = new THREE.Line(curveGeo, curveMat);
      satelliteGroup.add(curveLine);

      // Traveling data packet pulse
      const pulseGeo = new THREE.SphereGeometry(0.09, 8, 8);
      const pulseMat = new THREE.MeshBasicMaterial({
        color: 0x25d366,
      });
      const pulseMesh = new THREE.Mesh(pulseGeo, pulseMat);
      satelliteGroup.add(pulseMesh);

      satellites.push({
        id: node.id,
        mesh: satMesh,
        position: nodePos,
        curve,
        pulseMesh,
        pulseProgress: (i * 0.2) % 1,
        speed: 0.007 + i * 0.002,
        baseColor: node.color,
      });
    });

    // 6. 3D Floating Particle Constellation Dust
    const particleCount = 240;
    const particlePositions = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount * 3; i += 3) {
      particlePositions[i] = (Math.random() - 0.5) * 14;
      particlePositions[i + 1] = (Math.random() - 0.5) * 14;
      particlePositions[i + 2] = (Math.random() - 0.5) * 14;
    }
    const particleGeo = new THREE.BufferGeometry();
    particleGeo.setAttribute(
      "position",
      new THREE.BufferAttribute(particlePositions, 3)
    );
    const particleMat = new THREE.PointsMaterial({
      color: 0xb58a64,
      size: 0.05,
      transparent: true,
      opacity: 0.5,
    });
    const particles = new THREE.Points(particleGeo, particleMat);
    rootGroup.add(particles);

    // 7. Mouse & Drag Interaction with Magnetic Spring Damping
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
        targetRotationY += deltaX * 0.008;
        targetRotationX += deltaY * 0.008;
        previousPointerX = clientX;
        previousPointerY = clientY;
      } else {
        targetRotationY = mouseX * 0.35;
        targetRotationX = -mouseY * 0.28;
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

      if (prefersReducedMotion) {
        renderer.render(scene, camera);
        return;
      }

      const elapsedTime = clock.getElapsedTime();

      // Smooth camera/rootGroup spring lerp
      rootGroup.rotation.y += (targetRotationY - rootGroup.rotation.y) * 0.055;
      rootGroup.rotation.x += (targetRotationX - rootGroup.rotation.x) * 0.055;

      // Base idle continuous spinning
      coreMesh.rotation.y = elapsedTime * 0.22;
      coreMesh.rotation.x = elapsedTime * 0.12;
      innerMesh.rotation.y = -elapsedTime * 0.32;

      ring1.rotation.z = elapsedTime * 0.18;
      ring2.rotation.z = -elapsedTime * 0.22;

      // Breathing scale
      const breath = 1.0 + Math.sin(elapsedTime * 2.2) * 0.035;
      innerMesh.scale.set(breath, breath, breath);

      // Satellites and bezier data pulses
      satellites.forEach((sat) => {
        sat.mesh.rotation.y += 0.02;
        sat.mesh.rotation.x += 0.01;

        sat.pulseProgress = (sat.pulseProgress + sat.speed) % 1;
        const pulsePos = sat.curve.getPointAt(sat.pulseProgress);
        sat.pulseMesh.position.copy(pulsePos);

        const pScale = Math.sin(sat.pulseProgress * Math.PI) * 1.35;
        sat.pulseMesh.scale.set(pScale, pScale, pScale);
      });

      // Background particle drift
      particles.rotation.y = elapsedTime * 0.025;
      particles.rotation.x = elapsedTime * 0.018;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      resizeObserver.disconnect();
      canvas.removeEventListener("mousemove", handlePointerMove);
      canvas.removeEventListener("mousedown", handlePointerDown);
      window.removeEventListener("mouseup", handlePointerUp);
      canvas.removeEventListener("touchmove", handlePointerMove);
      canvas.removeEventListener("touchstart", handlePointerDown);
      window.removeEventListener("touchend", handlePointerUp);

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
      className="relative w-full h-[480px] sm:h-[530px] lg:h-[580px] rounded-3xl bg-gradient-to-b from-[#FAF7F2]/90 to-[#F5F0E8]/70 border border-[#D8C5AF]/90 shadow-2xl backdrop-blur-md overflow-hidden flex flex-col justify-between p-4 sm:p-6 group"
    >
      {/* Top Subtle Telemetry Header (Clean, unboxed, not overlapping 3D shapes) */}
      <div className="relative z-10 flex items-center justify-between pointer-events-none">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FAF7F2]/95 border border-[#D8C5AF] shadow-xs backdrop-blur-sm pointer-events-auto">
          <span className="font-mono text-[10px] sm:text-xs font-bold tracking-wider text-[#241A15] uppercase">
            3D SYSTEM ENGINE
          </span>
        </div>

        <div className="flex items-center gap-2 pointer-events-auto">
          <span className="hidden sm:inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#FAF7F2]/95 border border-[#D8C5AF] text-[10px] font-mono font-medium text-[#4A3428]">
            <Activity className="w-3 h-3 text-[#10B981]" />
            <span>60 FPS WEBGL</span>
          </span>
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#241A15] text-[#F5F0E8] text-[10px] font-mono font-bold shadow-xs">
            <Rotate3d className="w-3 h-3 text-[#B58A64]" />
            <span>{isInteracting ? "ORBITING" : "DRAG TO ORBIT"}</span>
          </span>
        </div>
      </div>

      {/* 3D WebGL Canvas Surface */}
      <div className="absolute inset-0 z-0 cursor-grab active:cursor-grabbing">
        <canvas ref={canvasRef} className="w-full h-full block" />
      </div>

      {/* Floating Interactive Architecture Node Cards at Bottom */}
      <div className="relative z-10 pointer-events-none mt-auto pt-4">
        {/* Active Node Flyout Card */}
        {activeNode && (
          <div className="mb-3 p-3.5 rounded-2xl bg-[#241A15]/95 backdrop-blur-md text-[#F5F0E8] border border-[#B58A64]/50 shadow-2xl animate-in fade-in slide-in-from-bottom-2 duration-150 pointer-events-auto">
            <div className="flex items-center justify-between gap-2">
              <span className="font-mono text-[11px] font-bold text-[#B58A64] uppercase tracking-wider">
                {activeNode.category}
              </span>
              <span className="font-mono text-[10px] text-[#F5F0E8] font-semibold bg-[#FAF7F2]/10 px-2 py-0.5 rounded border border-[#B58A64]/40">
                SELECTED
              </span>
            </div>
            <div className="font-display font-bold text-sm text-white mt-1">
              {activeNode.name}
            </div>
            <p className="text-[11px] text-[#D8C5AF] mt-0.5 leading-snug">
              {activeNode.detail}
            </p>
          </div>
        )}

        {/* Node quick pills - Clean, responsive, non-overlapping */}
        <div className="flex flex-wrap gap-1.5 pointer-events-auto mb-3">
          {ARCHITECTURE_NODES.map((node) => {
            const isSelected = activeNode?.id === node.id;
            return (
              <button
                key={node.id}
                type="button"
                onMouseEnter={() => setActiveNode(node)}
                onMouseLeave={() => setActiveNode(null)}
                onClick={() =>
                  setActiveNode((prev) => (prev?.id === node.id ? null : node))
                }
                className={`px-2.5 py-1 rounded-xl text-[10px] font-mono font-bold transition-all duration-200 cursor-pointer flex items-center shadow-xs ${
                  isSelected
                    ? "bg-[#241A15] text-[#F5F0E8] border border-[#B58A64] scale-105"
                    : "bg-[#FAF7F2]/90 hover:bg-[#241A15] text-[#241A15] hover:text-[#F5F0E8] border border-[#D8C5AF]"
                }`}
              >
                <span>{node.name}</span>
              </button>
            );
          })}
        </div>

        {/* Bottom Mode Switcher Bar */}
        <div className="pt-2.5 border-t border-[#D8C5AF]/60 flex items-center justify-between text-[11px] font-mono text-[#4A3428] pointer-events-auto">
          <span className="flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-[#B58A64]" />
            <span className="font-semibold text-xs text-[#241A15]">Interactive Architecture</span>
          </span>

          <div className="flex items-center gap-1">
            <button
              type="button"
              onClick={() => setActiveMode("neural")}
              className={`px-2.5 py-1 rounded-lg text-[10px] font-bold transition-colors cursor-pointer flex items-center gap-1 ${
                activeMode === "neural"
                  ? "bg-[#241A15] text-[#F5F0E8]"
                  : "bg-[#FAF7F2] hover:bg-[#D8C5AF] text-[#4A3428] border border-[#D8C5AF]/70"
              }`}
            >
              <Cpu className="w-2.5 h-2.5" />
              <span>Mesh</span>
            </button>
            <button
              type="button"
              onClick={() => setActiveMode("pipeline")}
              className={`px-2.5 py-1 rounded-lg text-[10px] font-bold transition-colors cursor-pointer flex items-center gap-1 ${
                activeMode === "pipeline"
                  ? "bg-[#241A15] text-[#F5F0E8]"
                  : "bg-[#FAF7F2] hover:bg-[#D8C5AF] text-[#4A3428] border border-[#D8C5AF]/70"
              }`}
            >
              <Network className="w-2.5 h-2.5" />
              <span>Pipeline</span>
            </button>
            <button
              type="button"
              onClick={() => setActiveMode("agents")}
              className={`px-2.5 py-1 rounded-lg text-[10px] font-bold transition-colors cursor-pointer flex items-center gap-1 ${
                activeMode === "agents"
                  ? "bg-[#241A15] text-[#F5F0E8]"
                  : "bg-[#FAF7F2] hover:bg-[#D8C5AF] text-[#4A3428] border border-[#D8C5AF]/70"
              }`}
            >
              <Bot className="w-2.5 h-2.5" />
              <span>Agents</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
