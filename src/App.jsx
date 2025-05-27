import { app } from './Firebase/Firebase'
import { getDatabase, ref, set } from 'firebase/database'
import './index.css'
import HomePage from './Pages/HomePage'

const db = getDatabase(app)

function writeUserData() {
  set(ref(db, 'admin'), {
    id: Date.now(),
    username: 'Vikas',
    email: 'vikas1000dhiman@gmail.com',
  })
}

function App() {
  return (
    <>
      {/* <div>
        <p className='text-4xl font-bold underline bg-green-500'>
          Click on the Vite and React logos to learn more
        </p>
        <button
          onClick={() => writeUserData()}
          className='cursor-pointer p-2 text-gray-400 m-4 border-none rounded-md bg-blue-600'
        >
          Put data
        </button>
      </div> */}
      <HomePage />
    </>
  )
}

export default App
