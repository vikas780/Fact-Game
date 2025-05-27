const HomePage = () => {
  return (
    <div className='min-h-screen bg-game-home bg-no-repeat bg-cover bg-center flex flex-col items-center justify-center px-4 relative'>
      {/* Top Nav with Glass Effect */}
      <div className='absolute top-2 left-4 right-4 h-24 px-6 flex justify-end items-center backdrop-blur-md bg-white/10 rounded-lg'>
        <div className='w-10 h-10 flex items-center justify-center cursor-pointer'>
          <div className='space-y-1'>
            <div className='w-6 h-0.5 bg-white'></div>
            <div className='w-6 h-0.5 bg-white'></div>
            <div className='w-6 h-0.5 bg-white'></div>
          </div>
        </div>
      </div>

      {/* Main Content */}
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
          <button className='bg-gradient-to-r from-indigo-500 to-blue-600 text-white py-3 px-6 rounded-lg shadow-lg hover:scale-105 transition-all duration-300 border border-white/20 lg:max-w-xl w-52 lg:w-72 md:w-64 text-xl'>
            Log in
          </button>
          <p className='text-sm lg:text-lg mt-4'>
            Don’t have log in?{' '}
            <a href='#' className='text-blue-400 underline'>
              Register yourself
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}

export default HomePage
