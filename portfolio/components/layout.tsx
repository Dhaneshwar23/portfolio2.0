import React from 'react'
import Image from 'next/image'
import ProfilePhoto from '../public/images/developer-pic-1.png'
import { motion } from 'framer-motion';
import { useTypewriter } from 'react-simple-typewriter';

type Props = {
    // children: any,
    // className: ''
}



// const text = "Turning Vision Into Reality With Code And Design.";

export default function layout({ }: Props) {
    const [text, count] = useTypewriter({
        words: [
            `Hi, The Name's Dhaneshwar`,
            "The-Guy-Who-Loves-Coffee"
        ],
        loop: true,
        delaySpeed: 2000,
    });
    return (
        <div className={` pt-0 w-full h-full inline-block z-0 bg-light p-32`}>
            Home
            <div className="flex items-center justify-between w-full">
                <div className='w-1/2 '>
                    <Image src={ProfilePhoto} alt={"Profile Photo"} className="w-full h-auto" />
                </div>
                <div className='w-1/2 flex flex-col items-center self-center'>
                    <div className='w-full mx-auto py-2 flex items-center justify-center text-center
                    overflow-hidden '>
                        <h1 className={`inline-block w-full text-dark font-bold capitalize text-6xl text-left  `}>
                            <span className='inline-block'>{text}&nbsp;
                            </span>
                        </h1>
                    </div>
                    <p>As a skilled full-stack developer, I am dedicated to turning ideas into innovative web applications.
                        Explore my latest projects and articles, showcasing my expertise in React.js and web development.</p>

                </div>
            </div>
        </div>

    )
}