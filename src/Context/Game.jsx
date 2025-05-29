import { createContext, useCallback, useContext, useState } from 'react'
import { collection, getDocs } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'
import { set, ref } from 'firebase/database'
import { db, database } from '../utils/FireBaseConfig'

const GameContext = createContext()

export const useGameContext = () => useContext(GameContext)

const GameProvider = ({ children }) => {
  const [score, setScore] = useState(0)

  /* The code snippet provided is implementing a caching mechanism for fetching messages in a React
 application using Firebase Firestore. Here's a breakdown of what the code is doing: */
  const CACHE_KEY = 'messages'
  const CACHE_TIME_KEY = 'messages_cache_time'
  const MAX_AGE = 1000 * 60 * 5 // 5 minutes

  const fetchMessages = useCallback(async () => {
    const cached = localStorage.getItem(CACHE_KEY)
    const cachedTime = localStorage.getItem(CACHE_TIME_KEY)

    if (cached && cachedTime && Date.now() - Number(cachedTime) < MAX_AGE) {
      return JSON.parse(cached)
    }

    try {
      const snapshot = await getDocs(collection(db, 'messages'))
      const data = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }))

      localStorage.setItem(CACHE_KEY, JSON.stringify(data))
      localStorage.setItem(CACHE_TIME_KEY, Date.now().toString())

      return data
    } catch (err) {
      console.error('Error fetching messages:', err)
      return []
    }
  }, [])

  /**
   * The function `updateScore` asynchronously updates the score of the current user in a Firebase
   * Realtime Database.
   * @returns If there is no authenticated user, the function will return early and not proceed with
   * updating the score.
   */
  const updateScore = async (val) => {
    const auth = getAuth()
    const user = auth.currentUser
    if (!user) return

    const userScoreRef = ref(database, `users/${user.uid}/score`)
    try {
      await set(userScoreRef, val)
    } catch (error) {
      console.error('Error updating score:', error)
    }
  }

  return (
    <GameContext.Provider
      value={{ score, setScore, fetchMessages, updateScore, database }}
    >
      {children}
    </GameContext.Provider>
  )
}
export default GameProvider
