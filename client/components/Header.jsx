import React from 'react'
import WorkButton from './Buttons/WorkButton'
import AboutMeButton from './Buttons/AboutMeButton'
import ContactButton from './Buttons/ContactButton'
import SocialIcons from './SocialIcons'
import Logo from './Logo'

export default function Header () {
  return (
    <div className='z-10 fixed flex w-full shadow-2xl bg-gradient-to-r from-pink-500 via-purple-500 to-blue-600'>
      <div className='flex flex-row w-2/5 justify-start inline-block px-8 py-4 self-center space-x-4'>
        <Logo />
        <WorkButton />
        <AboutMeButton />
        <ContactButton />
      </div>
      <SocialIcons />
    </div>
  )
}
