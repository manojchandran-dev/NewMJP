"use client";

import { useMemo } from "react";
import { Canvas } from "@react-three/fiber";
import { ContactShadows, Float, OrbitControls, useTexture } from "@react-three/drei";
import * as THREE from "three";

const VERTEX_SHADER = `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

const FRAGMENT_SHADER = `
  uniform sampler2D map;
  varying vec2 vUv;
  void main() {
    vec4 texColor = texture2D(map, vUv);
    float minChannel = min(min(texColor.r, texColor.g), texColor.b);
    float alpha = 1.0 - smoothstep(0.8, 0.95, minChannel);
    if (alpha < 0.04) discard;
    gl_FragColor = vec4(texColor.rgb, alpha);
  }
`;

function CutoutCard({ textureUrl, aspect }: { textureUrl: string; aspect: number }) {
  const texture = useTexture(textureUrl);

  const height = 3.4;
  const width = height * aspect;

  const uniforms = useMemo(() => ({ map: { value: texture } }), [texture]);

  return (
    <Float speed={1.2} rotationIntensity={0.08} floatIntensity={0.6}>
      <mesh rotation={[-0.04, 0.18, 0]}>
        <planeGeometry args={[width, height]} />
        <shaderMaterial
          uniforms={uniforms}
          vertexShader={VERTEX_SHADER}
          fragmentShader={FRAGMENT_SHADER}
          transparent
          side={THREE.DoubleSide}
          depthWrite={false}
        />
      </mesh>
    </Float>
  );
}

export function ProductShowcase3D({
  textureUrl,
  aspect = 1.33,
  className = "",
}: {
  textureUrl: string;
  aspect?: number;
  className?: string;
}) {
  return (
    <div className={`h-full w-full cursor-grab active:cursor-grabbing ${className}`}>
      <Canvas camera={{ position: [0, 0, 6.5], fov: 38 }} dpr={[1, 1.75]} gl={{ alpha: true }}>
        <CutoutCard textureUrl={textureUrl} aspect={aspect} />
        <ContactShadows position={[0, -1.8, 0]} opacity={0.3} scale={6} blur={2.2} far={2.5} />

        <OrbitControls
          enableZoom={false}
          enablePan={false}
          minPolarAngle={Math.PI / 2.4}
          maxPolarAngle={Math.PI / 2}
        />
      </Canvas>
    </div>
  );
}
