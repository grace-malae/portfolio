import React from 'react'
import FindOutMoreButton from '../Buttons/FindOutMoreButton'

export default function AboutMePreview () {
  return (
    <section className="bg-white py-8 text-black">
      <div className="container max-w-5xl mx-auto m-8">
        <div className='flex flex-row self-center w-full my-2 justify-center'>
          <img className='self-center w-8 h-8 md:w-14 md:h-14' src='/images/BlackFranji.png' />
          <h1 className="text-3xl md:text-5xl font-bold leading-tight text-center text-black">
          Kia Ora!
          </h1>
        </div>
        <div className="w-full mb-4">
          <div className="h-1 mx-auto bg-gradient-to-r from-pink-500 via-purple-500 to-blue-600 w-48 md:w-64 my-0 py-0 rounded-t"></div>
        </div>
        <div className="flex flex-wrap">
          <div className='py-8 flex flex-row justify-center'>
            <div className="w-5/6 sm:w-1/2 p-8">
              <h3 className="text-3xl text-center md:text-left text-gray-800 font-bold leading-none m-3">
              A Bit About Me
              </h3>
              <p className="text-gray-600 md:mb-8 text-justify">
              I am a Māori and Samoan girl born and raised in New Zealand. My tech journey began with at a software development boot camp called Enspiral Dev Academy.
              Within just 15 weeks, I learnt to create web apps such as the one you are on now.
              </p>
              <div className="md:hidden flex w-full p-6">
                <img src='/images/muriwai.png' />
              </div>
            </div>
            <div className="hidden md:flex w-2/3 p-6">
              <img src='/images/muriwai.png' />
            </div>
          </div>

          <div className='md:py-8 flex flex-row justify-center'>
            <div className="hidden md:flex w-1/3 p-6">
              <img src='/images/code.png' />
            </div>
            <div className="w-5/6 md:w-2/3 p-8 md:mt-6">
              <div className="flex flex-col justify-center">
                <h3 className="text-3xl text-center md:text-left text-gray-800 font-bold leading-none m-3">
                What I do
                </h3>
                <p className="text-gray-600 md:mb-8 text-justify">
                I am a frontend software developer specialising in React.js and TailwindCSS.
                I like creating highly functional web apps that are just as beautiful, just like the one you are on now 😉.
                </p>
                <div className="md:hidden flex w-5/6 mx-auto p-6">
                  <img src='/images/code.png' />
                </div>
                <div className='text-center md:text-right mt-12'>
                  <FindOutMoreButton />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
