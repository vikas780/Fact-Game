import React, { useEffect, useState } from 'react'
import { useGameContext } from '../Context/Game'
import { ref, onValue } from 'firebase/database'
import { useFirebaseAuthContext } from '../Context/Auth'
import { NavLink } from 'react-router-dom'

const LeaderBoard = () => {
  const [leaderboard, setLeaderboard] = useState([])
  const [currentUserUid, setCurrentUserUid] = useState(null)
  const [loading, setLoading] = useState(true)
  const { database, setScore } = useGameContext()
  const { firebaseAuth } = useFirebaseAuthContext()

  useEffect(() => {
    const unsubscribeAuth = firebaseAuth.onAuthStateChanged((user) => {
      if (user) {
        setCurrentUserUid(user.uid)
      }
    })

    const usersRef = ref(database, 'users')
    const unsubscribeDB = onValue(usersRef, (snapshot) => {
      const data = snapshot.val() || {}
      const scores = Object.entries(data).map(([uid, user]) => ({
        uid,
        name: user.name || 'Anonymous',
        score: user.score || 0,
      }))
      scores.sort((a, b) => b.score - a.score)
      setLeaderboard(scores)
      setLoading(false)
    })

    return () => {
      unsubscribeDB()
      unsubscribeAuth()
    }
  }, [database, firebaseAuth])

  return (
    <section className='px-4 py-6 mt-24 w-full flex flex-col items-center overflow-x-hidden'>
      <div className='backdrop-blur-md rounded-2xl p-6 sm:p-8 w-full max-w-md sm:max-w-lg md:max-w-2xl border border-[#3A4A7A]'>
        <h2 className='text-2xl sm:text-3xl font-bold text-center mb-6 text-white'>
          LEADERBOARD
        </h2>

        <ol
          className='space-y-2 max-h-80 overflow-y-auto pr-2 min-h-64'
          role='list'
        >
          {loading
            ? Array.from({ length: 5 }).map((_, idx) => (
                <li
                  key={idx}
                  className='flex items-center justify-between px-4 py-2 rounded-md bg-gray-600/30 animate-pulse'
                >
                  <div className='flex items-center space-x-4 min-w-0'>
                    <span className='w-6 text-right text-transparent'>0</span>
                    <div className='bg-gray-400 w-6 h-6 rounded-full'></div>
                    <div className='bg-gray-400 rounded w-24 h-4'></div>
                  </div>
                  <div className='bg-gray-400 rounded w-16 h-4'></div>
                </li>
              ))
            : leaderboard.map(({ uid, name, score }, idx) => {
                const isCurrentUser = uid === currentUserUid
                const bgColor = isCurrentUser
                  ? 'bg-blue-600'
                  : (idx + 1) % 2 === 0
                  ? 'bg-gray-300/60'
                  : 'bg-gray-500/60'

                return (
                  <li
                    key={uid}
                    className={`flex items-center justify-between px-4 py-2 rounded-md text-white ${bgColor}`}
                    aria-label={`Rank ${idx + 1}, ${name}, ${score} points`}
                  >
                    <div className='flex items-center space-x-4 min-w-0'>
                      <span className='w-6 text-right'>{idx + 1}</span>
                      <div className='bg-blue-500 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold'>
                        {name[0]?.toUpperCase() || '?'}
                      </div>
                      <p className='truncate max-w-[140px] sm:max-w-[200px]'>
                        {isCurrentUser ? `${name} (you)` : name}
                      </p>
                    </div>
                    <p className='text-sm sm:text-base whitespace-nowrap'>
                      {score} points
                    </p>
                  </li>
                )
              })}
        </ol>
      </div>

      {/* Buttons */}
      <div className='flex justify-center flex-wrap gap-4 mt-8 w-full max-w-md sm:max-w-lg'>
        <button
          type='button'
          className='flex-1 min-w-[140px] bg-[#1e1e3f] hover:bg-[#2e2e5f] px-6 py-3 rounded-xl border border-blue-400 shadow text-white flex items-center justify-center space-x-2 text-sm sm:text-base'
        >
          <span>🔗</span>
          <span>Share</span>
        </button>
        <NavLink to='/game' className='flex-1 min-w-[140px]'>
          <button
            type='button'
            onClick={() => setScore(0)}
            aria-label='Play again'
            className='w-full px-6 py-3 rounded-xl bg-blue-950 hover:bg-blue-700 text-white text-sm sm:text-base'
          >
            Play Again
          </button>
        </NavLink>
      </div>
    </section>
  )
}

export default LeaderBoard
