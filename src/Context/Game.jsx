import { createContext, useContext, useState } from 'react'
import { collection, getDocs, getFirestore } from 'firebase/firestore'
import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
const GameContext = createContext()

export const useGameContext = () => useContext(GameContext)

const firebaseConfig = {
  apiKey: 'AIzaSyCXUyuB2xFBQpiFIVmZ_3qe2sA886qzdY4',
  authDomain: 'fact-game-8522f.firebaseapp.com',
  projectId: 'fact-game-8522f',
  storageBucket: 'fact-game-8522f.firebasestorage.app',
  messagingSenderId: '518797516059',
  appId: '1:518797516059:web:ab7c894501e3cacc1a47be',
  databaseURL: 'https://fact-game-8522f-default-rtdb.firebaseio.com',
}
const firebaseApp = initializeApp(firebaseConfig)
const db = getFirestore(firebaseApp)

const GameProvider = ({ children }) => {
  const [score, setScore] = useState(0)

  const fetchMessages = async () => {
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
  }

  return (
    <GameContext.Provider value={{ score, setScore, fetchMessages }}>
      {children}
    </GameContext.Provider>
  )
}
export default GameProvider
