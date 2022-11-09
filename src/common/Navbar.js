import React from 'react'

const Navbar = () => {
  return (
    <nav className='flex justify-end flex-wrap bg-teal-500 p-6'>
      <div className='bg-white p-1 m-2 rounded-md w-22'>
        <button>Login</button>
      </div>
      <div className='bg-white p-1 m-2 rounded-md w-22'>
        <button>Signup</button>
      </div>
    </nav>
  )
}

export default Navbar