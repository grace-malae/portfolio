import React from 'react'
import { Link } from 'react-router-dom'

export default function Logo () {
  return (
    <div className='w-1/3 justify-center content-center self-center'>
      <Link to='/'>
        <img className='w-32 h-32 m-4 mx-auto' src='/images/logo.png' />
      </Link>
    </div>)
}
