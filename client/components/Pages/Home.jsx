import React from 'react'
import Footer from '../Footer'
import GetInTouch from '../GetInTouch'
import AboutMePreview from '../Previews/AboutMePreview'
import Wave from '../Wave'

export default function Home () {
  return (
    <>
      <div className="flex flex-col md:flex-row pt-24 md:pt-52 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-600">
        <div className="px-3 md:ml-16 flex flex-col md:flex-row content-center items-center">
          <div className="flex flex-col w-full justify-center md:items-start text-center md:text-left m-6">
            <p className="text-lg md:text-xl w-full">Kia Ora! I&apos;m...</p>
            <h1 className="my-4 text-4xl md:text-7xl font-bold leading-tight">
            Grace Malae
            </h1>
            <div className="leading-normal text-lg md:text-2xl mb-4 my-auto">
              A Frontend Software Developer
            </div>
          </div>
        </div>
        <div className='justify-center w-2/3 md:w-96 mx-auto mb-4'>
          <img src='/images/profile_2.png'/>
        </div>
      </div>
      <Wave/>
      <AboutMePreview />
      <Footer />
      <GetInTouch />
    </>
  )
}
