import React from 'react'
import Footer from '../Footer'

export default function Contact () {
  return (
    <>
      <div className='flex flex-row self-center w-full pt-32 md:pt-52 justify-center'>
        <img className='self-center w-8 h-8 md:w-14 md:h-14' src='/images/BlackFranji.png' />
        <h1 className="text-3xl md:text-5xl font-bold leading-tight text-center text-black">
          Contact
        </h1>
      </div>
      <div className="w-full mb-4">
        <div className="h-1 mx-auto bg-gradient-to-r from-pink-500 via-purple-500 to-blue-600 w-48 md:w-72 my-0 py-0 rounded-t"></div>
      </div>
      <div className="text-gray-100 px-8 pb-32">
        <div className="w-full md:w-2/3 mt-12 md:mt-20 px-8 md:px-12 py-16 mx-auto bg-gray-100 text-gray-900 rounded-lg shadow-lg">
          <div className="flex flex-col justify-between">
            <div>
              <h2 className="text-2xl md:text-4xl text-center md:text-left font-bold leading-tight">Let&apos;s Connect!</h2>
              <h2 className="mt-8 text-base md:text-xl"><b>Email:</b>
                <a className='break-words text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-blue-600 hover:underline' href='mailto:grace.t.malae@gmail.com'><br className='md:hidden'/> grace.t.malae@gmail.com</a>
              </h2>
              <h2 className="mt-8 text-base md:text-xl"><b>LinkedIn:</b>
                <a className='break-words text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-blue-600 hover:underline' href='https://www.linkedin.com/in/grace-malae' target='blank'><br className='md:hidden'/> https://www.linkedin.com/in/grace-malae</a>
              </h2>
              <h2 className="mt-8 text-base md:text-xl"><b>Github:</b>
                <a className='break-words text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-blue-600 hover:underline' href='https://github.com/grace-malae' target='blank'><br className='md:hidden'/> https://github.com/grace-malae</a>
              </h2>
              <h2 className="mt-8 text-base text-center md:text-left md:text-xl"><b>OR</b><br className='md:hidden'/>
                <a className='text-xl text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-blue-600 hover:underline' href='/CV(Grace Malae).pdf' download> Download CV</a>
              </h2>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
