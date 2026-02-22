import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

interface FloatingParticlesProps {
  count?: number;
  color?: string;
  size?: number;
  spread?: number;
  speed?: number;
}

const FloatingParticles = ({
  count = 200,
  color = "#4dd0c8",
  size = 0.03,
  spread = 10,
  speed = 0.3,
}: FloatingParticlesProps) => {
  const meshRef = useRef<THREE.Points>(null);

  const particles = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const scales = new Float32Array(count);
    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * spread;
      positions[i * 3 + 1] = (Math.random() - 0.5) * spread;
      positions[i * 3 + 2] = (Math.random() - 0.5) * spread;
      scales[i] = Math.random();
    }
    return { positions, scales };
  }, [count, spread]);

  useFrame((state) => {
    if (!meshRef.current) return;
    meshRef.current.rotation.y = state.clock.elapsedTime * speed * 0.1;
    meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * speed * 0.05) * 0.1;
  });

  return (
    <points ref={meshRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[particles.positions, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={size}
        color={color}
        transparent
        opacity={0.6}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </points>
  );
};

export default FloatingParticles;
