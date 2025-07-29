import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Text } from '@react-three/drei'
import { Suspense, useRef } from 'react'
import * as THREE from 'three'

const techItems = [
  { name: 'TypeScript', color: '#3178c6', position: [1, 0.5, 0] },
  { name: 'React', color: '#61dafb', position: [-1, 0.5, 0] },
  { name: 'Node.js', color: '#68a063', position: [0, 1, 0.5] },
  { name: 'Three.js', color: '#049ef4', position: [0, -1, 0.5] },
  { name: 'Python', color: '#3776ab', position: [0.5, 0, 1] },
  { name: 'Django', color: '#092e20', position: [-0.5, 0, 1] },
]

function TechItem({ name, color, position }: { name: string, color: string, position: [number, number, number] }) {
  const ref = useRef<THREE.Mesh>(null)
  
  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.x += 0.005
      ref.current.rotation.y += 0.005
    }
  })

  return (
    <mesh position={position as [number, number, number]} ref={ref}>
      <sphereGeometry args={[0.2, 32, 32]} />
      <meshStandardMaterial color={color} />
      <Text
        position={[0, 0, 0.3]}
        fontSize={0.1}
        color="white"
        anchorX="center"
        anchorY="middle"
      >
        {name}
      </Text>
    </mesh>
  )
}

export function TechSphere() {
  return (
    <div className="h-[400px] w-full">
      <Canvas>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <Suspense fallback={null}>
          {techItems.map((tech, i) => (
            <TechItem key={i} {...tech} />
          ))}
        </Suspense>
        <OrbitControls
          enableZoom={false}
          autoRotate
          autoRotateSpeed={1}
        />
      </Canvas>
    </div>
  )
}