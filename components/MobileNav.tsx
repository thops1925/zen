'use client'
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger
} from '@/components/ui/sheet'
import { HamburgerMenuIcon } from '@radix-ui/react-icons'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { sideBarLinks } from '@/constants'
import { usePathname } from 'next/navigation'

const MobileNav = () => {
  const pathName = usePathname()
  return (
    <section className='w-full max-w-[260px]'>
      <Sheet>
        <SheetTrigger asChild>
          <HamburgerMenuIcon className='h-[32px] w-[32px] max-sm:size-7 cursor-pointer lg:hidden md:hidden' />
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

          <SheetClose asChild>
            <div className='flex h-[calc(100vh-72px)] flex-col justify-between overflow-y-auto'>
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
                        {links.imgUrl}
                        <p className='text-sm'>{links.label}</p>
                      </Link>
                    </SheetClose>
                  )
                })}
              </section>
            </div>
          </SheetClose>
        </SheetContent>
      </Sheet>
    </section>
  )
}

export default MobileNav
