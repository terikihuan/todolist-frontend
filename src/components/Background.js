import React from "react"

import { Canvas } from "@react-three/fiber"
import { OrbitControls } from "@react-three/drei"
import Object from "./Object"

const canvasCSS = {
  height: "100vh",
  zIndex: -1,
  position: "absolute",
  top: 0,
  left: 0,
}

function Background() {
  return (
    <Canvas
      camera={{
        fov: 40,
      }}
      style={canvasCSS}
    >
      <OrbitControls enableZoom={false} />
      <ambientLight intensity={0.5} />
      <directionalLight position={[-2, 5, 2]} intensity={1} />
      <Object scale={1} position={[3, 1, 1]} />
      <Object scale={0.7} position={[-2.3, -1, 0]} />
    </Canvas>
  )
}

export default Background
