'use client';
import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Environment } from '@react-three/drei';
import * as THREE from 'three';
import { DNX700U } from './models';

function GoldParticleField() {
  const particles = useMemo(() => {
    const p = new Float32Array(180 * 3);
    for (let i = 0; i < 180; i++) {
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      const r = 1.8 + Math.random() * 1.4;
      p[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      p[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta) * 0.7 + 0.2;
      p[i * 3 + 2] = r * Math.cos(phi);
    }
    return p;
  }, []);

  const pointsRef = useRef<THREE.Points>(null);

  useFrame((_, delta) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y += delta * 0.04;
      pointsRef.current.rotation.x += delta * 0.012;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[particles, 3]}
          count={180}
          array={particles}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.007}
        color="#D4A843"
        transparent
        opacity={0.45}
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </points>
  );
}

function RimLights() {
  return (
    <>
      {/* Front key light */}
      <spotLight position={[2.5, 3.5, 2.8]} angle={0.35} penumbra={0.6} intensity={5} color="#e8f0ff" castShadow shadow-mapSize-width={1024} shadow-mapSize-height={1024} />
      {/* Back rim light — warm gold tint for contour */}
      <spotLight position={[-2.2, 2.0, -2.5]} angle={0.45} penumbra={0.7} intensity={3.5} color="#D4A843" />
      {/* Top fill */}
      <spotLight position={[0, 4.5, 0]} angle={0.5} penumbra={0.8} intensity={2} color="#ffffff" />
      {/* Cool left rim for depth separation */}
      <pointLight position={[-3, 1, 1]} intensity={1.8} color="#5599dd" />
      {/* Bottom bounce */}
      <pointLight position={[0, -2, 1]} intensity={0.6} color="#8899bb" />
      <Environment preset="night" />
    </>
  );
}

export default function Hero3D() {
  return (
    <div className="absolute inset-0">
      <Canvas
        camera={{ position: [2.4, 1.6, 2.8], fov: 40, near: 0.1, far: 50 }}
        shadows
        dpr={[1.5, 2]}
        gl={{
          antialias: true,
          toneMapping: THREE.ACESFilmicToneMapping,
          toneMappingExposure: 1.15,
        }}
      >
        <GoldParticleField />
        <RimLights />
        <DNX700U />
      </Canvas>
    </div>
  );
}
