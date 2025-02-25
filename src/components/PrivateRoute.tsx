import type React from "react"
import { Navigate } from "react-router-dom"
import { isAuthenticated } from "../utils/auth"

interface PrivateRouteProps {
  children: React.ReactNode
}

export function PrivateRoute({ children }: PrivateRouteProps) {
  if (!isAuthenticated()) {
    const currentPath = window.location.pathname
    sessionStorage.setItem("redirectAfterLogin", currentPath)
    return <Navigate to="/login" replace />
  }

  return children
}