import React from 'react'
import Footer from '../Footer'
import GetInTouch from '../GetInTouch'

export default function Work () {
  return (
    <>
      <div className='flex flex-row self-center w-full pt-52 justify-center'>
        <img className='self-center w-14 h-14' src='/images/BlackFranji.png' />
        <h1 className="text-5xl font-bold leading-tight text-center text-black">
          Work
        </h1>
      </div>
      <div className="w-full mb-4">
        <div className="h-1 mx-auto bg-gradient-to-r from-pink-500 via-purple-500 to-blue-600 w-52 my-0 py-0 rounded-t"></div>
      </div>
      <div className='flex flex-col w-full'>
        <div className="w-full md:w-2/3 p-6 flex flex-col mx-auto">
          <div className='flex md:flex-row rounded-lg bg-gray-100 m-6 shadow-xl hover:scale-105 duration-300 ease-in-out transform transition'>
            <div className="overflow-hidden h-48 w-3/4">
              <h1 className="w-full p-6 font-bold text-xl text-gray-800">Tuohunga</h1>
              <p className="text-gray-800 text-base px-6 mb-5">
                    Tuohunga is a web app created with the intention of helping Woman&apos;s Refuge NZ. It is intending to help clients get into safehouses faster.
              </p>
            </div>
            <div className='w-2/4 self-center'>
              <img className='p-4' src='/images/preview1.png'/>
            </div>
          </div>
        </div>

        <div className="w-full md:w-2/3 p-6 flex flex-col mx-auto">
          <div className='flex md:flex-row rounded-lg bg-gray-100 m-6 shadow-xl hover:scale-105 duration-300 ease-in-out transform transition'>
            <div className="overflow-hidden h-48 w-3/4">
              <h1 className="w-full p-6 font-bold text-xl text-gray-800">Kupu</h1>
              <p className="text-gray-800 text-base px-6 mb-5">
                Kupu is a web app that generates a Māori word of the day, with a phonetic pronunciation of the day&apos;s word, and the meaning.
              </p>
            </div>
            <div className='w-2/4 self-center'>
              <img className='p-4' src='/images/preview2.png'/>
            </div>
          </div>
        </div>
      </div>
      <Footer />
      <GetInTouch />
    </>
  )
}
