'use client'
import { sideBarLinks } from '@/constants'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const Sidebar = () => {
  const pathName = usePathname()

  return (
    <aside className='fixed top-14 z-30 -ml-2 hidden h-[calc(100vh-3.5rem)]  shrink-0 md:sticky md:block mx-auto py-6'>
      {sideBarLinks.map(links => {
        const isActive =
          pathName === links.route || pathName.startsWith(`${links.route}/}`)
        return (
          <Link
            href={links.route}
            key={links.label}
            className={cn(
              'flex gap-4 p-4 rounded-lg justify-start items-center ',
              {
                'bg-blue-500': isActive
              }
            )}
          >
            <Image
              src={links.imgUrl}
              alt={links.label}
              width={24}
              height={24}
            />
            <p className='font-xl text-sm max-lg:hidden'>{links.label}</p>
          </Link>
        )
      })}
      <div className='flex flex-1 flex-col gap-6'></div>
    </aside>
  )
}

export default Sidebar
