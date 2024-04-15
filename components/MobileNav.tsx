'use client'
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger
} from '@/components/ui/sheet'
import { HamburgerMenuIcon } from '@radix-ui/react-icons'
import Image from 'next/image'
import Link from 'next/link'
import Sidebar from './Sidebar'
import { cn } from '@/lib/utils'
import { sideBarLinks } from '@/constants'
import { usePathname } from 'next/navigation'

const MobileNav = () => {
  const pathName = usePathname()
  return (
    <section className='w-full max-w-[260px]'>
      <Sheet>
        <SheetTrigger asChild>
          <HamburgerMenuIcon className='h-[32px] w-[32px] max-sm:size-7 cursor-pointer sm:hidden' />
        </SheetTrigger>
        <SheetContent side='left' className='border-none'>
          <Link href='/' className='flex items-center gap-1 '>
            {/* <Image
              src='/icons/logo.svg'
              width={32}
              height={32}
              alt='zen'
              className='max-sm:size-10 '
            /> */}
            <p className='font-bold text-lg'>ZEN</p>
          </Link>

          <div className='flex h-[calc(100vh-72px)] flex-col justify-between overflow-y-auto'>
            <SheetClose asChild>
              <section className='w-full flex-col gap-6'>
                {sideBarLinks.map(links => {
                  const isActive =
                    pathName === links.route ||
                    pathName.startsWith(`${links.route}/}`)

                  return (
                    <SheetClose asChild key={links.route}>
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
                        <p className='font-sm font-semibold text-white'>
                          {links.label}
                        </p>
                      </Link>
                    </SheetClose>
                  )
                })}
              </section>
            </SheetClose>
          </div>
        </SheetContent>
      </Sheet>
    </section>
  )
}

export default MobileNav
