import React from 'react'
import WorkButton from './Buttons/WorkButton'
import AboutMeButton from './Buttons/AboutMeButton'
import ContactButton from './Buttons/ContactButton'
import SocialIcons from './SocialIcons'
import Logo from './Logo'

export default function Header () {
  return (
    <div className='z-10 fixed flex w-full shadow-2xl bg-gradient-to-r from-pink-500 via-purple-500 to-blue-600'>
      <div className='w-2/5 justify-start inline-block space-x-4 p-8 self-center hidden md:visible'>
        <WorkButton />
        <AboutMeButton />
        <ContactButton />
      </div>
      <Logo />
      <div className='hidden md:visible'>
        <SocialIcons />
      </div>
    </div>
  )
}
