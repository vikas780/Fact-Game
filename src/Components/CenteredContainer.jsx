import Navbar from './Navbar'
import '../index.css'

const CenteredContainer = ({ children, bgClass }) => {
  return (
    <div
      className={`min-h-screen ${bgClass} bg-no-repeat bg-cover bg-center flex flex-col items-center justify-center px-4 relative`}
    >
      <Navbar />
      {children}
    </div>
  )
}

export default CenteredContainer
