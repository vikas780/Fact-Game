import { NavLink } from 'react-router-dom'
import { useGameContext } from '../Context/Game'

const GameEnd = () => {
  const { score } = useGameContext()
  return (
    <div className='relative w-full min-h-screen flex items-center justify-center px-4'>
      {/* Background Overlay */}
      <img
        src='/assets/Effect.svg'
        alt=''
        className='absolute inset-0 w-full h-full object-cover z-0 pointer-events-none'
        aria-hidden='true'
      />

      {/* Content Container */}
      <div className='relative z-10 w-full max-w-sm flex flex-col items-center space-y-4'>
        {/* Card */}
        <div
          className='w-full backdrop-blur-md bg-[#0c1b4871] text-white rounded-2xl shadow-xl p-6 text-center space-y-4'
          role='region'
          aria-labelledby='game-over-title'
        >
          <h2
            id='game-over-title'
            className='text-3xl sm:text-4xl font-bold leading-tight'
          >
            GAME
          </h2>
          <h2 className='text-3xl sm:text-4xl font-bold leading-tight'>OVER</h2>

          <p className='text-sm sm:text-base mx-auto max-w-[160px]'>
            You have scored
          </p>
          <div
            className='flex w-1/2 items-center justify-center bg-[#0C1035] px-6 py-5 rounded-full mx-auto'
            role='group'
            aria-label='Score display'
          >
            <div className='w-8 h-8 flex items-center justify-center rounded-full border p-4 border-blue-400 bg-[#000A3F]'>
              ⭐
            </div>
            <div className='flex'>
              <span className='text-4xl font-bold px-3 py-1'>{score}</span>
              <span className='text-sm self-end pb-1'>Points</span>
            </div>
          </div>
        </div>
        {/* Button outside the card */}

        <NavLink to='/leaderboard' className='w-1/2'>
          <button
            type='button'
            className='w-full py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-blue-700'
            aria-label='Continue to Leaderboard'
          >
            Continue
          </button>
        </NavLink>
      </div>
    </div>
  )
}

export default GameEnd
