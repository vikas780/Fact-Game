import { createContext, useContext, useEffect, useState } from 'react'
import { initializeApp } from 'firebase/app'
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from 'firebase/auth'
import { getDatabase, set, ref } from 'firebase/database'
import { getFirestore, collection, addDoc } from 'firebase/firestore'
// import { data } from '../utils/data.js'

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
const db = getFirestore(firebaseApp)

const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [loading, setLoading] = useState(true)
  const register = (email, password) =>
    createUserWithEmailAndPassword(firebaseAuth, email, password)

  const putData = (key, data) => set(ref(database, key), data)
  const login = (email, password) =>
    signInWithEmailAndPassword(firebaseAuth, email, password)

  // const uploadMessages = async () => {
  //   try {
  //     for (const msg of data) {
  //       await addDoc(collection(db, 'messages'), {
  //         img: msg.img,
  //         isSafe: msg.isSafe,
  //       })
  //     }
  //     console.log('Messages uploaded successfully.')
  //   } catch (err) {
  //     console.error('Upload error:', err)
  //   }
  // }
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(firebaseAuth, (user) => {
      if (user) {
        setIsLoggedIn(true)
        setLoading(false)
      }
    })
    return () => unsubscribe()
  }, [])
  return (
    <FirebaseAuth.Provider
      value={{ register, putData, login, isLoggedIn, loading }}
    >
      {children}
    </FirebaseAuth.Provider>
  )
}
export default AuthProvider
