"use client";

import React, { useRef, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF, Environment, Float } from "@react-three/drei";
import * as THREE from "three";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function ToothModel() {
  const { scene } = useGLTF("/assets/3d/scene.gltf");
  const toothRef = useRef<THREE.Group>(null);

  useEffect(() => {
    if (!toothRef.current) return;
    const tooth = toothRef.current;

    gsap.set(tooth.position, { x: 0, y: 0, z: 0 });
    gsap.set(tooth.rotation, { x: 0, y: 0, z: 0 });
    gsap.set(tooth.scale, { x: 1.2, y: 1.2, z: 1.2 });

    const tl = gsap.timeline({
      scrollTrigger: { trigger: "body", start: "top top", end: "bottom bottom", scrub: 1.5 },
    });

    tl.to(tooth.position, { x: -1.5, y: 0.5, z: 0, duration: 1 }, 0)
      .to(tooth.rotation, { y: Math.PI / 3, duration: 1 }, 0)
      .to(tooth.scale, { x: 1, y: 1, z: 1, duration: 1 }, 0);

    tl.to(tooth.position, { x: 0, y: -0.2, z: 0.5, duration: 1 })
      .to(tooth.rotation, { y: Math.PI, x: 0.1, duration: 1 }, "<")
      .to(tooth.scale, { x: 1.8, y: 1.8, z: 1.8, duration: 1 }, "<");

    tl.to(tooth.position, { x: 1.5, y: 0.5, z: 0, duration: 1 })
      .to(tooth.rotation, { y: -Math.PI / 3, duration: 1 }, "<")
      .to(tooth.scale, { x: 1, y: 1, z: 1, duration: 1 }, "<");

    tl.to(tooth.position, { x: 0, y: -3, z: 0, duration: 1 })
      .to(tooth.rotation, { y: Math.PI * 2, duration: 1 }, "<")
      .to(tooth.scale, { x: 0.3, y: 0.3, z: 0.3, duration: 1 }, "<");
  }, []);

  useFrame(() => {
    if (toothRef.current) {
      toothRef.current.rotation.y += 0.002;
    }
  });

  return <primitive ref={toothRef} object={scene} />;
}

export default function ToothScene() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
      <Canvas
        shadows
        camera={{ position: [0, 0, 5], fov: 45 }}
        gl={{ antialias: true, alpha: true }}
      >
        <color attach="background" args={["#fefcf9"]} />
        <Environment preset="sunset" />
        <ambientLight intensity={0.8} />
        <directionalLight position={[5, 5, 5]} intensity={1} />
        <pointLight position={[-3, 3, -3]} intensity={0.5} color="#c9a96e" />
        <ToothModel />
      </Canvas>
    </div>
  );
}
