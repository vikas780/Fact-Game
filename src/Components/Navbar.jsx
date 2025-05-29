import { useLocation } from 'react-router-dom'
import { useGameContext } from '../Context/Game'
import { useFirebaseAuthContext } from '../Context/Auth'

const Navbar = () => {
  const { pathname } = useLocation()
  const { score } = useGameContext()
  const { handleLogout, menuOpen, isLoggedIn, setMenuOpen } =
    useFirebaseAuthContext()

  return (
    <div className='absolute top-2 left-4 right-4 h-24 flex items-center justify-between px-6 rounded-xl border border-[#3A4B9A] bg-gradient-to-r from-[#1c2572] to-[#12143F]'>
      {/* Centered title and score */}
      {pathname !== '/' ? (
        <div
          className={`flex flex-col items-center justify-center mx-auto ${
            pathname === '/game' ? 'mt-14' : 'mt-1'
          }`}
        >
          <h1 className='text-white font-extrabold text-lg'>CATCH THE FAKE</h1>

          {pathname === '/game' && (
            <div className='flex items-center bg-[#0e113b] px-6 py-2 gap-2 rounded-full border border-[#3A4B9A] mt-2'>
              <div className='p-1 flex items-center justify-center rounded-full border border-blue-400 bg-[#000A3F] text-sm'>
                ⭐
              </div>
              <span className='text-white font-bold text-xl ml-2'>{score}</span>
            </div>
          )}
        </div>
      ) : (
        <div /> // empty div keeps spacing so hamburger stays right
      )}

      {/* Hamburger Menu */}
      <div className='relative'>
        <div
          className='w-10 h-10 flex items-center justify-center cursor-pointer'
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <div className='space-y-1'>
            <div className='w-6 h-0.5 bg-white'></div>
            <div className='w-6 h-0.5 bg-white'></div>
            <div className='w-6 h-0.5 bg-white'></div>
          </div>
        </div>

        {menuOpen && isLoggedIn && (
          <div className='absolute top-12 right-0 bg-[#1c2572] border border-blue-500 rounded-lg shadow p-2 z-50'>
            <button
              onClick={handleLogout}
              className='text-white px-4 py-2 hover:bg-blue-800 rounded'
            >
              Logout
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

export default Navbar
