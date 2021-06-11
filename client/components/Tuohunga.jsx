import React from 'react'
import Footer from './Footer'
import GetInTouch from './GetInTouch'

export default function Tuohunga () {
  return (
    <>
      <div className='flex flex-row self-center w-full pt-32 md:pt-52 justify-center'>
        <img className='self-center w-8 h-8 md:w-14 md:h-14' src='/images/BlackFranji.png' />
        <h1 className="text-3xl md:text-5xl font-bold leading-tight text-center text-black">
            Tuohunga
        </h1>
      </div>
      <div className="w-full mb-4">
        <div className="h-1 mx-auto bg-gradient-to-r from-pink-500 via-purple-500 to-blue-600 w-36 md:w-52 my-0 py-0 rounded-t"></div>
      </div>
      <div className='flex flex-col w-full mt-12 md:mt-24'>
        <p className="text-gray-800 text-center px-6 mb-5">
            Tuohunga is a web app created with the intention of helping Woman&apos;s Refuge NZ. It is intending to help clients get into safehouses as quickly as possible.
        </p>
        <div className='w-2/3 self-center hidden md:flex'>
          <img className='p-4' src='/images/preview1.png' />
        </div>
      </div>
      <Footer />
      <GetInTouch />
    </>
  )
}
