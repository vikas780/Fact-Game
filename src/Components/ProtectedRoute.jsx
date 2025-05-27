import React from 'react'
import { useFirebaseAuthContext } from '../Context/Auth'
import { Navigate } from 'react-router-dom'

const ProtectedRoute = ({ children }) => {
  const { isLoggedIn } = useFirebaseAuthContext()
  if (!isLoggedIn) {
    return <Navigate to='/login' />
  }

  return children
}

export default ProtectedRoute
