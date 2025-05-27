import React from 'react'

const Register = () => {
  return (
    <div className='backdrop-blur-md rounded-2xl p-10 w-full max-w-3xl border border-[#3A4A7A]'>
      <h2 className='text-white text-3xl font-bold text-center mb-8'>
        Register yourself
      </h2>

      <form className='space-y-6'>
        <div>
          <label className='block text-white text-sm mb-2' htmlFor='name'>
            Name
          </label>
          <input
            id='name'
            type='text'
            placeholder='Amulya'
            className='lg:w-[330px] md:w-1/2 w-auto px-4 py-3 rounded-md bg-[#1A1D3A] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500'
          />
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
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
            <label className='block text-white text-sm mb-2' htmlFor='phone'>
              Phone No.
            </label>
            <input
              id='phone'
              type='tel'
              placeholder='+971-8294839483'
              className='w-full px-4 py-3 rounded-md bg-[#1A1D3A] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500'
            />
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
              className='w-full px-4 py-3 rounded-md bg-[#1A1D3A] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500'
            />
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
              className='w-full px-4 py-3 rounded-md bg-[#1A1D3A] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500'
            />
          </div>
        </div>

        {/* Submit Button */}
        <div className='flex justify-center pt-4'>
          <button
            type='submit'
            className='w-48 bg-gradient-to-r from-blue-500 to-black text-white py-3 rounded-md font-semibold hover:from-blue-400 hover:to-gray-800 transition-all shadow-[0_0_4px_#3b82f6] hover:shadow-[0_0_4px_#60a5fa]'
          >
            Continue
          </button>
        </div>
      </form>
    </div>
  )
}

export default Register
