'use client';
import React, { useRef } from 'react'
import { Experience } from '@/typings'
import { urlFor } from '@/sanity'
import LiIcon from './LiIcon';
import { motion } from 'framer-motion';

type Props = {
    experience: Experience
}

export default function ExperienceCard({ experience }: Props) {
    const dateStarted = experience?.dateStarted === undefined ? ' ' : new Date(experience?.dateStarted).toDateString()
    const dateEnded = experience?.dateEnded === undefined ? ' ' : new Date(experience?.dateEnded).toDateString()

    const ref = useRef(null);
    return (
        <div className=''>
            <li ref={ref} className='my-8 first:mt-0 last:mb-0 lg:w-[60%] xl:w-[60%] mx-auto flex flex-col items-center justify-between md:w-[80%] sm:w-[60%]'>
                <LiIcon reference={ref} />
                <motion.div
                    initial={{ y: 50 }}
                    whileInView={{ y: 0 }}
                    transition={{ duration: 0.5, type: "spring" }}

                >
                    <h3 className='capitalize font-bold text-2xl items-start sm:text-xl xs:text-lg'>{experience?.jobTitle}&nbsp;<span className={`text-primary uppercase dark:text-primary-dark sm:w-14 sm:block`}>@{experience?.company}</span></h3>
                    <div className='flex space-x-2 my-2 sm:grid-cols-3 sm:grid sm:gap-1'>
                        {experience.technologies.map((technology) => (
                            // <img key={technology._id}
                            // className='h-10 w-10 rounded-full'
                            // src={urlFor(technology.image).url()}
                            // />
                            <img
                                key={technology._id}
                                className='h-10 w-10 rounded-full sm:h-6 sm:w-6'
                                src={urlFor(technology.image).url()}
                            // src="/self_picture.jpg"
                            />
                        ))}
                    </div>
                    <span>
                        <p className='uppercase py-5 text-gray-300 sm:text-xl xs:text-lg'>{dateStarted} - {experience?.isCurrentWorkingHere ? "Present" : dateEnded}</p>
                        <ul className='font-medium w-full mb-10 items-start md:text-sm justify-center sm:w-[170%]'>
                            {experience?.points?.map((point, i) => (
                                <li className='list-disc' key={i}>{point}</li>
                            ))}
                        </ul>
                    </span>
                </motion.div>
            </li>
        </div>
    )
}