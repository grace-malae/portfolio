import React from 'react'
import { Link } from 'react-router-dom'

export default function AboutMeButton () {
  return (
    <>
      <Link to='/aboutme' className='hover:shadow-2xl py-3 px-4 self-center bg-transparent hover:text-pink-500 hover:bg-white ring-4 ring-white rounded-full focus:ring transform transition hover:scale-105 duration-300 ease-in-out'>
          About Me</Link>
    </>
  )
}
