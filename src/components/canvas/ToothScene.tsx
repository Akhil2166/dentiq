"use client";

import React, { useRef, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF, Environment } from "@react-three/drei";
import * as THREE from "three";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function ToothModel() {
  const { scene } = useGLTF("/assets/3d/scene.gltf");
  const ref = useRef<THREE.Group>(null);

  useEffect(() => {
    if (!ref.current) return;
    const t = ref.current;

    gsap.set(t.position, { x: 0, y: -0.5, z: 0 });
    gsap.set(t.rotation, { x: 0.1, y: 0.4, z: 0 });
    gsap.set(t.scale, { x: 1.2, y: 1.2, z: 1.2 });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "body",
        start: "top top",
        end: "300% bottom",
        scrub: 1.2,
      },
    });

    tl.to(t.position, { x: -1.5, y: 0, z: 0, duration: 1 }, 0)
      .to(t.rotation, { y: Math.PI * 0.6, duration: 1 }, 0)
      .to(t.scale, { x: 1, y: 1, z: 1, duration: 1 }, 0);

    tl.to(t.position, { x: 0, y: -0.2, z: 0.8, duration: 1 })
      .to(t.rotation, { y: Math.PI, x: 0.2, duration: 1 }, "<")
      .to(t.scale, { x: 1.8, y: 1.8, z: 1.8, duration: 1 }, "<");

    tl.to(t.position, { x: 1.5, y: 0, z: 0, duration: 1 })
      .to(t.rotation, { y: -Math.PI * 0.5, duration: 1 }, "<")
      .to(t.scale, { x: 1, y: 1, z: 1, duration: 1 }, "<");

    tl.to(t.position, { x: 0, y: -4, z: 0, duration: 1 })
      .to(t.rotation, { y: Math.PI * 2, duration: 1 }, "<")
      .to(t.scale, { x: 0.3, y: 0.3, z: 0.3, duration: 1 }, "<");
  }, []);

  useFrame((_, delta) => {
    if (ref.current) ref.current.rotation.y += delta * 0.15;
  });

  return <primitive ref={ref} object={scene} castShadow />;
}

export default function ToothScene({ className = "" }: { className?: string }) {
  return (
    <div className={`fixed inset-0 z-0 pointer-events-none ${className}`}>
      <Canvas
        shadows
        camera={{ position: [0, 0, 5.5], fov: 42 }}
        gl={{ antialias: true, alpha: true }}
        dpr={[1, 1.5]}
        performance={{ min: 0.5 }}
      >
        <color attach="background" args={["#faf8f5"]} />
        <Environment preset="sunset" />
        <ambientLight intensity={0.5} />
        <directionalLight position={[4, 6, 4]} intensity={1.5} castShadow />
        <pointLight position={[-3, 3, -3]} intensity={0.6} color="#c4bfb8" />
        <spotLight position={[0, 5, 0]} angle={0.5} penumbra={0.8} intensity={0.4} />
        <ToothModel />
      </Canvas>
    </div>
  );
}
