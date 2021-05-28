import React from 'react'
import { useHistory } from 'react-router-dom'

export default function SureButton () {
  const history = useHistory()
  function handleClick () {
    history.push('/contact')
  }
  return (
    <>
      <button className='focus:outline-none hover:shadow-2xl m-4 py-3 px-8 self-center bg-transparent hover:text-pink-500 hover:bg-white ring-4 ring-white rounded-full focus:ring transform transition hover:scale-105 duration-300 ease-in-out' onClick={handleClick}>
          Sure!</button>
    </>
  )
}
