// import { app } from './Firebase/Firebase'
// import { getDatabase, ref, set } from 'firebase/database'
import './index.css'
import { CenteredLayout, ProtectedRoute } from './Components/index'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import {
  Login,
  NotFound,
  Register,
  Game,
  GameEnd,
  LeaderBoard,
  Home,
} from './Pages/index'
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom'

// const db = getDatabase(app)

// function writeUserData() {
//   set(ref(db, 'admin'), {
//     id: Date.now(),
//     username: 'Vikas',
//     email: 'vikas1000dhiman@gmail.com',
//   })
// }

const AppLayout = () => {
  return (
    <>
      <CenteredLayout>
        <Outlet />
      </CenteredLayout>
      <ToastContainer
        position='top-right'
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        pauseOnHover
      />
    </>
  )
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/register',
        element: <Register />,
      },
      {
        path: '/game',
        element: (
          <ProtectedRoute>
            <Game />
          </ProtectedRoute>
        ),
      },
      {
        path: '/gameend',
        element: (
          <ProtectedRoute>
            <GameEnd />
          </ProtectedRoute>
        ),
      },
      {
        path: '/leaderboard',
        element: (
          <ProtectedRoute>
            <LeaderBoard />
          </ProtectedRoute>
        ),
      },
    ],
  },
])

function App() {
  return <RouterProvider router={router} />
}

export default App

/**
 
     <div>
       <p className='text-4xl font-bold underline bg-green-500'>
           Click on the Vite and React logos to learn more
         </p>
         <button
           onClick={() => writeUserData()}
           className='cursor-pointer p-2 text-gray-400 m-4 border-none rounded-md bg-blue-600'
         >
         Put data
       </button>
       </div> 
       <HomePage />
    
 */
