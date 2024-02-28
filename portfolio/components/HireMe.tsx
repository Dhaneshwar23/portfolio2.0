import React from 'react'

import Image from 'next/image'
import TextSvg from '../public/images/Full_Stack_Developer.svg'
import Link from 'next/link'


type Props = {}

export default function HireMe({ }: Props) {
    return (
        <div className='fixed left-2 bottom-2 flex items-center justify-center
    overflow-hidden md:right-8 md:left-auto md:top-0 sm:right-0 md:bottom-auto md:absolute'>
            <div className='w-48 h-auto flex item-center justify-center relative sm:w-40'>
                <Image src={TextSvg} alt={''} className='fill-dark animate-spin-slow dark:fill-light'></Image>

                <Link href='/contact' className='flex items-center justify-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-dark
                text-light shadow-md border border-solid border-dark w-20 h-20 rounded-full
                font-semibold hover:bg-light hover:text-dark dark:border-light md:w-14 md:h-14 md:text-[10px]'>Hire Me</Link>
            </div>
        </div>
    )
}