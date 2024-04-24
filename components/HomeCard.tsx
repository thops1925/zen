import { cn } from '@/lib/utils'
import { PlusIcon } from '@radix-ui/react-icons'
import React from 'react'

const HomeCard = ({
  title,
  icon,
  description,
  handleClick,
  className
}: any) => {
  return (
    <div
      className={cn(
        'bg-sky-600  px-4 py-6 flex flex-col justify-between w-full xl:max-w-[270px] min-h-[260px] rounded-[14px] cursor-pointer',
        className
      )}
      onClick={handleClick}
    >
      <div className='flex items-center justify-center backdrop-blur-sm  bg-white/10 size-8 rounded-[10px]'>
        {icon}
      </div>
      <div className='flex flex-col gap-2'>
        <h1 className='text-2xl font-bold '>{title}</h1>
        <p className='text-lg font-normal '>{description}</p>
      </div>
    </div>
  )
}

export default HomeCard
