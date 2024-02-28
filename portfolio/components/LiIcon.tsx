import React, { useRef } from 'react'
import { motion, useScroll } from 'framer-motion';

type Props = {}

export default function LiIcon({ reference }: { reference: any }) {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: reference,
        offset: ["center end", "center center"]
    })
    return (
        <figure className='absolute -left-[3.3rem] stroke-dark dark:stroke-light sm:!-left-[3.4rem] xs:!-left-[3.4rem] xl:!-left-[3.3rem] lg:!-left-[1.2rem]'>
            <svg className='-rotate-92' width={75} height={75} viewBox='0 0 100 100'>
                <motion.circle cx={75} cy={75} r={20} className='stroke-primary stroke-1 fill-none dark:stroke-primaryDark' />
                <motion.circle 
                style={{
                    pathLength: scrollYProgress
                }}
                cx={75} cy={75} r={20} className='stroke-[5px] fill-light dark:fill-dark' />
                <motion.circle cx={75} cy={75} r={10} className='animate-pulse stroke-1 fill-primary dark:fill-primaryDark' />
            </svg>
        </figure>
    )
}