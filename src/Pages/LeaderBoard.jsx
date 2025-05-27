import React from 'react'

const LeaderBoard = () => {
  const data = [
    { rank: 1, name: 'Arther', points: 30, initial: 'A' },
    { rank: 2, name: 'Ramaraz', points: 28, initial: 'R' },
    { rank: 3, name: 'Loren Ipsum', points: 25, initial: 'L' },
    { rank: 4, name: 'Loren Ipsum', points: 24, initial: 'L' },
    { rank: 5, name: 'Loren Ipsum', points: 20, initial: 'L' },
    { rank: 6, name: 'Loren Ipsum', points: 18, initial: 'L' },
    { rank: 7, name: 'Loren Ipsum', points: 17, initial: 'L' },
    { rank: 8, name: 'Loren Ipsum', points: 17, initial: 'L' },
    { rank: 9, name: 'Loren Ipsum', points: 16, initial: 'L' },
    { rank: 10, name: 'John (you)', points: 16, initial: 'J', isUser: true },
  ]

  return (
    <section className='px-4 py-6 mt-24 w-full flex flex-col items-center'>
      <div className='backdrop-blur-md rounded-2xl p-6 w-full max-w-lg border border-[#3A4A7A]'>
        <h2
          className='text-2xl font-bold text-center mb-4 text-white'
          aria-label='Leaderboard'
        >
          LEADERBOARD
        </h2>

        <ol className='space-y-2 max-h-80 overflow-y-auto pr-2' role='list'>
          {data.map(({ rank, name, points, initial, isUser }) => (
            <li
              key={rank}
              className={`flex items-center justify-between px-4 py-2 rounded-md text-white ${
                isUser
                  ? 'bg-blue-600'
                  : rank % 2 === 0
                  ? 'bg-gray-300/60'
                  : 'bg-gray-500/60'
              }`}
              aria-label={`Rank ${rank}, ${name}, ${points} points`}
            >
              <div className='flex items-center space-x-4 min-w-0'>
                <span className='w-6 text-right'>{rank}</span>
                <div className='bg-blue-500 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold'>
                  {initial}
                </div>
                <p className='truncate max-w-[140px]'>{name}</p>
              </div>
              <p className='text-sm whitespace-nowrap'>{points} points</p>
            </li>
          ))}
        </ol>
      </div>

      {/* Centered Buttons */}
      <div className='flex justify-center flex-wrap gap-4 mt-6'>
        <button
          type='button'
          className='bg-[#1e1e3f] hover:bg-[#2e2e5f] px-14 py-3 rounded-xl border border-blue-400 shadow text-white flex items-center space-x-2'
        >
          <span>🔗</span>
          <span>Share</span>
        </button>
        <button
          type='button'
          aria-label='Play again'
          className='bg-blue-950 hover:bg-blue-700 px-14 py-3 rounded-xl  text-white '
        >
          Play Again
        </button>
      </div>
    </section>
  )
}

export default LeaderBoard
