import React from 'react'
import { useFirebaseAuthContext } from '../Context/Auth'
import { Navigate } from 'react-router-dom'

const ProtectedRoute = ({ children }) => {
  const { isLoggedIn, loading } = useFirebaseAuthContext()

  if (loading) {
    return <div className='text-white text-center mt-10'>Loading...</div>
  }
  if (!isLoggedIn) {
    return <Navigate to='/login' />
  }

  return children
}

export default ProtectedRoute
