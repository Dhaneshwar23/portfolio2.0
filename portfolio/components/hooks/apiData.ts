import { fetchExperiences } from '@/Utils/fetchExperiences';
import { fetchPageInfo } from '@/Utils/fetchPageInfo';
import { fetchProjects } from '@/Utils/fetchProjects';
import { fetchSkills } from '@/Utils/fetchSkills';
import { fetchSocials } from '@/Utils/fetchSocials';
import { client } from '@/sanity';
import { Experience, PageInfo, Project, Skill, Social } from '@/typings';
import { NextApiRequest } from 'next';
import React, { useEffect, useState } from 'react'

type Props = {
    pageInfo: PageInfo;
    experiences: Experience[];
    skills: Skill[];
    socials: Social[];
    projects: Project[];
}

export default function ApiData() {
    const [data, setData] = useState<Props | null>(null
    );
const [loading,setLoading] =useState(true);
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
        finally{
            setLoading(false);
        }
    }
    useEffect(() => {
        // Define a function to process data
        processData();
        
    }, []);

    return {data,loading}
}