import React from 'react'
import { useHistory } from 'react-router-dom'

export default function ContactButton () {
  const history = useHistory()
  function handleClick () {
    history.push('/contact')
  }
  return (
    <>
      <button className='focus:outline-none hover:shadow-2xl py-3 px-4 self-center bg-purple-800 hover:text-purple-800 hover:bg-gray-300 rounded-lg focus:ring transform transition hover:scale-105 duration-300 ease-in-out' onClick={handleClick}>
          Contact</button>
    </>
  )
}
