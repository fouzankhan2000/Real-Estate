import React from 'react'

const Navbar = () => {
  return (
    <div className='font-serif bg-cyan-50 h-14 flex'>
        <div className='py-4 pl-20'>
          <h2 className='font-semibold '>Estatery</h2>
          
        </div>
        <div className='ml-10 flex'>
        <button className='mr-4'>Rent</button>
        <button className='mr-4'>Buy</button>
        <button className='mr-4'>Sell</button>
        <button className='mr-4'>Manage Property</button>
        <button>Resources</button>
        </div>
        <div class="flex ml-auto">
          <button className='mr-8'>Login</button>
          <button className='mr-8'>Sign Up</button>
        </div>

    </div>
  )
}

export default Navbar