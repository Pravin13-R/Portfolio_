import React, { useEffect, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Sparkles, Stars } from "@react-three/drei";

function useMediaQuery(query) {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia(query);
    const updateMatch = () => setMatches(mediaQuery.matches);
    updateMatch();
    mediaQuery.addEventListener("change", updateMatch);
    return () => mediaQuery.removeEventListener("change", updateMatch);
  }, [query]);

  return matches;
}

function FloatingShape({ position, scale = 1, color = "#22d3ee", reducedMotion }) {
  const ref = useRef(null);

  useFrame((_, delta) => {
    if (!ref.current || reducedMotion) return;
    ref.current.rotation.x += delta * 0.25;
    ref.current.rotation.y += delta * 0.4;
  });

  return (
    <Float speed={reducedMotion ? 0 : 1.5} rotationIntensity={0.7} floatIntensity={1.2}>
      <mesh ref={ref} position={position} scale={scale}>
        <icosahedronGeometry args={[0.75, 0]} />
        <meshStandardMaterial color={color} metalness={0.65} roughness={0.22} wireframe />
      </mesh>
    </Float>
  );
}

export default function ThreeScene() {
  const wrapperRef = useRef(null);
  const [isVisible, setIsVisible] = useState(true);
  const isMobile = useMediaQuery("(max-width: 800px)");
  const reducedMotion = useMediaQuery("(prefers-reduced-motion: reduce)");

  useEffect(() => {
    if (!wrapperRef.current || !("IntersectionObserver" in window)) return undefined;

    const observer = new IntersectionObserver(([entry]) => {
      setIsVisible(entry.isIntersecting);
    });
    observer.observe(wrapperRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={wrapperRef} className="three-scene">
      <Canvas
        camera={{ position: [0, 0, 7], fov: 45 }}
        dpr={[1, 1.25]}
        frameloop={isVisible ? "always" : "never"}
        gl={{ alpha: true }}
      >
        <ambientLight intensity={1.1} />
        <pointLight position={[3, 3, 4]} intensity={3} color="#27d9ff" />
        <pointLight position={[-4, -2, 2]} intensity={2} color="#7c3aed" />
        <Stars radius={70} depth={35} count={isMobile ? 300 : 850} factor={2} fade speed={reducedMotion ? 0 : 0.5} />
        <Sparkles count={isMobile ? 12 : 30} scale={8} size={2} speed={reducedMotion ? 0 : 0.25} color="#5ee7ff" />
        <FloatingShape position={[-1.5, 0.8, 0]} scale={1.15} color="#22d3ee" reducedMotion={reducedMotion} />
        <FloatingShape position={[1.6, -0.9, -1]} scale={0.75} color="#8b5cf6" reducedMotion={reducedMotion} />
        <FloatingShape position={[1.7, 1.25, -2]} scale={0.55} color="#3b82f6" reducedMotion={reducedMotion} />
      </Canvas>
    </div>
  );
}
