import React from 'react';

const GreatHallLocation: React.FC = () => {
  return (
    <group position={[0, 0, -20]}>
      {/* Floor */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
        <planeGeometry args={[20, 40]} />
        <meshStandardMaterial color="#1a1a2e" />
      </mesh>

      {/* Walls */}
      <mesh position={[0, 5, -20]}>
        <boxGeometry args={[20, 10, 1]} />
        <meshStandardMaterial color="#2a2a3a" />
      </mesh>

      {/* Floating Candles (Placeholder for InstancedMesh in later step) */}
      {[...Array(20)].map((_, i) => (
        <mesh key={i} position={[
          (Math.random() - 0.5) * 15,
          5 + Math.random() * 5,
          -20 + (Math.random() - 0.5) * 30
        ]}>
          <cylinderGeometry args={[0.05, 0.05, 0.2]} />
          <meshStandardMaterial color="#fff" />
          <pointLight intensity={0.5} color="#ffd700" distance={2} />
        </mesh>
      ))}
    </group>
  );
};

export default GreatHallLocation;
