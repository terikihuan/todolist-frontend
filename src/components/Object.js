import React from "react"
import { Sphere, MeshDistortMaterial } from "@react-three/drei"
import { useTheme } from "@mui/material/styles"
import { useAppContext } from "../Context"

function Object({ scale, position }) {
  const { colorMode } = useAppContext()
  const theme = useTheme()

  return (
    <mesh
    // rotation={[90, 0, 20]}
    >
      <Sphere visible args={[1, 100, 200]} scale={scale} position={position}>
        <MeshDistortMaterial
          color={
            colorMode === "dark"
              ? theme.palette.primary.main
              : theme.palette.primary.light
          }
          attach="material"
          distort={0.3}
          speed={1.5}
        />
      </Sphere>
    </mesh>
  )
}

export default Object
