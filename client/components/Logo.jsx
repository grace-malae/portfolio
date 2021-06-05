import React from 'react'
import { Link } from 'react-router-dom'

export default function Logo () {
  function componentDidMount () {
    window.scrollTo(0, 0)
  }
  return (
    <Link to='/' className='w-16 h-16 md:w-24 md:h-24' onClick={componentDidMount}>
      <img src='/images/logo.png' />
    </Link>
  )
}
