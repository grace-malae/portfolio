import React from 'react'
import { Link } from 'react-router-dom'

export default function FindOutMoreButton () {
  function componentDidMount () {
    window.scrollTo(0, 0)
  }
  return (
    <>
      <Link to='/aboutme' onClick={componentDidMount} className='focus:outline-none text-white hover:shadow-2xl py-4 px-8 self-center bg-gradient-to-r from-pink-500 via-purple-500 to-blue-600 hover:bg-gradient-to-r hover:from-blue-600 hover:via-purple-500 hover:to-pink-500 rounded-full focus:ring transform transition hover:scale-105 duration-300 ease-in-out'>
          Find out more →</Link>
    </>
  )
}
