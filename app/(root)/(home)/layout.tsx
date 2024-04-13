import { ModeToggle } from '@/components/ModeToggle'
import { Navbar } from '@/components/Navbar'
import Sidebar from '@/components/Sidebar'
import React from 'react'

const HomeLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='relative flex min-h-screen flex-col bg-background'>
      <Navbar />
      <div className='flex shrink-0'>
        <Sidebar />
        <main className='flex-1 '>
          <div className='relative flex min-h-screen flex-col bg-background p-6'>
            {children}
          </div>
        </main>
      </div>
    </div>
  )
}

export default HomeLayout
