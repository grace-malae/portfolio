import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../Footer'
import GetInTouch from '../GetInTouch'

export default function Work () {
  return (
    <>
      <div className='flex flex-row self-center w-full pt-32 md:pt-52 justify-center'>
        <img className='self-center w-8 h-8 md:w-14 md:h-14' src='/images/BlackFranji.png' />
        <h1 className="text-3xl md:text-5xl font-bold leading-tight text-center text-black">
          Work
        </h1>
      </div>
      <div className="w-full mb-4">
        <div className="h-1 mx-auto bg-gradient-to-r from-pink-500 via-purple-500 to-blue-600 w-36 md:w-52 my-0 py-0 rounded-t"></div>
      </div>
      <div className='flex flex-col w-full'>
        <div className="w-full md:w-2/3 p-6 flex flex-col mx-auto">
          <Link to='/tuohunga'>
            <div className='flex flex-col md:flex-row rounded-lg bg-gray-100 m-6 shadow-xl hover:scale-105 duration-300 ease-in-out transform transition'>
              <h1 className="w-full p-6 font-bold text-xl text-gray-800 text-center md:hidden">Tuohunga</h1>
              <div className='w-full self-center md:hidden'>
                <img className='p-4' src='/images/tuohunga/preview1.png'/>
              </div>
              <div className="h-full w-full md:w-3/4">
                <h1 className="w-full p-6 font-bold text-2xl text-gray-800 hidden md:flex">Tuohunga</h1>
                <p className="text-gray-800 text-base px-6 mb-5">
                    Tuohunga is a web app created with the intention of helping Woman&apos;s Refuge NZ. It is intended to help clients get into safehouses as quickly as possible.
                </p>
              </div>
              <div className='w-2/4 self-center hidden md:flex'>
                <img className='p-4' src='/images/tuohunga/preview1.png'/>
              </div>
            </div>
          </Link>
        </div>

        <div className="w-full md:w-2/3 p-6 flex flex-col mx-auto">
          <div className='flex flex-col md:flex-row rounded-lg bg-gray-100 m-6 shadow-xl'>
            <h1 className="w-full p-6 font-bold text-xl text-gray-800 text-center md:hidden">Kupu</h1>
            <div className='w-full self-center md:hidden'>
              <img className='p-4' src='/images/kupu/preview2.png'/>
            </div>
            <div className="h-full w-full md:w-3/4">
              <h1 className="w-full p-6 font-bold text-2xl text-gray-800 hidden md:flex">Kupu</h1>
              <p className="text-gray-800 text-base px-6 mb-5">
                Kupu is a web app that generates a M??ori word of the day, with a phonetic pronunciation, and meaning. Currently this is a &apos;Work In Progress&apos; as at this stage, the word does not refresh daily.
              </p>
            </div>
            <div className='w-2/4 self-center hidden md:flex'>
              <img className='p-4' src='/images/kupu/preview2.png'/>
            </div>
          </div>
        </div>
      </div>
      <Footer />
      <GetInTouch />
    </>
  )
}
