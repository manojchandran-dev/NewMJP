"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
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
  uniform vec3 tint;
  uniform float useTint;
  varying vec2 vUv;
  void main() {
    vec4 texColor = texture2D(map, vUv);
    float minChannel = min(min(texColor.r, texColor.g), texColor.b);
    float alpha = 1.0 - smoothstep(0.8, 0.95, minChannel);
    if (alpha < 0.04) discard;

    float luminance = dot(texColor.rgb, vec3(0.299, 0.587, 0.114));
    float shade = smoothstep(0.08, 0.32, luminance);
    vec3 recolored = tint * shade;
    vec3 finalColor = mix(texColor.rgb, recolored, useTint);

    gl_FragColor = vec4(finalColor, alpha);
  }
`;

function CutoutCard({
  textureUrl,
  aspect,
  colors,
  cycleMs = 2000,
}: {
  textureUrl: string;
  aspect: number;
  colors?: string[];
  cycleMs?: number;
}) {
  const texture = useTexture(textureUrl);

  const height = 3.4;
  const width = height * aspect;

  const [colorIndex, setColorIndex] = useState(0);
  const targetColor = useRef(new THREE.Color(colors?.[0] ?? "#ffffff"));

  useEffect(() => {
    if (!colors || colors.length < 2) return;
    const id = setInterval(() => {
      setColorIndex((i) => (i + 1) % colors.length);
    }, cycleMs);
    return () => clearInterval(id);
  }, [colors, cycleMs]);

  useEffect(() => {
    if (colors) targetColor.current.set(colors[colorIndex]);
  }, [colors, colorIndex]);

  const uniforms = useMemo(
    () => ({
      map: { value: texture },
      tint: { value: new THREE.Color(colors?.[0] ?? "#ffffff") },
      useTint: { value: colors ? 1 : 0 },
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [texture]
  );

  useFrame((_, delta) => {
    if (!colors) return;
    uniforms.tint.value.lerp(targetColor.current, Math.min(1, delta * 2));
  });

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
  colors,
  cycleMs,
}: {
  textureUrl: string;
  aspect?: number;
  className?: string;
  colors?: string[];
  cycleMs?: number;
}) {
  return (
    <div className={`h-full w-full cursor-grab active:cursor-grabbing ${className}`}>
      <Canvas camera={{ position: [0, 0, 6.5], fov: 38 }} dpr={[1, 1.75]} gl={{ alpha: true }}>
        <CutoutCard textureUrl={textureUrl} aspect={aspect} colors={colors} cycleMs={cycleMs} />
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
