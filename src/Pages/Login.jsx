import { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { useFirebaseAuthContext } from '../Context/Auth'

const Login = () => {
  const { login } = useFirebaseAuthContext()
  const navigate = useNavigate()
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [credentials, setCredentials] = useState({
    email: '',
    password: '',
  })

  const handleLogin = (e) => {
    const { name, value } = e.target
    setCredentials({ ...credentials, [name]: value })
  }
  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitted(true)
    const { email, password } = credentials

    if (!email) {
      toast.error('Please enter your email')
      return
    }
    if (!password) {
      toast.error('Please enter your password')
      return
    }
    try {
      await login(credentials.email, credentials.password)
      toast.success('Login successful! Redirecting...')
      setTimeout(() => {
        navigate('/game')
      }, 500)
    } catch (err) {
      toast.error(err.message)
    } finally {
      setIsSubmitted(false)
    }
  }
  return (
    <div className='backdrop-blur-md rounded-2xl p-6 sm:p-10 w-full max-w-md border border-[#3A4A7A] mx-4 sm:mx-0'>
      <h2 className='text-white text-3xl font-bold text-center mb-8'>Log in</h2>

      <form onSubmit={handleSubmit} className='space-y-6'>
        <div>
          <label className='block text-white text-sm mb-2' htmlFor='email'>
            Email ID
          </label>
          <input
            id='email'
            type='email'
            name='email'
            value={credentials.email}
            onChange={handleLogin}
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
              name='password'
              value={credentials.password}
              onChange={handleLogin}
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
            {isSubmitted ? 'Submitting...' : 'Next'}
          </button>
        </div>
      </form>
    </div>
  )
}

export default Login
