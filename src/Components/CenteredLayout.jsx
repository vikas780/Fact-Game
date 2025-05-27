import { Outlet, useLocation } from 'react-router-dom'
import CenteredContainer from './CenteredContainer'

const CenteredLayout = () => {
  const { pathname } = useLocation()
  const getBackground = () => {
    if (pathname === '/login' || pathname === '/register')
      return 'bg-login-page'
    if (pathname === '/gameend') return 'bg-game-end'
    return 'bg-game-home'
  }

  return (
    <CenteredContainer bgClass={getBackground()}>
      <Outlet />
    </CenteredContainer>
  )
}

export default CenteredLayout
