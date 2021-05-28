import React from 'react'
import FindOutMoreButton from '../Buttons/FindOutMoreButton'

export default function AboutMePreview () {
  return (
    <section className="bg-white border-b py-8 text-black">
      <div className="container max-w-5xl mx-auto m-8">
        <div className='flex flex-row self-center w-full my-2 justify-center'>
          <img className='self-center w-14 h-14' src='/images/BlackFranji.png' />
          <h1 className="text-5xl font-bold leading-tight text-center text-black">
          Kia Ora!
          </h1>
        </div>
        <div className="w-full mb-4">
          <div className="h-1 mx-auto bg-gradient-to-r from-pink-500 via-purple-500 to-blue-600 w-64 my-0 py-0 rounded-t"></div>
        </div>
        <div className="flex flex-wrap">
          <div className="w-5/6 sm:w-1/2 p-8">
            <h3 className="text-3xl text-gray-800 font-bold leading-none m-3">
              A bit about me...
            </h3>
            <p className="text-gray-600 mb-8">
              I am a Māori and Samoan girl born and raised in New Zealand. My tech journey began with at a software development boot camp called Enspiral Dev Academy.
            </p>
          </div>

          <div className="w-full sm:w-1/2 p-6">
            <img src='/images/muriwai.png' />
          </div>
          <div className="w-full sm:w-1/2 p-6">
            <img src='/images/presenting.png' />
          </div>

          <div className="w-full sm:w-1/2 p-8 mt-6">
            <div className="align-middle">
              <h3 className="text-3xl text-gray-800 font-bold leading-none mb-3">
                What I do
              </h3>
              <p className="text-gray-600 mb-8">
                I am a frontend software developer specialising in React.js and TailwindCSS. I like creating highly functional web apps that are just as beautiful.
              </p>
            </div>
            <div className='pt-60 pl-60'>
              <FindOutMoreButton />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
