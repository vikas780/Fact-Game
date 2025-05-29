import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import { getDatabase } from 'firebase/database'

export const firebaseConfig = {
  apiKey: 'AIzaSyCXUyuB2xFBQpiFIVmZ_3qe2sA886qzdY4',
  authDomain: 'fact-game-8522f.firebaseapp.com',
  projectId: 'fact-game-8522f',
  storageBucket: 'fact-game-8522f.firebasestorage.app',
  messagingSenderId: '518797516059',
  appId: '1:518797516059:web:ab7c894501e3cacc1a47be',
  databaseURL: 'https://fact-game-8522f-default-rtdb.firebaseio.com',
}
/* These lines of code are setting up a Firebase app and initializing various Firebase services using
the configuration provided in `firebaseConfig`. */

export const firebaseApp = initializeApp(firebaseConfig)
export const firebaseAuth = getAuth(firebaseApp)
export const database = getDatabase(firebaseApp)
export const db = getFirestore(firebaseApp)
