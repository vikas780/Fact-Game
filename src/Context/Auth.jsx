import { createContext, useContext, useEffect, useState } from 'react'
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from 'firebase/auth'
import { set, ref } from 'firebase/database'
import { firebaseAuth, database } from '../utils/FireBaseConfig'
//import { getFirestore } from 'firebase/firestore'
// import { data } from '../utils/data.js'

const FirebaseAuth = createContext()

export const useFirebaseAuthContext = () => useContext(FirebaseAuth)

const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [loading, setLoading] = useState(true)
  const [menuOpen, setMenuOpen] = useState(false)

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

  const handleLogout = async () => {
    try {
      await signOut(firebaseAuth)
      setMenuOpen(false)
    } catch (err) {
      console.error('Logout error:', err)
    }
  }
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(firebaseAuth, (user) => {
      if (user) {
        setIsLoggedIn(true)
        setLoading(false)
      } else {
        setIsLoggedIn(false)
        setLoading(false)
      }
    })
    return () => unsubscribe()
  }, [])
  return (
    <FirebaseAuth.Provider
      value={{
        register,
        putData,
        login,
        isLoggedIn,
        loading,
        firebaseAuth,
        handleLogout,
        menuOpen,
        setMenuOpen,
      }}
    >
      {children}
    </FirebaseAuth.Provider>
  )
}
export default AuthProvider
