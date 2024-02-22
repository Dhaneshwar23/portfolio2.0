'use client';
import Image from "next/image";
import { Montserrat } from 'next/font/google'
import Head from "next/head";
import React, { useEffect, useState } from "react";
import NavBar from "@/components/NavBar";
import { Experience, PageInfo, Project, Skill, Social } from "@/typings";
import { fetchPageInfo } from "@/Utils/fetchPageInfo";
import { fetchExperiences } from "@/Utils/fetchExperiences";
import { fetchSkills } from "@/Utils/fetchSkills";
import { fetchProjects } from "@/Utils/fetchProjects";
import { fetchSocials } from "@/Utils/fetchSocials";
import layout from "@/components/layout";
import Layout from "@/components/layout";
import ProfilePhoto from '../public/images/developer-pic-1.png'

const montSerrat = Montserrat(
  {
    subsets: ["latin"],
    variable: "--font-mont"
  }
)

type Props = {
  pageInfo : PageInfo;
  experiences: Experience[];
  skills : Skill[];
  socials: Social[];
  projects: Project[];
};

export default function Home() {
  const [data, setData] = useState<Props | null>(null
    );
    
    const processData = async () =>{
      try{
        const pageInfo: PageInfo = await fetchPageInfo();
        const experiences: Experience[] = await fetchExperiences();
        
        const skills: Skill[] = await fetchSkills();
      
        const projects: Project[] = await fetchProjects();
      
        const socials: Social[] = await fetchSocials(); 
        // Example processing of data
        const processedData = {
          pageInfo,
          experiences,
          skills,
          projects,
          socials
        };
        setData(processedData);
      }
      catch(err){
        console.log('err happend in page.tsx-->  ', err);
      }
    }
    useEffect(() => {
      // Define a function to process data
      processData();
    },[]);
    
  return (

    <div className={`${montSerrat.variable} font-mont bg-light w-full min-h-screen`}>
      <Head>
        <title>Dhaneshwar&apos;s Portfolio</title>
      </Head>
      
      <NavBar socials={data?.socials}/>

      <main className="flex items-center text-dark w-full min-h-screen">
        <Layout />
          
        
      </main>

    </div>
  );
}
