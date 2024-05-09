import React, { useEffect, useRef, useState } from 'react';
import NavBar from '@/components/NavBar';
import './global.css'
import Head from "next/head";
import { Experience, PageInfo, Project, Skill, Social } from '@/typings';
import { fetchPageInfo } from '@/Utils/fetchPageInfo';
import { fetchExperiences } from '@/Utils/fetchExperiences';
import { fetchSkills } from '@/Utils/fetchSkills';
import { fetchProjects } from '@/Utils/fetchProjects';
import { fetchSocials } from '@/Utils/fetchSocials';
import Image from 'next/image';
import { urlFor } from '@/sanity';
import ProfilePicture from '@/public/images/IMG_7887.jpg';
import { AnimatePresence, useInView, useMotionValue, useSpring } from 'framer-motion';
import Skills from '@/components/Skills';
import Experiences from '@/components/Experience';
import apiData from '@/components/hooks/apiData';
import TransitionEffect from '@/components/TransitionEffect';
import Script from 'next/script';
import { usePathname } from 'next/navigation';
import { GetServerSideProps, GetStaticProps, InferGetStaticPropsType } from 'next';

type Props = {
  pageInfo: PageInfo;
  experiences: Experience[];
  skills: Skill[];
  socials: Social[];
  projects: Project[];
};

const AnimatedNumbers = ({ value }: { value: number }) => {
  const ref: any = useRef(null);

  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 3000 })
  const isInView = useInView(ref, { once: true });
  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue])

  useEffect(() => {
    springValue.on("change", (latest) => {
      if (ref.current && latest.toFixed(0) <= value) {
        ref.current.textContent = latest.toFixed(0);
      }
    })
  }, [springValue, value])

  return <span ref={ref}></span>
}
// export async function getStaticProps(){
//   try{
//   const pageInfo: PageInfo = await fetchPageInfo();
//   const experiences: Experience[] = await fetchExperiences();

//   const skills: Skill[] = await fetchSkills();

//   const projects: Project[] = await fetchProjects();

//   const socials: Social[] = await fetchSocials();
//   return {
//     props: {
//       pageInfo,
//       experiences,
//       skills,
//       socials,
//       projects
//     },
//   };
// }
// catch(err){
//   console.log('error in about page-->  ',err);
// }
// }

const About=({})=> {

  const { data, loading } = apiData();

  let profilePic = data?.pageInfo.profilePic === undefined ? ProfilePicture : urlFor(data?.pageInfo.profilePic).url();
  //let profilePic = 'https://cdn.sanity.io/images/myk5m1s4/production/2772729ba0468caefd566e2c27f8a740809ec9f1-2368x1941.jpg';
  
  const backGroundInformation = '• ' + data?.pageInfo.backgroundInformation.replace(/\. /g, ". \n • ");



  return (

    <div className='snap-y snap-mandatory overflow-y-scroll overflow-x-hidden'>
      <NavBar />

      <Head>
        <title>About</title>
        <meta name="description" content='overall career description' />
      </Head>
      <Script id="theme-switcher" strategy='beforeInteractive'>{
        `if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
          document.documentElement.classList.add('dark')
        } else {
          document.documentElement.classList.remove('dark')
        }`
      }</Script>

      <TransitionEffect />
      <main key={Math.random()} className='flex w-full px-32 py-8 flex-col items-center justify-center dark:text-light bg-light dark:bg-dark snap-start'>
        <h1 className='font-bold text-8xl text-center mb-5 md:text-6xl hidden sm:block'>About</h1>
        <div className='pt-16  dark:bg-dark snap-start overflow-hidden'>
          <div className='grid w-full grid-cols-8 gap-16 sm:gap-8 '>

            <div className=' col-span-3 flex flex-col items-start justify-start xl:col-span-4 md:order-2 md:col-span-8'>
              <h4 className='mb-4 text-lg font-bold'>Here is a <span className='underline decoration-[#F7AB0A]'>little</span> background</h4>
              <div className='font-medium whitespace-pre-line ' > {backGroundInformation}</div>

            </div>
            <div className='col-span-3 relative h-max rounded-2xl border-2 border-solid bg-light dark:border-light border-dark dark:bg-dark p-8 xl:col-span-4 md:order-1 md:col-span-8'>
              <div className='absolute top-0 -right-3 -z-20 w-[102%] h-[103%] rounded-[2rem] bg-dark ' />
              <Image src={profilePic} alt={''} width={600} height={600} className='w-full h-auto rounded-2xl' key={Math.random() + 1} />

            </div>
            <div className=' col-span-2 flex flex-col items-end justify-between xl:col-span-8 xl:flex-row xl:items-center md:order-3'>
              <div className='flex flex-col items-end justify-center xl:items-center '>
                <span className='inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl'>

                </span>
                <h2></h2>
              </div>
              <div className='flex flex-col items-end justify-center xl:items-center'>
                <span className='inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl'>
                  <AnimatedNumbers value={3} />+</span>
                <h2 className='text-xl font-medium capitalize text-dark/75 xl:text-center md:text-lg sm:text-base xs:text-sm dark:text-light'>years of experience</h2>
              </div>
              <div className='flex flex-col items-end justify-center xl:items-center'>
                <span className='inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl'>
                </span>
                <h2></h2>
              </div>

            </div>

          </div>
        </div>
        <Skills Skills={data?.skills} />
        <Experiences experiences={data?.experiences} />
        <div className='mt-10'></div>
      </main>
    </div>
  )
}

export default About;

