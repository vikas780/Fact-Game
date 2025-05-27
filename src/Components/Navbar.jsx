const Navbar = () => {
  return (
    <div className='absolute top-2 left-4 right-4 h-24 px-6 flex justify-end items-center  backdrop-blur-md bg-white/10 rounded-lg'>
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
