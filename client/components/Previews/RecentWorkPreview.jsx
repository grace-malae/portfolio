import React from 'react'
import ShowMeButton from '../Buttons/ShowMeButton'

export default function RecentWorkPreview () {
  return (
    <section className="bg-white pt-24">
      <div className="container mx-auto flex flex-wrap pt-4 pb-12">
        <div className='flex flex-row self-center w-full my-2 justify-center'>
          <img className='self-center w-14 h-14' src='/images/BlackFranji.png' />
          <h1 className="text-5xl font-bold leading-tight text-center text-black">
          Recent Work
          </h1>
        </div>

        <div className="w-full mb-4">
          <div className="h-1 mx-auto bg-gradient-to-r from-pink-500 via-purple-500 to-blue-600 w-64 my-0 py-0 rounded-t"></div>
        </div>
        <div className="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink">
          <div className='m-6 shadow-lg'>
            <div className="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow h-48">
              <h1 className="w-full p-6 font-bold text-xl text-gray-800">Tuohunga</h1>
              <p className="text-gray-800 text-base px-6 mb-5">
                    Tuohunga is a web app created with the intention of helping Woman&apos;s Refuge NZ. It is intending to help clients get into safehouses faster.
              </p>
            </div>
            <div className="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow p-6">
              <div className="flex items-center justify-start">
                <ShowMeButton />
              </div>
            </div>
          </div>
        </div>

        <div className="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink">
          <div className='m-6 shadow-lg'>
            <div className="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow h-48">
              <h1 className="w-full p-6 font-bold text-xl text-gray-800">Kupu</h1>
              <p className="text-gray-800 text-base px-6 mb-5">
                Kupu is a web app the generate a Māori word of the day, with a phonetic pronunciation of the day&apos;s word, and the meaning.
              </p>
            </div>
            <div className="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow p-6">
              <div className="flex items-center justify-start">
                <ShowMeButton />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
