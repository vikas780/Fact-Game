import { Outlet, useLocation } from 'react-router-dom'
import CenteredContainer from './CenteredContainer'

const getBackground = (pathname) => {
  if (
    pathname === '/login' ||
    pathname === '/register' ||
    pathname === '/leaderboard'
  )
    return 'bg-login-page'
  if (pathname === '/gameend') return 'bg-game-end'
  return 'bg-game-home'
}
const CenteredLayout = () => {
  const { pathname } = useLocation()

  return (
    <CenteredContainer bgClass={getBackground(pathname)}>
      <Outlet />
    </CenteredContainer>
  )
}

export default CenteredLayout
