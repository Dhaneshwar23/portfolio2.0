import NavBar from '@/components/NavBar'
import React from 'react'
import './global.css'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import project1 from '@/public/images/projects/crypto-screener-cover-image.jpg'
import SvgComponent from '@/components/Icon'

type Props = {}


const FeaturedProject = ({ type, title, summary, img, link }: { type: any, title: any, summary: any, img: any, link: any }) => {
    return (
        <article className='w-full flex items-center justify-between rounded-3xl
        border border-solid border-dark bg-light shadow-2xl p-12 relative rounded-br-2xl'>
            <div className='absolute top-0 -right-3 -z-10 w-[100%] h-[103%] rounded-[2.5rem] bg-dark rounded-br-3xl' />
            <Link href={link} target="_blank"
                className='w-1/2 cursor-pointer overflow-hidden rounded-lg '
            >
                <Image src={img} alt={title} className='w-full h-auto'></Image>
            </Link>

            <div className='w-1/2 flex flex-col items-start justify-between pl-6'>
                <span className='text-primary font-medium text-xl'>{type}</span>
                <Link href={link} target="_blank" className='hover:underline underline-offset-2'>
                    <h2 className='my-2 w-full text-4xl font-bold'>{title}</h2>
                </Link>
                <p className='my-2 font-medium text-dark'>{summary}</p>
                <div className='mt-2 flex items-center'>
                    <Link href={link} target="_blank" className='ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold
                    '>Visit Project</Link>
                </div>
            </div>
        </article>
    )
};

const Project = ({title, type , img, link}:{ type: any, title: any, img: any, link: any }) => {
    return(
            <article className='w-full flex flex-col items-center justify-center rounded-2xl border border-solid border-dark bg-light p-6 relative
            '>
                <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark rounded-br-3xl' />
                <Link href={link} target="_blank"
                className='w-full cursor-pointer overflow-hidden rounded-lg '
            >
                <Image src={img} alt={title} className='w-full h-auto'></Image>
            </Link>

            <div className='w-full flex flex-col items-start justify-between'>
                <span className='text-primary font-medium text-xl'>{type}</span>
                <Link href={link} target="_blank" className='hover:underline underline-offset-2'>
                    <h2 className='my-2 w-full text-4xl font-bold'>{title}</h2>
                </Link>
                
                <div className='mt-2 flex items-center justify-between'>
                    <Link href={link} target="_blank" className='underline font-semibold
                    '>Visit</Link>
                </div>
            </div>
            </article>
    )
}
export default function projects({ }: Props) {
    return (
        <>
            <Head>
                <title>Projects Page</title>
                <meta name='description' content='Project Description' />
            </Head>
            <NavBar />
            <main className='w-full mb-16 flex flex-col items-center justify-center'>
                
                <div className='pt-16 grid grid-cols-12 gap-24 gap-y-32'>
                    <div className='col-span-12 px-20'>
                        <FeaturedProject
                            title="Crypto Screener Application"
                            summary="A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. 
                        It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
                        local currency."
                            link="/"
                            type="Featured Projects"
                            img={project1}
                        />
                    </div>
                    <div className='col-span-6 pl-20'>
                        <Project type="Project" title="Crypto Screener Application" img={project1} link="/" />
                    </div>
                    <div className='col-span-6'>
                        Featured Project-2
                    </div>
                    <div className='col-span-12'>
                        Featured Project-3
                    </div>
                    <div className='col-span-6'>
                        Featured Project-4
                    </div>
                    <div className='col-span-6'>
                        Featured Project-5
                    </div>

                </div>
            </main>
        </>
    )
}