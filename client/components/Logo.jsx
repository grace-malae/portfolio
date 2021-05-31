import React from 'react'
import { Link } from 'react-router-dom'

export default function Logo () {
  return (
    <div className='w-1/3 justify-center content-center self-center'>
      <Link to='/'>
        <img className='w-24 h-24 md:w-32 md:h-32 m-4 mx-auto' src='/images/logo.png' />
      </Link>
    </div>)
}
