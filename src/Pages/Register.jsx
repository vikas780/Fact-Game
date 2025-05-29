import React, { useState } from 'react'
import ValidateRegister from '../utils/ValidateRegister'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { useFirebaseAuthContext } from '../Context/Auth'

const Register = () => {
  const { register, putData } = useFirebaseAuthContext()
  const [credentials, setCredentials] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
    confirmpass: '',
  })
  const [formErrors, setFormErrors] = useState({})
  const navigate = useNavigate()

  const handleRegister = (e) => {
    const { name, value } = e.target
    setCredentials({ ...credentials, [name]: value })
  }
  const handleSubmit = async (e) => {
    e.preventDefault()
    const inputError = ValidateRegister(credentials)

    if (Object.entries(inputError).length === 0) {
      try {
        const userCredential = await register(
          credentials.email,
          credentials.password
        )
        const uid = userCredential.user.uid

        await putData(`users/${uid}`, {
          name: credentials.name,
          email: credentials.email,
          phone: credentials.phone,
        })

        setFormErrors({})
        toast.success('Register successful! Redirecting...')
        setTimeout(() => {
          navigate('/game')
        }, 1500)
      } catch (err) {
        toast.error(err.message)
      }
    } else {
      setFormErrors(inputError)
    }
  }

  return (
    <div className='backdrop-blur-md rounded-2xl p-6 sm:p-10 mx-auto w-full max-w-2xl border border-[#3A4A7A] mt-32 md:mt-24 lg:mt-30'>
      <h2 className='text-white text-2xl sm:text-3xl font-bold text-center mb-8'>
        Register yourself
      </h2>

      <form onSubmit={handleSubmit} className='space-y-6'>
        <div>
          <label className='block text-white text-sm mb-2' htmlFor='name'>
            Name
          </label>
          <input
            id='name'
            type='text'
            name='name'
            value={credentials.name}
            onChange={handleRegister}
            placeholder='Amulya'
            className='lg:w-[17.5rem] md:w-[17.5rem] w-full px-4 py-3 rounded-md bg-[#1A1D3A] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500'
          />
          {formErrors.name && (
            <p className='text-red-500 mt-1'>{formErrors.name}</p>
          )}
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
          <div>
            <label className='block text-white text-sm mb-2' htmlFor='email'>
              Email ID
            </label>
            <input
              id='email'
              type='email'
              name='email'
              value={credentials.email}
              onChange={handleRegister}
              placeholder='Amulya@gmail.com'
              className='w-full px-4 py-3 rounded-md bg-[#1A1D3A] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500'
            />
            {formErrors.email && (
              <p className='text-red-500 mt-1'>{formErrors.email}</p>
            )}
          </div>

          <div>
            <label className='block text-white text-sm mb-2' htmlFor='phone'>
              Phone No.
            </label>
            <input
              id='phone'
              type='tel'
              name='phone'
              value={credentials.phone}
              onChange={handleRegister}
              placeholder='+971-8294839483'
              className='w-full px-4 py-3 rounded-md bg-[#1A1D3A] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500'
            />
            {formErrors.phone && (
              <p className='text-red-500 mt-1'>{formErrors.phone}</p>
            )}
          </div>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
          <div>
            <label className='block text-white text-sm mb-2' htmlFor='password'>
              Enter Password
            </label>
            <input
              id='password'
              type='password'
              placeholder='**********'
              name='password'
              value={credentials.password}
              onChange={handleRegister}
              className='w-full px-4 py-3 rounded-md bg-[#1A1D3A] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500'
            />
            {formErrors.password && (
              <p className='text-red-500 mt-1'>{formErrors.password}</p>
            )}
          </div>

          <div>
            <label
              className='block text-white text-sm mb-2'
              htmlFor='confirm-password'
            >
              Confirm Password
            </label>
            <input
              id='confirm-password'
              type='password'
              placeholder='**********'
              name='confirmpass'
              value={credentials.confirmpass}
              onChange={handleRegister}
              className='w-full px-4 py-3 rounded-md bg-[#1A1D3A] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500'
            />
            {formErrors.confirmpass && (
              <p className='text-red-500 mt-1'>{formErrors.confirmpass}</p>
            )}
          </div>
        </div>

        {/* Submit Button */}
        <div className='flex justify-center pt-4'>
          <button
            type='submit'
            className='w-full max-w-xs sm:w-48 bg-gradient-to-r from-blue-500 to-black text-white py-3 rounded-md font-semibold hover:from-blue-400 hover:to-gray-800 transition-all shadow-[0_0_4px_#3b82f6] hover:shadow-[0_0_4px_#60a5fa]'
          >
            Continue
          </button>
        </div>
      </form>
    </div>
  )
}

export default Register
