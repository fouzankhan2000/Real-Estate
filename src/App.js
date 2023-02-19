import React from 'react'
import Navbar from './components/Navbar'
import Houses from './components/Houses'

const App = () => {
  return (
    <div>
      <Navbar />
      <div className='bg-blue-50 min-h-screen'>
        <div className='font-sans h-2.5'>
          <h1 className="p-6 font-bold">Search Properties To Rent</h1>
          <Houses />
        </div>
      </div>
    </div>
    
  )
}

export default App