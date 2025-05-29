import { Suspense, lazy } from 'react'
const Navbar = lazy(() => import('./Navbar'))

const CenteredContainer = ({ children, bgClass }) => {
  return (
    <div
      className={`min-h-screen ${bgClass} bg-no-repeat bg-cover bg-center flex flex-col items-center justify-center px-4 relative`}
    >
      <Suspense fallback={<div />}>
        <Navbar />
      </Suspense>
      {children}
    </div>
  )
}

export default CenteredContainer
