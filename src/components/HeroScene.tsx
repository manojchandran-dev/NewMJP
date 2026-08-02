"use client";

import { Canvas } from "@react-three/fiber";
import { Float, MeshDistortMaterial } from "@react-three/drei";

type ShapeKind = "torus" | "icosahedron" | "dodecahedron" | "sphere";

function ShapeGeometry({ kind }: { kind: ShapeKind }) {
  switch (kind) {
    case "torus":
      return <torusGeometry args={[0.85, 0.3, 32, 100]} />;
    case "icosahedron":
      return <icosahedronGeometry args={[0.95, 0]} />;
    case "dodecahedron":
      return <dodecahedronGeometry args={[0.7, 0]} />;
    case "sphere":
      return <sphereGeometry args={[0.55, 32, 32]} />;
  }
}

function FloatingShape({
  position,
  color,
  kind,
  distort = 0.25,
  speed = 1,
}: {
  position: [number, number, number];
  color: string;
  kind: ShapeKind;
  distort?: number;
  speed?: number;
}) {
  return (
    <Float speed={speed} rotationIntensity={1.1} floatIntensity={1.7}>
      <mesh position={position}>
        <ShapeGeometry kind={kind} />
        <MeshDistortMaterial color={color} distort={distort} speed={1.6} roughness={0.25} metalness={0.2} />
      </mesh>
    </Float>
  );
}

export function HeroScene() {
  return (
    <div className="pointer-events-none absolute inset-0" aria-hidden="true">
      <Canvas camera={{ position: [0, 0, 8], fov: 45 }} dpr={[1, 1.75]}>
        <ambientLight intensity={0.7} />
        <directionalLight position={[5, 5, 5]} intensity={1.3} />
        <directionalLight position={[-5, -3, -4]} intensity={0.5} color="#f43397" />

        <FloatingShape position={[-3.4, 1.6, -2]} color="#f43397" kind="torus" speed={1.1} />
        <FloatingShape position={[3.4, -1.2, -3]} color="#38bdf8" kind="icosahedron" distort={0.35} speed={0.9} />
        <FloatingShape position={[2.6, 2.1, -4]} color="#fbbf24" kind="dodecahedron" distort={0.15} speed={1.4} />
        <FloatingShape position={[-2.8, -1.9, -3]} color="#a78bfa" kind="sphere" distort={0.4} speed={1.2} />
      </Canvas>
    </div>
  );
}
