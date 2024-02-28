import { Skill as SkillType } from '@/typings'
import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { urlFor } from '@/sanity'
import  Skill  from './Skill'

type Props = {
    Skills: SkillType[] | undefined
}

export default function Skills({ Skills }: Props) {
    return (
        <>
        <div className='sm:items-start md:items-start xs:w-[135%] items-center'>
            <h2 className='font-bold text-8xl mt-64 text-center mb-12 md:text-6xl md:mt-32 xs:mb-20'>Skills</h2>
            
            <h3 className='uppercase tracking-[3px] text-gray-500 text-sm mb-12 sm:text-lg sm:hidden text-center '>Hover over a skill for current proficiency</h3>
            <div className='grid grid-cols-4 gap-5'>
                {Skills?.slice(0, Skills.length / 2).map(skill => (
                    <Skill key={skill._id} skills={skill} />
                ))}

                {Skills?.slice(Skills.length / 2, Skills.length).map(skill => (
                    <Skill key={skill._id} skills={skill} directionLeft />
                ))}

            </div>
            </div>
        </>
    )
}