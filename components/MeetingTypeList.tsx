'use client'
import { PlusIcon } from '@radix-ui/react-icons'
import Image from 'next/image'
import React from 'react'

const MeetingTypeList = () => {
  return (
    <section className='grid  grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4'>
      <div className='bg-sky-900  px-4 py-6 flex flex-col justify-between w-full xl:max-w-[270px] min-h-[260px] rounded-[14px] cursor-pointer'>
        <div className='flex items-center justify-center backdrop-blur-sm  bg-white/10 size-12 rounded-[10px]'>
          <PlusIcon />
        </div>
      </div>
    </section>
  )
}

export default MeetingTypeList
