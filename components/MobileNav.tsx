'use client'

import React from 'react'
import { Sheet, SheetClose, SheetContent, SheetTrigger } from './ui/sheet'
import Image from 'next/image'
import Link from 'next/link'
import { sidebarLinks } from '@/constants'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'

const MobileNav = () => {

    const pathname = usePathname()

  return (
    <section className='w-full max-w-[264px]'>
        <Sheet>
            <SheetTrigger>
                <Image src="/icons/hamburger.svg" alt='hamburger' width={32} height={32} className='cursor-pointer sm:hidden'/>
            </SheetTrigger>
            <SheetContent side="left" className='border-none bg-dark-1'>
                <Link href="/" className='flex items-center gap-1'>
                    <Image src="/icons/logo.svg" alt='logo' width={32} height={32} className='max-sm:size-10' />
                    <p className='text-[26px] font-extrabold text-white'>Yoom</p>
                </Link>
                <div className='flex h-[calc(100vh-72px)] flex-col justify-between overflow-y-auto'>
                        <section className='flex h-full flex-col gap-6 pt-16 text-white'>
                            {sidebarLinks.map(link => {
                                const isActive = pathname === link.route || pathname.startsWith(`${link.route}/`);
                                return (
                                    <SheetClose asChild  key={link.label}>
                                        <Link href={link.route} key={link.label} className={cn('flex gap-4 p-4 item-center rounded-lg justify-start', {'bg-blue-1': isActive})}>
                                            <Image src={link.img} alt={link.label} width={24} height={24}>

                                            </Image>
                                            <p className='text-lg font-semibold'>
                                                {link.label}
                                            </p>
                                        </Link>
                                    </SheetClose>
                                )
                            })}
                        </section>
                </div>
            </SheetContent>
        </Sheet>
    </section>
  )
}

export default MobileNav