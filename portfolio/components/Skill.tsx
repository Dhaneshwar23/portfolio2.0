import React from 'react'
import { motion } from 'framer-motion';
import { Skill } from '../typings'
import { urlFor } from '@/sanity';

type Props = {
    skills: Skill;
    directionLeft?: boolean;

};
export default function Skill({ skills, directionLeft }: Props) {
    return (
        <div className='group relative flex cursor-pointer'>
            <motion.img
                initial={{
                    x: directionLeft ? -100 : 100,
                    opacity: 0
                }}
                transition={{ duration: 1 }}
                whileInView={{ opacity: 1, x: 0 }}
                src={urlFor(skills?.image).url()}
                viewport={{ once: true }}
                className="rounded-full border border-gray-500 object-cover 
                w-20 h-20 md:w-20 md:h-12 xl:w-24 xl:h-24 filter group-hover:grayscale transition duration-300 ease-in-out"
            />

            <div className='absolute opacity-0 group-hover:opacity-80 transition duration-300
                ease-in-out group-hover:bg-white h-20 w-20 md:w-20 md:h-12 xl:w-24 xl:h-24 rounded-full z-0'>
                <div className='flex items-center justify-center h-full'>
                    <p className='text-3xl font-bold text-black opacity-100'>{skills.progress}%</p>
                </div>
            </div>
        </div>
    )
}