import React, { useState, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { Stars, Float, OrbitControls } from '@react-three/drei';
import { gsap } from 'gsap';
import * as THREE from 'three';
import { birthdayConfig } from '../../config/birthdayConfig';
import './IntroStyles.css';

interface FloatingEnvelopeProps {
  onOpen: () => void;
}

const FloatingEnvelope: React.FC<FloatingEnvelopeProps> = ({ onOpen }) => {
  const meshRef = React.useRef<THREE.Mesh>(null);

  useEffect(() => {
    if (meshRef.current) {
      gsap.to(meshRef.current.position, {
        y: 0.2,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut"
      });
    }
  }, []);

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
      <mesh ref={meshRef} onClick={onOpen}>
        <boxGeometry args={[0.6, 0.4, 0.05]} />
        <meshStandardMaterial color="#fdf5e6" />
        {/* Simple Wax Seal */}
        <mesh position={[0, 0, 0.03]}>
          <cylinderGeometry args={[0.05, 0.05, 0.02, 32]} />
          <meshStandardMaterial color="#8b0000" />
        </mesh>
      </mesh>
    </Float>
  );
};

interface MagicalIntroProps {
  onComplete: () => void;
}

const MagicalIntro: React.FC<MagicalIntroProps> = ({ onComplete }) => {
  const [showText, setShowText] = useState(false);
  const [showEnvelope, setShowEnvelope] = useState(false);
  const textRef = React.useRef<HTMLHeadingElement>(null);
  const envelopeRef = React.useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline();
    tl.to({}, { duration: 1 }); // Initial pause
    tl.fromTo(textRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 2, onComplete: () => setShowText(true) }
    );
    tl.to({}, { duration: 1 });
    tl.fromTo(envelopeRef.current,
      { opacity: 0, scale: 0.5 },
      { opacity: 1, scale: 1, duration: 1.5, onComplete: () => setShowEnvelope(true) }
    );
  }, []);

  const handleOpenLetter = () => {
    gsap.to('.intro-container', {
      opacity: 0,
      scale: 1.5,
      duration: 1.5,
      ease: "power2.in",
      onComplete: onComplete
    });
  };

  return (
    <div className="intro-container">
      <div className="intro-ui">
        {showText && (
          <h1 ref={textRef} className="intro-text">
            {birthdayConfig.intro.title}
          </h1>
        )}
        {showEnvelope && (
          <div ref={envelopeRef} className="envelope-interaction">
            <button className="magical-button" onClick={handleOpenLetter}>
              OPEN THE LETTER
            </button>
          </div>
        )}
      </div>

      <div className="canvas-container">
        <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
          <color attach="background" args={['#020205']} />
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} intensity={1} color="#ffd700" />
          <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
          <FloatingEnvelope onOpen={handleOpenLetter} />
          <OrbitControls enableZoom={false} enablePan={false} />
        </Canvas>
      </div>
    </div>
  );
};

export default MagicalIntro;
