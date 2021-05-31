import React from 'react'

export default function SendButton () {
  return (
    <button className='focus:outline-none text-white text-xl hover:shadow-2xl py-4 w-full self-center bg-gradient-to-r from-pink-500 via-purple-500 to-blue-600 hover:bg-gradient-to-r hover:from-blue-600 hover:via-purple-500 hover:to-pink-500 rounded-xl focus:ring transform transition hover:scale-105 duration-300 ease-in-out'>
    Send Message
    </button>
  )
}
