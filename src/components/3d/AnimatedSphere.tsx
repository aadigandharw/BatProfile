import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Sphere, MeshDistortMaterial } from "@react-three/drei";
import * as THREE from "three";

interface AnimatedSphereProps {
  position?: [number, number, number];
  color?: string;
  scale?: number;
  distort?: number;
  speed?: number;
}

const AnimatedSphere = ({
  position = [0, 0, 0],
  color = "#4dd0c8",
  scale = 2,
  distort = 0.4,
  speed = 2,
}: AnimatedSphereProps) => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!meshRef.current) return;
    meshRef.current.rotation.x = state.clock.elapsedTime * 0.1;
    meshRef.current.rotation.y = state.clock.elapsedTime * 0.15;
  });

  return (
    <Sphere ref={meshRef} args={[1, 64, 64]} position={position} scale={scale}>
      <MeshDistortMaterial
        color={color}
        transparent
        opacity={0.2}
        distort={distort}
        speed={speed}
        roughness={0.1}
        metalness={0.9}
      />
    </Sphere>
  );
};

export default AnimatedSphere;
