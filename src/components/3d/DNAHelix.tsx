import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

interface DNAHelixProps {
  position?: [number, number, number];
  color1?: string;
  color2?: string;
  scale?: number;
}

const DNAHelix = ({
  position = [0, 0, 0],
  color1 = "#4dd0c8",
  color2 = "#a855f7",
  scale = 1,
}: DNAHelixProps) => {
  const groupRef = useRef<THREE.Group>(null);

  const spheres = useMemo(() => {
    const items: { pos: [number, number, number]; color: string }[] = [];
    const steps = 30;
    for (let i = 0; i < steps; i++) {
      const t = (i / steps) * Math.PI * 4;
      const y = (i / steps) * 6 - 3;
      items.push({
        pos: [Math.cos(t) * 0.8, y, Math.sin(t) * 0.8],
        color: color1,
      });
      items.push({
        pos: [Math.cos(t + Math.PI) * 0.8, y, Math.sin(t + Math.PI) * 0.8],
        color: color2,
      });
    }
    return items;
  }, [color1, color2]);

  useFrame((state) => {
    if (!groupRef.current) return;
    groupRef.current.rotation.y = state.clock.elapsedTime * 0.3;
  });

  return (
    <group ref={groupRef} position={position} scale={scale}>
      {spheres.map((s, i) => (
        <mesh key={i} position={s.pos}>
          <sphereGeometry args={[0.08, 8, 8]} />
          <meshStandardMaterial color={s.color} transparent opacity={0.5} metalness={0.8} roughness={0.2} />
        </mesh>
      ))}
    </group>
  );
};

export default DNAHelix;
