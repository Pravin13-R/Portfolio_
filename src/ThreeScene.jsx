import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, OrbitControls, Stars, Sparkles } from "@react-three/drei";

function FloatingShape({ position, scale = 1, color = "#22d3ee" }) {
  const ref = useRef();

  useFrame((_, delta) => {
    if (!ref.current) return;
    ref.current.rotation.x += delta * 0.25;
    ref.current.rotation.y += delta * 0.4;
  });

  return (
    <Float speed={1.5} rotationIntensity={0.7} floatIntensity={1.2}>
      <mesh ref={ref} position={position} scale={scale}>
        <icosahedronGeometry args={[0.75, 0]} />
        <meshStandardMaterial color={color} metalness={0.65} roughness={0.22} wireframe />
      </mesh>
    </Float>
  );
}

export default function ThreeScene() {
  return (
    <Canvas camera={{ position: [0, 0, 7], fov: 45 }} dpr={[1, 1.25]}>
      <color attach="background" args={["#050816"]} />
      <ambientLight intensity={1.1} />
      <pointLight position={[3, 3, 4]} intensity={3} color="#27d9ff" />
      <pointLight position={[-4, -2, 2]} intensity={2} color="#7c3aed" />
      <Stars radius={70} depth={35} count={850} factor={2} fade speed={0.5} />
      <Sparkles count={30} scale={8} size={2} speed={0.25} color="#5ee7ff" />
      <FloatingShape position={[-1.5, 0.8, 0]} scale={1.15} color="#22d3ee" />
      <FloatingShape position={[1.6, -0.9, -1]} scale={0.75} color="#8b5cf6" />
      <FloatingShape position={[1.7, 1.25, -2]} scale={0.55} color="#3b82f6" />
      <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.35} />
    </Canvas>
  );
}
