import React from 'react'
import SureButton from './Buttons/SureButton'

export default function GetInTouch () {
  return (
    <div className='bg-gradient-to-r from-pink-500 via-purple-500 to-blue-600 md:pb-8'>
      <div className="container mx-auto text-center py-6">
        <div className='flex flex-row self-center w-full my-2 justify-center'>
          <img className='self-center w-10 h-10 md:w-14 md:h-14' src='/images/WhiteFranji.png' />
          <h1 className="my-2 text-3xl md:text-5xl font-bold leading-tight text-center text-white">
          Get in Touch!
          </h1>
        </div>
        <div className="w-full mb-4">
          <div className="h-1 mx-auto bg-white w-2/3 md:w-1/3 opacity-25 my-0 py-0 rounded-t"></div>
        </div>
        <h3 className="my-4 text-lg md:text-3xl leading-tight">
        Click below to get in touch with me
        </h3>
        <div className='m-12'>
          <SureButton />
        </div>
      </div>
    </div>
  )
}
