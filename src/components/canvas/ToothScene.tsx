"use client";

import React, { useRef, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF, Stage, Environment, Float } from "@react-three/drei";
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

    // Initial State
    gsap.set(tooth.position, { x: 0, y: -1, z: 0 });
    gsap.set(tooth.rotation, { x: 0, y: Math.PI / 4, z: 0 });
    gsap.set(tooth.scale, { x: 1.5, y: 1.5, z: 1.5 });

    // Timeline for the "Six B" Experience
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "body",
        start: "top top",
        end: "bottom bottom",
        scrub: 1.5, // Smooth transition between states
      },
    });

    // Scene 1 -> 2: Glide to the left, rotate
    tl.to(tooth.position, { x: -2, y: -1, z: 0, duration: 1 }, 0)
      .to(tooth.rotation, { y: Math.PI / 2, duration: 1 }, 0)
      .to(tooth.scale, { x: 1.2, y: 1.2, z: 1.2, duration: 1 }, 0);

    // Scene 2 -> 3: Center and Scale UP (The Max Detail)
    tl.to(tooth.position, { x: 0, y: -0.5, z: 1, duration: 1 })
      .to(tooth.rotation, { y: Math.PI, x: 0.2, duration: 1 }, "<")
      .to(tooth.scale, { x: 2.5, y: 2.5, z: 2.5, duration: 1 }, "<");

    // Scene 3 -> 4: Glide to the right
    tl.to(tooth.position, { x: 2, y: -1, z: 0, duration: 1 })
      .to(tooth.rotation, { y: -Math.PI / 4, duration: 1 }, "<")
      .to(tooth.scale, { x: 1.5, y: 1.5, z: 1.5, duration: 1 }, "<");

    // Scene 4 -> Footer: Sink and Spin
    tl.to(tooth.position, { x: 0, y: -5, z: 0, duration: 1 })
      .to(tooth.rotation, { y: Math.PI * 2, duration: 1 }, "<")
      .to(tooth.scale, { x: 0.5, y: 0.5, z: 0.5, duration: 1 }, "<");

  }, []);

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
        <color attach="background" args={["#f5f1ee"]} />
        <Environment preset="city" />
        <Stage intensity={0.5} environment="city" adjustCamera={false}>
          <ToothModel />
        </Stage>
      </Canvas>
    </div>
  );
}
