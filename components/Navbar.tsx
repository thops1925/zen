'use client'
import React from 'react'
import { ModeToggle } from './ModeToggle'
import Link from 'next/link'
import Image from 'next/image'
import MobileNav from './MobileNav'
import { SignedIn, UserButton } from '@clerk/nextjs'

export const Navbar = () => {
  return (
    <header className='sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 '>
      <div className='container flex h-14 max-w-screen-2xl items-center gap-4 justify-between'>
        <Link href='/' className='flex items-center gap-1 '>
          {/* <Image
            src='/icons/logo.svg'
            width={32}
            height={32}
            alt='zen'
            className='max-sm:hidden '
          /> */}
          <p className='text-[24px] font-extrabold'>ZEN</p>
        </Link>
        <nav className='flex items-center gap-2  justify-between'>
          <SignedIn>
            <UserButton />
          </SignedIn>
          <div className='p-2'>
            <ModeToggle />
          </div>
          <MobileNav />
        </nav>
        {/* <ModeToggle /> */}{' '}
      </div>
    </header>
  )
}
