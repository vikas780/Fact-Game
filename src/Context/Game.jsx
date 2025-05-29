import { createContext, useCallback, useContext, useState } from 'react'
import { collection, getDocs, getFirestore } from 'firebase/firestore'
import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getDatabase, set, ref } from 'firebase/database'
import { firebaseConfig } from '../utils/FireBaseConfig'
const GameContext = createContext()

export const useGameContext = () => useContext(GameContext)

const firebaseApp = initializeApp(firebaseConfig)
const db = getFirestore(firebaseApp)
const database = getDatabase(firebaseApp)

const GameProvider = ({ children }) => {
  const [score, setScore] = useState(0)

  const fetchMessages = useCallback(async () => {
    try {
      const snapshot = await getDocs(collection(db, 'messages'))
      console.log(snapshot)
      const data = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }))
      return data
    } catch (err) {
      console.error('Error fetching messages:', err)
      return []
    }
  }, [])

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
