import config from "@/config";
import { AboutMe } from "@/types/AboutMe";

export const getAboutMe = async (): Promise<AboutMe | null> => {
    try {
        const url = `${config.host}/api/v1/about-me`;
        
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
            throw new Error(`Failed to fetch about-me: ${response.statusText}`);
        }

        const result = await response.json();
        return result?.data || null;
    } catch (error) {
        console.error("Error fetching about-me:", error);
        return null;
    }
};
