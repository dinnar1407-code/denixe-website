'use client';

import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

// Colors from spec
const C = {
  bodyWhite: '#f4f4f6',
  darkGrayBase: '#2a2a32',
  blueAccent: '#1a56db',
  goldBrand: '#D4A843',
  glass: '#88ccff',
  warningYellow: '#ffcc00',
  castIron: '#3a3a44',
  metalGray: '#555560',
};

function DNX700UModel() {
  const groupRef = useRef<THREE.Group>(null);

  // Slow auto-rotation
  useFrame((_, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.08;
    }
  });

  return (
    <group ref={groupRef} position={[0, -0.6, 0]}>

      {/* ── Dark gray cast iron base ── */}
      <mesh position={[0, -0.15, 0]} castShadow receiveShadow>
        <boxGeometry args={[2.5, 0.35, 2.0]} />
        <meshStandardMaterial color={C.darkGrayBase} metalness={0.7} roughness={0.35} />
      </mesh>

      {/* Base front/back trim strips */}
      {[-0.95, 0.95].map((z, i) => (
        <mesh key={i} position={[0, -0.15, z]} castShadow>
          <boxGeometry args={[2.5, 0.35, 0.05]} />
          <meshStandardMaterial color={C.castIron} metalness={0.6} roughness={0.4} />
        </mesh>
      ))}

      {/* ── Main white enclosed body ── */}
      <mesh position={[0, 0.9, 0]} castShadow receiveShadow>
        <boxGeometry args={[2.5, 1.8, 2.0]} />
        <meshStandardMaterial color={C.bodyWhite} metalness={0.15} roughness={0.45} />
      </mesh>

      {/* ── Blue accent strips on door sides ── */}
      {[-1.26, 1.26].map((x, i) => (
        <mesh key={i} position={[x, 0.9, 0]} castShadow>
          <boxGeometry args={[0.04, 1.8, 2.0]} />
          <meshStandardMaterial color={C.blueAccent} metalness={0.5} roughness={0.4} />
        </mesh>
      ))}

      {/* ── Front door (left hinged) ── */}
      {/* Door frame */}
      <mesh position={[-0.7, 0.9, 1.02]} castShadow>
        <boxGeometry args={[1.1, 1.75, 0.05]} />
        <meshStandardMaterial color={C.bodyWhite} metalness={0.15} roughness={0.45} />
      </mesh>
      {/* Door window glass (large viewing window) */}
      <mesh position={[-0.7, 0.95, 1.05]}>
        <boxGeometry args={[0.9, 1.1, 0.02]} />
        <meshPhysicalMaterial
          color={C.glass}
          transparent
          opacity={0.18}
          metalness={0.0}
          roughness={0.0}
          transmission={0.85}
          thickness={0.5}
          envMapIntensity={1.5}
        />
      </mesh>
      {/* Door handle */}
      <mesh position={[-0.18, 0.9, 1.07]} castShadow>
        <boxGeometry args={[0.05, 0.25, 0.03]} />
        <meshStandardMaterial color={C.metalGray} metalness={0.9} roughness={0.2} />
      </mesh>

      {/* ── Right side panel detail ── */}
      <mesh position={[1.26, 0.9, 0]} castShadow>
        <boxGeometry args={[0.04, 1.8, 2.0]} />
        <meshStandardMaterial color={C.bodyWhite} metalness={0.15} roughness={0.45} />
      </mesh>

      {/* ── Interior: work chamber ── */}
      <mesh position={[0, 0.9, 0]}>
        <boxGeometry args={[2.3, 1.6, 1.85]} />
        <meshStandardMaterial color="#d8d8e0" metalness={0.1} roughness={0.6} side={THREE.BackSide} />
      </mesh>

      {/* ── 5-axis rotary table ── */}
      {/* Table base */}
      <mesh position={[0, 0.18, 0]} castShadow>
        <cylinderGeometry args={[0.55, 0.6, 0.12, 48]} />
        <meshStandardMaterial color={C.castIron} metalness={0.8} roughness={0.3} />
      </mesh>
      {/* Rotating indexer ring */}
      <mesh position={[0, 0.26, 0]}>
        <torusGeometry args={[0.48, 0.05, 16, 48]} />
        <meshStandardMaterial color={C.metalGray} metalness={0.9} roughness={0.2} />
      </mesh>
      {/* Table top surface */}
      <mesh position={[0, 0.30, 0]} castShadow>
        <cylinderGeometry args={[0.5, 0.5, 0.06, 48]} />
        <meshStandardMaterial color="#888898" metalness={0.7} roughness={0.35} />
      </mesh>
      {/* T-slot grooves on table */}
      {[-0.25, 0, 0.25].map((x, i) => (
        <mesh key={i} position={[x, 0.335, 0]}>
          <boxGeometry args={[0.04, 0.02, 0.9]} />
          <meshStandardMaterial color="#333340" metalness={0.5} roughness={0.6} />
        </mesh>
      ))}

      {/* ── Conical gear workpiece on table ── */}
      <mesh position={[0, 0.52, 0]} castShadow>
        <coneGeometry args={[0.22, 0.28, 32]} />
        <meshStandardMaterial color="#9a9aaa" metalness={0.85} roughness={0.25} />
      </mesh>
      {/* Gear teeth ring */}
      <mesh position={[0, 0.38, 0]}>
        <torusGeometry args={[0.22, 0.035, 8, 24]} />
        <meshStandardMaterial color="#777788" metalness={0.9} roughness={0.2} />
      </mesh>

      {/* ── Spindle head inside chamber ── */}
      <mesh position={[0, 1.35, 0]} castShadow>
        <boxGeometry args={[0.55, 0.45, 0.45]} />
        <meshStandardMaterial color={C.castIron} metalness={0.75} roughness={0.3} />
      </mesh>
      {/* Spindle nose */}
      <mesh position={[0, 1.05, 0]}>
        <cylinderGeometry args={[0.1, 0.1, 0.35, 32]} />
        <meshStandardMaterial color="#666677" metalness={0.92} roughness={0.12} />
      </mesh>
      {/* Spindle motor housing */}
      <mesh position={[0, 1.6, -0.1]} castShadow>
        <boxGeometry args={[0.5, 0.3, 0.4]} />
        <meshStandardMaterial color={C.darkGrayBase} metalness={0.6} roughness={0.4} />
      </mesh>

      {/* ── Left-side suspended CNC control console ── */}
      {/* Console arm/bracket */}
      <mesh position={[-1.28, 1.1, -0.5]} castShadow>
        <boxGeometry args={[0.06, 0.08, 0.5]} />
        <meshStandardMaterial color={C.metalGray} metalness={0.8} roughness={0.3} />
      </mesh>
      {/* Console body */}
      <mesh position={[-1.35, 1.1, -0.5]} castShadow>
        <boxGeometry args={[0.22, 0.55, 0.4]} />
        <meshStandardMaterial color="#1e1e28" metalness={0.4} roughness={0.55} />
      </mesh>
      {/* Screen */}
      <mesh position={[-1.23, 1.18, -0.5]}>
        <boxGeometry args={[0.18, 0.28, 0.02]} />
        <meshStandardMaterial color="#0a1428" emissive="#1a4080" emissiveIntensity={0.6} metalness={0.1} roughness={0.8} />
      </mesh>
      {/* Screen glow */}
      <mesh position={[-1.22, 1.18, -0.49]}>
        <boxGeometry args={[0.14, 0.22, 0.01]} />
        <meshStandardMaterial color="#44aaff" emissive="#44aaff" emissiveIntensity={0.4} metalness={0} roughness={1} />
      </mesh>
      {/* Console buttons row */}
      {[-0.62, -0.57, -0.52, -0.47].map((x, i) => (
        <mesh key={i} position={[x, 1.02, -0.5]}>
          <boxGeometry args={[0.025, 0.025, 0.02]} />
          <meshStandardMaterial
            color={i === 0 ? '#ff4444' : i === 1 ? '#44ff44' : '#aaaaaa'}
            emissive={i === 0 ? '#ff2222' : i === 1 ? '#22ff22' : '#888888'}
            emissiveIntensity={0.5}
            metalness={0.3}
            roughness={0.5}
          />
        </mesh>
      ))}

      {/* ── Yellow warning light stack on top ── */}
      {/* Base mount */}
      <mesh position={[0.85, 1.86, -0.7]} castShadow>
        <cylinderGeometry args={[0.06, 0.06, 0.08, 16]} />
        <meshStandardMaterial color="#333340" metalness={0.7} roughness={0.35} />
      </mesh>
      {/* Yellow lens */}
      <mesh position={[0.85, 1.96, -0.7]}>
        <cylinderGeometry args={[0.055, 0.055, 0.07, 16]} />
        <meshStandardMaterial color={C.warningYellow} emissive={C.warningYellow} emissiveIntensity={0.3} metalness={0.1} roughness={0.2} transparent opacity={0.9} />
      </mesh>
      {/* Dome top */}
      <mesh position={[0.85, 2.01, -0.7]}>
        <sphereGeometry args={[0.04, 16, 8, 0, Math.PI * 2, 0, Math.PI / 2]} />
        <meshStandardMaterial color={C.warningYellow} emissive={C.warningYellow} emissiveIntensity={0.25} metalness={0.1} roughness={0.2} />
      </mesh>

      {/* ── Brand plate: DNX 700U ── */}
      <mesh position={[0, 1.82, 1.02]}>
        <planeGeometry args={[0.9, 0.14]} />
        <meshStandardMaterial color={C.goldBrand} emissive={C.goldBrand} emissiveIntensity={0.15} metalness={0.9} roughness={0.2} />
      </mesh>

      {/* ── SJ Denixe small brand plate (left side) ── */}
      <mesh position={[-1.27, 0.6, 0]}>
        <planeGeometry args={[0.04, 0.18]} />
        <meshStandardMaterial color={C.goldBrand} emissive={C.goldBrand} emissiveIntensity={0.1} metalness={0.9} roughness={0.2} />
      </mesh>

      {/* ── Roof detail with vents ── */}
      {[-0.6, -0.2, 0.2, 0.6].map((x, i) => (
        <mesh key={i} position={[x, 1.81, 0]}>
          <boxGeometry args={[0.25, 0.03, 0.8]} />
          <meshStandardMaterial color="#d8d8e0" metalness={0.3} roughness={0.5} />
        </mesh>
      ))}

      {/* ── Floor chip/coolant pan ── */}
      <mesh position={[0, -0.01, 0]} receiveShadow>
        <boxGeometry args={[2.4, 0.04, 1.9]} />
        <meshStandardMaterial color="#445566" metalness={0.5} roughness={0.6} />
      </mesh>

    </group>
  );
}

export default function DNX700U() {
  return <DNX700UModel />;
}
