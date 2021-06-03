import React from 'react'
import { Link } from 'react-router-dom'

export default function Logo () {
  return (
    <div className='justify-center content-center self-center mx-3'>
      <Link to='/'>
        <img className='w-24 h-24 md:w-24 md:h-24' src='/images/logo.png' />
      </Link>
    </div>)
}
