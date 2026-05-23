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

function HPS1000Model() {
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
        <boxGeometry args={[2.2, 0.3, 1.8]} />
        <meshStandardMaterial color={C.darkGrayBase} metalness={0.7} roughness={0.35} />
      </mesh>

      {/* ── Work table base ── */}
      <mesh position={[0, 0.1, 0]} castShadow>
        <boxGeometry args={[1.6, 0.12, 1.2]} />
        <meshStandardMaterial color={C.castIron} metalness={0.75} roughness={0.3} />
      </mesh>

      {/* ── T-slot work table ── */}
      <mesh position={[0, 0.18, 0]} castShadow receiveShadow>
        <boxGeometry args={[1.4, 0.06, 1.0]} />
        <meshStandardMaterial color="#888898" metalness={0.65} roughness={0.4} />
      </mesh>
      {/* T-slot grooves */}
      {[-0.4, -0.1, 0.2, 0.5].map((x, i) => (
        <mesh key={i} position={[x, 0.225, 0]}>
          <boxGeometry args={[0.04, 0.02, 0.95]} />
          <meshStandardMaterial color="#333340" metalness={0.5} roughness={0.65} />
        </mesh>
      ))}

      {/* ── Metal block workpiece on table ── */}
      <mesh position={[0.1, 0.3, 0.05]} castShadow>
        <boxGeometry args={[0.35, 0.18, 0.28]} />
        <meshStandardMaterial color="#7a8a9a" metalness={0.82} roughness={0.28} />
      </mesh>
      {/* Workpiece detail slot */}
      <mesh position={[0.1, 0.28, 0.05]}>
        <boxGeometry args={[0.28, 0.04, 0.06]} />
        <meshStandardMaterial color={C.darkGrayBase} metalness={0.6} roughness={0.5} />
      </mesh>

      {/* ── Column / pillar — left blue accent ── */}
      <mesh position={[-0.72, 0.95, -0.55]} castShadow>
        <boxGeometry args={[0.18, 1.8, 0.6]} />
        <meshStandardMaterial color={C.blueAccent} metalness={0.5} roughness={0.4} />
      </mesh>
      {/* Column body */}
      <mesh position={[-0.72, 0.95, 0.0]} castShadow>
        <boxGeometry args={[0.18, 1.8, 1.1]} />
        <meshStandardMaterial color={C.bodyWhite} metalness={0.15} roughness={0.45} />
      </mesh>

      {/* ── Column / pillar — right blue accent ── */}
      <mesh position={[0.72, 0.95, -0.55]} castShadow>
        <boxGeometry args={[0.18, 1.8, 0.6]} />
        <meshStandardMaterial color={C.blueAccent} metalness={0.5} roughness={0.4} />
      </mesh>
      <mesh position={[0.72, 0.95, 0.0]} castShadow>
        <boxGeometry args={[0.18, 1.8, 1.1]} />
        <meshStandardMaterial color={C.bodyWhite} metalness={0.15} roughness={0.45} />
      </mesh>

      {/* ── Cross-rail / bridge ── */}
      <mesh position={[0, 1.55, -0.45]} castShadow>
        <boxGeometry args={[1.55, 0.18, 0.3]} />
        <meshStandardMaterial color={C.castIron} metalness={0.75} roughness={0.3} />
      </mesh>

      {/* ── Spindle head assembly ── */}
      <mesh position={[0.05, 1.2, 0.1]} castShadow>
        <boxGeometry args={[0.5, 0.55, 0.42]} />
        <meshStandardMaterial color={C.castIron} metalness={0.78} roughness={0.28} />
      </mesh>
      {/* Spindle motor housing */}
      <mesh position={[0.05, 1.5, -0.05]} castShadow>
        <boxGeometry args={[0.48, 0.28, 0.38]} />
        <meshStandardMaterial color={C.darkGrayBase} metalness={0.65} roughness={0.38} />
      </mesh>
      {/* Spindle nose */}
      <mesh position={[0.05, 0.92, 0.1]}>
        <cylinderGeometry args={[0.08, 0.08, 0.3, 32]} />
        <meshStandardMaterial color="#666677" metalness={0.92} roughness={0.12} />
      </mesh>

      {/* ── Enclosure body ── */}
      <mesh position={[0, 0.95, 0.4]} castShadow receiveShadow>
        <boxGeometry args={[1.65, 1.9, 1.55]} />
        <meshStandardMaterial color={C.bodyWhite} metalness={0.15} roughness={0.45} />
      </mesh>

      {/* ── Front door with observation window ── */}
      {/* Door frame */}
      <mesh position={[0, 0.95, 1.18]} castShadow>
        <boxGeometry args={[1.6, 1.85, 0.05]} />
        <meshStandardMaterial color={C.bodyWhite} metalness={0.15} roughness={0.45} />
      </mesh>
      {/* Window glass */}
      <mesh position={[0, 1.05, 1.21]}>
        <boxGeometry args={[1.2, 1.0, 0.02]} />
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
      {/* Door handle */}
      <mesh position={[0.72, 0.95, 1.22]}>
        <boxGeometry args={[0.04, 0.22, 0.03]} />
        <meshStandardMaterial color={C.metalGray} metalness={0.9} roughness={0.2} />
      </mesh>

      {/* ── Right-side separate CNC control cabinet ── */}
      <mesh position={[1.3, 0.6, -0.1]} castShadow receiveShadow>
        <boxGeometry args={[0.6, 1.5, 1.2]} />
        <meshStandardMaterial color={C.bodyWhite} metalness={0.15} roughness={0.45} />
      </mesh>
      {/* Cabinet blue accent strip */}
      <mesh position={[1.29, 0.6, -0.1]}>
        <boxGeometry args={[0.04, 1.5, 1.2]} />
        <meshStandardMaterial color={C.blueAccent} metalness={0.5} roughness={0.4} />
      </mesh>
      {/* Control screen */}
      <mesh position={[1.08, 0.85, -0.1]}>
        <boxGeometry args={[0.35, 0.28, 0.02]} />
        <meshStandardMaterial color="#0a1428" emissive="#1a4080" emissiveIntensity={0.55} metalness={0.1} roughness={0.8} />
      </mesh>
      {/* Screen glow */}
      <mesh position={[1.07, 0.85, -0.09]}>
        <boxGeometry args={[0.28, 0.2, 0.01]} />
        <meshStandardMaterial color="#44aaff" emissive="#44aaff" emissiveIntensity={0.35} metalness={0} roughness={1} />
      </mesh>
      {/* Keyboard panel */}
      <mesh position={[1.08, 0.5, -0.1]}>
        <boxGeometry args={[0.35, 0.14, 0.02]} />
        <meshStandardMaterial color="#1e1e28" metalness={0.3} roughness={0.7} />
      </mesh>
      {/* Cabinet door vents */}
      {[0.0, 0.12, 0.24, 0.36].map((y, i) => (
        <mesh key={i} position={[1.3, y + 0.1, 0.52]}>
          <boxGeometry args={[0.5, 0.04, 0.04]} />
          <meshStandardMaterial color={C.castIron} metalness={0.5} roughness={0.5} />
        </mesh>
      ))}

      {/* ── Yellow warning light on top ── */}
      <mesh position={[0.0, 1.92, -0.5]} castShadow>
        <cylinderGeometry args={[0.055, 0.055, 0.08, 16]} />
        <meshStandardMaterial color="#333340" metalness={0.7} roughness={0.35} />
      </mesh>
      <mesh position={[0.0, 2.02, -0.5]}>
        <cylinderGeometry args={[0.05, 0.05, 0.07, 16]} />
        <meshStandardMaterial color={C.warningYellow} emissive={C.warningYellow} emissiveIntensity={0.3} metalness={0.1} roughness={0.2} transparent opacity={0.9} />
      </mesh>
      <mesh position={[0.0, 2.07, -0.5]}>
        <sphereGeometry args={[0.038, 16, 8, 0, Math.PI * 2, 0, Math.PI / 2]} />
        <meshStandardMaterial color={C.warningYellow} emissive={C.warningYellow} emissiveIntensity={0.25} metalness={0.1} roughness={0.2} />
      </mesh>

      {/* ── HPS 1000 brand plate ── */}
      <mesh position={[0, 1.86, 1.2]}>
        <planeGeometry args={[0.75, 0.12]} />
        <meshStandardMaterial color={C.goldBrand} emissive={C.goldBrand} emissiveIntensity={0.15} metalness={0.9} roughness={0.2} />
      </mesh>

      {/* ── Top roof with vent slots ── */}
      {[-0.5, -0.1, 0.3].map((x, i) => (
        <mesh key={i} position={[x, 1.91, 0.2]}>
          <boxGeometry args={[0.3, 0.03, 0.7]} />
          <meshStandardMaterial color="#d8d8e0" metalness={0.3} roughness={0.5} />
        </mesh>
      ))}

      {/* ── Floor chip pan ── */}
      <mesh position={[0, 0.05, 0]} receiveShadow>
        <boxGeometry args={[2.1, 0.04, 1.7]} />
        <meshStandardMaterial color="#445566" metalness={0.5} roughness={0.6} />
      </mesh>

    </group>
  );
}

export default function HPS1000() {
  return <HPS1000Model />;
}
