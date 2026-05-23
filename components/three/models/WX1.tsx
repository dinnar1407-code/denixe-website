'use client';

import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const C = {
  bodyWhite: '#f4f4f6',
  darkGrayBase: '#2a2a32',
  blueAccent: '#1a56db',
  goldBrand: '#D4A843',
  warningYellow: '#ffcc00',
  castIron: '#3a3a44',
  metalGray: '#555560',
};

function WX1Model() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((_, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.08;
    }
  });

  return (
    <group ref={groupRef} position={[0, -0.5, 0]}>

      {/* ── Machine base ── */}
      <mesh position={[0, -0.1, 0]} castShadow receiveShadow>
        <boxGeometry args={[1.9, 0.28, 1.6]} />
        <meshStandardMaterial color={C.darkGrayBase} metalness={0.7} roughness={0.35} />
      </mesh>

      {/* ── Work table base ── */}
      <mesh position={[0, 0.08, 0]} castShadow>
        <boxGeometry args={[1.3, 0.1, 1.0]} />
        <meshStandardMaterial color={C.castIron} metalness={0.75} roughness={0.3} />
      </mesh>

      {/* ── T-slot table ── */}
      <mesh position={[0, 0.15, 0]} castShadow receiveShadow>
        <boxGeometry args={[1.1, 0.05, 0.8]} />
        <meshStandardMaterial color="#888898" metalness={0.65} roughness={0.4} />
      </mesh>
      {[-0.3, -0.05, 0.2, 0.45].map((x, i) => (
        <mesh key={i} position={[x, 0.19, 0]}>
          <boxGeometry args={[0.035, 0.015, 0.75]} />
          <meshStandardMaterial color="#333340" metalness={0.5} roughness={0.65} />
        </mesh>
      ))}

      {/* ── Scroll disc workpiece ── */}
      {/* Base disc */}
      <mesh position={[0.05, 0.26, 0]} castShadow>
        <cylinderGeometry args={[0.32, 0.32, 0.1, 48]} />
        <meshStandardMaterial color="#9a9aaa" metalness={0.8} roughness={0.3} />
      </mesh>
      {/* Spiral groove ring 1 */}
      <mesh position={[0.05, 0.32, 0]}>
        <torusGeometry args={[0.22, 0.035, 8, 32, Math.PI * 1.3]} />
        <meshStandardMaterial color="#6a6a7a" metalness={0.85} roughness={0.25} />
      </mesh>
      {/* Spiral groove ring 2 */}
      <mesh position={[0.05, 0.32, 0]} rotation={[0, Math.PI / 3, 0]}>
        <torusGeometry args={[0.15, 0.028, 8, 32, Math.PI * 1.1]} />
        <meshStandardMaterial color="#6a6a7a" metalness={0.85} roughness={0.25} />
      </mesh>
      {/* Spiral groove ring 3 */}
      <mesh position={[0.05, 0.32, 0]} rotation={[0, Math.PI * 2 / 3, 0]}>
        <torusGeometry args={[0.08, 0.022, 8, 32, Math.PI * 0.9]} />
        <meshStandardMaterial color="#6a6a7a" metalness={0.85} roughness={0.25} />
      </mesh>

      {/* ── Compact column pillars ── */}
      <mesh position={[-0.6, 0.8, -0.5]} castShadow>
        <boxGeometry args={[0.16, 1.55, 0.55]} />
        <meshStandardMaterial color={C.bodyWhite} metalness={0.15} roughness={0.45} />
      </mesh>
      {/* Blue accent on left pillar */}
      <mesh position={[-0.6, 0.8, -0.52]}>
        <boxGeometry args={[0.04, 1.55, 0.55]} />
        <meshStandardMaterial color={C.blueAccent} metalness={0.5} roughness={0.4} />
      </mesh>

      <mesh position={[0.6, 0.8, -0.5]} castShadow>
        <boxGeometry args={[0.16, 1.55, 0.55]} />
        <meshStandardMaterial color={C.bodyWhite} metalness={0.15} roughness={0.45} />
      </mesh>
      <mesh position={[0.6, 0.8, -0.52]}>
        <boxGeometry args={[0.04, 1.55, 0.55]} />
        <meshStandardMaterial color={C.blueAccent} metalness={0.5} roughness={0.4} />
      </mesh>

      {/* ── Cross-rail ── */}
      <mesh position={[0, 1.3, -0.45]} castShadow>
        <boxGeometry args={[1.28, 0.16, 0.28]} />
        <meshStandardMaterial color={C.castIron} metalness={0.75} roughness={0.3} />
      </mesh>

      {/* ── Spindle head (compact) ── */}
      <mesh position={[0, 1.05, 0]} castShadow>
        <boxGeometry args={[0.45, 0.48, 0.38]} />
        <meshStandardMaterial color={C.castIron} metalness={0.78} roughness={0.28} />
      </mesh>
      <mesh position={[0, 1.32, -0.05]} castShadow>
        <boxGeometry args={[0.43, 0.22, 0.35]} />
        <meshStandardMaterial color={C.darkGrayBase} metalness={0.65} roughness={0.38} />
      </mesh>
      <mesh position={[0, 0.82, 0]}>
        <cylinderGeometry args={[0.07, 0.07, 0.28, 32]} />
        <meshStandardMaterial color="#666677" metalness={0.92} roughness={0.12} />
      </mesh>

      {/* ── Enclosure body ── */}
      <mesh position={[0, 0.8, 0.35]} castShadow receiveShadow>
        <boxGeometry args={[1.38, 1.6, 1.35]} />
        <meshStandardMaterial color={C.bodyWhite} metalness={0.15} roughness={0.45} />
      </mesh>

      {/* ── Front door with observation window ── */}
      <mesh position={[0, 0.8, 1.03]} castShadow>
        <boxGeometry args={[1.35, 1.55, 0.05]} />
        <meshStandardMaterial color={C.bodyWhite} metalness={0.15} roughness={0.45} />
      </mesh>
      <mesh position={[0, 0.85, 1.06]}>
        <boxGeometry args={[1.0, 0.85, 0.02]} />
        <meshPhysicalMaterial
          color="#88ccff"
          transparent
          opacity={0.16}
          metalness={0.0}
          roughness={0.0}
          transmission={0.88}
          thickness={0.5}
          envMapIntensity={1.5}
        />
      </mesh>
      <mesh position={[0.6, 0.8, 1.08]}>
        <boxGeometry args={[0.035, 0.2, 0.03]} />
        <meshStandardMaterial color={C.metalGray} metalness={0.9} roughness={0.2} />
      </mesh>

      {/* ── Right-side control cabinet (compact) ── */}
      <mesh position={[1.08, 0.55, -0.1]} castShadow receiveShadow>
        <boxGeometry args={[0.52, 1.25, 1.0]} />
        <meshStandardMaterial color={C.bodyWhite} metalness={0.15} roughness={0.45} />
      </mesh>
      <mesh position={[1.08, 0.55, -0.11]}>
        <boxGeometry args={[0.04, 1.25, 1.0]} />
        <meshStandardMaterial color={C.blueAccent} metalness={0.5} roughness={0.4} />
      </mesh>
      {/* Screen */}
      <mesh position={[0.88, 0.78, -0.1]}>
        <boxGeometry args={[0.3, 0.22, 0.02]} />
        <meshStandardMaterial color="#0a1428" emissive="#1a4080" emissiveIntensity={0.55} metalness={0.1} roughness={0.8} />
      </mesh>
      <mesh position={[0.87, 0.78, -0.09]}>
        <boxGeometry args={[0.24, 0.16, 0.01]} />
        <meshStandardMaterial color="#44aaff" emissive="#44aaff" emissiveIntensity={0.35} metalness={0} roughness={1} />
      </mesh>

      {/* ── 苏州上金 WX1 brand plate ── */}
      <mesh position={[0, 1.62, 1.04]}>
        <planeGeometry args={[0.8, 0.12]} />
        <meshStandardMaterial color={C.goldBrand} emissive={C.goldBrand} emissiveIntensity={0.15} metalness={0.9} roughness={0.2} />
      </mesh>

      {/* ── Yellow warning light (compact) ── */}
      <mesh position={[0.5, 1.65, -0.4]} castShadow>
        <cylinderGeometry args={[0.04, 0.04, 0.07, 16]} />
        <meshStandardMaterial color="#333340" metalness={0.7} roughness={0.35} />
      </mesh>
      <mesh position={[0.5, 1.73, -0.4]}>
        <cylinderGeometry args={[0.038, 0.038, 0.06, 16]} />
        <meshStandardMaterial color={C.warningYellow} emissive={C.warningYellow} emissiveIntensity={0.3} metalness={0.1} roughness={0.2} transparent opacity={0.9} />
      </mesh>
      <mesh position={[0.5, 1.77, -0.4]}>
        <sphereGeometry args={[0.028, 16, 8, 0, Math.PI * 2, 0, Math.PI / 2]} />
        <meshStandardMaterial color={C.warningYellow} emissive={C.warningYellow} emissiveIntensity={0.25} metalness={0.1} roughness={0.2} />
      </mesh>

      {/* ── Top vents ── */}
      {[-0.4, 0, 0.4].map((x, i) => (
        <mesh key={i} position={[x, 1.62, 0.1]}>
          <boxGeometry args={[0.2, 0.025, 0.6]} />
          <meshStandardMaterial color="#d8d8e0" metalness={0.3} roughness={0.5} />
        </mesh>
      ))}

      {/* ── Floor chip pan ── */}
      <mesh position={[0, 0.04, 0]} receiveShadow>
        <boxGeometry args={[1.85, 0.035, 1.55]} />
        <meshStandardMaterial color="#445566" metalness={0.5} roughness={0.6} />
      </mesh>

    </group>
  );
}

export default function WX1() {
  return <WX1Model />;
}
