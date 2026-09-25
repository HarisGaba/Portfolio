import { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import * as THREE from 'three'

function Dots() {
  const ref = useRef()
  const count = 120
  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      arr[i*3]   = (Math.random() - 0.5) * 14
      arr[i*3+1] = (Math.random() - 0.5) * 8
      arr[i*3+2] = (Math.random() - 0.5) * 6
    }
    return arr
  }, [])
  useFrame((_s, d) => { ref.current.rotation.y += d * 0.04 })
  const geo = useMemo(() => {
    const g = new THREE.BufferGeometry()
    g.setAttribute('position', new THREE.BufferAttribute(positions, 3))
    return g
  }, [positions])
  return (
    <points ref={ref} geometry={geo}>
      <pointsMaterial color="#93c5fd" size={0.06} sizeAttenuation transparent opacity={0.55} />
    </points>
  )
}

function Ring({ r, speed, y, opacity }) {
  const ref = useRef()
  useFrame((s) => {
    ref.current.rotation.x = s.clock.elapsedTime * speed
    ref.current.rotation.z = s.clock.elapsedTime * speed * 0.6
  })
  return (
    <mesh ref={ref} position={[0, y, 0]}>
      <torusGeometry args={[r, 0.018, 12, 80]} />
      <meshBasicMaterial color="#2563eb" transparent opacity={opacity} wireframe={false} />
    </mesh>
  )
}

export default function HeroCanvas() {
  return (
    <Canvas camera={{ position: [0, 0, 7], fov: 55 }}
      style={{ position: 'absolute', inset: 0 }}
      gl={{ antialias: true, alpha: true }}>
      <Dots />
      <Ring r={2.2} speed={0.18} y={0} opacity={0.12} />
      <Ring r={3.4} speed={0.1} y={0.3} opacity={0.07} />
      <Ring r={1.2} speed={0.28} y={-0.2} opacity={0.1} />
    </Canvas>
  )
}
