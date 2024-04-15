import React from 'react'
import { ModeToggle } from './ModeToggle'
import Link from 'next/link'
import Image from 'next/image'
import MobileNav from './MobileNav'

export const Navbar = () => {
  return (
    <header className='top-0 sticky z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60'>
      <div className='container flex h-14 max-w-screen-2xl items-center'>
        <Link href='/' className='flex items-center gap-1 '>
          {/* <Image
            src='/icons/logo.svg'
            width={32}
            height={32}
            alt='zen'
            className='max-sm:hidden '
          /> */}
          <p className='text-[24px] font-extrabold text-white max-sm:hidden max-lg:hidden '>
            ZEN
          </p>
        </Link>
        <nav className='flex flex-1 items-center justify-between space-x-2 md:justify-end'>
          <MobileNav />
        </nav>
        {/* <ModeToggle /> */}{' '}
      </div>
    </header>
  )
}
