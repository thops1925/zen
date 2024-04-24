import { ModeToggle } from '@/components/ModeToggle'
import { Navbar } from '@/components/Navbar'
import Sidebar from '@/components/Sidebar'
import React from 'react'

const HomeLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='flex-1 overflow-y-auto'>
      <Navbar />
      <div className='lg:container flex flex-row mx-auto sm:container'>
        <Sidebar />
        <main className='lg:p-6 md:p-4 p-2  w-full'>
          <div className='mx-auto w-full min-w-0 '>{children}</div>
        </main>
      </div>
    </div>
  )
}

export default HomeLayout
