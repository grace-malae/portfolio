import React from 'react'
import Footer from '../Footer'
import GetInTouch from '../GetInTouch'

export default function AboutMe () {
  return (
    <>
      <div className='flex flex-row self-center w-full pt-52 justify-center'>
        <img className='self-center w-14 h-14' src='/images/BlackFranji.png' />
        <h1 className="text-5xl font-bold leading-tight text-center text-black">
          About Me
        </h1>
      </div>
      <div className="w-full mb-4">
        <div className="h-1 mx-auto bg-gradient-to-r from-pink-500 via-purple-500 to-blue-600 w-80 my-0 py-0 rounded-t"></div>
      </div>
      <div className="flex flex-wrap px-32">

        <div className='py-8 flex flex-row justify-center'>
          <div className="w-5/6 sm:w-1/2 p-8">
            <h3 className="text-3xl text-gray-800 font-bold leading-none m-3">
              A Bit About Me
            </h3>
            <p className="text-gray-600 mb-8">
              I am a Māori and Samoan girl born and raised in New Zealand. My tech journey began with at a software development boot camp called Enspiral Dev Academy.
              Within just 15 weeks, I learnt to create web apps such as the one you are on now.
            </p>
          </div>
          <div className="w-full sm:w-2/5 p-6">
            <img src='/images/muriwai.png' />
          </div>
        </div>

        <div className='py-8 flex flex-row justify-center'>
          <div className="w-full sm:w-1/3 p-6">
            <img src='/images/code.png' />
          </div>
          <div className="w-full sm:w-1/2 p-8 mt-6">
            <div className="align-middle">
              <h3 className="text-3xl text-gray-800 font-bold leading-none mb-3">
                What I do
              </h3>
              <p className="text-gray-600 mb-8">
                I am a frontend software developer specialising in React.js and TailwindCSS.
                I like creating highly functional web apps that are just as beautiful, just like the one you are on now 😉.
              </p>
            </div>
          </div>
        </div>

        <div className='py-8 flex flex-row justify-center'>
          <div className="w-5/6 sm:w-1/2 p-8">
            <h3 className="text-3xl text-gray-800 font-bold leading-none m-3">
              My Toolbox
            </h3>
            <p className="text-gray-600 mb-8">
              I have experience in <b>agile methodology</b> and love to work in this kind of environment. I thrive as a <b>pair programmer</b>, but work great on my own.
              I know that <b>communication</b> is key in a team environment and know how important it is from experience.
            </p>
            <p className="text-gray-600 mb-8">
              I have also grown to like  <b>public speaking</b>! This is a skill I have built up over time, but now have no problem with speaking infront of a crowd, presenting, or talking to new people/employers/clients.
            </p>
          </div>
          <div className="w-full sm:w-2/5 p-6">
            <img src='/images/presenting.png' />
          </div>
        </div>

        <div className='py-8 flex flex-row justify-center'>
          <div className="w-full sm:w-1/3 p-6">
            <img src='/images/techStack.png' />
          </div>
          <div className="w-full sm:w-1/2 p-8 mt-6">
            <div className="align-middle">
              <h3 className="text-3xl text-gray-800 font-bold leading-none mb-3">
                My Tech Stack
              </h3>
              <p className="text-gray-600 mb-8">
                My tech stack includes, HTML5, CSS3, Javascript, React.js, Node.js, TailwindCSS, Sqlite3 and Auth0.
              </p>
              <p className="text-gray-600 mb-8">
              At the moment I am learning Typescript, with Angular and Vue in my to-learn list. I believe I can pick up new tech quite quickly and can easily do so to match your needs.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
      <GetInTouch />
    </>
  )
}
