import React from 'react'
import WorkButton from './Buttons/WorkButton'
import AboutMeButton from './Buttons/AboutMeButton'
import ContactButton from './Buttons/ContactButton'

export default function Header () {
  return (
    <div className='w-full shadow-2xl bg-purple-500 bg-opacity-50 flex justify-start inline-block space-x-4 p-10'>
      <WorkButton />
      <AboutMeButton />
      <ContactButton />
    </div>
  )
}
