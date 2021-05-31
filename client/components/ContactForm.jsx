import React from 'react'
import SendButton from './Buttons/SendButton'

export default function ContactForm () {
  return (
    <div className="text-gray-100 px-8 pb-32">
      <div className="flex flex-col w-full md:w-2/3 mt-24 px-8 md:px-12 lg:px-16 xl:px-32 py-16 mx-auto bg-gray-100 text-gray-900 rounded-lg shadow-xl">
        <div>
          <span className="uppercase text-sm text-gray-600 font-bold">Full Name</span>
          <input className="w-full bg-white text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-xl"
            type="text" placeholder="" />
        </div>
        <div className="mt-8">
          <span className="uppercase text-sm text-gray-600 font-bold">Email</span>
          <input className="w-full bg-white text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-xl"
            type="text" />
        </div>
        <div className="mt-8">
          <span className="uppercase text-sm text-gray-600 font-bold">Message</span>
          <textarea
            className="w-full h-32 bg-white text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-xl"></textarea>
        </div>
        <div className="mt-8">
          <SendButton />
        </div>
      </div>
    </div>
  )
}
