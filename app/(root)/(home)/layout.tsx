import { ModeToggle } from '@/components/ModeToggle'
import { Navbar } from '@/components/Navbar'
import Sidebar from '@/components/Sidebar'
import React from 'react'

const HomeLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='flex-1'>
      <Navbar />
      <div className='lg:container sm:container grid grid-cols-1 flex-1  md:grid md:grid-cols-[40px_minmax(0,1fr)] md:gap-6 lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-10"'>
        <Sidebar />
        <main className='relative py-6 lg:gap-10 lg:py-8 xl:grid xl:grid-cols w-full'>
          <div className='mx-auto w-full min-w-0'>{children}</div>
        </main>
      </div>
    </div>
  )
}

export default HomeLayout
