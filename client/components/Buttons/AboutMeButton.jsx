import React from 'react'
import { Link } from 'react-router-dom'

export default function AboutMeButton () {
  function componentDidMount () {
    window.scrollTo(0, 0)
  }
  return (
    <>
      <Link to='/aboutme' onClick={componentDidMount} className='hover:shadow-2xl py-2 px-2 md:py-3 md:px-4 self-center bg-transparent hover:text-pink-500 hover:bg-white ring-4 ring-white rounded-full focus:ring transform transition hover:scale-105 duration-300 ease-in-out'>
          About</Link>
    </>
  )
}
