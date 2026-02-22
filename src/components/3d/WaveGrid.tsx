import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

interface WaveGridProps {
  width?: number;
  depth?: number;
  segments?: number;
  color?: string;
  waveSpeed?: number;
  waveHeight?: number;
}

const WaveGrid = ({
  width = 20,
  depth = 20,
  segments = 40,
  color = "#4dd0c8",
  waveSpeed = 1,
  waveHeight = 0.3,
}: WaveGridProps) => {
  const meshRef = useRef<THREE.Mesh>(null);

  const geometry = useMemo(() => {
    return new THREE.PlaneGeometry(width, depth, segments, segments);
  }, [width, depth, segments]);

  useFrame((state) => {
    if (!meshRef.current) return;
    const geo = meshRef.current.geometry as THREE.PlaneGeometry;
    const pos = geo.attributes.position;
    const time = state.clock.elapsedTime * waveSpeed;

    for (let i = 0; i < pos.count; i++) {
      const x = pos.getX(i);
      const y = pos.getY(i);
      const z = Math.sin(x * 0.5 + time) * Math.cos(y * 0.5 + time) * waveHeight;
      pos.setZ(i, z);
    }
    pos.needsUpdate = true;
  });

  return (
    <mesh ref={meshRef} geometry={geometry} rotation={[-Math.PI / 2.5, 0, 0]} position={[0, -3, -5]}>
      <meshStandardMaterial
        color={color}
        wireframe
        transparent
        opacity={0.15}
        side={THREE.DoubleSide}
      />
    </mesh>
  );
};

export default WaveGrid;
