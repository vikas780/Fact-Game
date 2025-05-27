import { useLocation } from 'react-router-dom'

const Navbar = () => {
  const { pathname } = useLocation()

  return (
    <div className='absolute top-2 left-4 right-4 h-24 px-6 flex justify-end items-center  backdrop-blur-md bg-white/10 rounded-lg'>
      {pathname !== '/' && (
        <h1 className=' text-white lg:text-xl md:text-base text-sm font-bold underline ml-4 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2   '>
          CATCH THE FAKE
        </h1>
      )}
      <div className='w-10 h-10 flex items-center justify-center cursor-pointer'>
        <div className='space-y-1'>
          <div className='w-6 h-0.5 bg-white'></div>
          <div className='w-6 h-0.5 bg-white'></div>
          <div className='w-6 h-0.5 bg-white'></div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
