import { Canvas, useFrame } from '@react-three/fiber'
import { useRef } from 'react'
import { Environment, ContactShadows } from '@react-three/drei'

function Pan({position,color,label}){
 return <group position={position}>
   <mesh position={[0,-.15,0]} rotation={[0,0,0]}><cylinderGeometry args={[.72,.58,.14,48]}/><meshStandardMaterial color={color} metalness={.2} roughness={.35}/></mesh>
   <mesh position={[0,.12,0]}><cylinderGeometry args={[.06,.06,.55,20]}/><meshStandardMaterial color="#A5B0C4" metalness={.7} roughness={.24}/></mesh>
 </group>
}
function BalanceRig({tilt}){
 const ref=useRef();
 useFrame((_,delta)=>{ if(ref.current){const target=tilt*.45; ref.current.rotation.z += (target-ref.current.rotation.z)*Math.min(1,delta*5); ref.current.rotation.y += Math.sin(performance.now()/2200)*0.00015 }});
 return <group ref={ref}>
  <mesh position={[0,-1.0,0]}><boxGeometry args={[.5,2,.45]}/><meshStandardMaterial color="#1428A0" metalness={.35} roughness={.28}/></mesh>
  <mesh position={[0,-2.05,0]}><cylinderGeometry args={[1.2,1.35,.28,48]}/><meshStandardMaterial color="#E9EEF7" metalness={.7} roughness={.18}/></mesh>
  <mesh position={[0,.2,0]} rotation={[0,0,0]}><boxGeometry args={[4.9,.18,.3]}/><meshStandardMaterial color="#18233F" metalness={.7} roughness={.22}/></mesh>
  <Pan position={[-2.15,.02,0]} color="#2F5BFF"/>
  <Pan position={[2.15,.02,0]} color="#D73645"/>
  <mesh position={[0,.1,0]} rotation={[Math.PI/2,0,0]}><sphereGeometry args={[.16,32,32]}/><meshStandardMaterial color="#fff" metalness={.4} roughness={.2}/></mesh>
 </group>
}
export default function Balance3D({tilt=0}){return <div className="balance-canvas"><Canvas camera={{position:[0,.4,7],fov:38}} shadows><ambientLight intensity={1.7}/><directionalLight position={[3,5,5]} intensity={2.2} castShadow/><directionalLight position={[-4,1,-2]} intensity={1.1}/><BalanceRig tilt={tilt}/><ContactShadows position={[0,-2.2,0]} opacity={.3} scale={8} blur={2}/><Environment preset="city"/></Canvas></div>}
