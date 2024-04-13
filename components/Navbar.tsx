import React from 'react'
import { ModeToggle } from './ModeToggle'

export const Navbar = () => {
  return (
    <header className='sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60'>
      <ModeToggle />
    </header>
  )
}
