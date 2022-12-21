import React from "react"
import { Navigate, Outlet } from "react-router-dom"

import { useAppContext } from "../Context"

export default function PrivateRoutes() {
  // let auth = { token: false }
  const { token } = useAppContext()

  return token ? <Outlet /> : <Navigate to="/login" />
}
