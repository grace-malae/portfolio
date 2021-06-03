import React from 'react'
import Footer from '../Footer'
import GetInTouch from '../GetInTouch'
import AboutMePreview from '../Previews/AboutMePreview'
// import RecentWorkPreview from '../Previews/RecentWorkPreview'
import Wave from '../Wave'

export default function Home () {
  return (
    <>
      <div className="flex flex-row pt-52 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-600">
        <div className="px-3 ml-16 flex flex-wrap flex-col md:flex-row items-center">
          <div className="flex flex-col w-full justify-center items-start text-center md:text-left m-6">
            <p className="text-xl tracking-loose w-full">Kia Ora! I&apos;m...</p>
            <h1 className="my-4 text-7xl font-bold leading-tight">
            Grace Malae
            </h1>
            <p className="leading-normal text-2xl mb-8">
            A Frontend Software Developer
            </p>
          </div>
        </div>
        <div className='w-96 mx-auto'>
          <img src='/images/profile_2.png'/>
        </div>
      </div>
      <Wave/>
      <AboutMePreview />
      {/* <RecentWorkPreview /> */}
      <Footer />
      <GetInTouch />
    </>
  )
}
