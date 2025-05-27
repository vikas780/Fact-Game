import { createContext, useContext, useEffect, useState } from 'react'
import { initializeApp } from 'firebase/app'
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from 'firebase/auth'
import { getDatabase, set, ref } from 'firebase/database'

const FirebaseAuth = createContext()

export const useFirebaseAuthContext = () => useContext(FirebaseAuth)

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
const firebaseAuth = getAuth(firebaseApp)
const database = getDatabase(firebaseApp)
const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(null)
  const register = (email, password) =>
    createUserWithEmailAndPassword(firebaseAuth, email, password)

  const putData = (key, data) => set(ref(database, key), data)
  const login = (email, password) =>
    signInWithEmailAndPassword(firebaseAuth, email, password)

  useEffect(() => {
    onAuthStateChanged(firebaseAuth, (user) => {
      if (user) {
        setIsLoggedIn(true)
      }
      setIsLoggedIn(null)
    })
  }, [])
  return (
    <FirebaseAuth.Provider value={{ register, putData, login, isLoggedIn }}>
      {children}
    </FirebaseAuth.Provider>
  )
}
export default AuthProvider
