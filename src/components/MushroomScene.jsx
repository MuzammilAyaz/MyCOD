import React, { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Environment, ContactShadows } from '@react-three/drei';
import * as THREE from 'three';

const Mushroom = (props) => {
    const group = useRef();
    const [hovered, setHover] = useState(false);

    useFrame((state) => {
        const t = state.clock.getElapsedTime();
        // Gentle floating animation
        group.current.position.y = Math.sin(t / 1.5) * 0.1 + props.position[1];
        // Gentle rotation
        group.current.rotation.y = Math.sin(t / 2) * 0.1;

        // Mouse interaction
        if (hovered) {
            group.current.scale.setScalar(1.1);
        } else {
            group.current.scale.setScalar(1);
        }
    });

    return (
        <group ref={group} {...props} dispose={null}
            onPointerOver={() => setHover(true)}
            onPointerOut={() => setHover(false)}>
            {/* Cap - Lowered to 1.0 to close gap */}
            <mesh position={[0, 1.0, 0]}>
                <sphereGeometry args={[1.2, 32, 32, 0, Math.PI * 2, 0, Math.PI * 0.5]} />
                <meshStandardMaterial
                    color="#D32F2F"
                    roughness={0.4}
                    metalness={0.1}
                    emissive="#D32F2F"
                    emissiveIntensity={0.05} // Reduced intensity to avoid "always red" glowing look
                />
            </mesh>

            {/* Stem - Raised slightly and thicker top */}
            <mesh position={[0, 0.6, 0]}>
                <cylinderGeometry args={[0.45, 0.6, 1.6, 32]} />
                <meshStandardMaterial color="#F5F5F5" roughness={0.8} />
            </mesh>
        </group>
    );
};

const MushroomScene = () => {
    return (
        <div style={{ width: '100%', height: '100%' }}>
            {/* Wider FOV and further back for background effect */}
            <Canvas camera={{ position: [0, 0, 8], fov: 60 }}>
                <ambientLight intensity={0.7} />
                <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} castShadow />
                <pointLight position={[-10, -10, -10]} intensity={0.5} />

                {/* Main Mushroom - Centered but lower */}
                <Mushroom position={[0, -1.5, 0]} />

                {/* Background mushrooms scattered */}
                <Mushroom position={[-3.5, -2, -3]} scale={0.6} />
                <Mushroom position={[3.5, -2.5, -2]} scale={0.7} />
                <Mushroom position={[-2, 1, -5]} scale={0.4} />
                <Mushroom position={[2, 2, -6]} scale={0.5} />

                <ContactShadows resolution={1024} scale={20} blur={2} opacity={0.25} far={10} color="#000000" />
                <Environment preset="sunset" />

                <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.3} minPolarAngle={Math.PI / 2.5} maxPolarAngle={Math.PI / 2} />
            </Canvas>
        </div>
    );
};

export default MushroomScene;
