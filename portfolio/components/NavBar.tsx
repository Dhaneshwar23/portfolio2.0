'use client';
import Link from 'next/link'
import React from 'react'
import Logo from './Logo'
import { usePathname } from 'next/navigation'
import { Social } from '@/typings';
import { SocialIcon } from 'react-social-icons';

const CustomLink = ({ href, title, classname = "" }: { href: string, title: string, classname: string }) => {
    const router = usePathname();
    return (
        <Link href={href} className={`${classname} relative group`}>
            {title}
            <span className={`absolute h-[1px] inline-block bg-dark left-0 -bottom-0.5
            group-hover:w-full transition-[width] ease duration-300 ${router === href ? 'w-full' : 'w-0'}`}
            >&nbsp;</span>
        </Link>
    )
}

type Props = {
    socials: Social[] | undefined;
}


export default function NavBar({ socials }: Props) {
    return (
        <header className='w-full px-32 py-8 font-medium flex items-center justify-between'>
            <nav>
                <CustomLink href="/" title="Home" classname='mr-4' />
                <CustomLink href="/about" title="About" classname='mx-4' />
                <CustomLink href="/projects" title="Projects" classname='mx-4' />
                <CustomLink href="/articles" title="Articles" classname='ml-4' />

            </nav>



            <nav className='flex items-center justify-center flex-wrap'>
                {socials?.map((social) => (
                    < SocialIcon key={social._id}
                        url={social.url}
                        fgColor='gray'
                        bgColor='transparent' 
                        className=''
                        target={"_blank"}/>
                ))}
                {/* <Link href="/" target={"_blank"}>twitter </Link>
                <Link href="/" target={"_blank"}>twitter </Link>
                <Link href="/" target={"_blank"}>twitter </Link>
                <Link href="/" target={"_blank"}>twitter </Link> */}

            </nav>

            <div className='absolute left-[50%] top-2 translate-x-[-50%]'>
                <Logo />
            </div>
        </header>
    )
}