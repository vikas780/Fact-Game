import { NavLink } from 'react-router-dom'
import { useGameContext } from '../Context/Game'
import { useEffect } from 'react'

const GameEnd = () => {
  const { score, updateScore } = useGameContext()

  useEffect(() => {
    updateScore(score) // Save score to Firebase DB
  }, [])

  return (
    <div className='relative w-full min-h-screen flex items-center justify-center px-4 py-8'>
      {/* Background Overlay */}
      <img
        src='/assets/Effect.svg'
        alt=''
        className='absolute inset-0 w-full h-full object-cover z-0 pointer-events-none'
        aria-hidden='true'
      />

      {/* Content Container */}
      <div className='relative z-10 w-full max-w-sm sm:max-w-md md:max-w-lg flex flex-col items-center space-y-6'>
        {/* Card */}
        <div
          className='w-full backdrop-blur-md bg-[#0c1b4871] text-white rounded-2xl shadow-xl p-6 sm:p-8 text-center space-y-4'
          role='region'
          aria-labelledby='game-over-title'
        >
          <h2
            id='game-over-title'
            className='text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-[-10px]'
          >
            GAME
          </h2>
          <h2 className='text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight'>
            OVER
          </h2>

          <p className='text-sm sm:text-base md:text-lg mx-auto max-w-xs'>
            You have scored
          </p>

          <div
            className='flex w-[9.375rem] sm:w-[11.25rem] items-center justify-center bg-[#0C1035] px-6 py-4 rounded-3xl mx-auto'
            role='group'
            aria-label='Score display'
          >
            <div className='w-8 h-8 flex items-center justify-center rounded-full border p-4 border-blue-400 bg-[#000A3F]'>
              ⭐
            </div>
            <div className='flex items-center justify-center'>
              <span className='text-3xl sm:text-4xl font-bold px-3 py-1'>
                {score}
              </span>
              <span className='text-sm sm:text-base self-end pb-1'>Points</span>
            </div>
          </div>
        </div>

        {/* Button */}
        <NavLink to='/leaderboard' className='w-full sm:w-1/2'>
          <button
            type='button'
            className='w-full py-3 sm:py-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-sm sm:text-base font-semibold focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-blue-700'
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
