
import React, { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
const FlowParticles = () => {
  const ref = useRef();

  const positions = useMemo(() => {
    const arr = new Float32Array(800 * 3);
    for (let i = 0; i < 800; i++) {
      arr[i * 3] = (Math.random() - 0.5) * 12;
      arr[i * 3 + 1] = (Math.random() - 0.5) * 12;
      arr[i * 3 + 2] = (Math.random() - 0.5) * 12;
    }
    return arr;
  }, []);

  const mouse = useRef({ x: 0, y: 0 });

  // mouse tracking
  React.useEffect(() => {
    const move = (e) => {
      mouse.current.x = (e.clientX / window.innerWidth - 0.5) * 2;
      mouse.current.y = (e.clientY / window.innerHeight - 0.5) * 2;
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  useFrame(({ clock }) => {
    if (!ref.current) return;

    const t = clock.getElapsedTime();

    // 🌊 flow motion
    ref.current.rotation.y = t * 0.05 + mouse.current.x * 0.1;
    ref.current.rotation.x = t * 0.02 + mouse.current.y * 0.1;

    // subtle wave distortion
    ref.current.position.y = Math.sin(t * 0.5) * 0.2;
  });

  return (
    <Points ref={ref} positions={positions} stride={3}>
      <PointMaterial
        transparent
        color="#a78bfa"
        size={0.017}
        sizeAttenuation
        depthWrite={false}
      />
    </Points>
  );
};

const ThreeBackground = () => {
  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: -1,
      }}
    >
      <Canvas
        camera={{ position: [0, 0, 4] }}
        gl={{ alpha: true }}
      >
        <color attach="background" args={["#050103"]} />

        <FlowParticles />
      </Canvas>
    </div>
  );
};

export default ThreeBackground;