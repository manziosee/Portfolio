import { Canvas, useFrame } from '@react-three/fiber'
import { Points, PointMaterial, OrbitControls } from '@react-three/drei'
import * as random from 'maath/random/dist/maath-random.esm'
import { useRef, useState } from 'react'
import { BufferGeometry, Material, Points as ThreePoints } from 'three'

export function CosmicBackground() {
  return (
    <div className="fixed inset-0 -z-10 opacity-40">
      <Canvas camera={{ position: [0, 0, 1] }}>
        <Stars />
        <OrbitControls
          autoRotate
          autoRotateSpeed={0.5}
          enableZoom={false}
          enablePan={false}
        />
      </Canvas>
    </div>
  )
}

function Stars() {
  const ref = useRef<ThreePoints<BufferGeometry, Material | Material[]>>(null)
  const [sphere] = useState(() => 
    random.inSphere(new Float32Array(5000), { radius: 1.5 }) as Float32Array
  )

  useFrame((_, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 10
      ref.current.rotation.y -= delta / 15
    }
  })

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color="#6366f1"
          size={0.005}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  )
}