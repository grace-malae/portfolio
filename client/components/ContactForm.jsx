import React from 'react'
// import SendButton from './Buttons/SendButton'

export default function ContactForm () {
  return (
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
            {/* <h2 className="mt-8 text-xl">or fill out this neat form!</h2> */}
          </div>
          {/* <div>
            <img className='w-1/2 p-12' src='/images/arrow.png'/>
          </div> */}
        </div>
        {/* <form id="fcf-form-id" method="post" action="contact-form-process.php">
          <div>
            <span className="uppercase text-sm text-gray-600 font-bold">Full Name</span>
            <input className="w-full focus:shadow-xl bg-white text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
              type="text" placeholder="" />
          </div>
          <div className="mt-8">
            <span className="uppercase text-sm text-gray-600 font-bold">Email</span>
            <input className="w-full focus:shadow-xl bg-white text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
              type="text" />
          </div>
          <div className="mt-8">
            <span className="uppercase text-sm text-gray-600 font-bold">Message</span>
            <textarea
              className="w-full focus:shadow-xl h-32 bg-white text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"></textarea>
          </div>
          <div className="mt-8">
            <SendButton />
          </div>
        </form> */}
      </div>
    </div>
  )
}
