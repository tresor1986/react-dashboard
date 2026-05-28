import { Navigate } from 'react-router-dom'

interface PrivateRouteProps {
  children: React.ReactNode
}

function PrivateRoute({ children }: PrivateRouteProps) {
  const isLoggedIn = localStorage.getItem('user') !== null

  if (!isLoggedIn) {
    return <Navigate to="/login" />
  }

  return <>{children}</>
}

export default PrivateRoute