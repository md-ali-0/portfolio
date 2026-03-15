import config from "@/config";
import { Skill } from "@/types/Skill";

export const getSkills = async (): Promise<Skill[]> => {
    try {
        const url = `${config.host}/api/v1/skill`;
        
        const response = await fetch(url, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
            cache: "force-cache",
            next: {
                revalidate: 60 * 60, // Revalidate every hour
            },
        });

        if (!response.ok) {
            throw new Error(`Failed to fetch skills: ${response.statusText}`);
        }

        const data = await response.json();
        return data?.data || [];
    } catch (error) {
        console.error("Error fetching skills:", error);
        return [];
    }
};
