import React from 'react'

function About() {
  return (
    <div>
      <h2 className='text-5xl mb-4'>Github Profile Finder</h2>
      <p className='mb-4 text-2xl font-light'>
        A react application to find Github profiles easily and see all profile
        details. This app is developed by{' '}
        <strong>
          <a href='https://digiraj.in'>Digiraj Solutions</a>
        </strong>
      </p>
      <p className='text-lg text-gray-400'>
        Version <span className='text-white'>1.0.0</span>
      </p>
      <p className='text-lg text-gray-400'>
        Coded By:{' '}
        <a href='https://google.com'>
          <b> Rohit Chavan</b>
        </a>
      </p>
    </div>
  )
}

export default About
