import React from 'react'
import { Link } from 'react-router-dom'

export default function SureButton () {
  function componentDidMount () {
    window.scrollTo(0, 0)
  }
  return (
    <>
      <Link to='/contact' onClick={componentDidMount} className='focus:outline-none hover:shadow-2xl m-4 py-3 px-8 self-center bg-transparent hover:text-pink-500 hover:bg-white ring-4 ring-white rounded-full focus:ring transform transition hover:scale-105 duration-300 ease-in-out'>
          Sure!</Link>
    </>
  )
}
