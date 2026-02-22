import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import * as THREE from "three";

interface RotatingRingProps {
  position?: [number, number, number];
  color?: string;
  scale?: number;
  speed?: number;
}

const RotatingRing = ({
  position = [0, 0, 0],
  color = "#4dd0c8",
  scale = 1,
  speed = 1,
}: RotatingRingProps) => {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (!groupRef.current) return;
    groupRef.current.rotation.x = state.clock.elapsedTime * speed * 0.3;
    groupRef.current.rotation.y = state.clock.elapsedTime * speed * 0.2;
    groupRef.current.rotation.z = state.clock.elapsedTime * speed * 0.1;
  });

  return (
    <Float speed={1.5} rotationIntensity={0.3}>
      <group ref={groupRef} position={position} scale={scale}>
        <mesh>
          <torusGeometry args={[1.5, 0.05, 16, 100]} />
          <meshStandardMaterial color={color} transparent opacity={0.3} metalness={0.9} roughness={0.1} />
        </mesh>
        <mesh rotation={[Math.PI / 3, 0, 0]}>
          <torusGeometry args={[1.8, 0.03, 16, 100]} />
          <meshStandardMaterial color={color} transparent opacity={0.2} metalness={0.9} roughness={0.1} />
        </mesh>
        <mesh rotation={[0, Math.PI / 3, Math.PI / 6]}>
          <torusGeometry args={[2.1, 0.02, 16, 100]} />
          <meshStandardMaterial color={color} transparent opacity={0.15} metalness={0.9} roughness={0.1} />
        </mesh>
      </group>
    </Float>
  );
};

export default RotatingRing;
