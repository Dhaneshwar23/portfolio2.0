'use client';
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import Logo from './Logo'
import { usePathname, useRouter } from 'next/navigation'
import { Project, Social } from '@/typings';
import { SocialIcon } from 'react-social-icons';
import { fetchSocials } from '@/Utils/fetchSocials';
import { motion, usePresence } from 'framer-motion';
import { fetchProjects } from '@/Utils/fetchProjects';
import useThemeSwitcher from './hooks/useThemeSwitcher';
import SunIcon from '@/public/images/sun.svg'
import MoonIcon from '@/public/images/moon-clear-fill.svg'
import Image from 'next/image'
import Script from 'next/script';

const CustomLink = ({ href, title, classname = "" }: { href: string, title: string, classname: string }) => {
    const router = usePathname();
    return (
        <Link href={href} className={`${classname} relative group`}>
            {title}
            <span className={`absolute h-[1px] inline-block bg-[#F7AB0A] left-0 -bottom-0.5
            group-hover:w-full transition-[width] ease duration-300 ${router === href ? 'w-full' : 'w-0'}`}
            >&nbsp;</span>
        </Link>

    )
}


const CustomMobileLink = ({ href, title, classname = "", toggle }: { href: string, title: string, classname: string, toggle: any }) => {
    const router = useRouter();
    const path = usePathname();
    const handleClick = () => {
        toggle();
        router.push(href);
    }
    return (
        <button type={"button"} className={`${classname} relative group text-light dark:text-dark my-2`} onClick={handleClick}>
            {title}
            <span className={`absolute h-[1px] inline-block bg-[#F7AB0A] left-0 -bottom-0.5
            group-hover:w-full transition-[width] ease duration-300 ${path === href ? 'w-full' : 'w-0'}`}
            >&nbsp;</span>
        </button>

    )
}



type Props = {
    socials: Social[] | undefined;
    projects: Project[] | undefined
}


export default function NavBar({ }) {
    const [mode, setMode] = useThemeSwitcher();
    const router = usePathname();

    const [isOpen, setIsOpen] = useState(false);
    const [data, setData] = useState<Props | null>(null
    );

    const processData = async () => {
        try {
            // const pageInfo: PageInfo = await fetchPageInfo();
            // const experiences: Experience[] = await fetchExperiences();

            // const skills: Skill[] = await fetchSkills();

            const projects: Project[] = await fetchProjects();

            const socials: Social[] = await fetchSocials();
            // Example processing of data
            const processedData = {
                socials,
                projects
            };
            setData(processedData);
        }
        catch (err) {
            console.log('err happend in NavBar.tsx-->  ', err);
        }
    }
    useEffect(() => {
        // Define a function to process data
        processData();
    }, []);

    const handClick = () => {
        setIsOpen(!isOpen)
    }
    return (
        
        <header className=' relative w-full px-32 py-8 font-medium flex items-center justify-between bg-light dark:bg-dark dark:text-light lg:px-16 md:px-12 sm:px-8'>
            <button className='flex-col justify-center items-center hidden lg:flex' onClick={handClick}>
                <span className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm  ${isOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'}`} ></span>
                <span className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${isOpen ? 'opacity-0' : 'opacity-100'}`}></span>
                <span className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm  ${isOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'}`}></span>
            </button>
            <Script id="theme-switcher" strategy='beforeInteractive'>{
          `if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
          document.documentElement.classList.add('dark')
        } else {
          document.documentElement.classList.remove('dark')
        }`
        }</Script>
            <div className='w-full flex justify-between items-center lg:hidden'>
                <motion.div
                    initial={router === '/' ? {
                        x: -500,
                        opacity: 0,
                        scale: 0.5,
                    } : {
                        x: 0,
                        opacity: 1
                    }}
                    animate={{
                        x: 0,
                        opacity: 1,
                        scale: 1
                    }}

                    transition={{
                        duration: 1.5
                    }}
                >
                    <nav>
                        <CustomLink href={"/"} title="Home" classname='mr-4' />
                        <CustomLink href='/about' title="About" classname='mx-4' />
                        {data?.projects?.length === 0 ? '' : <CustomLink href="/projects" title="Projects" classname='mx-4' />}
                        <CustomLink href='/contact' title="Contact" classname='mx-4' />
                    </nav>
                </motion.div>

                <motion.div
                    initial={router === '/' ? {
                        x: 500,
                        opacity: 0,
                        scale: 0.5
                    } : {
                        x: 0,
                        opacity: 1
                    }}
                    animate={
                        {
                            x: 0,
                            opacity: 1,
                            scale: 1
                        }
                    }
                    transition={{
                        duration: 1.5
                    }}>
                    <nav className='flex items-center justify-center flex-wrap'>
                        {data?.socials?.map((social) => (
                            < SocialIcon key={social._id}
                                url={social.url}
                                className='w-3 mr-3'
                                target={"_blank"}
                            />
                        ))}
                        {/* <Link href="/" target={"_blank"}>twitter </Link>
                <Link href="/" target={"_blank"}>twitter </Link>
                <Link href="/" target={"_blank"}>twitter </Link>
                <Link href="/" target={"_blank"}>twitter </Link> */}
                        <button onClick={() => setMode(mode === "light" ? "dark" : "light")} className='ml-1 flex items-center justify-center p-1'>
                            {
                                mode === "dark" ? <Image src={SunIcon} width={50} alt='' className='bg-light text-dark rounded-full' /> : <Image src={MoonIcon} alt={''} width={50} />
                            }
                        </button>
                    </nav>

                </motion.div>
            </div>


            {
                isOpen ?
                    <motion.div 
                    initial={{scale:0, opacity:0, x:"-50%",y:"-50%"}}
                    animate={{scale:1, opacity:1}}
                    className='min-w-[70vw] z-30 flex flex-col justify-between items-center fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
            bg-dark/90 dark:bg-light/75 rounded-lg backdrop-blur-empty-md py-32'>

                        <nav className='flex items-center flex-col justify-center'>
                            <CustomMobileLink href={"/"} title="Home" classname='' toggle={handClick} />
                            <CustomMobileLink href='/about' title="About" classname='' toggle={handClick} />
                            {data?.projects?.length === 0 ? '' : <CustomLink href="/projects" title="Projects" classname='' />}
                            <CustomMobileLink href='/contact' title="Contact" classname='' toggle={handClick} />
                        </nav>

                        <nav className='flex items-center justify-center flex-wrap'>
                            {data?.socials?.map((social) => (
                                <SocialIcon key={social._id}
                                    url={social.url}
                                    className='mr-3 sm:mx-1'
                                    target={"_blank"}
                                    style={{width:30,height:30}}
                                />
                            ))}
                            {/* <Link href="/" target={"_blank"}>twitter </Link>
                <Link href="/" target={"_blank"}>twitter </Link>
                <Link href="/" target={"_blank"}>twitter </Link>
                <Link href="/" target={"_blank"}>twitter </Link> */}
                            <button onClick={() => setMode(mode === "light" ? "dark" : "light")} className=' flex items-center justify-center p-1'>
                                {
                                    mode === "dark" ? <Image src={SunIcon} width={30} alt='' className='bg-light text-dark rounded-full' /> : <Image src={MoonIcon} alt={''} width={30} className='bg-light text-dark rounded-full' />
                                }
                            </button>
                        </nav>

                    </motion.div>
                    : null
            }
            {/* <div className='absolute left-[50%] top-2 translate-x-[-50%]'>
                <Logo />
            </div> */}
        </header>
    )
}