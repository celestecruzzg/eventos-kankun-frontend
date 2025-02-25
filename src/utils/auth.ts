export interface UserData {
    id?: string
    nombre?: string
    apellidoPaterno?: string
    apellidoMaterno?: string
    email: string
    role?: "user" | "admin"
  }
  
  export const isAuthenticated = () => {
    const userData = localStorage.getItem("userData")
    return !!userData
  }
  
  export const logout = () => {
    localStorage.removeItem("userData")
    sessionStorage.removeItem("redirectAfterLogin")
    window.location.href = "/"
  }
  
  export const getUserData = (): UserData | null => {
    const userData = localStorage.getItem("userData")
    return userData ? JSON.parse(userData) : null
  }
  
  export const isAdmin = (): boolean => {
    const userData = getUserData()
    return userData?.role === "admin"
  }