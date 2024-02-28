import React from 'react'
import Image from 'next/image'
// import ProfilePhoto from '../public/images/developer-pic-1.png'
import ProfilePhoto from '../public/images/profile/developer-pic-1.png'
import { motion } from 'framer-motion';
import { useTypewriter } from 'react-simple-typewriter';
import { PageInfo } from '@/typings';
import Link from 'next/link';
import { urlFor } from '@/sanity';
type Props = {
    pageInfo: PageInfo | undefined;
}



// const text = "Turning Vision Into Reality With Code And Design.";

export default function Layout({ pageInfo }: Props) {
    const [text, count] = useTypewriter({
        words: [
            `Hi, The Name's ${pageInfo?.name}`,
            "The-Guy-Who-Loves-Coffee"
        ],
        loop: true,
        delaySpeed: 2000,
    });
    let profilePic = pageInfo?.heroImage=== undefined? ProfilePhoto.src : urlFor(pageInfo?.heroImage).url();
    //let profilePic = 'https://cdn.sanity.io/images/myk5m1s4/production/2772729ba0468caefd566e2c27f8a740809ec9f1-2368x1941.jpg';
    return (
        <div className={` pt-0 w-full h-full inline-block z-0 bg-light p-32 dark:bg-dark dark:text-light xl:p-24 lg:p-16 md:p-12 sm:p-8`}>
            <div className="flex items-center justify-between w-full lg:flex-col ">
                <div className='w-1/2 rounded-2xl mx-auto md:w-full'>
                    <motion.img  
                    initial={
                        {
                          x: -200,
                          opacity: 0
                        }
                      }
                      transition={{
                        duration: 1.2,
                      }}
                      whileInView={{
                        opacity: 1,
                        x: 0
                      }}
                      viewport={{ once: true }}
                      
                    src={profilePic} alt={"Profile Photo"} className=" h-auto rounded-sm lg:hidden md:inline-block md:w-full" />
                </div>
                <div className='w-1/2 flex flex-col items-center self-center dark:text-light mx-auto lg:w-full lg:text-center'>
                    <div className='w-full mx-auto py-2 flex items-center justify-center text-center
                    overflow-hidden mb-5 sm:py-0 sm:mb-3 sm:h-20'>
                        <h1 className={`inline-block w-full text-dark font-bold capitalize text-6xl text-left dark:text-light xl:text-5xl
                        lg:text-center lg:text-6xl md:text-5xl sm:text-3xl `}>
                            <span className='inline-block'>{text}&nbsp;
                            </span>
                        </h1>
                    </div>
                    <p className='my-4 text-base font-medium  md:text-sm sm:text-xs'>As a skilled full-stack developer, I am dedicated to turning ideas into innovative web applications.
                        Explore my latest projects and articles, showcasing my expertise in React.js and web development.
                    </p>
                    <div className='flex items-center self-start mt-2 lg:self-center '>
                        <Link className='flex items-center bg-dark text-light p-2.5 px-6 
                        rounded-lg text-lg font-semibold hover:bg-light hover:text-dark
                        border border-solid border-transparent hover:border-dark  dark:border-light md:p-2 md:px-4 md:text-base' href="/pdf/Dhaneshwar_Koshti_Resume.pdf"
                            target={"_blank"}
                            download={true}>Resume
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={24}
                                height={24}
                                viewBox="0 0 24 24"
                                className={` h-auto w-6 ml-1`}
                            >
                                <path fill="none" d="M0 0h24v24H0z" />
                                <path
                                    fill="none"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M11 7H6a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2v-5m-7 1L20 4m-5 0h5v5"
                                />
                            </svg></Link>
                        <Link className="ml-4 text-lg font-medium capitalize text-dark underline dark:text-light md:text-base" href='/contact'>Contact Me</Link>
                    </div>

                </div>
            </div>
        </div>

    )
}