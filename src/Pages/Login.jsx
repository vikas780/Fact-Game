import { NavLink } from 'react-router-dom'

const Login = () => {
  return (
    <div className='backdrop-blur-md rounded-2xl p-6 sm:p-10 w-full max-w-md border border-[#3A4A7A] mx-4 sm:mx-0'>
      <h2 className='text-white text-3xl font-bold text-center mb-8'>Log in</h2>

      <form className='space-y-6'>
        <div>
          <label className='block text-white text-sm mb-2' htmlFor='email'>
            Email ID
          </label>
          <input
            id='email'
            type='email'
            placeholder='Amulya@gmail.com'
            className='w-full px-4 py-3 rounded-md bg-[#1A1D3A] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500'
          />
        </div>

        <div>
          <label className='block text-white text-sm mb-2' htmlFor='password'>
            Password
          </label>
          <div className='relative'>
            <input
              id='password'
              type='password'
              placeholder='**********'
              className='w-full px-4 py-3 pr-12 rounded-md bg-[#1A1D3A] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500'
            />
          </div>
        </div>

        <div className='text-left'>
          <NavLink to={''} className='text-sm text-gray-300 hover:text-white'>
            Forgot your password?
          </NavLink>
        </div>

        <div className='flex justify-center'>
          <button
            type='submit'
            className='w-48 bg-gradient-to-r from-blue-500 to-black text-white py-3 rounded-md font-semibold hover:from-blue-400 hover:to-gray-800 transition-all shadow-[0_0_4px_#3b82f6] hover:shadow-[0_0_6px_#60a5fa]'
          >
            Next
          </button>
        </div>
      </form>
    </div>
  )
}

export default Login
