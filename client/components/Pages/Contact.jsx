import React from 'react'
import ContactForm from '../ContactForm'
import Footer from '../Footer'

export default function Contact () {
  return (
    <>
      <div className='flex flex-row self-center w-full pt-48 justify-center'>
        <img className='self-center w-14 h-14' src='/images/BlackFranji.png' />
        <h1 className="text-5xl font-bold leading-tight text-center text-black">
          Contact
        </h1>
      </div>
      <div className="w-full mb-4">
        <div className="h-1 mx-auto bg-gradient-to-r from-pink-500 via-purple-500 to-blue-600 w-72 my-0 py-0 rounded-t"></div>
      </div>
      <ContactForm />
      <Footer />
    </>
  )
}
