import React from 'react'
import { FaHome } from 'react-icons/fa'
import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <div className='hero'>
      <div className='text-center hero-content'>
        <div className='max-w-lg'>
          <h2 className='text-7xl font-bold mb-8'>Ooops!</h2>
          <p className='text-xl mb-8'> Page not Found!!!</p>
          <Link to='/' className='btn btn-primary btn-xl'>
            <FaHome className='mr-2' /> Back to Home
          </Link>
        </div>
      </div>
    </div>
  )
}

export default NotFound
