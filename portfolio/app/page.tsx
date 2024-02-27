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
import HomePage from "@/components/HomePage";
import HireMe from "@/components/HireMe";
import LightBulb from "../public/images/LightBulb.svg";
import layouts from "./layout";
import Link from "next/link";
import Script from "next/script";

const montSerrat = Montserrat(
  {
    subsets: ["latin"],
    variable: "--font-mont"
  }
)

type Props = {
  pageInfo: PageInfo;
  experiences: Experience[];
  skills: Skill[];
  socials: Social[];
  projects: Project[];
};

export default function Home() {
  const [data, setData] = useState<Props | null>(null
  );

  const processData = async () => {
    try {
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
    catch (err) {
      console.log('err happend in page.tsx-->  ', err);
    }
  }
  useEffect(() => {
    // Define a function to process data
    processData();
  }, []);

  return (

    <div className={`${montSerrat.variable} font-mont bg-light w-full min-h-screen dark:bg-dark`}>
      <Head>
        <title>Dhaneshwar&apos;s Portfolio</title>
      </Head>

      <NavBar />
      <Script id="theme-switcher" strategy='beforeInteractive'>{
        `if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
          document.documentElement.classList.add('dark')
        } else {
          document.documentElement.classList.remove('dark')
        }`
      }</Script>
      <main className="flex items-center text-dark w-full min-h-screen ">
        <HomePage pageInfo={data?.pageInfo} />
        <HireMe />
        <div className="absolute right-8 bottom-8 inline-block w-24">
          <Image src={LightBulb} alt="" className="w-full h-auto md:hidden" />
        </div>

      </main>
    </div>
  );
}
