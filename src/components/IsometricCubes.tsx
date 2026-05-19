"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { ContactShadows, Html, RoundedBox } from "@react-three/drei";
import { useEffect, useRef } from "react";
import type { Group, Mesh } from "three";

type IconKind = "bars" | "leaf" | "coin" | "spark";

// Cubes sit at the corners of a square in the XZ plane. With the isometric
// camera at (4,4,4), this projects to a true on-screen diamond — top / left /
// right / bottom — so stretched cubes never share a screen column with another.
const CUBE_SIZE = 1.6;
const CUBE_HALF = CUBE_SIZE / 2;
const D = 1.05;
const CUBES: Array<{
  position: [number, number, number];
  icon: IconKind;
  phase: number;
  speed: number;
  stretch: number;
}> = [
  {
    position: [-D, 0, -D],
    icon: "bars",
    phase: 0.0,
    speed: 5.4,
    stretch: 0.45,
  },
  { position: [-D, 0, D], icon: "leaf", phase: 1.6, speed: 4.0, stretch: 0.25 },
  { position: [D, 0, -D], icon: "coin", phase: 2.4, speed: 6.3, stretch: 0.55 },
  { position: [D, 0, D], icon: "spark", phase: 0.9, speed: 4.7, stretch: 0.3 },
];

function CubeIcon({ kind }: { kind: IconKind }) {
  const paths: Record<IconKind, React.ReactNode> = {
    bars: <path d="M5 18V12M12 18V6M19 18v-9" />,
    leaf: <path d="M20 4c0 9-5 15-14 15M7 17c0-6 4-10 10-12" />,
    coin: (
      <>
        <circle cx="12" cy="12" r="7" />
        <path d="M9.5 12h5M12 9.5v5" />
      </>
    ),
    spark: <path d="M12 4v16M4 12h16M7 7l10 10M17 7 7 17" />,
  };
  return (
    <svg
      width="128"
      height="128"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#7ea83a"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      style={{ pointerEvents: "none", userSelect: "none" }}
    >
      {paths[kind]}
    </svg>
  );
}

function Cube({
  position,
  icon,
  phase,
  speed,
  stretch,
}: (typeof CUBES)[number]) {
  const meshRef = useRef<Mesh>(null);
  const iconRef = useRef<Group>(null);
  // Clear any stale `color` buffer attribute drei's memoised geometry might
  // still be carrying from a prior render — otherwise the material can fall
  // through to vertex colors and render the cube as black.
  useEffect(() => {
    const mesh = meshRef.current;
    if (!mesh?.geometry) return;
    if (mesh.geometry.getAttribute("color")) {
      mesh.geometry.deleteAttribute("color");
    }
  }, []);
  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    // Wave from 0 → 1 → 0 (cosine-shifted so cubes start at resting size).
    const wave = (1 - Math.cos(t * speed + phase)) / 2;
    const s = 1 + wave * stretch;
    if (meshRef.current) {
      meshRef.current.scale.y = s;
      // Cube center moves up by half the extra height so the bottom face stays
      // pinned to the group's origin (the resting ground line).
      meshRef.current.position.y = (s - 1) * CUBE_HALF;
    }
    if (iconRef.current) {
      // Icon rides the new top of the stretched cube.
      iconRef.current.position.y = (2 * s - 1) * CUBE_HALF + 0.02;
    }
  });
  return (
    <group position={position}>
      <RoundedBox
        ref={meshRef}
        args={[CUBE_SIZE, CUBE_SIZE, CUBE_SIZE]}
        radius={0.09}
        smoothness={4}
        castShadow
      >
        <meshStandardMaterial
          color="#d5e6d9"
          roughness={0.7}
          metalness={0.02}
          toneMapped={false}
        />
      </RoundedBox>
      <group ref={iconRef} position={[0, CUBE_HALF + 0.02, 0]}>
        <Html
          rotation={[-Math.PI / 2, 0, 0]}
          transform
          center
          distanceFactor={2.8}
          style={{ pointerEvents: "none" }}
        >
          <CubeIcon kind={icon} />
        </Html>
      </group>
    </group>
  );
}

export default function IsometricCubes() {
  return (
    <div
      style={{
        width: 500,
        height: 420,
        margin: "-32px auto 0",
      }}
    >
      <Canvas
        orthographic
        camera={{ position: [4, 4, 4], zoom: 78, near: -10, far: 50 }}
        onCreated={({ camera }) => {
          // Aim slightly above origin — just enough so the tallest stretched
          // cube still clears the top, but not so much that we leave a big
          // empty band above the diamond.
          camera.lookAt(0, 0.5, 0);
          camera.updateProjectionMatrix();
        }}
        shadows
        gl={{ antialias: true, alpha: true }}
        dpr={[1, 2]}
      >
        <ambientLight intensity={1.05} />
        <directionalLight
          position={[6, 8, 4]}
          intensity={0.65}
          castShadow
          shadow-mapSize={[1024, 1024]}
        />
        <directionalLight position={[-4, 2, -3]} intensity={0.3} />
        <ContactShadows
          position={[0, -CUBE_HALF, 0]}
          opacity={0.32}
          scale={7}
          blur={2.6}
          far={3}
          color="#384a1f"
        />
        {CUBES.map((cube, i) => (
          <Cube key={i} {...cube} />
        ))}
      </Canvas>
    </div>
  );
}
