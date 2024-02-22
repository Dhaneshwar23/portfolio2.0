import { Experience, Technology } from "@/typings";
import { FaceFrownIcon } from "@heroicons/react/16/solid";

export const fetchExperiences = async () => {

    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getExperience`);
    const data = await res.json();
    const experiences: Experience[] = data.experiences;
    return experiences;
} 
