'use client';

import { useRef, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';

import * as THREE from 'three';

function NemoModel({ scrollY }: { scrollY: number }) {
  const meshRef = useRef<THREE.Group>(null);
  
  useFrame((state: any) => {
    if (meshRef.current) {
      // Swimming animation
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime * 2) * 0.2;
      meshRef.current.rotation.z = Math.sin(state.clock.elapsedTime * 1.5) * 0.1;
      
      // Move with scroll
      meshRef.current.position.x = (scrollY * 0.001) - 2;
      meshRef.current.rotation.y = scrollY * 0.002;
    }
  });

  return (
    <group ref={meshRef}>
      {/* Simple Nemo-like fish using basic geometries */}
      <mesh position={[0, 0, 0]}>
        <sphereGeometry args={[0.8, 16, 16]} />
        <meshStandardMaterial color="#ff6b35" />
      </mesh>
      
      {/* White stripes */}
      <mesh position={[0.2, 0, 0]}>
        <sphereGeometry args={[0.82, 16, 16]} />
        <meshStandardMaterial color="white" transparent opacity={0.8} />
      </mesh>
      
      <mesh position={[-0.3, 0, 0]}>
        <sphereGeometry args={[0.82, 16, 16]} />
        <meshStandardMaterial color="white" transparent opacity={0.8} />
      </mesh>
      
      {/* Tail */}
      <mesh position={[-1.2, 0, 0]} rotation={[0, 0, Math.PI / 4]}>
        <coneGeometry args={[0.4, 0.8, 8]} />
        <meshStandardMaterial color="#ff6b35" />
      </mesh>
      
      {/* Fins */}
      <mesh position={[0, 0.5, 0]} rotation={[0, 0, Math.PI / 6]}>
        <coneGeometry args={[0.2, 0.4, 8]} />
        <meshStandardMaterial color="#ff8c42" />
      </mesh>
      
      <mesh position={[0, -0.5, 0]} rotation={[0, 0, -Math.PI / 6]}>
        <coneGeometry args={[0.2, 0.4, 8]} />
        <meshStandardMaterial color="#ff8c42" />
      </mesh>
      
      {/* Eyes */}
      <mesh position={[0.6, 0.2, 0.3]}>
        <sphereGeometry args={[0.15, 8, 8]} />
        <meshStandardMaterial color="white" />
      </mesh>
      
      <mesh position={[0.65, 0.2, 0.35]}>
        <sphereGeometry args={[0.08, 8, 8]} />
        <meshStandardMaterial color="black" />
      </mesh>
    </group>
  );
}

export default function NemoFish({ scrollY }: { scrollY: number }) {
  return (
    <div className="fixed top-1/2 right-10 w-32 h-32 z-30 pointer-events-none">
      <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
        <ambientLight intensity={0.6} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#4fc3f7" />
        <NemoModel scrollY={scrollY} />
      </Canvas>
    </div>
  );
}