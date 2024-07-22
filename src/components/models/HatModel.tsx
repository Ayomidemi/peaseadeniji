"use client";

import * as THREE from "three";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import React, { useRef } from "react";

type Props = {};

const HatModel = (props: Props) => {
  // Use React.memo for performance optimization
  const { nodes, materials } = useGLTF("/models/hat-transformed.glb");

  const modelRef: any = useRef();

  useFrame(() => {
    modelRef.current.rotation.y += 0.007;
  });

  return (
    <group
      {...props}
      dispose={null}
      ref={modelRef}
      scale={[1.8, 1.8, 1.8]}
      rotation={[0.4, -1, 0]}
      position={[0, 0, 0]}
    >
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes.Object_2 as THREE.Mesh).geometry}
        material={materials.initialShadingGroup}
        position={[0, -3.867, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
    </group>
  );
};

export default HatModel;
useGLTF.preload("/models/hat-transformed.glb");
