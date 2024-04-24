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
    <aside className=' py-6 md:block hidden'>
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
            {links.imgUrl}
            <p className='text-sm  max-lg:hidden'>{links.label}</p>
          </Link>
        )
      })}
      <div className='flex flex-1 flex-col gap-6'></div>
    </aside>
  )
}

export default Sidebar
