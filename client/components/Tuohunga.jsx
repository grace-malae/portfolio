import React from 'react'
import Footer from './Footer'
import GetInTouch from './GetInTouch'
import ShowMeButton from './Buttons/ShowMeButton'

export default function Tuohunga () {
  return (
    <>
      <div className='flex flex-row self-center w-full pt-32 md:pt-52 justify-center'>
        <img className='self-center w-8 h-8 md:w-14 md:h-14' src='/images/BlackFranji.png' />
        <h1 className="text-3xl md:text-5xl font-bold leading-tight text-center text-black">
            Tuohunga
        </h1>
      </div>
      <div className="w-full mb-4">
        <div className="h-1 mx-auto bg-gradient-to-r from-pink-500 via-purple-500 to-blue-600 w-52 md:w-80 mt-1 py-0 rounded-t"></div>
      </div>
      <div className='flex flex-col md:flex-row w-full mt-12 md:mt-24 md:px-36'>
        <div className='w-3/5 pr-8 self-center'>
          <h1 className="text-lg md:text-2xl font-bold text-black">
            About
          </h1>
          <p className="text-gray-800 text-justify">
            Tuohunga is a web app created with the intention of helping Woman&apos;s Refuge NZ.
            It is intended to help clients get into safehouses as quickly as possible.
            This is done by simply skipping the step of blindly ringing up multiple safehouses for their availability.
            Instead, the user (such as a Refuge Coordinator or Police Officer) can login to Tuohunga and check the availability of any safehouse in New Zealand.
          </p>
        </div>
        <div className='w-2/5 self-center'>
          <img className='m-4' src='/images/tuohunga/preview1-1.png' />
        </div>
      </div>
      <div className='flex flex-col md:flex-row w-full mt-12 md:mt-12 md:px-36'>
        <div className='w-1/3 self-center flex-row'>
          <img className='p-4 w-4/5' src='/images/tuohunga/preview1-3.png' />
        </div>
        <div className='w-2/3 pl-6'>
          <h1 className="text-lg md:text-2xl font-bold text-black mt-12">
            Try it Out!
          </h1>
          <p className="text-gray-800 text-justify">
            To access Tuohunga, you will need a special login, you cannot register for safety reasons. Here is a list of logins for you to try out and what each one can do.
          </p>
          <br/>
          <ul className="text-gray-800">
            <li><b>General User</b></li>
            <li>A general user can view the availability of any safehouse in New Zealand.</li>
            <li className='mt-2'><b>Email:</b> generaluser@safehouse.com</li>
            <li><b>Password:</b> generalUser!</li>
            <br/>
            <li><b>Refuge Coordinator</b></li>
            <li>A refuge coordinator can do what a general user can, but they can edit information about the safehouse they look after (to change the availability of rooms, phone numbers... etc.)</li>
            <li className='mt-2'><b>Email:</b> refugecoordinator@safehouse.com</li>
            <li><b>Password:</b> refugeCoordinator!</li>
            <br/>
            <li><b>Admin</b></li>
            <li>An admin can do everything that a general user can, but can also add/edit/delete any safehouse.</li>
            <li className='mt-2'><b>Email:</b> admin@safehouse.com</li>
            <li><b>Password:</b> Iamtheadmin!</li>
          </ul>
        </div>
      </div>
      <div className='p-10 mb-12 text-center'>
        <ShowMeButton />
      </div>
      <Footer />
      <GetInTouch />
    </>
  )
}
