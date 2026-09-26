import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Sky, Stars, PerspectiveCamera, Environment, ContactShadows } from '@react-three/drei';
import { useWorld } from '../../hooks/useWorldContext';
import { birthdayConfig } from '../../config/birthdayConfig';
import './WorldStyles.css';

// Lazy load locations for performance
const CastleCourtyard = React.lazy(() => import('../Locations/CastleCourtyard'));
const GreatHallLocation = React.lazy(() => import('../Locations/GreatHallLocation'));

const WorldLighting = () => (
  <>
    <ambientLight intensity={0.2} />
    <pointLight position={[10, 10, 10]} intensity={1} color="#ffd700" />
    <spotLight position={[-10, 20, 10]} angle={0.15} penumbra={1} intensity={2} castShadow color="#ffffff" />
    <fog attach="fog" args={['#020205', 5, 25]} />
  </>
);

const MagicalWorld: React.FC = () => {
  const { state } = useWorld();

  return (
    <div className="world-container">
      <Canvas
        shadows
        dpr={[1, 2]} // Performance cap
        camera={{ position: [0, 2, 5], fov: 45 }}
      >
        <PerspectiveCamera makeDefault position={[0, 2, 5]} />

        <WorldLighting />
        <Sky sunPosition={[0, -1, -1]} />
        <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />

        <Suspense fallback={null}>
          {state.currentLocation === 'courtyard' && <CastleCourtyard />}
          {state.currentLocation === 'greatHall' && <GreatHallLocation />}

          <ContactShadows opacity={0.4} scale={20} blur={2} far={4.5} />
        </Suspense>

        <Environment preset="night" />
      </Canvas>

      {/* Discovery HUD */}
      <div className="discovery-hud">
        <div className="memory-counter">
          ✨ {state.discoveredMemories.length} / {birthdayConfig.secrets.requiredMemories} Memories Found
        </div>
      </div>
    </div>
  );
};

export default MagicalWorld;
