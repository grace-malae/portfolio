import React from 'react'
import { createPopper } from '@popperjs/core'
import { Link } from 'react-router-dom'
import WorkButton from './Buttons/WorkButton'
import AboutMeButton from './Buttons/AboutMeButton'
import ContactButton from './Buttons/ContactButton'
import SocialIcons from './SocialIcons'
import Logo from './Logo'

export default function Header () {
  const [dropdownPopoverShow, setDropdownPopoverShow] = React.useState(false)
  const btnDropdownRef = React.createRef()
  const popoverDropdownRef = React.createRef()

  const openDropdownPopover = () => {
    createPopper(btnDropdownRef.current, popoverDropdownRef.current, {
      placement: 'bottom-start'
    })
    setDropdownPopoverShow(true)
  }

  const closeDropdownPopover = () => {
    setDropdownPopoverShow(false)
  }

  function componentDidMount () {
    window.scrollTo(0, 0)
    closeDropdownPopover()
  }

  return (
    <div className='z-10 fixed flex w-screen md:w-full shadow-2xl bg-gradient-to-r from-pink-500 via-purple-500 to-blue-600'>
      <div className='hidden md:flex flex-row items-center w-full justify-center md:justify-start inline-block px-8 py-4 self-center space-x-4'>
        <Logo />
        <WorkButton />
        <AboutMeButton />
        <ContactButton />
      </div>
      <div className='hidden md:flex md:w-full mr-10 justify-end content-center self-center inline-block space-x-4'>
        <SocialIcons />
      </div>
      <div className='md:hidden justify-start w-1/4 my-2 ml-6'>
        <Link to='/' onClick={componentDidMount}>
          <img src='/images/logo.png' />
        </Link>
      </div>
      <div className="md:hidden flex w-full">
        <div className="justify-end flex w-full px-4">
          <div className="flex">
            <button type="button" ref={btnDropdownRef}
              className='justify-end flex px-6 py-3 outline-none focus:outline-none ease-linear transition-all duration-150'
              onClick={() => {
                dropdownPopoverShow
                  ? closeDropdownPopover()
                  : openDropdownPopover()
              }}
            >
              <img className='w-12 h-14 my-auto' src='/images/menu.png' />
            </button>
            <div
              ref={popoverDropdownRef}
              className={
                (dropdownPopoverShow ? 'block ' : 'hidden ') +
                'text-xl z-50 py-2 text-left w-screen bg-gradient-to-r from-pink-500 via-purple-500 to-blue-600 shadow-xl'
              }
            >
              <Link
                to='/work'
                className='py-3 px-6 font-normal block w-full bg-transparent'
                onClick={componentDidMount}
              >
                Work
              </Link>
              <Link
                to='/aboutme'
                className='py-3 px-6 font-normal block w-full bg-transparent'
                onClick={componentDidMount}
              >
                About
              </Link>
              <Link
                to='/contact'
                className='py-3 px-6 font-normal block w-full bg-transparent'
                onClick={componentDidMount}
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
