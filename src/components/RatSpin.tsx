"use client";

import * as THREE from "three";
import React, { useRef } from "react";
import { useFrame, Canvas, useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/Addons.js";

const RatMesh = () => {
  const fileUrl = "/assets/rat/scene.gltf"
  const meshRef = useRef<THREE.Mesh>(null!);
  const gltf = useLoader(GLTFLoader, fileUrl);

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta;
      meshRef.current.rotation.y += delta;
      meshRef.current.rotation.z += delta;
    }
  });
  return (
    <mesh ref={meshRef}>
      <primitive object={gltf.scene}/>
    </mesh>
  );
};

export default function RatSpin(/*props: ThreeElements["mesh"]*/) {
  return (
    <Canvas>
      <ambientLight intensity={Math.PI / 2} />
      <spotLight
        position={[10, 10, 10]}
        angle={0.15}
        penumbra={1}
        decay={0}
        intensity={Math.PI}
      />
      <pointLight position={[-10, -10, -10]} decay={0} intensity={Math.PI} />
      <RatMesh></RatMesh>
    </Canvas>
  );
}
