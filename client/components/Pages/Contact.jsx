import React from 'react'
import ContactForm from '../ContactForm'
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
      <ContactForm />
      <Footer />
    </>
  )
}
