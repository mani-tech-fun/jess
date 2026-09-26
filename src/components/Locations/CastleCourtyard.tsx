import React from 'react';

const CastleCourtyard: React.FC = () => {
  return (
    <group position={[0, 0, 0]}>
      {/* Ground */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
        <planeGeometry args={[50, 50]} />
        <meshStandardMaterial color="#1a1a2e" />
      </mesh>

      {/* Simplified Castle Walls/Arches */}
      {[...Array(8)].map((_, i) => (
        <mesh key={i} position={[Math.cos(i * Math.PI / 4) * 10, 2, Math.sin(i * Math.PI / 4) * 10]}>
          <boxGeometry args={[2, 4, 2]} />
          <meshStandardMaterial color="#2a2a3a" />
        </mesh>
      ))}

      {/* Central Fountain/Marker */}
      <mesh position={[0, 0.5, 0]}>
        <cylinderGeometry args={[1, 1.2, 1, 32]} />
        <meshStandardMaterial color="#3a3a4a" />
      </mesh>
    </group>
  );
};

export default CastleCourtyard;
