import { useRef, useEffect } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as THREE from "three";

function Particles({ mouse }) {
  const ref = useRef();
  const count = 3000;

  const positions = useRef(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      arr[i * 3] = (Math.random() - 0.5) * 20;
      arr[i * 3 + 1] = (Math.random() - 0.5) * 20;
      arr[i * 3 + 2] = (Math.random() - 0.5) * 10;
    }
    return arr;
  }).current;

  // Resolve the lazy initializer if it's a function
  const resolvedPositions = typeof positions === "function" ? positions() : positions;

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    ref.current.rotation.y = t * 0.04 + mouse.current.x * 0.15;
    ref.current.rotation.x = t * 0.02 + mouse.current.y * 0.1;
  });

  return (
    <Points ref={ref} positions={resolvedPositions} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#e15a40"
        size={0.04}
        sizeAttenuation
        depthWrite={false}
        opacity={0.5}
      />
    </Points>
  );
}

function Scene() {
  const mouse = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouse = (e) => {
      mouse.current = {
        x: (e.clientX / window.innerWidth - 0.5) * 2,
        y: -(e.clientY / window.innerHeight - 0.5) * 2,
      };
    };
    window.addEventListener("mousemove", handleMouse);
    return () => window.removeEventListener("mousemove", handleMouse);
  }, []);

  return <Particles mouse={mouse} />;
}

const ParticleBackground = () => {
  return (
    <Canvas
      camera={{ position: [0, 0, 8], fov: 60 }}
      style={{ width: "100%", height: "100%" }}
      gl={{ antialias: false, alpha: true }}
    >
      <ambientLight intensity={0.3} />
      <Scene />
    </Canvas>
  );
};

export default ParticleBackground;
