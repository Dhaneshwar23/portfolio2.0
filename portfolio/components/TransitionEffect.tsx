import React, { Children } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

type TransitionEffectProps = {
}

export default function TransitionEffect({ }) {
    
    return (
        <>
        <motion.div className='fixed top-0 bottom-0 right-full w-screen h-screen z-30 bg-[rgb(0,128,128)]'
        key={Math.random()}
        initial={{
            x:"100%",
            width:"100%"
        }}
        animate={{
            x:"0%",
            width:"0%"
        }}
        exit={{
            x:["0%", "100%"],width:["0%","100%"]
        }}
        transition={{
            duration:0.8,
            ease:"easeInOut"

        }}
        />

        <motion.div className='fixed top-0 bottom-0 right-full w-screen h-screen z-20 bg-light'
        
        initial={{
            x:"100%",
            width:"100%"
        }}
        animate={{
            x:"0%",
            width:"0%"
        }}
        transition={{
            delay:0.2,duration:0.8,
            ease:"easeInOut"

        }}
        />

        <motion.div className='fixed top-0 bottom-0 right-full w-screen h-screen z-10 bg-[rgb(36,36,36)]'
        
        initial={{
            x:"100%",
            width:"100%"
        }}
        animate={{
            x:"0%",
            width:"0%"
        }}
        transition={{
            delay:0.4,
            duration:0.8,
            ease:"easeInOut"

        }}
        />
        
        </>
        
    )
}