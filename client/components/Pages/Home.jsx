import React from 'react'
import Wave from '../Wave'

export default function Home () {
  return (
    <>
      <div className="flex flex-row pt-48 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-600">
        <div className="px-3 ml-16 flex flex-wrap flex-col md:flex-row items-center">
          <div className="flex flex-col w-full justify-center items-start text-center md:text-left m-6">
            <p className="text-xl tracking-loose w-full">Kia Ora! I&apos;m...</p>
            <h1 className="my-4 text-7xl font-bold leading-tight">
            Grace Malae
            </h1>
            <p className="leading-normal text-2xl mb-8">
            A Frontend Software Developer
            </p>
            <button className="mx-auto lg:mx-0 hover:underline bg-white text-gray-800 font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
            Subscribe
            </button>
          </div>
        </div>
        <div className='w-96 mx-auto'>
          <img src='/images/profile.png'/>
        </div>

      </div>
      <Wave />
    </>
  )
}
