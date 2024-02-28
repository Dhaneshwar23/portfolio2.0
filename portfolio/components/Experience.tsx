import React, { useRef } from 'react'
import { Experience } from '@/typings'
import ExperienceCard from './ExperienceCard';
import { motion, useScroll } from 'framer-motion';

type Props = {
    experiences: Experience[] | undefined;
}

export default function Experience({ experiences }: Props) {
    const sortedExperiences = experiences?.slice().sort((a, b) => {
        const dateA: any = new Date(a.dateEnded);
        const dateB: any = new Date(b.dateEnded);
        return dateB - dateA; // Sort in descending order
    });
    const ref = useRef(null);
    const {scrollYProgress} = useScroll({
        target:ref,
        offset:["start end","center start"]
    })
    return (
        <div className=' mt-60 xs:mt-[10rem] mb-28 '>
            <h2 className='font-bold text-8xl text-center mb-32 w-full md:text-6xl xs:text-4xl md:mb-16'>Experience</h2>
            <div ref={ref} className='w-[75%] mx-auto relative lg:w-[90%] md:w-full'>
                <motion.div 
                style={{scaleY: scrollYProgress}}
                className='absolute lg:!left-9 sm:!left-0 xs:!left-0 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light '/>
                <ul className='w-full flex flex-col items-start justify-between ml-4 '>
                    {sortedExperiences?.map((experience, index) => (
                        <ExperienceCard key={experience._id} experience={experience} />
                    ))}
                </ul>
            </div>
        </div>
    )
}