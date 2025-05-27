import React from 'react'
import { NavLink } from 'react-router-dom'

const Home = () => {
  return (
    <div className='text-white text-center max-w-full w-full mt-[120px]'>
      <h1 className='text-3xl md:text-5xl lg:text-5xl font-bold mb-4'>
        CATCH THE FAKE
      </h1>

      <p className='text-base text-gray-400 md:text-2xl lg:text-2xl'>
        Beware of Fraud Messages! <br />
        Spot the fraud and collect points.
      </p>

      {/* Login Section */}
      <div className='flex flex-col items-center justify-center gap-6 mt-24 '>
        <NavLink to={'/login'}>
          <button className='bg-gradient-to-r from-indigo-500 to-blue-600 text-white py-3 px-6 rounded-lg shadow-lg hover:scale-105 transition-all duration-300 border border-white/20 lg:max-w-xl w-52 lg:w-72 md:w-64 text-xl'>
            Log in
          </button>
        </NavLink>
        <p className='text-sm lg:text-lg mt-4'>
          Don’t have log in?{' '}
          <NavLink to='/register' className='text-blue-400 underline'>
            Register yourself
          </NavLink>
        </p>
      </div>
    </div>
  )
}

export default Home
